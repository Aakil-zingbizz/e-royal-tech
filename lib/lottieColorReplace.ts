/**
 * Replaces a specific stroke/fill colour in a Lottie JSON with a new hex colour.
 *
 * Lottie stores colours as linear-light [R, G, B, A] floats in [0, 1].
 * We deep-clone the animation object and swap every occurrence of the
 * `targetColor` (matched within a small tolerance) with `newColor`.
 *
 * @param animationData - The raw Lottie JSON object (will NOT be mutated).
 * @param targetHex     - The hex colour to replace, e.g. "#D39F4A".
 * @param newHex        - The replacement hex colour, e.g. "#2175BE".
 * @returns A new Lottie JSON object with the colour swapped.
 */
export function replaceLottieColor(
  animationData: unknown,
  targetHex: string,
  newHex: string
): unknown {
  const target = hexToLinear(targetHex);
  const replacement = hexToLinear(newHex);

  // Deep clone so we never mutate the imported module
  const clone = JSON.parse(JSON.stringify(animationData));
  swapColors(clone, target, replacement);
  return clone;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Convert a CSS hex colour (#RRGGBB or #RGB) to linear-light [R, G, B] floats. */
function hexToLinear(hex: string): [number, number, number] {
  const clean = hex.replace(/^#/, "");
  const full =
    clean.length === 3
      ? clean
          .split("")
          .map((c) => c + c)
          .join("")
      : clean;
  const r = parseInt(full.slice(0, 2), 16) / 255;
  const g = parseInt(full.slice(2, 4), 16) / 255;
  const b = parseInt(full.slice(4, 6), 16) / 255;
  return [r, g, b];
}

const TOLERANCE = 0.01;

function approxEqual(a: number, b: number) {
  return Math.abs(a - b) < TOLERANCE;
}

function isTargetColor(
  arr: number[],
  target: [number, number, number]
): boolean {
  return (
    arr.length >= 3 &&
    approxEqual(arr[0], target[0]) &&
    approxEqual(arr[1], target[1]) &&
    approxEqual(arr[2], target[2])
  );
}

/** Recursively walk the object and replace colour arrays in-place. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function swapColors(node: any, target: [number, number, number], replacement: [number, number, number]) {
  if (node === null || typeof node !== "object") return;

  if (Array.isArray(node)) {
    // Lottie static colour: [R, G, B, A] or [R, G, B]
    if (isTargetColor(node, target)) {
      node[0] = replacement[0];
      node[1] = replacement[1];
      node[2] = replacement[2];
      return; // no need to recurse into colour values
    }
    for (const child of node) {
      swapColors(child, target, replacement);
    }
  } else {
    // Check "k" key which holds the colour value in Lottie colour properties
    if ("k" in node && Array.isArray(node.k)) {
      if (isTargetColor(node.k, target)) {
        node.k[0] = replacement[0];
        node.k[1] = replacement[1];
        node.k[2] = replacement[2];
      }
    }
    for (const key of Object.keys(node)) {
      swapColors(node[key], target, replacement);
    }
  }
}

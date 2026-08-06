import os
import re

directory = 'app/component/products'

replacements = {
    # Exact hex replacements in classes
    r'text-\[\#006CB8\]': 'text-[var(--theme-color)]',
    r'text-\[\#0066B3\]': 'text-[var(--theme-color)]',
    r'bg-\[\#006CB8\](?!/)': 'bg-[var(--theme-color)]',
    r'bg-\[\#0066B3\](?!/)': 'bg-[var(--theme-color)]',
    r'border-\[\#006CB8\]': 'border-[var(--theme-color)]',
    r'border-\[\#0066B3\]': 'border-[var(--theme-color)]',
    
    # Hex with opacity in classes
    r'bg-\[\#006CB8\]/10': 'bg-[rgba(var(--theme-color-rgb),0.1)]',
    r'bg-\[\#0066B3\]/10': 'bg-[rgba(var(--theme-color-rgb),0.1)]',
    r'bg-\[\#006CB8\]/20': 'bg-[rgba(var(--theme-color-rgb),0.2)]',
    r'bg-\[\#006CB8\]/15': 'bg-[rgba(var(--theme-color-rgb),0.15)]',

    # Shadows
    r'shadow-\[0_0_8px_\#0066b3\]': 'shadow-[0_0_8px_var(--theme-color)]',
    r'shadow-\[0_8px_24px_rgba\(0,102,179,0\.08\)\]': 'shadow-[0_8px_24px_rgba(var(--theme-color-rgb),0.08)]',

    # SVG props & Inline styles
    r'fill="\#0066B3"': 'fill="var(--theme-color)"',
    r'stroke="\#0066B3"': 'stroke="var(--theme-color)"',
    r'backgroundColor:\s*"\#016CB8"': 'backgroundColor: "var(--theme-color)"',
    r'backgroundColor:\s*"\#0066B3"': 'backgroundColor: "var(--theme-color)"',

    # Common Tailwind blue classes used as thematic colors
    r'bg-blue-50/30': 'bg-[rgba(var(--theme-color-rgb),0.05)]',
    r'bg-blue-50/60': 'bg-[rgba(var(--theme-color-rgb),0.1)]',
    r'text-blue-50': 'text-white', # Looking at CTASection, it might just need to be white
    r'bg-blue-50': 'bg-[rgba(var(--theme-color-rgb),0.08)]',
    r'bg-blue-100': 'bg-[rgba(var(--theme-color-rgb),0.15)]',
    r'border-blue-100': 'border-[rgba(var(--theme-color-rgb),0.2)]',
    r'border-blue-200': 'border-[rgba(var(--theme-color-rgb),0.3)]',
    r'hover:border-blue-200': 'hover:border-[rgba(var(--theme-color-rgb),0.3)]',
    r'hover:bg-blue-50': 'hover:bg-[rgba(var(--theme-color-rgb),0.08)]',
    r'bg-blue-700': 'bg-[var(--theme-color)]',
    r'hover:bg-blue-700': 'hover:opacity-90',
    r'text-blue-100': 'text-white/80', # usually used on dark bg
}

for filename in os.listdir(directory):
    if filename.endswith(".tsx"):
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r') as file:
            content = file.read()
        
        for pattern, replacement in replacements.items():
            content = re.sub(pattern, replacement, content)
            
        with open(filepath, 'w') as file:
            file.write(content)

print("Done")

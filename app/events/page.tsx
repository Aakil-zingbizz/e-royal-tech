import React from "react";
import EventsHero from "@/app/component/Events/EventsHero";
import EventsGallery from "@/app/component/Events/EventsGallery";

export const metadata = {
  title: "Events | eRoyal Tech Systems",
  description: "Check out our latest events, seminars, and expos in the logistics tech industry.",
};

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white">
      <EventsHero />
      <EventsGallery />
    </main>
  );
}

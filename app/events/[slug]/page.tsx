import { notFound } from "next/navigation";
import EventDetailPage from "@/components/_page/EventDetailPage";
import PageTopSection from "@/components/_page/PageTopSection";
import siteData from "@/data/data.json";
import { EventsData } from "@/types/sections";

interface EventDetailRouteProps {
    params: Promise<{ slug: string }>;
}

export default async function EventDetail({ params }: EventDetailRouteProps) {
    const { slug } = await params;
    const eventsData = siteData.events as EventsData;

    const event = eventsData.items.find(
        (item) => item.slug === slug || String(item.id) === slug || item.linkUrl === `/events/${slug}`
    ) || eventsData.items[0];

    if (!event) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#fdfbf7]">
            <PageTopSection title={event.title} />
            <EventDetailPage event={event} />
        </main>
    );
}
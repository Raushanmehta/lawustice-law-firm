import PageTopSection from "@/components/_page/PageTopSection";
import EventPageSection from "@/components/_section/EventPageSection";
import siteData from "@/data/siteData";
import { EventsData } from "@/types/sections";

export default function EventsPage() {
    const eventsData = siteData.events as EventsData;

    return (
        <main className="min-h-screen bg-[#fdfbf7]">
            <PageTopSection title="Events" />
            <EventPageSection eventsData={eventsData} />
        </main>
    );
}

import PageTopSection from "@/components/_page/PageTopSection";
import EventPageSection from "@/components/_section/EventPageSection";
import siteData from "@/data/data.json";
import { EventsData } from "@/types/sections";

export default function NewsAndMediaPage() {
    const eventsData = siteData.events as EventsData;
    return (
        <main>
            <PageTopSection title="News & Media" />
            <EventPageSection eventsData={eventsData} />
        </main>
    )
}
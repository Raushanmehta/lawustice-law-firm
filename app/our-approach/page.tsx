"use client";

import OurApproachSection from "@/components/_section/OurApproachSection";
import StatsSection from "@/components/_section/StatsSection";
import siteData from "@/data/data.json";
import PageTopSection from "@/components/PageTopSection";

export default function OurApproachPage() {
    return (
        <main>
            <PageTopSection title="Our Approach" />
            <OurApproachSection data={siteData.ourApproach}/>
            <StatsSection data={siteData.statsSection}/>
        </main>
    );
}
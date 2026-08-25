"use client";

import OurApproachSection from "@/components/_section/OurApproachSection";
import StatsSection from "@/components/_section/StatsSection";
import siteData from "@/data/data.json";
import PageTopSection from "@/components/PageTopSection";
import type { OurApproachData } from "@/types";

const approachData = siteData.ourApproach as OurApproachData;

export default function OurApproachPage() {
    return (
        <main>
            <PageTopSection title="Our Approach" />
            <OurApproachSection data={approachData}/>
            <StatsSection data={siteData.statsSection}/>
        </main>
    );
}
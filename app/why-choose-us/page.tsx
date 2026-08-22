"use client";

import StatsSection from "@/components/_section/StatsSection";
import WhyChooseUsSection from "@/components/_section/WhyChooseUsSection";
import PageTopSection from "@/components/PageTopSection";
import siteData from "@/data/data.json";

export default function WhyChooseUsPage() {
    return (
        <main>
            <PageTopSection title="Why Choose Us" />
            <WhyChooseUsSection data={siteData.whyChooseUs} />
            <StatsSection data={siteData.statsSection} />
        </main>
    );
}
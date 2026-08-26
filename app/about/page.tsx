"use client";

import AboutSection from "@/components/_section/AboutSection";
import NeedLegalSection from "@/components/_section/NeedLegalSection";
import OurApproachSection from "@/components/_section/OurApproachSection";
import OurValuesSection from "@/components/_section/OurValuesSection";
import StatsSection from "@/components/_section/StatsSection";
import WhyChooseUsSection from "@/components/_section/WhyChooseUsSection";
import PageTopSection from "@/components/_page/PageTopSection";
import siteData from "@/data/data.json";
import type { OurApproachData } from "@/types";

const approachData = siteData.ourApproach as OurApproachData;

export default function AboutPage() {
    return (
        <main>
            <PageTopSection title="About Us" />
            <AboutSection />
            <StatsSection data={siteData.statsSection} />
            <WhyChooseUsSection data={siteData.whyChooseUs} />
            <OurValuesSection data={siteData.ourValues}/>
            <OurApproachSection data={approachData}/>
            <NeedLegalSection
                leftColumnImage={siteData.results.leftColumnImage}
                rightBgImage={siteData.results.rightBgImage}
                phone={siteData.navbar.phone}
            />
        </main>
    );
}
"use client";

import AboutSection from "@/components/_section/AboutSection";
import StatsSection from "@/components/_section/StatsSection";
import PageTopSection from "@/components/PageTopSection";

export default function AboutPage() {
    return (
        <main>
            <PageTopSection title="About Us" />
            <AboutSection />
            <StatsSection />
        </main>
    );
}
"use client";

import { motion } from "framer-motion";
import { GoLaw } from "react-icons/go";
import PageTopSection from "@/components/_page/PageTopSection";
import TeamPageCard from "@/components/TeamPageCard";
import NeedLegalSection from "@/components/_section/NeedLegalSection";
import siteData from "@/data/siteData";
import { TeamMember } from "@/types";

const teamData: TeamMember[] = siteData.team.members;

export default function TeamPage() {
    return (
        <div className="w-full">
            <PageTopSection title="Our Team" />
            <div className="relative z-10 w-full px-5 py-12 sm:px-10 sm:py-16 md:px-16 lg:px-20 lg:py-20 xl:px-24">

                {/* ================= SECTION HEADER ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                        duration: 0.7,
                        ease: "easeOut",
                    }}
                    className="mx-auto mb-16 max-w-4xl space-y-4 text-center"
                >
                    {/* Small Heading */}
                    <div className="flex items-center justify-center gap-2">
                        <span className="text-sm font-semibold uppercase tracking-widest text-[#d9983b]">
                            Meet Our Team
                        </span>
                    </div>

                    {/* Law Icon */}
                    <div className="flex items-center justify-center">
                        <span className="h-px w-8 bg-[#d9983b]" />
                        <GoLaw className="h-7 w-7 text-[#d9983b]" />
                        <span className="h-px w-8 bg-[#d9983b]" />
                    </div>

                    {/* Main Heading */}
                    <h2 className="font-serif text-3xl font-normal leading-[1.15] tracking-tight text-black sm:text-5xl md:text-5xl lg:text-6xl">
                        Dedicated Lawyers. {""}

                        <span className="font-serif text-[#d9983b]">
                            Trusted Advisors.
                        </span>
                    </h2>

                    <p className="mx-auto max-w-xl text-sm leading-relaxed sm:text-base text-slate-800">
                        Our team of skilled attorneys is committed to providing exceptional legal representation across
                        a wide range of practice areas.
                    </p>
                </motion.div>

                {/* ================= TEAM CARDS ================= */}
                <div className="grid grid-cols-1 gap-6 pb-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {teamData.map((member) => (
                        <TeamPageCard key={member.slug} member={member} />
                    ))}
                </div>
            </div>
            <NeedLegalSection
                leftColumnImage={siteData.results.leftColumnImage}
                rightBgImage={siteData.results.rightBgImage}
                phone={siteData.navbar.phone}
            />
        </div>
    );
}
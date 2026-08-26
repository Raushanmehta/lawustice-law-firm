"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
    FaTrophy, 
    FaAward, 
    FaBriefcase, 
    FaShieldAlt, 
    FaFolderOpen, 
    FaChevronLeft, 
    FaChevronRight 
} from "react-icons/fa";
import type { AwardsRecognitionSectionData } from "@/types/sections";

interface AwardsRecognitionSectionProps {
    data: AwardsRecognitionSectionData;
}

export default function AwardsRecognitionSection({
    data
}: AwardsRecognitionSectionProps) {
    const statIcons: Record<string, typeof FaTrophy> = {
        trophy: FaTrophy,
        shield: FaShieldAlt,
        briefcase: FaBriefcase,
        award: FaAward,
    };

    return (
        <main className="min-h-screen bg-[#fdfbf7] px-5 py-16 sm:px-10 sm:py-20 md:px-16 lg:px-20 xl:px-24">
            <div className="mx-auto  space-y-24">
                
                {/* ================= SECTION 1: FEATURED RECOGNITION ================= */}
                <div className="rounded-2xl bg-white p-8 sm:p-12 shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-[#f0ebde]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        
                        {/* Plaque Image */}
                        <div className="lg:col-span-5">
                            <div className="relative h-[300px] sm:h-[350px] w-full overflow-hidden rounded-xl border border-[#f0ebde] shadow-md">
                                <Image
                                    src={data.featured.image}
                                    alt={`${data.featured.title} ${data.featured.year} Award`}
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="lg:col-span-7 space-y-5">
                            <div className="flex items-center gap-3">
                                <span className="h-px w-8 bg-[#d9983b]" />
                                <span className="text-xs font-semibold uppercase tracking-widest text-[#d9983b]">
                                    FEATURED RECOGNITION
                                </span>
                            </div>

                            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0b1329] leading-tight">
                                {data.featured.title} <span className="text-[#d9983b]">{data.featured.year}</span>
                            </h1>

                            <h3 className="font-serif text-lg text-gray-700 font-medium">
                                {data.featured.organization}
                            </h3>

                            <p className="text-xs sm:text-sm leading-relaxed text-gray-600">
                                {data.featured.description}
                            </p>

                            <div className="pt-2">
                                <Link
                                    href={data.featured.link}
                                    className="group inline-flex items-center gap-3 rounded-xl bg-white border border-[#d9983b] px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wider text-[#0b1329] shadow-sm transition-all duration-300 hover:bg-[#d9983b] hover:text-white"
                                >
                                    <span>VIEW RECOGNITION</span>
                                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>


                {/* ================= SECTION 2: OUR RECENT AWARDS ================= */}
                <div className="space-y-12">
                    
                    {/* Header */}
                    <div className="mx-auto max-w-xl text-center space-y-3">
                        <div className="flex items-center justify-center gap-3">
                            <span className="h-px w-10 bg-[#d9983b]" />
                            <span className="h-2 w-2 rotate-45 bg-[#d9983b]" />
                            <span className="h-px w-10 bg-[#d9983b]" />
                        </div>
                        <h2 className="font-serif text-3xl sm:text-4xl text-[#0b1329]">
                            {data.recentTitle}
                        </h2>
                    </div>

                    {/* 3-Column Awards Grid */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.12 } },
                        }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {data.recentAwards.map((award, index) => (
                            <motion.div
                                key={index} 
                                variants={{
                                    hidden: { opacity: 0, y: 28 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="relative flex flex-col items-center text-center rounded-2xl bg-white p-8 border border-[#f0ebde] shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 justify-between"
                            >
                                <div className="space-y-2 w-full">
                                    {/* Icon / Wreath */}
                                    <div className="relative mx-auto flex h-40 w-40 items-center justify-center">
                                        <Image
                                            src="/icons/golden-emblem-icon.png"
                                            alt="golden-emblem-icon"
                                            fill
                                            sizes="160px"
                                            className="object-contain"
                                        />
                                        <div className="relative z-30 flex h-28 w-28 -translate-y-2 items-center justify-center rounded-full text-[#d9983b]">
                                            <Image
                                                src={award.icon}
                                                alt={`${award.title} icon`}
                                                width={56}
                                                height={56}
                                                className="h-14 w-14 object-contain"
                                                style={{ filter: "brightness(0) saturate(100%) invert(65%) sepia(44%) saturate(689%) hue-rotate(356deg) brightness(89%) contrast(90%)" }}
                                            />
                                        </div>
                                    </div>

                                    {/* Year */}
                                    <span className="font-serif text-5xl font-medium text-[#d9983b] block">
                                        {award.year}
                                    </span>

                                    {/* Title & Organization */}
                                    <div className="space-y-2">
                                        <h3 className="font-serif text-2xl text-[#0b1329]">
                                            {award.title}
                                        </h3>
                                        <p className="text-md sm:text-lg text-gray-600">
                                            {award.organization}
                                        </p>
                                    </div>
                                </div>

                                {/* Category Badge Footer */}
                                <div className="w-full mt-8 pt-4 border-t border-[#f0ebde] flex items-center justify-center gap-2 text-md  text-gray-500">
                                    <FaFolderOpen className="h-3.5 w-3.5 text-[#d9983b]" />
                                    <span>{award.category}</span>
                                </div>

                            </motion.div>
                        ))}
                    </motion.div>

                </div>


                {/* ================= SECTION 3: STATS BANNER ================= */}
                <div className="rounded-2xl bg-[#070f22] p-8 sm:p-10 text-white shadow-xl border border-[#162340]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 lg:divide-x divide-[#1b2b4c]">
                        {data.stats.map((stat) => {
                            const Icon = statIcons[stat.icon];

                            return (
                                <div key={stat.label} className="flex items-start gap-4 pt-6 sm:pt-0 lg:pl-6 first:lg:pl-0">
                                    <Icon className="h-12 w-12 text-[#d9983b] shrink-0 mt-1" />
                                    <div className="space-y-1">
                                        <h3 className="font-serif text-3xl sm:text-5xl text-white">{stat.value}</h3>
                                        <p className="text-lg font-semibold tracking-wider text-white">{stat.label}</p>
                                        <p className="text-md text-gray-400">{stat.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>


                {/* ================= SECTION 4: RECOGNITION TIMELINE ================= */}
                <div className="space-y-10">
                    
                    {/* Header & Controls */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-[#f0ebde] pb-4">
                        <h2 className="font-serif text-2xl sm:text-3xl text-[#0b1329]">
                            {data.timelineTitle}
                        </h2>
                        <div className="flex items-center gap-2">
                            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9983b]/60 bg-white text-[#d9983b] transition-colors hover:bg-[#d9983b] hover:text-white">
                                <FaChevronLeft className="h-4 w-4" />
                            </button>
                            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9983b]/60 bg-white text-[#d9983b] transition-colors hover:bg-[#d9983b] hover:text-white">
                                <FaChevronRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    {/* Timeline Grid Track */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        {data.timelineData.map((item, index) => (
                            <div key={index} className="space-y-6 relative">
                                
                                {/* Year Header with Marker Node */}
                                <div className="flex items-center gap-3">
                                    <span className=" text-3xl text-[#d9983b]">
                                        {item.year}
                                    </span>
                                    <div className="h-3 w-3 rounded-full bg-[#d9983b] ring-4 ring-[#f5eddc]" />
                                    <div className="h-px flex-1 bg-[#d9983b]/50" />
                                </div>

                                {/* Achievements List */}
                                <div className="space-y-2 pt-2">
                                    {item.achievements.map((ach, idx) => (
                                        <div key={idx} className="space-y-1 relative pl-4 border-l-2 border-[#f0ebde]">
                                            <h4 className=" font-medium text-md text-[#0b1329]">
                                                {ach.title}
                                            </h4>
                                            <p className="text-sm text-gray-500 italic">
                                                {ach.org}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </main>
    );
}
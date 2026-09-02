"use client";

import React from "react";
import {
    Trophy,
    FileCheck2,
    UsersRound,
    UserRound,
    Scale,
    type LucideIcon,
} from "lucide-react";
import siteData from "@/data/siteData";
import type { StatItem } from "@/types";
import Image from "next/image";

const iconMap: Record<string, LucideIcon> = {
    Trophy,
    FileCheck2,
    UsersRound,
    UserRound,
    Scale,
};

const { results } = siteData;

export default function ResultsSection() {
    return (
        <section className="relative overflow-hidden bg-[#fdfbf7] px-5 py-14 sm:px-10 sm:py-20 md:px-16 lg:px-20 xl:px-24">
            {/* Left Corinthian Column */}
            <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-[30%] overflow-hidden lg:block">
                <Image
                    src={results.leftColumnImage}
                    alt=""
                    width={520}
                    height={700}
                    className="
      absolute
      left-[-100px]
      top-[-40px]
      h-[115%]
      w-[520px]
      max-w-none
      object-contain
      object-left
      opacity-[0.45]
      mix-blend-multiply
    "
                />
            </div>

            {/* Right soft shadow / plant background */}
            <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[30%] overflow-hidden lg:block">
                <Image
                    src={results.rightBgImage}
                    alt=""
                    width={700}
                    height={700}
                    className="
      absolute
      right-[-180px]
      top-[-20px]
      h-[110%]
      w-[700px]
      max-w-none
      object-cover
      object-left
      opacity-[0.9]
      grayscale
      blur-[1px]
    "
                />

                {/* Soft fade over image */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#fdfbf7]/40 to-[#fdfbf7]" />
            </div>

            <div className="relative z-10 w-full  mx-auto">
                {/* Heading */}
                <div className="mx-auto max-w-[700px] text-center">
                    <h2 className="font-serif text-3xl font-normal leading-[1.15] tracking-tight  sm:text-5xl md:text-5xl lg:text-6xl">
                        {results.titleLine1}
                        <br />
                        {results.titleLine2}{" "}
                        <span className="text-[#c78a12]">{results.highlight}</span>
                    </h2>

                    {/* Gold divider */}
                    <div className="py-4 flex items-center justify-center">
                        <span className="h-[1px] w-[55px] bg-[#c78a12] " />

                        <span className="mx-2 flex h-2 w-2 rotate-45 border-2 border-[#c78a12] bg-[#fdfbf7]" />

                        <span className="h-[1px] w-[55px] bg-[#c78a12]" />
                    </div>

                    <p className="mx-auto max-w-xl text-sm leading-relaxed sm:text-base text-slate-800">
                        {results.description}
                    </p>
                </div>

                {/* Stats */}
                <div className="relative mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
                    {results.stats.map((item: StatItem, index: number) => {
                        const Icon = iconMap[item.icon] ?? Trophy;

                        return (
                            <React.Fragment key={item.label}>
                                <div className="group relative min-h-[280px] rounded-[7px] border border-[#e6dfd3] bg-[rgba(255,253,249,0.82)] px-5 pb-7 pt-6 shadow-[0_5px_15px_rgba(75,58,32,0.04)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(75,58,32,0.09)] sm:min-h-[285px]">
                                    {/* Icon circle */}
                                    <div className="flex justify-center">
                                        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#e8d8bd] bg-[#fffdf9] shadow-[0_5px_14px_rgba(104,77,34,0.07)]">
                                            <Icon
                                                strokeWidth={1.5}
                                                className="h-8 w-8 text-[#c88b14]"
                                            />
                                        </div>
                                    </div>

                                    {/* Gold divider */}
                                    <div className="mt-5 flex items-center justify-center">
                                        <span className="h-px flex-1 bg-[#d9a94d]" />
                                        <span className="mx-0 h-[6px] w-[6px] rounded-full bg-[#c88b14]" />
                                        <span className="h-px flex-1 bg-[#d9a94d]" />
                                    </div>

                                    {/* Number */}
                                    <div className="mt-5 text-center">
                                        <span className="font-serif text-[48px] leading-none tracking-[-1px] text-[#102033] sm:text-[50px]">
                                            {item.value}
                                        </span>
                                        <span className="ml-1 font-serif text-[28px] text-[#c88b14]">
                                            {item.suffix}
                                        </span>
                                    </div>

                                    {/* Label */}
                                    <p className="mt-4 text-center text-[12px] font-bold tracking-[1.2px] text-[#29313b]">
                                        {item.label}
                                    </p>

                                    {/* Bottom small divider */}
                                    <div className="mx-auto mt-6 h-px w-[32px] bg-[#c88b14]" />

                                    {/* Bottom gold border */}
                                    <div className="absolute bottom-0 left-0 h-[3px] w-full rounded-b-[7px] bg-[#c88b14]" />
                                </div>

                                {/* Diamond between cards */}
                                {index < results.stats.length - 1 && (
                                    <div className="pointer-events-none absolute left-1/4 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
                                        <span className="block h-[9px] w-[9px] rotate-45 border border-[#c88728] bg-[#fdfbf7]" />
                                    </div>
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
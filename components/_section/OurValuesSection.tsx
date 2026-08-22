import React from "react";
import { 
    FaShieldAlt, 
    FaClipboardCheck, 
    FaTrophy, 
    FaHandshake 
} from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import type { OurValuesData } from "@/types";

interface OurValuesProps {
    data: OurValuesData;
}

const iconMap: Record<string, React.ReactNode> = {
    shield: <FaShieldAlt className="h-7 w-7 text-[#d9983b]" />,
    clipboard: <FaClipboardCheck className="h-7 w-7 text-[#d9983b]" />,
    trophy: <FaTrophy className="h-7 w-7 text-[#d9983b]" />,
    handshake: <FaHandshake className="h-7 w-7 text-[#d9983b]" />,
};

export default function OurValuesSection({ data }: OurValuesProps) {
    const { smallHeading, titlePart1, titlePart2, subtitle, values } = data;

    return (
        <section className="relative overflow-hidden bg-[#070f22] px-5 py-20 sm:px-10 sm:py-24 md:px-16 lg:px-20 xl:px-24">
            
            {/* ================= BACKGROUND DOTTED ACCENTS (Extended Upwards) ================= */}
            {/* Top-Left Dotted Pattern - Taller Grid */}
            <div className="absolute top-4 left-4 grid grid-cols-15 grid-rows-[repeat(25,minmax(0,1fr))] gap-2 opacity-35 pointer-events-none">
                {Array.from({ length: 375 }).map((_, i) => (
                    <div key={`tl-${i}`} className="h-1 w-1 rounded-full bg-[#d9983b]" />
                ))}
            </div>

            {/* Bottom-Right Dotted Pattern - Taller Grid */}
            <div className="absolute bottom-4 right-4 grid grid-cols-15 grid-rows-[repeat(25,minmax(0,1fr))] gap-2 opacity-35 pointer-events-none">
                {Array.from({ length: 375 }).map((_, i) => (
                    <div key={`br-${i}`} className="h-1 w-1 rounded-full bg-[#d9983b]" />
                ))}
            </div>

            <div className="relative z-10 mx-auto max-w-7xl">
                
                {/* ================= SECTION HEADER ================= */}
                <div className="mx-auto mb-16 max-w-3xl text-center space-y-4">
                    
                    {/* Small Upper Heading with Rules */}
                    <div className="flex items-center justify-center gap-3">
                        <span className="h-px w-12 bg-[#d9983b]" />
                        <span className="text-xs font-semibold uppercase tracking-widest text-[#d9983b]">
                            {smallHeading}
                        </span>
                        <span className="h-px w-12 bg-[#d9983b]" />
                    </div>

                    {/* Main Title */}
                    <h2 className="font-serif text-3xl sm:text-5xl text-white tracking-wide">
                        {titlePart1}{" "}
                        <span className="font-serif text-[#d9983b]">{titlePart2}</span>
                    </h2>

                    {/* Law Icon Divider */}
                    <div className="flex items-center justify-center gap-3 pt-1">
                        <span className="h-px w-16 bg-[#d9983b]/60" />
                        <GoLaw className="h-5 w-5 text-[#d9983b]" />
                        <span className="h-px w-16 bg-[#d9983b]/60" />
                    </div>

                    {/* Subtitle Description */}
                    <p className="text-sm sm:text-base leading-relaxed text-gray-300 max-w-xl mx-auto pt-1">
                        {subtitle}
                    </p>
                </div>

                {/* ================= VALUES CARDS GRID ================= */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
                    {values.map((item, index) => (
                        <div key={item.title} className="relative">
                            <div className="relative flex h-full flex-col items-center rounded-2xl border border-[#1b2b4c] bg-[#0b1429] p-8 text-center shadow-[0_15px_35px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-[#d9983b]/50 group">
                            
                            {/* Glowing Circular Icon Container */}
                            <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#070f22] border-2 border-[#d9983b]/70 shadow-[0_0_20px_rgba(217,152,59,0.25)] group-hover:scale-105 transition-transform duration-300">
                                {iconMap[item.icon]}
                            </div>

                            {/* Dotted Divider line under icon */}
                            <div className="relative my-3 w-24 border-t-2 border-dotted border-[#d9983b]/50">
                                <div className="absolute left-1/2 -top-1 -translate-x-1/2 h-2 w-2 rotate-45 bg-[#d9983b]" />
                            </div>

                            {/* Title */}
                            <h3 className="font-serif text-2xl text-white mt-3 mb-3">
                                {item.title}
                            </h3>
                             <span className="h-px w-16 bg-[#d9983b]/60" />

                            {/* Description */}
                            <p className="text-xs sm:text-sm leading-relaxed text-gray-400">
                                {item.description}
                            </p>

                            </div>

                            {/* Dotted connector between value cards */}
                            {index < values.length - 1 && (
                                <div className="pointer-events-none absolute -right-4 top-1/2 hidden h-24 -translate-y-1/2 border-l-2 border-dotted border-[#d9983b]/50 lg:block">
                                    <div className="absolute -left-1 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-[#d9983b]" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
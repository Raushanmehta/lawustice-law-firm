import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCalendarAlt, FaDownload } from "react-icons/fa";

interface IndustriesServeSectionProps {
    smallHeading?: string;
    title?: string;
    description?: string;
    imageSrc?: string;
    consultationUrl?: string;
    brochureUrl?: string;
}

export default function IndustriesServeSection({
    smallHeading = "INDUSTRIES WE SERVE",
    title = "Corporate & Commercial",
    description = "We provide end-to-end legal support to businesses at every stage of growth. From formation and contracts to mergers, acquisitions, and governance, our attorneys deliver practical solutions that help your business operate, grow, and succeed.",
    imageSrc = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29ycG9yYXRlJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D", // Apna image path yahan dalein
    consultationUrl = "#",
    brochureUrl = "#"
}: IndustriesServeSectionProps) {
    return (
        <section className="relative overflow-hidden bg-[#fdfbf7] px-5 py-16 sm:px-10 sm:py-20 md:px-16 lg:px-20 xl:px-24">
            <div className="mx-auto ">
                
                {/* Main 2-Column Grid */}
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
                    
                    {/* ================= LEFT SIDE: CONTENT & BUTTONS (Col Span 6) ================= */}
                    <div className="flex flex-col items-start space-y-6 lg:col-span-6">
                        
                        {/* Upper Small Heading */}
                        <span className="text-xs font-semibold uppercase tracking-widest text-[#d9983b]">
                            {smallHeading}
                        </span>

                        {/* Main Title & Golden Underline */}
                        <div className="space-y-3">
                            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0b1329] leading-tight">
                                {title}
                            </h2>
                            <div className="h-[2px] w-12 bg-[#d9983b]" />
                        </div>

                        {/* Description Text */}
                        <p className="text-xs sm:text-sm leading-relaxed text-gray-600 max-w-xl">
                            {description}
                        </p>

                        {/* Action Buttons Row */}
                        <div className="flex flex-wrap items-center gap-4 pt-4">
                            
                            {/* Schedule a Consultation Button */}
                            <Link
                                href={consultationUrl}
                                className="group inline-flex items-center gap-3 rounded-xl bg-[#081225] px-6 py-4 text-xs sm:text-sm font-semibold tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-[#111f3d]"
                            >
                                <FaCalendarAlt className="h-4 w-4 text-[#d9983b]" />
                                <span>Schedule a Consultation</span>
                            </Link>

                            {/* Download Brochure Link/Button */}
                            <Link
                                href={brochureUrl}
                                className="group inline-flex items-center gap-2 px-4 py-4 text-xs sm:text-sm font-semibold tracking-wider text-[#0b1329] transition-colors hover:text-[#d9983b]"
                            >
                                <FaDownload className="h-3.5 w-3.5 text-[#d9983b] transition-transform duration-300 group-hover:translate-y-0.5" />
                                <span>Download Brochure</span>
                            </Link>

                        </div>

                    </div>

                    {/* ================= RIGHT SIDE: SKYSCRAPERS IMAGE (Col Span 6) ================= */}
                    <div className="lg:col-span-6">
                        <div className="relative h-[350px] sm:h-[420px] lg:h-[480px] w-full overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-[#f0ebde]">
                            <Image
                                src={imageSrc}
                                alt="Corporate Skyscrapers"
                                fill
                                priority
                                className="object-cover object-center"
                            />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaShieldAlt } from "react-icons/fa";

interface IndustrieCardProps {
    title?: string;
    description?: string;
    imageSrc?: string;
    icon?: React.ReactNode;
    linkUrl?: string;
}

export default function IndustrieCard({
    title = "Healthcare & Life Sciences",
    description = "Legal guidance for healthcare providers, pharma, and biotech companies.",
    imageSrc = "/images/healthcare-stethoscope.png", // Apna image path yahan dalein
    icon = <FaShieldAlt className="h-7 w-7 text-[#d9983b]" />,
    linkUrl = "#"
}: IndustrieCardProps) {
    return (
        <div className="group relative w-full max-w-sm overflow-hidden rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-[#f0ebde] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] flex flex-col justify-between">
            
            <div className="space-y-6">
                {/* ================= TOP ROW: CIRCULAR ICON + TITLE ================= */}
                <div className="flex items-center gap-4">
                    {/* Circular Icon Container */}
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#fdfaf3] border border-[#f5eddce6] shadow-sm">
                        {icon}
                    </div>

                    {/* Title & Underline */}
                    <div className="space-y-1.5">
                        <h3 className="font-serif text-xl sm:text-2xl text-[#0b1329] leading-tight">
                            {title}
                        </h3>
                        {/* Golden Split Underline */}
                        <div className="flex items-center gap-1">
                            <span className="h-[2px] w-6 bg-[#4a5568]" />
                            <span className="h-[2px] w-8 bg-[#d9983b]" />
                        </div>
                    </div>
                </div>

                {/* ================= MIDDLE BANNER IMAGE ================= */}
                <div className="relative h-44 w-full overflow-hidden rounded-xl border border-[#f0ebde]">
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                {/* ================= DESCRIPTION ================= */}
                <p className="text-xs sm:text-sm leading-relaxed text-gray-600">
                    {description}
                </p>
            </div>

            {/* ================= BOTTOM LINK ================= */}
            <div className="pt-6">
                <Link
                    href={linkUrl}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-[#d9983b] transition-colors hover:text-[#b87c2b]"
                >
                    <span>Learn More</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
            </div>

        </div>
    );
}
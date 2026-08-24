import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GoLaw } from "react-icons/go";

interface ServiceCardProps {
    title?: string;
    description?: string;
    image?: string;
    icon?: React.ReactNode;
    linkUrl?: string;
}

export default function ServiceCard({
    title = "Civil Litigation",
    description = "We represent individuals and businesses in a broad range of civil disputes, advocating for your rights in court with confidence.",
    image = "/images/law-banner.png",
    icon = <GoLaw className="h-7 w-7 text-[#d9983b]" />,
    linkUrl = "#"
}: ServiceCardProps) {
    return (
        <div className="group relative w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-[#f0ebde] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)]">
            
            {/* ================= TOP BANNER IMAGE ================= */}
            <div className="relative h-44 w-full overflow-hidden bg-[#0b1329]">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Dark overlay for rich tone */}
                <div className="absolute inset-0 bg-[#0b1329]/30" />
            </div>

            {/* ================= OVERLAPPING CIRCULAR ICON ================= */}
            <div className="relative px-6">
                <div className="absolute -top-10 flex h-20 w-20 items-center justify-center rounded-full bg-[#070f22] border-2 border-[#d9983b]/70 shadow-[0_0_20px_rgba(217,152,59,0.3)] transition-transform duration-300 group-hover:scale-105">
                    {icon}
                </div>
            </div>

            {/* ================= CARD CONTENT ================= */}
            <div className="px-6 pb-8 pt-12 flex flex-col justify-between space-y-4">
                
                {/* Title & Description */}
                <div className="space-y-3">
                    <h3 className="font-serif text-2xl text-[#0b1329]">
                        {title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-gray-600">
                        {description}
                    </p>
                </div>

                {/* Learn More Link */}
                <div className="pt-2">
                    <Link
                        href={linkUrl}
                        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d9983b] transition-colors hover:text-[#b87c2b]"
                    >
                        <span>LEARN MORE</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>
                </div>

            </div>

        </div>
    );
}
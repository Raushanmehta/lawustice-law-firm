"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaClock, FaArrowRight } from "react-icons/fa";

interface BlogCardProps {
    category?: string;
    imageSrc?: string;
    date?: string;
    readTime?: string;
    title?: string;
    description?: string;
    readMoreUrl?: string;
}

export default function BlogCard({
    category = "FAMILY LAW",
    imageSrc = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
    date = "May 20, 2024",
    readTime = "6 Min Read",
    title = "Important Things to Know Before Filing for Divorce",
    description = "Filing for divorce is a significant decision that comes with legal, emotional, and financial considerations. Here's what you should know...",
    readMoreUrl = "#"
}: BlogCardProps) {
    return (
        <div className="w-full max-w-sm rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-[#f0ebde] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-lg">

            {/* Top Image Section with Category Badge */}
            <div className="relative h-64 w-full overflow-hidden bg-[#0b1329]">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover object-center"
                />

                {/* Floating Category Badge */}
                {category && (
                    <div className="absolute top-4 left-4 z-10">
                        <span className="inline-block rounded-md bg-[#b87c55]/90 backdrop-blur-sm px-3.5 py-1.5 text-[10px] font-bold tracking-widest text-white shadow-sm uppercase">
                            {category}
                        </span>
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">

                <div className="space-y-3">
                    {/* Date and Read Time Meta */}
                    <div className="flex items-center gap-3 text-sm text-gray-500 font-medium">
                        <div className="flex items-center gap-1.5 text-[#b87c55]">
                            <FaCalendarAlt className="h-3.5 w-3.5" />
                            <span>{date}</span>
                        </div>
                        <span className="text-gray-300">•</span>
                        <div className="flex items-center gap-1.5 text-[#b87c55]">
                            <FaClock className="h-3.5 w-3.5" />
                            <span>{readTime}</span>
                        </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-2xl text-[#0b1329] leading-snug">
                        {title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm leading-relaxed text-gray-600 pt-0.5">
                        {description}
                    </p>
                </div>

                {/* Read More Link */}
                <div className="pt-2">
                    <Link
                        href={readMoreUrl}
                        className="group inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#b87c55] transition-colors hover:text-[#9a6543]"
                    >
                        <span>READ MORE</span>
                        <FaArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>

            </div>

        </div>
    );
}
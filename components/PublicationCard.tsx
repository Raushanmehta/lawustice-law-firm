"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import { PublicationItem } from "@/types/sections";

interface PublicationCardProps {
    publication: PublicationItem;
}

export default function PublicationCard({ publication }: PublicationCardProps) {
    const {
        slug,
        badge = "ARTICLE",
        image = "/images/news-mic.png",
        imageAlt,
        date,
        category,
        title,
        description,
    } = publication;

    const detailUrl = `/publications/${slug}`;

    return (
        <Link
            href={detailUrl}
            className="group block w-full h-full rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-[#f0ebde] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        >
            {/* Top Image Section with Badge */}
            <div className="relative h-56 w-full overflow-hidden bg-[#0b1329]">
                <Image
                    src={image}
                    alt={imageAlt || title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                {/* Floating Article Badge */}
                {badge && (
                    <div className="absolute top-4 left-4 z-10">
                        <span className="inline-block rounded-md bg-[#d9983b] px-3 py-1 text-[10px] font-bold tracking-widest text-white shadow-sm">
                            {badge}
                        </span>
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">

                <div className="space-y-3">
                    {/* Date and Category Meta */}
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="flex items-center gap-1.5 text-gray-700">
                            <FaCalendarAlt className="text-[#d9983b] h-3.5 w-3.5" />
                            <span>{date}</span>
                        </div>
                        <span className="text-gray-300">•</span>
                        <span className="text-gray-600 font-medium">{category}</span>
                    </div>

                    {/* Title & Orange Separator Line */}
                    <div className="space-y-2.5">
                        <h3 className="font-serif text-2xl text-[#0b1329] leading-snug group-hover:text-[#d9983b] transition-colors duration-300">
                            {title}
                        </h3>
                        <div className="h-[2px] w-10 bg-[#d9983b]" />
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm leading-relaxed text-gray-600 pt-1 line-clamp-3">
                        {description}
                    </p>
                </div>

                {/* Read More Link */}
                <div className="pt-4">
                    <span className="group/link inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#d9983b] transition-colors hover:text-[#b87c2b]">
                        <span>READ MORE</span>
                        <FaArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                </div>

            </div>

        </Link>
    );
}
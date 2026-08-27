"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { CaseStudyItem } from "@/types/sections";

interface CaseSturdieCardProps {
    caseStudy: CaseStudyItem;
}

export default function CaseSturdieCard({ caseStudy }: CaseSturdieCardProps) {
    const { slug, category, title, description, image } = caseStudy;

    return (
        <Link
            href={`/case-studies/${slug}`}
            className="group block w-full rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-[#f0ebde] p-4 grid grid-cols-1 md:grid-cols-12 gap-6 items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        >
            {/* Left Side Image */}
            <div className="md:col-span-5 relative h-64 sm:h-60 w-full overflow-hidden rounded-xl bg-[#0b1329]">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Right Side Content */}
            <div className="md:col-span-7 space-y-4">

                {/* Category */}
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#d9983b] block">
                    {category}
                </span>

                {/* Title */}
                <h3 className="font-serif text-2xl sm:text-3xl text-[#0b1329] leading-tight group-hover:text-[#d9983b] transition-colors duration-300">
                    {title}
                </h3>

                {/* Divider */}
                <div className="h-[2px] w-10 bg-[#d9983b]" />

                {/* Description */}
                <p className="text-xs sm:text-sm leading-relaxed text-gray-600 line-clamp-3">
                    {description}
                </p>

                {/* Read More */}
                <div className="pt-1">
                    <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#d9983b] transition-colors group-hover:text-[#b87c2b]">
                        <span>Read Full Case Study</span>
                        <FaArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                </div>

            </div>
        </Link>
    );
}
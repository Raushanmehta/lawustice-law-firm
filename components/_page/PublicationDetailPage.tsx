"use client";
import Image from "next/image";
import Link from "next/link";

import {
    FaCalendarAlt,
    FaFolderOpen,
    FaClock,
    FaFilePdf,
    FaLock,
    FaArrowRight,
} from "react-icons/fa";

import {
    PublicationItem,
    PublicationLegalFrameworkItem,
    PublicationRelated,
} from "@/types/sections";
import { FadeLeft, FadeRight } from "@/components/ui/AnimationWrapper";



interface PublicationDetailPageProps {
    publication: PublicationItem;
}



export default function PublicationDetailPage({ publication }: PublicationDetailPageProps) {
    return (
        <section className="relative bg-white px-5 py-16 sm:px-10 sm:py-20 md:px-16 lg:px-20 xl:px-24">
            <div className="mx-auto ">
                <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
                    <FadeLeft className="space-y-8 lg:col-span-8">
                        <div className="space-y-3">
                            <span className="text-sm font-semibold uppercase tracking-widest text-[#d9983b]">
                                {publication.badge ?? "PUBLICATION"}
                            </span>

                            <h1 className="font-serif text-2xl leading-tight text-[#0b1329] sm:text-3xl lg:text-4xl">
                                {publication.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1 text-sm text-gray-500">

                                <div className="flex items-center gap-1.5">
                                    <FaCalendarAlt className="h-3 w-3 text-[#d9983b]" />
                                    <span>{publication.date}</span>
                                </div>

                                <span>•</span>

                                {/* Category */}

                                <div className="flex items-center gap-1.5">
                                    <FaFolderOpen className="h-3 w-3 text-[#d9983b]" />
                                    <span>{publication.category}</span>
                                </div>

                                {publication.readTime && (
                                    <>
                                        <span>•</span>

                                        {/* Read Time */}

                                        <div className="flex items-center gap-1.5">
                                            <FaClock className="h-3 w-3 text-[#d9983b]" />
                                            <span>{publication.readTime}</span>
                                        </div>
                                    </>
                                )}

                            </div>
                        </div>

                        <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-[#0b1329] shadow-md sm:h-80 md:h-96">

                            <Image
                                src={publication.image ?? "/images/news-mic.png"}
                                alt={publication.imageAlt ?? publication.title}
                                fill
                                priority
                                className="object-cover object-center"
                            />

                        </div>

                        {publication.intro && (
                            <p className="text-sm leading-relaxed text-gray-600 sm:text-md">
                                {publication.intro}
                            </p>
                        )}

                        <hr className="border-[#f0ebde]" />

                        {publication.introduction && (
                            <div className="space-y-3">

                                <h2 className="font-serif text-xl text-[#0b1329] sm:text-2xl">
                                    Introduction
                                </h2>

                                <div className="h-[2px] w-10 bg-[#d9983b]" />

                                <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
                                    {publication.introduction}
                                </p>

                            </div>
                        )}


                        {publication.legalFramework && publication.legalFramework.length > 0 && (
                            <div className="space-y-6 pt-2">

                                <div className="space-y-2">

                                    <h2 className="font-serif text-xl text-[#0b1329] sm:text-2xl">
                                        Key Legal Framework
                                    </h2>

                                    <div className="h-[2px] w-10 bg-[#d9983b]" />

                                </div>

                                {/* Legal Framework List */}

                                <div className="space-y-5">

                                    {publication.legalFramework.map(
                                        (item: PublicationLegalFrameworkItem) => (
                                            <div
                                                key={item.id}
                                                className="flex items-start gap-4"
                                            >

                                                {/* Number */}

                                                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#d9983b]/30 bg-[#fdfaf3] text-xs font-semibold text-[#d9983b]">
                                                    {item.id}
                                                </div>

                                                {/* Content */}

                                                <div className="space-y-1">

                                                    <h4 className="font-serif text-lg  text-[#0b1329]">
                                                        {item.title}
                                                    </h4>

                                                    <p className="text-sm leading-relaxed text-gray-600">
                                                        {item.description}
                                                    </p>

                                                </div>

                                            </div>
                                        )
                                    )}

                                </div>
                            </div>
                        )}

                        {publication.recentDevelopments && (
                            <div className="space-y-3 pt-2">

                                <h2 className="font-serif text-xl text-[#0b1329] sm:text-2xl">
                                    Recent Developments
                                </h2>

                                <div className="h-[2px] w-10 bg-[#d9983b]" />

                                <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
                                    {publication.recentDevelopments}
                                </p>

                            </div>
                        )}

                        {publication.conclusion && (
                            <div className="space-y-3 pt-2">

                                <h2 className="font-serif text-xl text-[#0b1329] sm:text-2xl">
                                    Conclusion
                                </h2>

                                <div className="h-[2px] w-10 bg-[#d9983b]" />

                                <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
                                    {publication.conclusion}
                                </p>

                            </div>
                        )}

                    </FadeLeft>

                    <FadeRight className="space-y-8 lg:col-span-4">

                        {publication.pdf && (
                            <div className="space-y-6 rounded-2xl border border-[#f0ebde] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] sm:p-8">

                                {/* Card Header */}

                                <div className="space-y-1 border-b border-[#f0ebde] pb-3">

                                    <h3 className="font-serif text-2xl  text-[#0b1329]">
                                        Download Publication
                                    </h3>

                                    <div className="h-[2px] w-10 bg-[#d9983b]" />

                                </div>

                                {/* PDF Info */}

                                <div className="flex items-center gap-4 rounded-xl border border-[#f0ebde] bg-[#fdfaf3] p-4">

                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#070f22] text-[#d9983b]">

                                        <FaFilePdf className="h-6 w-6" />

                                    </div>

                                    <div className="space-y-0.5 overflow-hidden">

                                        <h4 className="truncate font-serif text-sm text-[#0b1329]">
                                            {publication.pdf.name}
                                        </h4>

                                        <p className="text-[11px] text-gray-500">
                                            PDF • {publication.pdf.size}
                                        </p>

                                    </div>

                                </div>

                                {/* Download Button */}

                                <div>

                                    <a
                                        href={publication.pdf.href}
                                        download
                                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#070f22] py-3.5 text-xs font-semibold tracking-wider text-white transition-all hover:bg-[#162340]"
                                    >

                                        <span>
                                            DOWNLOAD PDF
                                        </span>

                                        <FaArrowRight className="h-3 w-3 text-[#d9983b]" />

                                    </a>

                                </div>

                                {/* Disclaimer */}

                                <div className="flex items-center gap-2 pt-1 text-[11px] text-gray-400">

                                    <FaLock className="h-4 w-4 shrink-0 text-gray-400" />

                                    <span>
                                        This content is for informational purposes only.
                                    </span>

                                </div>

                            </div>
                        )}

                        {publication.relatedPublications && publication.relatedPublications.length > 0 && (
                            <div className="space-y-6 rounded-2xl border border-[#f0ebde] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] sm:p-8">

                                {/* Card Header */}

                                <div className="space-y-1 border-b border-[#f0ebde] pb-3">

                                    <h3 className="font-serif text-2xl  text-[#0b1329]">
                                        Related Publications
                                    </h3>

                                    <div className="h-[2px] w-10 bg-[#d9983b]" />

                                </div>

                                {/* Related Publications */}

                                <div className="space-y-5 divide-y divide-[#f8f5ee]">

                                    {publication.relatedPublications.map(
                                        (item: PublicationRelated) => (
                                            <Link
                                                key={item.id}
                                                href={item.href}
                                                className="group block space-y-1.5 pt-4 first:pt-0"
                                            >

                                                {/* Title */}

                                                <h4 className="font-serif text-md leading-snug text-[#0b1329] transition-colors group-hover:text-[#d9983b]">
                                                    {item.title}
                                                </h4>

                                                {/* Meta */}

                                                <div className="flex items-center justify-between gap-3 pt-1 text-[12px] text-gray-500">

                                                    <span className="shrink-0">
                                                        {item.date}
                                                    </span>

                                                    <span className="text-right italic text-gray-400">
                                                        {item.category}
                                                    </span>

                                                </div>

                                            </Link>
                                        )
                                    )}

                                </div>

                                {/* View All Button */}

                                <div className="pt-2">

                                    <Link
                                        href="/publications"
                                        className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#d9983b] py-4 text-sm font-semibold tracking-wider text-[#0b1329] transition-all duration-300 hover:bg-[#d9983b] hover:text-white"
                                    >

                                        <span>
                                            VIEW ALL PUBLICATIONS
                                        </span>

                                        <FaArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />

                                    </Link>

                                </div>

                            </div>
                        )}

                    </FadeRight>

                </div>
            </div>
        </section>
    );
}
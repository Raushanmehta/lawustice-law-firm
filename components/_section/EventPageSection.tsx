"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    FaFileAlt,
    FaLaptop,
    FaCalendarAlt,
    FaUser,
    FaClock,
    FaArrowRight,
    FaEnvelope,
    FaPhoneAlt,
    FaShieldAlt
} from "react-icons/fa";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination";
import { EventItem, EventsData } from "@/types/sections";

interface EventPageSectionProps {
    eventsData?: EventsData;
    items?: EventItem[];
}

export default function EventPageSection({ eventsData, items }: EventPageSectionProps) {
    const allEvents: EventItem[] = items || eventsData?.items || [];

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

    // Filter events by selected category
    const filteredEvents = selectedCategory === "ALL"
        ? allEvents
        : allEvents.filter(item => (item.category || "").toUpperCase() === selectedCategory.toUpperCase());

    const itemsPerPage = 3;
    const totalPages = Math.max(1, Math.ceil(filteredEvents.length / itemsPerPage));

    // Calculate slice indices for current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentEvents = filteredEvents.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page: number, e?: React.MouseEvent) => {
        if (e) e.preventDefault();
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const handleCategoryFilter = (category: string) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    const renderIcon = (iconType?: string, category?: string) => {
        const type = (iconType || "").toLowerCase();
        const cat = (category || "").toUpperCase();
        if (type === "laptop" || cat.includes("MEDIA")) {
            return <FaLaptop className="h-6 w-6 text-white" />;
        }
        if (type === "calendar" || cat.includes("EVENT")) {
            return <FaCalendarAlt className="h-6 w-6 text-white" />;
        }
        if (type === "shield" || cat.includes("ACHIEVE")) {
            return <FaShieldAlt className="h-6 w-6 text-white" />;
        }
        return <FaFileAlt className="h-6 w-6 text-white" />;
    };

    return (
        <section className="relative bg-white px-5 py-16 sm:px-10 sm:py-20 md:px-16 lg:px-20 xl:px-24">
            <div className="mx-auto space-y-16 ">

                {/* Main 2-Column Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                    {/* ================= LEFT SIDE: EVENT CARDS WITH SLIDE-UP ANIMATION ================= */}
                    <div className="lg:col-span-8 space-y-8">
                        {/* Category filter pills */}
                        <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-[#f0ebde]">
                            {["ALL", "FIRM NEWS", "MEDIA COVERAGE", "EVENTS", "ACHIEVEMENTS"].map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => handleCategoryFilter(cat)}
                                    className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer ${selectedCategory === cat
                                        ? "bg-[#0b1329] text-[#d9983b] shadow-sm"
                                        : "bg-white text-gray-600 border border-[#f0ebde] hover:border-[#d9983b] hover:text-[#0b1329]"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {currentEvents.length === 0 ? (
                            <div className="rounded-2xl bg-white p-12 text-center border border-[#f0ebde]">
                                <p className="text-gray-500 font-serif text-lg">No events found in this category.</p>
                                <button
                                    onClick={() => handleCategoryFilter("ALL")}
                                    className="mt-4 text-xs font-semibold text-[#d9983b] uppercase tracking-wider underline hover:text-[#b87c2b]"
                                >
                                    Show All Events
                                </button>
                            </div>
                        ) : (
                            <div key={`${currentPage}-${selectedCategory}`} className="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-500">
                                {currentEvents.map((item) => {
                                    const targetUrl = item.linkUrl || `/events/${item.slug || item.id}`;
                                    return (
                                        <Link
                                            key={item.id}
                                            href={targetUrl}
                                            className="group block rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-[#f0ebde] hover:border-[#d9983b]/40 hover:shadow-xl transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
                                        >
                                            {/* Left Article Image Box with Floating Icon */}
                                            <div className="md:col-span-5 relative h-56 sm:h-70 w-full overflow-hidden rounded-xl bg-[#0b1329]">
                                                <Image
                                                    src={item.image || "https://images.unsplash.com/photo-1575517111478-7f6afd0973db?auto=format&fit=crop&q=80&w=1000"}
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                                />
                                                <div className="absolute top-4 left-0 flex h-12 w-14 items-center justify-center rounded-r-xl bg-[#d9983b] shadow-md">
                                                    {renderIcon(item.iconType, item.category)}
                                                </div>
                                            </div>

                                            {/* Right Article Content */}
                                            <div className="md:col-span-7 space-y-3">
                                                <span className="text-[12px] font-semibold uppercase tracking-widest text-[#d9983b]">
                                                    {item.category || "EVENT"}
                                                </span>

                                                <h3 className="font-serif text-xl sm:text-2xl text-[#0b1329] leading-snug group-hover:text-[#d9983b] transition-colors">
                                                    {item.title}
                                                </h3>

                                                {/* Meta Details */}
                                                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-800">
                                                    <div className="flex items-center gap-1.5">
                                                        <FaCalendarAlt className="text-[#d9983b] h-3 w-3" />
                                                        <span>{item.date}</span>
                                                    </div>
                                                    {item.author && (
                                                        <>
                                                            <span>•</span>
                                                            <div className="flex items-center gap-1.5">
                                                                <FaUser className="text-[#d9983b] h-3 w-3" />
                                                                <span>{item.author}</span>
                                                            </div>
                                                        </>
                                                    )}
                                                    {item.readTime && (
                                                        <>
                                                            <span>•</span>
                                                            <div className="flex items-center gap-1.5">
                                                                <FaClock className="text-[#d9983b] h-3 w-3" />
                                                                <span>{item.readTime}</span>
                                                            </div>
                                                        </>
                                                    )}
                                                </div>

                                                <p className="text-xs sm:text-sm leading-relaxed text-slate-800 line-clamp-3 pt-1">
                                                    {item.description}
                                                </p>

                                                {/* Read More Link */}
                                                <div className="pt-2">
                                                    <span className="group/btn inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#d9983b] transition-colors group-hover:text-[#b87c2b]">
                                                        <span>VIEW EVENT DETAILS</span>
                                                        <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        )}

                        {/* ================= BOTTOM SHADCN PAGINATION ================= */}
                        {totalPages > 1 && (
                            <div className="pt-4 flex justify-center">
                                <Pagination>
                                    <PaginationContent>
                                        <PaginationItem>
                                            <PaginationPrevious
                                                href="#"
                                                onClick={(e) => handlePageChange(currentPage - 1, e)}
                                                className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                                            />
                                        </PaginationItem>

                                        {Array.from({ length: totalPages }).map((_, idx) => {
                                            const pageNum = idx + 1;
                                            return (
                                                <PaginationItem key={pageNum}>
                                                    <PaginationLink
                                                        href="#"
                                                        isActive={currentPage === pageNum}
                                                        onClick={(e) => handlePageChange(pageNum, e)}
                                                    >
                                                        {pageNum}
                                                    </PaginationLink>
                                                </PaginationItem>
                                            );
                                        })}

                                        <PaginationItem>
                                            <PaginationNext
                                                href="#"
                                                onClick={(e) => handlePageChange(currentPage + 1, e)}
                                                className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                                            />
                                        </PaginationItem>
                                    </PaginationContent>
                                </Pagination>
                            </div>
                        )}
                    </div>

                    {/* ================= RIGHT SIDE: SIDEBAR ================= */}
                    <div className="lg:col-span-4 space-y-8">

                        {/* 1. Latest Highlights Card */}
                        <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-[#f0ebde] space-y-6">
                            <div className="space-y-1 pb-3 border-b border-[#f0ebde]">
                                <h3 className="font-serif text-2xl font-base text-[#0b1329]">
                                    Event Categories
                                </h3>
                                <div className="h-[2px] w-10 bg-[#d9983b]" />
                            </div>

                            <div className="space-y-4 divide-y divide-[#f8f5ee]">
                                <button
                                    onClick={() => handleCategoryFilter("FIRM NEWS")}
                                    className="w-full text-left group flex items-center justify-between pt-4 first:pt-0 cursor-pointer"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#fdfaf3] border border-[#f5eddce6] text-[#d9983b]">
                                            <FaFileAlt className="h-8 w-8" />
                                        </div>
                                        <div>
                                            <h4 className="font-serif text-lg font-medium text-[#0b1329] group-hover:text-[#d9983b] transition-colors">
                                                Firm Announcements
                                            </h4>
                                            <p className="text-[13px] text-gray-500 mt-0.5">Stay updated with our latest firm news.</p>
                                        </div>
                                    </div>
                                    <FaArrowRight className="h-3.5 w-3.5 text-gray-400 group-hover:text-[#d9983b] transition-transform group-hover:translate-x-0.5 shrink-0" />
                                </button>

                                <button
                                    onClick={() => handleCategoryFilter("MEDIA COVERAGE")}
                                    className="w-full text-left group flex items-center justify-between pt-4 cursor-pointer"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#fdfaf3] border border-[#f5eddce6] text-[#d9983b]">
                                            <FaLaptop className="h-8 w-8" />
                                        </div>
                                        <div>
                                            <h4 className="font-serif text-lg font-medium text-[#0b1329] group-hover:text-[#d9983b] transition-colors">
                                                Media Coverage
                                            </h4>
                                            <p className="text-[13px] text-gray-500 mt-0.5">See what the media is saying about us.</p>
                                        </div>
                                    </div>
                                    <FaArrowRight className="h-3.5 w-3.5 text-gray-400 group-hover:text-[#d9983b] transition-transform group-hover:translate-x-0.5 shrink-0" />
                                </button>

                                <button
                                    onClick={() => handleCategoryFilter("EVENTS")}
                                    className="w-full text-left group flex items-center justify-between pt-4 cursor-pointer"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#fdfaf3] border border-[#f5eddce6] text-[#d9983b]">
                                            <FaCalendarAlt className="h-8 w-8" />
                                        </div>
                                        <div>
                                            <h4 className="font-serif text-lg font-medium text-[#0b1329] group-hover:text-[#d9983b] transition-colors">
                                                Seminars & Events
                                            </h4>
                                            <p className="text-[13px] text-gray-500 mt-0.5">Explore upcoming and past events.</p>
                                        </div>
                                    </div>
                                    <FaArrowRight className="h-3.5 w-3.5 text-gray-400 group-hover:text-[#d9983b] transition-transform group-hover:translate-x-0.5 shrink-0" />
                                </button>

                                <button
                                    onClick={() => handleCategoryFilter("ACHIEVEMENTS")}
                                    className="w-full text-left group flex items-center justify-between pt-4 cursor-pointer"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#fdfaf3] border border-[#f5eddce6] text-[#d9983b]">
                                            <FaShieldAlt className="h-8 w-8" />
                                        </div>
                                        <div>
                                            <h4 className="font-serif text-lg font-medium text-[#0b1329] group-hover:text-[#d9983b] transition-colors">
                                                Achievements
                                            </h4>
                                            <p className="text-[13px] text-gray-500 mt-0.5">Recognitions that reflect excellence.</p>
                                        </div>
                                    </div>
                                    <FaArrowRight className="h-3.5 w-3.5 text-gray-400 group-hover:text-[#d9983b] transition-transform group-hover:translate-x-0.5 shrink-0" />
                                </button>
                            </div>
                        </div>

                        {/* 2. Media Contact Card */}
                        <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-[#f0ebde] space-y-6">
                            <div className="space-y-1 pb-3 border-b border-[#f0ebde]">
                                <h3 className="font-serif text-2xl font-medium text-[#0b1329]">
                                    Media Contact
                                </h3>
                                <div className="h-[2px] w-10 bg-[#d9983b]" />
                            </div>

                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                For press inquiries and event registrations, reach out to our media relations team.
                            </p>

                            <div className="space-y-3 pt-2">
                                <div className="flex items-center gap-3">
                                    <FaEnvelope className="text-[#d9983b] h-3.5 w-3.5 shrink-0" />
                                    <a href="mailto:events@lawustice.com" className="text-xs sm:text-sm font-medium text-gray-700 hover:text-[#d9983b]">
                                        events@lawustice.com
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaPhoneAlt className="text-[#d9983b] h-3.5 w-3.5 shrink-0" />
                                    <a href="tel:+187574885" className="text-xs sm:text-sm font-medium text-gray-700 hover:text-[#d9983b]">
                                        +1 875 74885
                                    </a>
                                </div>
                            </div>


                            <button className="mt-5 group flex border uppercase p-4 rounded-lg items-center justify-center gap-3 text-sm font-medium hover:text-[#d9983b]">
                                Contact Media Team{" "}
                                <span className="inline-flex items-center justify-center rounded-full border border-[#0b1329]/20 bg-transparent p-1.5 text-[#0b1329] transition-all duration-300 group-hover:border-[#d9983b] group-hover:bg-[#d9983b] group-hover:text-white">
                                    <FaArrowRight className="h-3.5 w-3.5 " />
                                </span>
                            </button>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
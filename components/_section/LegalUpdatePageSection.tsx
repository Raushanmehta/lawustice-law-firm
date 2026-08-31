"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaUser, FaClock, FaArrowRight, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import siteData from "@/data/data.json";
import {
    LegalUpdatesData,
    LegalUpdateItem,
    LegalUpdatePracticeArea,
    LegalUpdatePopularPost,
} from "@/types/sections";

export default function LegalUpdatePageSection() {
    const legalData = siteData.legalUpdates as unknown as LegalUpdatesData;
    const articles: LegalUpdateItem[] = legalData?.items || [];
    const practiceAreas: LegalUpdatePracticeArea[] =
        legalData?.practiceAreas || [
            { name: "All Practice Areas" },
            { name: "Family Law" },
            { name: "Business Law" },
            { name: "Property Law" },
            { name: "Employment Law" },
        ];
    const popularPosts: LegalUpdatePopularPost[] = legalData?.popularPosts || [];

    // Pagination
    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(articles.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentArticles = articles.slice(startIndex, startIndex + itemsPerPage);

    return (
        <main className="min-h-screen text-[#2C2C2C] px-5 py-16 sm:px-10 md:px-16 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* LEFT & CENTER: Article Feed (Spans 2 columns) */}
                <div className="lg:col-span-2 space-y-8">
                    {currentArticles.map((article: LegalUpdateItem, index: number) => (
                        <motion.article
                            key={article.id || article.slug}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                            className="bg-[#FBF9F4] border border-[#e8dfd2] rounded-2xl flex flex-col md:flex-row gap-6 items-center overflow-hidden p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Thumbnail Image */}
                            <Link
                                href={`/legal-updates/${article.slug}`}
                                className="w-full md:w-[320px] h-[220px] sm:h-[240px] flex-shrink-0 bg-[#0b1329] rounded-xl overflow-hidden relative group block"
                            >
                                <Image
                                    src={
                                        article.image ||
                                        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80"
                                    }
                                    alt={article.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 320px"
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </Link>

                            {/* Content Info */}
                            <div className="flex-1 space-y-2.5 p-2">
                                <span className="text-[#C27803] text-xs font-bold tracking-wider uppercase">
                                    {article.category}
                                </span>

                                <h2 className="text-xl md:text-2xl font-serif text-[#1A1A1A] hover:text-[#C27803] transition-colors leading-snug">
                                    <Link href={`/legal-updates/${article.slug}`}>
                                        {article.title}
                                    </Link>
                                </h2>

                                <div className="flex flex-wrap items-center text-xs text-gray-500 gap-y-1 gap-x-4">
                                    <span className="flex items-center gap-1.5">
                                        <FaCalendarAlt className="h-3 w-3 text-[#d9983b]" />
                                        {article.date}
                                    </span>
                                    {article.author && (
                                        <span className="flex items-center gap-1.5">
                                            <FaUser className="h-3 w-3 text-[#d9983b]" />
                                            {article.author}
                                        </span>
                                    )}
                                    {article.readTime && (
                                        <span className="flex items-center gap-1.5">
                                            <FaClock className="h-3 w-3 text-[#d9983b]" />
                                            {article.readTime}
                                        </span>
                                    )}
                                </div>

                                <p className="text-gray-700 text-sm leading-relaxed line-clamp-2">
                                    {article.excerpt || article.summary}
                                </p>

                                <Link
                                    href={`/legal-updates/${article.slug}`}
                                    className="text-xs font-bold text-[#C27803] hover:underline pt-2 inline-flex items-center gap-1.5 cursor-pointer group"
                                >
                                    <span>READ MORE</span>
                                    <FaArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </motion.article>
                    ))}

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex items-center justify-center space-x-2 pt-6">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => {
                                        setCurrentPage(page);
                                        window.scrollTo({ top: 0, behavior: "smooth" });
                                    }}
                                    className={`w-10 h-10 rounded-lg font-semibold text-sm flex items-center justify-center transition-colors cursor-pointer ${currentPage === page
                                            ? "bg-[#0B131D] text-white shadow"
                                            : "bg-[#F3EFE6] hover:bg-gray-200 text-gray-800"
                                        }`}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* RIGHT SIDEBAR (Spans 1 column) */}
                <motion.aside
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="space-y-8"
                >
                    {/* Practice Areas */}
                    <div className="bg-[#FBF9F4] border border-[#e8dfd2] rounded-2xl p-6 shadow-sm">
                        <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4 pb-2 border-b border-[#e8dfd2]">
                            Practice Areas
                        </h3>
                        <ul className="space-y-2">
                            {practiceAreas.map((area, idx) => (
                                <li
                                    key={idx}
                                    className="flex justify-between items-center text-sm py-2 px-3 rounded-lg hover:bg-[#F4EFEB] hover:text-[#C27803] text-gray-800 transition-colors cursor-pointer group"
                                >
                                    <span className="font-medium">{area.name}</span>
                                    <FaChevronRight className="h-3 w-3 text-gray-400 group-hover:text-[#C27803] transition-colors" />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Popular Posts */}
                    <div className="bg-[#FBF9F4] border border-[#e8dfd2] rounded-2xl p-6 shadow-sm">
                        <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4 pb-2 border-b border-[#e8dfd2]">
                            Popular Posts
                        </h3>
                        <div className="space-y-4">
                            {popularPosts.map((post, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start space-x-3 group cursor-pointer pb-3 border-b border-gray-100 last:border-0 last:pb-0"
                                >
                                    <div className="relative w-14 h-14 shrink-0 rounded-md bg-gray-200 overflow-hidden border border-[#e8dfd2]">
                                        <Image
                                            src={
                                                post.image ||
                                                "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=300&q=80"
                                            }
                                            alt={post.title}
                                            fill
                                            className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-sm font-serif text-gray-900 group-hover:text-[#C27803] transition-colors line-clamp-2">
                                            {post.title}
                                        </h4>
                                        <p className="text-[11px] text-gray-500 mt-1">
                                            {post.date}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 pt-4 border-t border-[#e8dfd2] text-center">
                            <Link
                                href="/legal-updates"
                                className="text-xs font-bold text-[#C27803] tracking-wider hover:underline"
                            >
                                VIEW ALL UPDATES →
                            </Link>
                        </div>
                    </div>
                </motion.aside>
            </div>
        </main>
    );
}

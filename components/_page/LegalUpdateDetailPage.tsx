"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaUser, FaClock, FaCheck, FaChevronRight, FaFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import siteData from "@/data/siteData";
import {
    LegalUpdateItem,
    LegalUpdatePracticeArea,
    LegalUpdatePopularPost,
    LegalUpdateDetailPageProps,
} from "@/types/sections";

export default function LegalUpdateDetailPage({
    update,
    practiceAreas,
    popularPosts,
}: Partial<LegalUpdateDetailPageProps> & { update?: LegalUpdateItem }) {
    const currentUpdate: LegalUpdateItem =
        update || (siteData.legalUpdates.items[0] as unknown as LegalUpdateItem);
    const areaList: LegalUpdatePracticeArea[] =
        practiceAreas ||
        (siteData.legalUpdates.practiceAreas as unknown as LegalUpdatePracticeArea[]) || [
            { name: "All Practice Areas" },
            { name: "Family Law" },
            { name: "Business Law" },
            { name: "Property Law" },
            { name: "Employment Law" },
        ];
    const postList: LegalUpdatePopularPost[] =
        popularPosts ||
        (siteData.legalUpdates.popularPosts as unknown as LegalUpdatePopularPost[]) ||
        [];

    const inThisArticleList = currentUpdate.inThisArticle || [];
    const sectionList = currentUpdate.sections || [];

    return (
        <main className="min-h-screen text-[#2C2C2C] px-4 md:px-12 py-12 sm:py-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* LEFT & CENTER: Main Article Content (Spans 2 columns) */}
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="lg:col-span-2 space-y-8"
                >
                    {/* Category Badge & Meta */}
                    <div className="space-y-4">
                        <span className="inline-block bg-[#F4EFEB] text-[#C27803] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-[#e8dfd2]">
                            {currentUpdate.category}
                        </span>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1A1A1A] leading-tight">
                            {currentUpdate.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-gray-500 border-b border-[#e8dfd2] pb-5">
                            <div className="flex items-center gap-2">
                                <FaCalendarAlt className="h-3.5 w-3.5 text-[#d9983b]" />
                                <span>{currentUpdate.date}</span>
                            </div>
                            {currentUpdate.author && (
                                <div className="flex items-center gap-2">
                                    <FaUser className="h-3.5 w-3.5 text-[#d9983b]" />
                                    <span>By {currentUpdate.author}</span>
                                </div>
                            )}
                            {currentUpdate.readTime && (
                                <div className="flex items-center gap-2">
                                    <FaClock className="h-3.5 w-3.5 text-[#d9983b]" />
                                    <span>{currentUpdate.readTime}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="relative w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden shadow-lg bg-[#0B131D] border border-[#e8dfd2]">
                        <Image
                            src={
                                currentUpdate.image ||
                                "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80"
                            }
                            alt={currentUpdate.title}
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                            className="object-cover object-center"
                        />
                    </div>

                    {/* Intro Paragraph */}
                    {(currentUpdate.intro || currentUpdate.excerpt) && (
                        <p className="text-gray-700 leading-relaxed text-base sm:text-lg bg-white p-6 rounded-xl border border-[#f0ebde] shadow-xs">
                            {currentUpdate.intro || currentUpdate.excerpt}
                        </p>
                    )}

                    {/* "In This Article" Navigation Box */}
                    {inThisArticleList.length > 0 && (
                        <div className="bg-[#FBF5EC] border border-[#F0E6D8] rounded-2xl p-6 sm:p-7 shadow-xs my-6">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-[#0b1329] text-[#d9983b] flex items-center justify-center text-sm font-bold">
                                    <FaFileAlt className="h-4 w-4" />
                                </div>
                                <h3 className="text-lg font-serif font-bold text-[#1A1A1A]">
                                    In This Article
                                </h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 text-sm">
                                {inThisArticleList.map((item, idx) => (
                                    <div key={idx} className="flex items-center text-gray-800">
                                        <span className="text-[#C27803] font-bold mr-2.5">
                                            {item.number}
                                        </span>
                                        <span className="font-medium">{item.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Dynamic Sections */}
                    {sectionList.map((section, idx) => (
                        <motion.section
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
                            className="space-y-4 pt-2"
                        >
                            <h2 className="text-2xl font-serif text-[#1A1A1A]">
                                {section.heading}
                            </h2>
                            <p className="text-gray-700 leading-relaxed text-base">
                                {section.content}
                            </p>

                            {/* Optional Quote Box */}
                            {section.quote && (
                                <div className="bg-[#FBF6EE] border-l-4 border-[#D4AF37] p-5 sm:p-6 rounded-r-2xl my-4 shadow-2xs">
                                    <p className="italic font-serif text-gray-900 text-sm sm:text-base leading-relaxed">
                                        &ldquo;{section.quote.text}&rdquo;
                                    </p>
                                    {section.quote.source && (
                                        <p className="text-xs text-[#C27803] mt-2 font-semibold">
                                            – {section.quote.source}
                                        </p>
                                    )}
                                </div>
                            )}

                            {/* Optional Bullet Points */}
                            {section.points && section.points.length > 0 && (
                                <ul className="space-y-2.5 pt-2 pl-1">
                                    {section.points.map((pt, pIdx) => (
                                        <li
                                            key={pIdx}
                                            className="flex items-start space-x-3 text-gray-800"
                                        >
                                            <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#d9983b]/20 text-[#d9983b]">
                                                <FaCheck className="h-2.5 w-2.5 text-[#C27803]" />
                                            </span>
                                            <span className="text-sm sm:text-base font-medium leading-relaxed">
                                                {pt}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* Optional Factor Cards */}
                            {section.factorCards && section.factorCards.length > 0 && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-3">
                                    {section.factorCards.map((factor, fIdx) => (
                                        <div
                                            key={fIdx}
                                            className="bg-[#FBF9F4] border border-[#e8dfd2] rounded-xl p-4 text-center space-y-2 shadow-2xs flex flex-col items-center justify-center"
                                        >
                                            <span className="text-2xl">{factor.icon}</span>
                                            <p className="text-xs font-semibold text-gray-800 leading-snug">
                                                {factor.title}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </motion.section>
                    ))}
                </motion.article>

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
                        <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4 pb-3 border-b border-[#e8dfd2]">
                            Practice Areas
                        </h3>
                        <ul className="space-y-2">
                            {areaList.map((area, idx) => (
                                <li
                                    key={idx}
                                    className="flex justify-between items-center text-sm py-2.5 px-3 rounded-xl hover:bg-[#F4EFEB] hover:text-[#C27803] text-gray-800 transition-colors cursor-pointer group"
                                >
                                    <span className="font-medium">{area.name}</span>
                                    <FaChevronRight className="h-3 w-3 text-gray-400 group-hover:text-[#C27803] transition-colors" />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Popular Posts */}
                    <div className="bg-[#FBF9F4] border border-[#e8dfd2] rounded-2xl p-6 shadow-sm">
                        <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4 pb-3 border-b border-[#e8dfd2]">
                            Popular Posts
                        </h3>
                        <div className="space-y-4">
                            {postList.map((post, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start space-x-3 group cursor-pointer pb-3.5 border-b border-gray-100 last:border-0 last:pb-0"
                                >
                                    <div className="relative w-14 h-14 shrink-0 rounded-lg bg-gray-200 overflow-hidden border border-[#e8dfd2]">
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
                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-sm font-serif text-gray-900 group-hover:text-[#C27803] transition-colors line-clamp-2 leading-snug">
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
                                VIEW ALL POSTS →
                            </Link>
                        </div>
                    </div>
                </motion.aside>
            </div>
        </main>
    );
}
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaClock, FaUser, FaCheck, FaArrowRight, FaTag } from "react-icons/fa";
import { motion } from "framer-motion";
import { BlogPost, BlogCategory, BlogDetailPageProps } from "@/types/sections";
import siteData from "@/data/siteData";

export default function BlogDetailPage({
    post,
    allPosts,
    categories,
}: Partial<BlogDetailPageProps> & { post?: BlogPost }) {
    const activePost: BlogPost = post || (siteData.blog.posts[0] as unknown as BlogPost);
    const postList: BlogPost[] = allPosts || (siteData.blog.posts as unknown as BlogPost[]);
    const categoryList: BlogCategory[] =
        categories || (siteData.blog.categories as unknown as BlogCategory[]) || [
            { name: "Corporate Law", count: 2 },
            { name: "Family Law", count: 2 },
            { name: "Contract Law", count: 2 },
        ];

    // Filter recent posts excluding current post
    const recentPosts = postList.filter((p) => p.slug !== activePost.slug).slice(0, 5);

    // Format date string safely
    const formattedDate =
        activePost.formattedDate ||
        (activePost.date
            ? `${activePost.date.month} ${activePost.date.day}, ${activePost.date.year || "2024"}`
            : "May 20, 2024");

    const quoteText =
        typeof activePost.quote === "string"
            ? activePost.quote
            : activePost.quote?.text;
    const quoteAuthor =
        typeof activePost.quote === "object" ? activePost.quote?.author : null;

    return (
        <main className="min-h-screen  text-[#2C2C2C] px-4 md:px-12 py-12 sm:py-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* LEFT & CENTER: Main Article Content (Spans 2 columns) */}
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="lg:col-span-2 space-y-8"
                >
                    {/* Tag & Category */}
                    <div className="flex items-center gap-3">
                        <span className="inline-block bg-[#F4EFEB] text-[#C27803] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-[#e8dfd2]">
                            {activePost.category}
                        </span>
                        {activePost.tags && activePost.tags[0] && (
                            <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                                <FaTag className="h-2.5 w-2.5 text-[#d9983b]" />
                                {activePost.tags[0]}
                            </span>
                        )}
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif  text-[#1A1A1A] leading-tight">
                        {activePost.title}
                    </h1>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-gray-500 border-b border-[#e8dfd2] pb-5">
                        <div className="flex items-center gap-2">
                            <FaCalendarAlt className="h-3.5 w-3.5 text-[#d9983b]" />
                            <span>{formattedDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaClock className="h-3.5 w-3.5 text-[#d9983b]" />
                            <span>{activePost.readTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaUser className="h-3.5 w-3.5 text-[#d9983b]" />
                            <span>
                                {activePost.author}
                                {activePost.authorRole ? ` (${activePost.authorRole})` : ""}
                            </span>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="relative w-full h-[320px] sm:h-[320px] rounded-2xl overflow-hidden shadow-lg bg-[#0B131D] border border-[#e8dfd2]">
                        <Image
                            src={activePost.image || "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80"}
                            alt={activePost.title}
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                            className="object-cover object-center"
                        />
                    </div>

                    {/* Intro text */}
                    {(activePost.intro || activePost.description) && (
                        <p className="text-gray-700 leading-relaxed text-base sm:text-sm font-normal bg-white p-6 rounded-xl border border-[#f0ebde] shadow-xs">
                            {activePost.intro || activePost.description}
                        </p>
                    )}

                    {/* Dynamic Sections */}
                    {activePost.sections && activePost.sections.length > 0 ? (
                        <div className="space-y-8 pt-2">
                            {activePost.sections.map((section, idx) => (
                                <section key={idx} className="space-y-4">
                                    <h2 className="text-2xl font-serif  text-[#1A1A1A]">
                                        {section.heading}
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-sm">
                                        {section.content}
                                    </p>
                                    {section.points && section.points.length > 0 && (
                                        <ul className="space-y-2.5 pt-2 pl-1">
                                            {section.points.map((pt, pIdx) => (
                                                <li key={pIdx} className="flex items-start space-x-3 text-gray-800">
                                                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#d9983b]/20 text-[#d9983b]">
                                                        <FaCheck className="h-2.5 w-2.5 text-[#C27803]" />
                                                    </span>
                                                    <span className="text-sm sm:tex-sm font-medium leading-relaxed">
                                                        {pt}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </section>
                            ))}
                        </div>
                    ) : null}

                    {/* Highlight Quote Box */}
                    {quoteText && (
                        <div className="bg-[#0B131D] text-white p-6 sm:p-8 rounded-2xl border-l-4 border-[#D4AF37] my-8 shadow-md relative overflow-hidden">
                            <span className="text-[#D4AF37] text-6xl font-serif absolute -top-2 left-3 opacity-30 select-none">
                                &ldquo;
                            </span>
                            <p className="italic text-sm sm:text-sm font-serif relative z-10 pl-6 leading-relaxed text-[#f7eedf]">
                                {quoteText}
                            </p>
                            {quoteAuthor && (
                                <p className="mt-3 text-right text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                                    — {quoteAuthor}
                                </p>
                            )}
                        </div>
                    )}

                    {/* Conclusion */}
                    {activePost.conclusion && (
                        <div className="space-y-3 pt-4 border-t border-[#e8dfd2]">
                            <h3 className="text-2xl font-serif  text-[#1A1A1A]">
                                Key Takeaway & Legal Advice
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-sm sm:text-sm">
                                {activePost.conclusion}
                            </p>
                        </div>
                    )}

                    {/* Tags List */}
                    {activePost.tags && activePost.tags.length > 0 && (
                        <div className="pt-6 border-t border-[#e8dfd2]">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                                Related Topics
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {activePost.tags.map((tag, tIdx) => (
                                    <span
                                        key={tIdx}
                                        className="bg-white border border-[#e8dfd2] text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-lg hover:border-[#d9983b] transition-colors"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </motion.article>

                {/* RIGHT SIDEBAR (Spans 1 column) */}
                <motion.aside
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="space-y-8"
                >
                    {/* Categories Box */}
                    <div className="bg-[#FBF9F4] border border-[#e8dfd2] rounded-2xl p-6 shadow-sm">
                        <h3 className="text-2xl font-serif  text-[#1A1A1A] mb-4 pb-3 border-b border-[#e8dfd2]">
                            Categories
                        </h3>
                        <ul className="space-y-2.5">
                            {categoryList.map((cat, idx) => (
                                <li
                                    key={idx}
                                    className={`flex justify-between items-center text-sm p-4 rounded-md transition-colors cursor-pointer ${cat.name.toLowerCase() === activePost.category.toLowerCase()
                                        ? "bg-[#F4EFEB] font-semibold text-[#C27803] border border-[#d9983b]/30"
                                        : "hover:bg-white text-gray-800"
                                        }`}
                                >
                                    <span>{cat.name}</span>
                                    <span className="bg-white border border-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs font-semibold shadow-2xs">
                                        {cat.count}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Recent Posts Box */}
                    <div className="bg-[#FBF9F4] border border-[#e8dfd2] rounded-2xl p-6 shadow-sm">
                        <h3 className="text-2xl font-serif  text-[#1A1A1A] mb-4 pb-3 border-b border-[#e8dfd2]">
                            Other Articles
                        </h3>
                        <div className="space-y-4">
                            {recentPosts.map((rPost) => {
                                const rDate =
                                    rPost.formattedDate ||
                                    (rPost.date
                                        ? `${rPost.date.month} ${rPost.date.day}, ${rPost.date.year || "2024"}`
                                        : "2024");
                                return (
                                    <Link
                                        key={rPost.id}
                                        href={`/blog/${rPost.slug}`}
                                        className="flex items-start space-x-3 group cursor-pointer pb-3.5 border-b border-gray-100 last:border-0 last:pb-0"
                                    >
                                        <div className="relative w-30 h-30 shrink-0 rounded-lg bg-gray-200 overflow-hidden border border-[#e8dfd2]">
                                            <Image
                                                src={rPost.image || "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80"}
                                                alt={rPost.title}
                                                fill
                                                className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-xl sm:text-xl font-serif  text-gray-900 group-hover:text-[#C27803] transition-colors line-clamp-2 leading-snug">
                                                {rPost.title}
                                            </h4>
                                            <p className="text-sm text-gray-500 mt-1 flex items-center gap-1.5">
                                                <span>{rDate}</span>
                                                <span>•</span>
                                                <span>{rPost.readTime}</span>
                                            </p>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Contact CTA Card */}
                    <div className="relative bg-[#0B131D] text-white rounded-2xl p-7 overflow-hidden shadow-xl border border-[#d9983b]/20">
                        <div className="relative z-10 space-y-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                                Need Counsel?
                            </span>
                            <h3 className="text-xl sm:text-3xl font-serif  tracking-wide leading-tight">
                                Have Legal Questions on This Topic?
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                                Our specialized attorneys provide confidential consultations tailored to your legal situation.
                            </p>
                            <Link
                                href="/book-consultation"
                                className="w-full bg-[#D4AF37] hover:bg-[#c29e2f] text-[#0B131D] font-bold text-xs uppercase tracking-wider px-5 py-3.5 rounded-xl shadow-md transition-colors flex items-center justify-center space-x-2 cursor-pointer"
                            >
                                <span>SCHEDULE CONSULTATION</span>
                                <FaArrowRight className="h-3 w-3" />
                            </Link>
                        </div>
                    </div>
                </motion.aside>
            </div>
        </main>
    );
}

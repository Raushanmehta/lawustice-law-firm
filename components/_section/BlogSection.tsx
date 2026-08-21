"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { User, MessageSquare, ArrowRight, Scale } from "lucide-react";
import { motion } from "framer-motion";
import siteData from "@/data/data.json";
import type { BlogPost } from "@/types";

const { blog } = siteData;

export default function BlogSection(): React.JSX.Element {
    return (
        <section className="relative w-full overflow-hidden bg-[#fdfbf7] py-20 sm:py-24">
            <div className="relative z-10 w-full px-5 sm:px-10 md:px-16 lg:px-20 xl:px-24">
                <div className="mx-auto w-full">
                    {/* ================= SECTION HEADER ================= */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="mx-auto mb-16 max-w-4xl space-y-4 text-center"
                    >
                        {/* Tagline */}
                        <div className="flex items-center justify-center gap-2">
                            <span className="h-px w-8 bg-[#d9983b]" />
                            <span className="text-sm font-semibold uppercase tracking-widest text-[#d9983b]">
                                {blog.tagline}
                            </span>
                            <span className="h-px w-8 bg-[#d9983b]" />
                        </div>

                        {/* Title */}
                        <h2 className="font-serif text-3xl leading-tight sm:text-4xl lg:text-6xl text-[#102033]">
                            {blog.title}
                        </h2>

                        {/* Scale Icon Divider */}
                        <div className="flex items-center justify-center gap-3">
                            <span className="h-px w-12 bg-[#d9983b]/60" />
                            <Scale className="h-6 w-6 text-[#d9983b]" strokeWidth={1.5} />
                            <span className="h-px w-12 bg-[#d9983b]/60" />
                        </div>
                    </motion.div>

                    {/* ================= BLOG CARDS GRID ================= */}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {blog.posts.map((post: BlogPost, index: number) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.12,
                                    ease: "easeOut",
                                }}
                                className="group flex flex-col overflow-hidden rounded-2xl border border-[#e8dfd2] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_35px_rgba(0,0,0,0.1)]"
                            >
                                {/* Image Container */}
                                <div className="relative h-[250px] w-full overflow-hidden bg-slate-900">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                    />

                                    {/* Date Badge */}
                                    <div className="absolute left-5 top-5 z-10 flex min-w-[62px] flex-col items-center justify-center rounded-xl border border-[#e8dfd2] border-b-2 border-b-[#d9983b] bg-white/95 px-3 py-2 text-center shadow-lg backdrop-blur-sm">
                                        <span className=" text-2xl font-bold leading-none text-[#d9983b]">
                                            {post.date.day}
                                        </span>
                                        <span className="mt-1 text-[11px] font-bold uppercase tracking-wider text-slate-700">
                                            {post.date.month}
                                        </span>
                                    </div>
                                </div>

                                {/* Card Body */}
                                <div className="flex flex-1 flex-col p-6 sm:p-7">
                                    {/* Meta Information */}
                                    <div className="flex items-center gap-3 text-xs font-medium text-slate-500">
                                        <span className="inline-flex items-center gap-1.5">
                                            <User className="h-4 w-4 text-[#d9983b]" />
                                            {post.author}
                                        </span>
                                        <span className="text-slate-300">|</span>
                                        <span className="inline-flex items-center gap-1.5">
                                            <MessageSquare className="h-4 w-4 text-[#d9983b]" />
                                            {post.commentsCount}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="mt-4 font-serif text-2xl  leading-snug text-[#102033] transition-colors duration-300 group-hover:text-[#d9983b]">
                                        <Link href={`#post-${post.id}`}>
                                            {post.title}
                                        </Link>
                                    </h3>

                                    {/* Description */}
                                    <p className="mt-3 text-md leading-relaxed text-slate-600">
                                        {post.description}
                                    </p>

                                    {/* Read More Link */}
                                    <div className="mt-auto pt-6">
                                        <Link
                                            href={`#post-${post.id}`}
                                            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#d9983b] transition-all duration-300 hover:text-[#b87d28] hover:gap-3"
                                        >
                                            <span>READ MORE</span>
                                            <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

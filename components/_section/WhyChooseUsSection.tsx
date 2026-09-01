import React from "react";
import { motion } from "framer-motion";
import {
    FaUserTie,
    FaBalanceScale,
    FaClock,
    FaShieldAlt,
    FaHandshake,
    FaLock
} from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import type { WhyChooseUsData } from "@/types";
import Image from "next/image";

interface WhyChooseUsProps {
    data: WhyChooseUsData;
}

const iconMap: Record<string, React.ReactNode> = {
    user: <FaUserTie className="h-6 w-6 text-[#d9983b]" />,
    balance: <FaBalanceScale className="h-6 w-6 text-[#d9983b]" />,
    clock: <FaClock className="h-6 w-6 text-[#d9983b]" />,
    shield: <FaShieldAlt className="h-6 w-6 text-[#d9983b]" />,
    handshake: <FaHandshake className="h-6 w-6 text-[#d9983b]" />,
    lock: <FaLock className="h-6 w-6 text-[#d9983b]" />,
};

export default function WhyChooseUsSection({ data }: WhyChooseUsProps) {
    const { rightImage, features } = data;

    return (
        <section className="relative overflow-hidden bg-[#fdfbf7] px-5 py-16 sm:px-10 sm:py-20 md:px-16 lg:px-20 xl:px-24">
            <div className="mx-auto">

                {/* Main 2-Column Grid (Balanced 6/6 split for a larger image width) */}
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">

                    {/* ================= LEFT SIDE: CONTENT & FEATURES (Col Span 6) ================= */}
                    <div className="flex flex-col lg:col-span-6 space-y-8 ">

                        {/* Section Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="space-y-4 text-center"
                        >
                            {/* Small Upper Title with Horizontal Rules */}
                            <div className="flex items-center justify-center gap-2">
                                <span className="h-px w-8 bg-[#d9983b]" />
                                <span className="text-sm font-semibold uppercase tracking-widest text-[#d9983b]">
                                    {data.tagline}
                                </span>
                                <span className="h-px w-8 bg-[#d9983b]" />
                            </div>

                            {/* Main Heading */}
                            <h2 className="font-serif text-3xl font-normal leading-[1.15] tracking-tight text-black sm:text-5xl md:text-5xl lg:text-6xl">
                                {data.title}
                            </h2>

                            {/* Law Icon Divider */}
                            <div className="flex items-center justify-center gap-3 pt-1">
                                <span className="h-px w-16 bg-[#d9983b]" />
                                <GoLaw className="h-6 w-6 text-[#d9983b]" />
                                <span className="h-px w-16 bg-[#d9983b]" />
                            </div>

                            {/* Introductory Description */}
                            <p className="max-w-xl text-left text-sm leading-relaxed sm:text-base text-slate-800">
                                {data.description}
                            </p>
                        </motion.div>

                        {/* Features Grid (3 Rows x 2 Columns) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6 pt-2">
                            {features.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.15 }}
                                    transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
                                    className="flex items-start gap-4"
                                >
                                    {/* Circular Dark Icon Container */}
                                    <div className="flex border-2 h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#0b1329] border border-[#d9983b] shadow-md">
                                        {iconMap[item.icon]}
                                    </div>

                                    {/* Feature Text */}
                                    <div className="space-y-1">
                                        <h3 className="font-serif text-lg font-medium text-[#0b1329]">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm leading-relaxed text-gray-600">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                    </div>

                    {/* ================= RIGHT SIDE: LAW BOOKS & SCALES IMAGE (Col Span 6 - Increased Width) ================= */}
                    <motion.div
                        initial={{ opacity: 0, x: 32 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-6"
                    >
                        <div className="relative overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.18)] border border-[#f0ebde]">
                            <Image
                                src={rightImage}
                                alt="Law Scales and Books"
                                className="h-[680px] w-full object-cover sm:h-[800px]"
                                height={800}
                                width={1200}
                            />
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
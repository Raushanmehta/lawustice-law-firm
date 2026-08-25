"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import type { ServiceDetailChooseUsData } from "@/types";

interface WhyChooseUsProps {
    data: ServiceDetailChooseUsData;
}

export default function ServicesChooseusSection({ data }: WhyChooseUsProps) {
    const { imageSrc, smallHeading, titlePart1, titlePart2, items } = data;
    return (
        <section className="relative overflow-hidden bg-[#070f22] px-5 py-16 sm:px-10 sm:py-20 md:px-16 lg:px-20 xl:px-24">
            <div className="mx-auto">
                
                {/* ================= MAIN 2-COLUMN GRID ================= */}
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
                    
                    {/* ================= LEFT SIDE: COURTROOM IMAGE (Col Span 6) ================= */}
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.75, ease: "easeOut" }}
                        className="lg:col-span-6"
                    >
                        <div className="relative h-[320px] sm:h-[400px] lg:h-[320px] w-full overflow-hidden rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-[#1b2b4c]">
                            <Image
                                src={imageSrc}
                                alt="Courtroom and Scales of Justice"
                                fill
                                priority
                                className="object-cover object-center"
                            />
                        </div>
                    </motion.div>

                    {/* ================= RIGHT SIDE: CONTENT & CHECKLIST (Col Span 6) ================= */}
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
                        className="flex flex-col lg:col-span-6 space-y-6"
                    >
                        
                        {/* Section Header */}
                        <div className="space-y-3">
                            <span className="text-sm font-semibold uppercase tracking-widest text-[#d9983b]">
                                {smallHeading}
                            </span>

                            <h2 className="font-serif min-w-xl text-3xl sm:text-3xl lg:text-4xl text-white leading-tight">
                                {titlePart1} <br />{" "}
                                <span className="text-[#d9983b]">{titlePart2}</span>
                            </h2>
                        </div>

                        {/* Checklist Items */}
                        <div className="space-y-4 pt-2">
                            {items.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
                                    className="flex items-center gap-4"
                                >
                                    {/* Golden Checkmark Icon Container */}
                                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#d9983b] text-[#070f22]">
                                        <FaCheck className="h-3 w-3 stroke-[3]" />
                                    </div>
                                    
                                    {/* Item Text */}
                                    <p className="text-sm sm:text-base text-gray-200 font-base">
                                        {item.text}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
}
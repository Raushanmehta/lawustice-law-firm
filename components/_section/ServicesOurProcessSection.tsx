"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { 
    FaSearch, 
    FaFileAlt, 
    FaBalanceScale, 
    FaShieldAlt, 
    FaPlus, 
    FaMinus, 
    FaArrowRight 
} from "react-icons/fa";
import type { ServiceDetailProcessData } from "@/types";

interface OurProcessAndFaqProps {
    data: ServiceDetailProcessData;
}

export default function ServiceOurProcessSection({ data }: OurProcessAndFaqProps) {
    const { steps: processSteps, faqs, practiceAreas } = data;
    const processIcons: Record<string, React.ReactNode> = {
        search: <FaSearch className="h-6 w-6 text-[#d9983b]" />,
        file: <FaFileAlt className="h-6 w-6 text-[#d9983b]" />,
        balance: <FaBalanceScale className="h-6 w-6 text-[#d9983b]" />,
        shield: <FaShieldAlt className="h-6 w-6 text-[#d9983b]" />,
    };
    // State to track open FAQ accordion item (default first item open)
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <section className="relative bg-[#fdfbf7] px-5 py-16 sm:px-10 sm:py-20 md:px-16 lg:px-20 xl:px-24">
            <div className="mx-auto space-y-20">
                
                {/* ================= PART 1: OUR PROCESS SECTION ================= */}
                <div className="space-y-12">
                    
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="mx-auto max-w-2xl text-center space-y-3"
                    >
                        <span className="text-xs font-semibold uppercase tracking-widest text-[#d9983b]">
                            {data.processLabel}
                        </span>
                        <h2 className="font-serif text-3xl sm:text-3xl lg:text-4xl text-[#0b1329]">
                            {data.processTitle} <span className="text-[#d9983b]">{data.processHighlight}</span>
                        </h2>
                    </motion.div>

                    {/* 4-Step Timeline Grid with Dotted Connectors */}
                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 relative">
                        {processSteps.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
                                className="relative flex flex-col items-center text-center group"
                            >
                                
                                {/* Connecting Dotted Line (Hidden on mobile and last item) */}
                                {index < processSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] border-t-2 border-dotted border-[#d9983b]/50 z-0" />
                                )}

                                {/* Circular Glowing Icon */}
                                <div className="relative z-10 mb-6 flex h-18 w-18 items-center justify-center rounded-full bg-white border border-[#f5eddce6] shadow-[0_10px_25px_rgba(217,152,59,0.15)] group-hover:scale-105 transition-transform duration-300">
                                    {processIcons[item.icon]}
                                </div>

                                {/* Step Content */}
                                <div className="space-y-2 relative z-10">
                                    <span className="text-sm font-semibold uppercase tracking-wider text-[#d9983b]">
                                        {item.step}
                                    </span>
                                    <h3 className="font-serif text-xl text-[#0b1329]">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm leading-relaxed text-gray-600 max-w-xs">
                                        {item.description}
                                    </p>
                                </div>

                            </motion.div>
                        ))}
                    </div>

                </div>

                {/* Horizontal Divider Line */}
                <div className="h-px w-full bg-[#f0ebde]" />

                {/* ================= PART 2: FAQs & RELATED PRACTICE AREAS ================= */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* ================= LEFT: FAQS ACCORDION (Col Span 7) ================= */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="lg:col-span-7 space-y-6"
                    >
                        
                        {/* Section Header */}
                        <div className="space-y-2">
                            <span className="text-xs font-semibold uppercase tracking-widest text-[#d9983b]">
                                {data.faqsLabel}
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl text-[#0b1329]">
                                {data.faqsTitle} <span className="text-[#d9983b]">{data.faqsHighlight}</span>
                            </h2>
                        </div>

                        {/* Accordion List */}
                        <div className="space-y-4 pt-2">
                            {faqs.map((faq, index) => {
                                const isOpen = openFaqIndex === index;
                                return (
                                    <div 
                                        key={index} 
                                        className="rounded-xl bg-white border border-[#f0ebde] overflow-hidden transition-all duration-300"
                                    >
                                        {/* Question Header Button */}
                                        <button
                                            onClick={() => toggleFaq(index)}
                                            className="flex w-full items-center justify-between p-3 text-left  text-md text-[#0b1329] transition-colors hover:text-[#d9983b]"
                                        >
                                            <span>{faq.question}</span>
                                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fdfaf3] border border-[#f5eddce6] text-[#d9983b]">
                                                {isOpen ? <FaMinus className="h-3.5 w-3.5" /> : <FaPlus className="h-3.5 w-3.5" />}
                                            </span>
                                        </button>

                                        {/* Answer Content */}
                                        <AnimatePresence initial={false}>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="border-t border-[#f8f5ee] px-5 pb-5 pt-4 text-xs leading-relaxed text-gray-600 sm:text-sm">
                                                        {faq.answer}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>

                    </motion.div>

                    {/* ================= RIGHT: RELATED PRACTICE AREAS CARD (Col Span 5) ================= */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                        className="lg:col-span-5 rounded-2xl bg-white p-8 border border-[#f0ebde] shadow-[0_10px_30px_rgba(0,0,0,0.05)] relative overflow-hidden"
                    >
                        
                        {/* Subtle background decorative watermark image container if needed */}
                        <div className="space-y-6 relative z-10">
                            
                            {/* Card Title */}
                            <div>
                                <h3 className="font-serif text-4xl text-[#0b1329]">
                                    {data.relatedTitle}
                                </h3>
                                <div className="mt-3 h-[2px] w-12 bg-[#d9983b]" />
                            </div>

                            {/* Practice Areas Links List */}
                            <div className="divide-y divide-[#f0ebde]">
                                {practiceAreas.map((area, index) => (
                                    <Link
                                        key={index}
                                        href={area.url}
                                        className="group flex items-center justify-between py-3 text-sm sm:text-base font-sm text-gray-700 transition-colors hover:text-[#d9983b]"
                                    >
                                        <span>{area.title}</span>
                                        <FaArrowRight className="h-3.5 w-3.5 text-[#d9983b] transition-transform duration-300 group-hover:translate-x-1" />
                                    </Link>
                                ))}
                            </div>

                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
}
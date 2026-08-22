import React from "react";
import { motion } from "framer-motion";
import { 
    FaComments, 
    FaSearch, 
    FaFileAlt, 
    FaUserTie, 
    FaShieldAlt, 
    FaChevronRight 
} from "react-icons/fa";
import type { OurApproachData } from "@/types";

interface OurApproachProps {
    data: OurApproachData;
}

const iconMap: Record<string, React.ReactNode> = {
    comments: <FaComments className="h-6 w-6 text-[#d9983b]" />,
    search: <FaSearch className="h-6 w-6 text-[#d9983b]" />,
    file: <FaFileAlt className="h-6 w-6 text-[#d9983b]" />,
    user: <FaUserTie className="h-6 w-6 text-[#d9983b]" />,
    shield: <FaShieldAlt className="h-6 w-6 text-[#d9983b]" />,
};

export default function OurApproachSection({ data }: OurApproachProps) {
    const { titlePart1, titlePart2, subtitle, steps } = data;

    return (
        <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-10 sm:py-20 md:px-16 lg:px-20 xl:px-24">
            <div className="mx-auto max-w-7xl">
                
                {/* ================= SECTION HEADER ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="mx-auto mb-16 max-w-2xl space-y-3 text-center"
                >
                    <h2 className="font-serif text-4xl sm:text-5xl text-[#0b1329]">
                        {titlePart1}{" "}
                        <span className="font-serif text-[#d9983b]">{titlePart2}</span>
                    </h2>
                    <p className="text-sm sm:text-base leading-relaxed text-gray-600">
                        {subtitle}
                    </p>
                </motion.div>

                {/* ================= STEPS GRID WITH ARROWS ================= */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-5 items-stretch relative">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 42 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
                            whileHover={{ y: -8 }}
                            className="relative flex flex-col items-center"
                        >
                            
                            {/* Card Container */}
                            <div className="relative flex h-full w-full flex-col items-center justify-between rounded-xl border border-[#f0ebde] bg-white p-6 pt-12 text-center shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-[0_18px_35px_rgba(0,0,0,0.1)]">
                                
                                {/* Floating Circular Icon at Top */}
                                <div className="absolute -top-7 flex h-16 w-16 text-5xl items-center justify-center rounded-full bg-[#fdfaf3] border border-[#f5eddce6] shadow-sm">
                                    {iconMap[step.icon]}
                                </div>

                                {/* Content Block */}
                                <div className="space-y-3 w-full mt-2">
                                    {/* Step Number */}
                                    <span className="text-lg font-semibold tracking-wider text-[#d9983b]">
                                        {step.number}
                                    </span>

                                    {/* Title with Golden Underline */}
                                    <div className="flex flex-col items-center">
                                        <h3 className="font-serif text-xl sm:text-2xl text-[#0b1329]">
                                            {step.title}
                                        </h3>
                                        <div className="mt-2 h-[2px] w-8 bg-[#d9983b]" />
                                    </div>

                                    {/* Description */}
                                    <p className="text-md sm:text-md leading-relaxed text-gray-600 pt-1">
                                        {step.description}
                                    </p>
                                </div>
                            </div>

                            {/* Arrow Indicator between cards (Desktop view only, hides on last item) */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 text-[#d9983b] opacity-80">
                                    <FaChevronRight className="h-5 w-5" />
                                </div>
                            )}

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
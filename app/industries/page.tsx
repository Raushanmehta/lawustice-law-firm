"use client"
import IndustrieCard from "@/components/IndustrieCard";
import PageTopSection from "@/components/_page/PageTopSection";
import data from "@/data/data.json";
import { motion } from "framer-motion";
import { Scale } from "lucide-react";

export default function IndustriesPage() {
    const industries = data.industries;

    return (
        <div className="min-h-screen bg-[#fdfbf7]">
            {/* ================= PAGE TOP ================= */}
            <PageTopSection title="Industries" />

            {/* ================= INDUSTRIES SECTION ================= */}
            <section className="relative z-10 w-full px-5 py-16 sm:px-10 sm:py-20 md:px-16 lg:px-20 xl:px-24">
                <div className="mx-auto">

                    {/* ================= SECTION HEADER ================= */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.65, ease: "easeOut" }}
                        className="mx-auto mb-14 max-w-4xl space-y-5 text-center"
                    >

                        {/* Small Heading */}
                        <div className="flex items-center justify-center gap-3">
                            <span className="h-px w-8 bg-[#d9983b]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d9983b] sm:text-sm">
                                {industries.smallHeading}
                            </span>

                            <span className="h-px w-8 bg-[#d9983b]" />
                        </div>

                        {/* Main Heading */}
                        <h2 className="font-serif text-3xl w-full font-normal leading-[1.15] tracking-tight text-[#0b1329] sm:text-5xl md:text-5xl lg:text-6xl">
                            {industries.title}{" "}
                            <span className="text-[#d9983b]">
                                {industries.highlight}
                            </span>
                        </h2>

                        {/* Decorative Divider */}
                        <div className="flex items-center justify-center gap-3">
                            <span className="h-px w-12 bg-[#d9983b]/60" />

                            <Scale
                                className="h-6 w-6 text-[#d9983b]"
                                strokeWidth={1.5}
                            />

                            <span className="h-px w-12 bg-[#d9983b]/60" />
                        </div>

                        {/* Description */}
                        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
                            {industries.description}
                        </p>
                    </motion.div>

                    {/* ================= INDUSTRIES CARDS ================= */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: { staggerChildren: 0.1 },
                            },
                        }}
                        className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4"
                    >
                        {industries.items.map((industry) => (
                            <motion.div
                                key={industry.id}
                                variants={{
                                    hidden: { opacity: 0, y: 28 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{ duration: 0.55, ease: "easeOut" }}
                            >
                                <IndustrieCard
                                    title={industry.title}
                                    description={industry.description}
                                    imageSrc={industry.image}
                                    linkUrl={industry.linkUrl}
                                />
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </section>
        </div>
    );
}
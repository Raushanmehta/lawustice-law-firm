"use client";

import TestimonialCard from "@/components/TestimonialCard";
import PageTopSection from "@/components/_page/PageTopSection";
import siteData from "@/data/siteData";
import { motion } from "framer-motion";

const { testimonials } = siteData;

export default function TestimonialsPage() {
    return (
        <div>
            <PageTopSection
                title={testimonials.title}

            />
            <main className="bg-white px-5 py-16 sm:px-10 sm:py-20 md:px-16 lg:px-20 xl:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.65, ease: "easeOut" }}
                    className="mx-auto mb-16 max-w-4xl space-y-4 text-center"
                >

                    {/* Main Heading */}
                    <h2 className="font-serif text-3xl font-normal leading-[1.15] tracking-tight text-[#0b1329] sm:text-5xl md:text-5xl lg:text-6xl">
                        {testimonials.title}
                    </h2>
                    <div className="mb-4 flex items-center justify-center gap-3">
                        <span className="h-px w-12 bg-gradient-to-r from-transparent via-[#d99a32] to-[#d99a32] sm:w-16" />
                        <span className="h-2 w-2 rotate-45 bg-[#e4a33b]" />
                        <span className="h-px w-12 bg-gradient-to-l from-transparent via-[#d99a32] to-transparent sm:w-16" />
                    </div>
                    <p className="mx-auto max-w-xl text-sm leading-relaxed sm:text-base text-slate-800">
                        {testimonials.description}
                    </p>
                </motion.div>
                <TestimonialCard data={testimonials} />
            </main>
        </div>
    );
}
"use client";

import { motion } from "framer-motion";
import { GoLaw } from "react-icons/go";
import PageTopSection from "@/components/PageTopSection";
import TeamPageCard from "@/components/TeamPageCard";

export default function TeamPage() {
    return (
        <div>
            <PageTopSection title="Our Team" />

            <div className="relative z-10 w-full px-5 sm:px-10 md:px-16 lg:px-20 xl:px-24">

                {/* ================= SECTION HEADER ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                        duration: 0.7,
                        ease: "easeOut",
                    }}
                    className="mx-auto mb-16 max-w-4xl space-y-4 text-center"
                >
                    {/* Small Heading */}
                    <div className="flex items-center justify-center gap-2">
                        <span className="text-sm font-semibold uppercase tracking-widest text-[#d9983b]">
                            Meet Our Team
                        </span>
                    </div>

                    {/* Law Icon */}
                    <div className="flex items-center justify-center">
                        <span className="h-px w-8 bg-[#d9983b]" />
                        <GoLaw className="h-7 w-7 text-[#d9983b]" />
                        <span className="h-px w-8 bg-[#d9983b]" />
                    </div>

                    {/* Main Heading */}
                    <h2 className="font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
                        Dedicated Lawyers. {""}

                        <span className="font-serif text-[#d9983b]">
                            Trusted Advisors.
                        </span>
                    </h2>


                    <p className="mx-auto max-w-xl text-lg font-base leading-relaxed text-gray-600 sm:text-ms">
                        Our Team of skilled attornerys is committed to providing exceptional legal representation across
                        a wide range of pratices area.
                    </p>
                </motion.div>

                {/* ================= TEAM CARDS ================= */}
                <div className="grid grid-cols-1 gap-6 pb-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {[1, 2, 3, 4].map((index) => (
                        <TeamPageCard key={index} />
                    ))}
                </div>
            </div>


        </div>
    );
}
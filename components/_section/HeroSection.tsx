"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import siteData from "@/data/data.json";

const { hero } = siteData;

export default function HeroSection() {
    return (
        <section className="relative w-full overflow-hidden bg-[#031224]">
            {/* ================= BACKGROUND IMAGE (60% ON RIGHT) ================= */}
            <div className="absolute inset-y-0 right-0 w-full lg:w-[60%]">
                <Image
                    src={hero.image}
                    alt="Law Justice"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center"
                />
                {/* ================= DARK OVERLAY / GRADIENT ================= */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#031224] via-[#031224]/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#031224] via-transparent to-transparent lg:hidden" />
            </div>

            {/* ================= HERO CONTENT ================= */}
            <div className="relative z-10 flex min-h-screen items-center">
                <div className="mx-auto w-full pb-14 pt-32 px-5 sm:px-10 sm:pb-20 sm:pt-40 md:px-16 lg:px-20 xl:px-24 lg:pt-44">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-xl lg:max-w-2xl"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="mb-6 inline-block rounded-sm border border-[#a38043]/40 bg-[#a38043]/30 px-4 py-1.5 backdrop-blur-sm"
                        >
                            <span className="text-xs sm:text-sm font-medium tracking-wide text-[#f3cc77]">
                                {hero.badge}
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="font-serif text-3xl font-normal leading-[1.15] tracking-tight text-white sm:text-5xl md:text-5xl lg:text-6xl"
                        >
                            {hero.titleLine1}
                            <br />
                            {hero.titleLine2}
                            <br />
                            <span className="font-serif text-[#e2a83e]">
                                {hero.highlight}
                            </span>
                        </motion.h1>

                        {/* Gold Line */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mt-7 h-[2px] w-16 origin-left bg-[#e2a83e]"
                        />

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="mt-6 max-w-xl text-sm font-base leading-7 text-slate-300 sm:text-lg sm:leading-8"
                        >
                            {hero.description}
                        </motion.p>

                        {/* Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.55 }}
                            className="mt-8"
                        >
                            <Link
                                href={hero.buttonLink}
                                className="inline-flex items-center gap-2 rounded-md bg-[#e2a83e] px-7 py-3.5 font-semibold text-[#0d131a] transition-all duration-200 hover:bg-[#c99230] hover:shadow-lg hover:shadow-[#e2a83e]/20"
                            >
                                <span>{hero.buttonText}</span>
                                <ArrowRight className="h-5 w-5" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { Scale, Gavel, ArrowRight, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import siteData from "@/data/data.json";

// Map icon string → Lucide component
const iconMap: Record<string, LucideIcon> = {
    Scale,
    Gavel,
};

const { about } = siteData;

export default function AboutSection() {
    return (
        <section className="w-full bg-[#F8F4F3] px-5 py-14 sm:px-10 sm:py-20 md:px-16 lg:px-20 xl:px-24">
            <div className="mx-auto grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
                {/* Left Column: Image Container */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative h-[340px] sm:h-[460px] lg:h-full lg:min-h-[620px] w-full overflow-hidden rounded-2xl shadow-xl"
                >
                    <Image
                        src={about.image}
                        alt="Statue of Lady Justice"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                        className="object-cover object-center"
                    />
                </motion.div>

                {/* Right Column: Content with staggered Fade-Up */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6"
                >
                    {/* Subheading / Tag */}
                    <div className="flex items-center gap-2">
                        <span className="h-[2px] w-4 bg-[#d9983b]" />
                        <span className="text-sm font-semibold uppercase tracking-widest text-[#d9983b]">
                            {about.tagline}
                        </span>
                    </div>

                    {/* Main Title */}
                    <h2 className="font-serif  text-3xl font-normal leading-[1.15] tracking-tight sm:text-5xl md:text-5xl lg:text-6xl">
                        {about.title}{" "}
                        <span className="font-serif text-[#d9983b]">
                            {about.highlight}
                        </span>
                    </h2>

                    {/* Accent Line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="h-[2px] w-12 origin-left bg-[#d9983b]"
                    />

                    {/* Description Paragraph */}
                    <p className="text-sm leading-relaxed sm:text-base text-slate-800">
                        {about.description}
                    </p>

                    {/* Feature List */}
                    <div className="space-y-6 pt-2">
                        {about.features.map((feat, index) => {
                            const IconComponent = iconMap[feat.icon] ?? Scale;
                            return (
                                <motion.div
                                    key={feat.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.3 + index * 0.15,
                                    }}
                                    className="flex items-start gap-5"
                                >
                                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-[#ece4d6] bg-[#f7f3eb] transition-transform duration-300 hover:scale-105">
                                        <IconComponent className="h-8 w-8 text-[#d9983b]" />
                                    </div>
                                    <div className="space-y-1 border-l-2 border-slate-200 pl-4 max-w-sm">
                                        <h3 className="font-serif text-3xl font-medium text-[#0d131a]">
                                            {feat.title}
                                        </h3>
                                        <div className="my-1 h-[1.5px] w-6 bg-[#d9983b]" />
                                        <p className="text-sm leading-relaxed sm:text-base text-slate-800">
                                            {feat.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Call-to-Action Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="pt-4"
                    >
                        <Link
                            href={about.buttonLink}
                            className="inline-flex items-center gap-3 rounded-sm bg-[#d9983b] px-6 py-3.5 text-xs font-medium uppercase tracking-wider text-white transition-all duration-200 hover:bg-[#c2842c] hover:shadow-lg hover:shadow-[#d9983b]/20 sm:text-sm"
                        >
                            <span>{about.buttonText}</span>
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
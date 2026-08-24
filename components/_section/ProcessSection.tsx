"use client";

import Image from "next/image";
import { MessageSquare, FileSearch, Scale, ShieldCheck, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import siteData from "@/data/data.json";

// Map icon string → Lucide component
const iconMap: Record<string, LucideIcon> = {
    MessageSquare,
    FileSearch,
    Scale,
    ShieldCheck,
};

const { process } = siteData;

export default function ProcessSection(): React.JSX.Element {
    return (
        <section className="w-full bg-[#fcfbfa] px-5 py-14 sm:px-10 sm:py-20 md:px-16 lg:px-20 xl:px-24">
            <div className="mx-auto w-full">
                {/* ================= HEADER ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="mx-auto mb-8 max-w-3xl space-y-4 text-center sm:mb-10"
                >
                    <h2 className="font-serif text-3xl font-normal leading-[1.15] tracking-tight  sm:text-5xl md:text-5xl lg:text-6xl">
                        {process.title} <br /> Focused On{" "}
                        <span className="font-serif text-[#d9983b]">
                            {process.highlight}
                        </span>
                    </h2>

                    <div className="mx-auto h-[2px] w-12 bg-[#d9983b]" />

                    <p className="mx-auto max-w-xl text-lg font-base leading-relaxed text-gray-600 sm:text-ms">
                        {process.description}
                    </p>
                </motion.div>

                {/* ================= PROCESS GRID ================= */}
                <div className="relative grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                    {/* ================= DOTTED CONNECTING LINE ================= */}
                    <div
                        className="
                            pointer-events-none
                            absolute
                            left-[12%]
                            right-[12%]
                            top-[70px]
                            hidden
                            border-t-2
                            border-dashed
                            border-[#d9983b]/40
                            lg:block
                        "
                    />

                    {process.steps.map((item, index) => {
                        const IconComponent = iconMap[item.icon] ?? Scale;

                        return (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.65,
                                    delay: index * 0.15,
                                    ease: "easeOut",
                                }}
                                whileHover={{ y: -6 }}
                                className="group relative flex flex-col items-center text-center"
                            >
                                {/* ================= STEP + ICON ================= */}
                                <div className="relative z-10 mb-6 flex w-full flex-col items-center">
                                    <span className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d9983b]">
                                        {item.step}
                                    </span>

                                    {/* Bigger Icon */}
                                    <div
                                        className="
                                            flex
                                            h-20
                                            w-20
                                            items-center
                                            justify-center
                                            rounded-full
                                            
                                            bg-white
                                            text-[#d9983b]
                                            shadow-md
                                            transition-all
                                            duration-300
                                            group-hover:border-[#d9983b]
                                            group-hover:bg-[#d9983b]
                                            group-hover:text-white
                                            group-hover:shadow-md
                                        "
                                    >
                                        <IconComponent className="h-12 w-12" />
                                    </div>
                                </div>

                                {/* ================= IMAGE ================= */}
                                <div className="relative mb-6 h-44 w-full overflow-hidden rounded-lg bg-slate-200 shadow-md sm:h-48 border-b-3 border-[#d9983b]">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />

                                    {/* Image Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                </div>

                                {/* ================= CONTENT ================= */}
                                <div className="px-2">
                                    <h3 className="mb-3 font-serif text-2xl font-medium text-[#0d131a] sm:text-2xl">
                                        {item.title}
                                    </h3>

                                    <div className="mx-auto mb-4 h-px w-10 bg-[#d9983b]" />

                                    <p className="text-md font-base leading-relaxed text-slate-600 sm:text-md">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
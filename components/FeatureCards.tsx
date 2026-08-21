"use client";

import Image from "next/image";
import { Scale, Handshake, ShieldCheck, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import siteData from "@/data/data.json";

// Map icon string → Lucide component
const iconMap: Record<string, LucideIcon> = {
    Scale,
    Handshake,
    ShieldCheck,
};

const { featureCards } = siteData;

export default function FeatureCards() {
    return (
        <section className="relative z-10 mx-auto w-full px-5 py-8 sm:px-10 md:px-16 lg:px-20 xl:px-24 lg:py-10">
            <div className="mx-auto grid w-full grid-cols-1 gap-6 md:grid-cols-3">
                {featureCards.map((card, index) => {
                    const IconComponent = iconMap[card.icon] ?? Scale;
                    const isGold = card.variant === "gold";

                    return (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.65,
                                delay: index * 0.15,
                                ease: "easeOut",
                            }}
                            whileHover={{ y: -6 }}
                            className={`relative flex min-h-[300px] sm:min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl transition-shadow duration-300 hover:shadow-2xl ${isGold
                                ? "bg-[#e2a038] text-[#1c1c1c]"
                                : "bg-[#122033] text-white"
                                }`}
                        >
                            {/* Card Background Image Overlay */}
                            <div className="pointer-events-none absolute inset-0 z-0 opacity-5">
                                <Image
                                    src={card.bgImage}
                                    alt=""
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover"
                                />
                            </div>

                            {/* Main Content */}
                            <div className="relative z-10 space-y-6">
                                {/* Icon Wrapper */}
                                <motion.div
                                    whileHover={{ rotate: 5, scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                    className={`flex h-20 w-20 items-center justify-center rounded-full border-2 ${isGold
                                        ? "border-transparent bg-white text-[#e2a038]"
                                        : "border-[#e2a038] bg-transparent text-[#e2a038]"
                                        }`}
                                >
                                    <IconComponent className="h-8 w-8" />
                                </motion.div>

                                {/* Title */}
                                <h3 className="whitespace-pre-line font-serif text-2xl font-medium leading-tight sm:text-3xl">
                                    {card.title}
                                </h3>

                                {/* Divider Line */}
                                <div
                                    className={`h-[2px] w-10 ${isGold ? "bg-[#1c1c1c]" : "bg-[#e2a038]"
                                        }`}
                                />

                                {/* Description */}
                                <p
                                    className={`text-sm leading-relaxed sm:text-base ${isGold
                                        ? "text-[#2b2b2b]"
                                        : "text-slate-300"
                                        }`}
                                >
                                    {card.description}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
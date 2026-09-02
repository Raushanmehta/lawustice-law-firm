"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Scale, FileText, Gavel, Users, Building2, Landmark, ShieldCheck, Briefcase, ArrowRight, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import siteData from "@/data/siteData";
import type { ServicesPageData } from "@/types";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";

// Map icon string → Lucide component
const iconMap: Record<string, LucideIcon> = {
    Scale,
    FileText,
    Gavel,
    Users,
    Building2,
    Landmark,
    ShieldCheck,
    Briefcase,
};

const { services } = siteData;
const servicesData = services as ServicesPageData;

export default function ServicesSection() {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (!api) return;

        const syncCarouselState = () => {
            setCount(api.scrollSnapList().length);
            setCurrent(api.selectedScrollSnap());
        };

        api.on("select", syncCarouselState);
        queueMicrotask(syncCarouselState);

        // Auto-play interval (slides every 3 seconds)
        const timer = setInterval(() => {
            api.scrollNext();
        }, 3000);

        return () => {
            clearInterval(timer);
            api.off("select", syncCarouselState);
        };
    }, [api]);

    return (
        <section className="relative w-full overflow-hidden bg-[#0b1118] py-20 text-white sm:py-24">
            {/* ================= TOP BACKGROUND IMAGE ================= */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px]">
                <Image
                    src={servicesData.bgImage}
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                />

                {/* Center Full White Circle Radial Gradient Overlay (Brighter & Wider) */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff_0%,_#ffffff_45%,_rgba(255,255,255,0.9)_65%,_transparent_85%)]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0b1118]" />
            </div>

            {/* ================= CONTENT ================= */}
            <div className="relative z-10 w-full px-5 sm:px-10 md:px-16 lg:px-20 xl:px-24">
                {/* ================= SECTION HEADER ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="mx-auto mb-16 max-w-4xl space-y-4 text-center"
                >
                    {/* Small Heading */}
                    <div className="flex items-center justify-center gap-2">
                        <span className="h-px w-8 bg-[#d9983b]" />
                        <span className="text-sm font-semibold uppercase tracking-widest text-[#d9983b]">
                            {servicesData.tagline}
                        </span>
                        <span className="h-px w-8 bg-[#d9983b]" />
                    </div>

                    {/* Main Heading */}
                    <h2 className="font-serif text-3xl font-normal leading-[1.15] tracking-tight text-black sm:text-5xl md:text-5xl lg:text-6xl">
                        {servicesData.title}
                        <br />
                        {servicesData.titleSuffix}{" "}
                        <span className="font-serif font-base text-[#d9983b]">
                            {servicesData.highlight}
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="mx-auto max-w-xl text-sm leading-relaxed sm:text-base text-slate-800">
                        {servicesData.description}
                    </p>
                </motion.div>

                {/* ================= SHADCN CAROUSEL (LEFT TO RIGHT FLOW) ================= */}
                <div className="relative mx-auto w-full ">
                    <Carousel
                        setApi={setApi}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4 sm:-ml-6 py-4">
                            {servicesData.items.map((service) => {
                                const IconComponent = iconMap[service.icon] ?? Scale;

                                return (
                                    <CarouselItem
                                        key={service.id}
                                        className="pl-4 sm:pl-6 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                                    >
                                        <motion.div
                                            
                                            whileHover={{ y: -8 }}
                                            className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#111822]/95 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-[#d9983b]/40 hover:shadow-2xl hover:shadow-[#d9983b]/10"
                                        >
                                            {/* ================= CARD IMAGE ================= */}
                                            <div className="relative h-48 w-full overflow-hidden">
                                                <Image
                                                    src={service.image}
                                                    alt={service.title}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                />

                                                <div className="absolute inset-0 bg-gradient-to-t from-[#111822] via-transparent to-transparent opacity-90" />
                                            </div>

                                            {/* ================= CARD CONTENT ================= */}
                                            <div className="relative flex flex-grow flex-col items-center px-6 pb-8 pt-2 text-center">
                                                {/* Icon */}
                                                <div className="-mt-12 z-10 mb-4 flex h-20 w-20 items-center justify-center rounded-full border-2 border-gray-500 bg-[#111822] text-[#d9983b] shadow-lg transition-all duration-300 group-hover:bg-[#d9983b] group-hover:text-[#111822]">
                                                    <IconComponent className="h-8 w-8" />
                                                </div>

                                                {/* Title */}
                                                <h3 className="mb-3 font-serif text-2xl lg:text-3xl font-medium text-white">
                                                    {service.title}
                                                </h3>

                                                {/* Divider */}
                                                <div className="mb-6 h-px w-10 bg-[#e2a038]" />

                                                {/* Description */}
                                                <p className="mb-6 flex-grow text-sm lg:text-md leading-relaxed text-slate-400">
                                                    {service.description}
                                                </p>

                                                {/* Learn More */}
                                                <Link
                                                    href={service.linkUrl}
                                                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d9983b] transition-colors hover:text-[#f3b353]"
                                                >
                                                    <span>{servicesData.learnMoreText}</span>
                                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                                </Link>
                                            </div>
                                        </motion.div>
                                    </CarouselItem>
                                );
                            })}
                        </CarouselContent>
                    </Carousel>

                    {/* ================= AUTO-PLAY INDICATORS ================= */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-10 flex items-center justify-center gap-2"
                    >
                        {Array.from({ length: count || servicesData.items.length }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => api?.scrollTo(i)}
                                aria-label={`Go to slide ${i + 1}`}
                                className={`h-2 transition-all duration-300 rounded-full ${current === i ? "w-8 bg-[#d9983b]" : "w-2 bg-white/40 hover:bg-white/70"
                                    }`}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
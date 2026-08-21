"use client";

import React from "react";
import Image from "next/image";
import { UserRound, Scale, BriefcaseBusiness, Gavel, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { GoLaw } from "react-icons/go";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { IconType } from "react-icons";
import siteData from "@/data/data.json";
import type { TeamMember } from "@/types";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";

// Map icon string → Lucide component
const iconMap: Record<string, LucideIcon> = {
    Scale,
    BriefcaseBusiness,
    Gavel,
    UserRound,
};

// Map label → react-icons component
const socialIconMap: Record<string, IconType> = {
    Facebook: FaFacebookF,
    Twitter: FaTwitter,
    LinkedIn: FaLinkedinIn,
    Instagram: FaInstagram,
};

const { team } = siteData;

export default function TeamSection(): React.JSX.Element {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
        if (!api) return;
        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });

        // Auto-play timer: slides every 3 seconds
        const timer = setInterval(() => {
            api.scrollNext();
        }, 3000);

        return () => clearInterval(timer);
    }, [api]);

    return (
        <section className="relative w-full overflow-hidden bg-[#0b1118] py-20 text-white sm:py-24">

            {/* ================= TOP BACKGROUND IMAGE ================= */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-full">
                <Image
                    src={team.bgImage}
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-[#031224]/40" />

                {/* Image → Dark Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#031224]/20 via-[#0b1118]/30 to-[#0b1118]" />
            </div>

            {/* ================= CONTENT ================= */}
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
                        <span className="h-px w-8 bg-[#d9983b]" />
                        <span className="text-sm font-semibold uppercase tracking-widest text-[#d9983b]">
                            {team.tagline}
                        </span>
                        <span className="h-px w-8 bg-[#d9983b]" />
                    </div>

                    {/* Law Icon */}
                    <div className="flex items-center justify-center">
                        <GoLaw className="h-16 w-16 text-[#d9983b]" />
                    </div>

                    {/* Main Heading */}
                    <h2 className="font-serif text-3xl leading-tight sm:text-4xl lg:text-6xl">
                        {team.title}
                        <br />
                        <span className="font-serif text-[#d9983b]">
                            {team.highlight}
                        </span>
                    </h2>

                    {/* Underline */}
                    <div className="mx-auto h-px w-12 bg-[#d9983b]" />
                </motion.div>

                {/* ================= TEAM CAROUSEL ================= */}
                <div className="relative mx-auto w-full">
                    <Carousel
                        setApi={setApi}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4 sm:-ml-6 py-1">
                            {team.members.map((member: TeamMember, index: number) => {
                                const IconComponent = iconMap[member.icon] ?? Scale;

                                return (
                                    <CarouselItem
                                        key={member.id}
                                        className="pl-4 sm:pl-6 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                                    >
                                        <motion.div
                                            initial={{ opacity: 0, y: 40 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, amount: 0.15 }}
                                            transition={{
                                                duration: 0.6,
                                                delay: index * 0.1,
                                                ease: "easeOut",
                                            }}
                                            whileHover={{ y: -8 }}
                                            className="group relative flex flex-col overflow-hidden rounded-2xl bg-transparent transition-all duration-300"
                                        >
                                            {/* ================= TOP IMAGE ================= */}
                                            <div className="relative h-[300px] w-full overflow-hidden rounded-2xl shadow-lg">
                                                <Image
                                                    src={member.image}
                                                    alt={member.name}
                                                    fill
                                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                                            </div>

                                            {/* ================= DOWN INNER CARD ================= */}
                                            <div className="relative z-20 -mt-12 w-full mb-2 rounded-2xl border-t-[3px] border-b-[3px] border-[#d9983b] bg-white px-5 pb-6 pt-2 text-center shadow-2xl transition-all duration-300">
                                                {/* Floating Badge Icon */}
                                                <div className="-mt-11 mb-3 mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#d9983b] bg-white text-[#d9983b] shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-[#d9983b] group-hover:text-white">
                                                    <IconComponent className="h-10 w-10" />
                                                </div>

                                                {/* Name & Role */}
                                                <h3 className="font-serif text-xl sm:text-3xl font-base text-[#0d131a]">
                                                    {member.name}
                                                </h3>
                                                <p className="mt-1 text-md font-semibold uppercase tracking-wider text-[#d9983b]">
                                                    {member.role}
                                                </p>

                                                {/* Divider */}
                                                <div className="mx-auto my-3 h-0.5 w-10 bg-[#d9983b]" />

                                                {/* Social Icons */}
                                                <div className="flex items-center justify-center gap-2.5 pt-1">
                                                    {team.socials.map(({ label, href }) => {
                                                        const SocialIcon = socialIconMap[label];
                                                        if (!SocialIcon) return null;
                                                        return (
                                                            <a
                                                                key={label}
                                                                href={href}
                                                                aria-label={`${member.name} ${label}`}
                                                                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-800 transition-all duration-300 hover:bg-[#d9983b] hover:text-white"
                                                            >
                                                                <SocialIcon className="h-4 w-4" />
                                                            </a>
                                                        );
                                                    })}
                                                </div>
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
                        {team.members.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => api?.scrollTo(i)}
                                aria-label={`Go to slide ${i + 1}`}
                                className={`h-2.5 transition-all duration-300 rounded-full ${current === i ? "w-10 bg-[#d9983b]" : "w-2.5 bg-[#d9983b]/30 hover:bg-[#d9983b]/60"
                                    }`}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
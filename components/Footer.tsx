"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, ChevronRight, type LucideIcon } from "lucide-react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { FaFacebook } from "react-icons/fa";
import { IconType } from "react-icons";
import { motion } from "framer-motion";
import siteData from "@/data/data.json";

// Map icon string → Lucide component
const contactIconMap: Record<string, LucideIcon> = {
    MapPin,
    Phone,
    Mail,
};

// Map label → react-icons component
const socialIconMap: Record<string, IconType> = {
    Facebook: FaFacebook,
    Twitter: BsTwitter,
    LinkedIn: LiaLinkedin,
    Instagram: BsInstagram,
};

const { footer } = siteData;

export default function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-amber-500/20 bg-[#051A2F] text-gray-300">
            {/* ================= MAIN CONTAINER ================= */}
            <div className="relative z-10 mx-auto w-full px-5 pb-6 pt-12 sm:px-10 sm:pb-8 sm:pt-16 md:px-16 lg:px-20 xl:px-24">
                {/* ================= FOOTER GRID ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4"
                >
                    {/* ================= LEFT / ABOUT ================= */}
                    <div>
                        {/* Logo */}
                        <Link
                            href="/"
                            className="relative z-10 inline-flex shrink-0 items-center"
                        >
                            <Image
                                src={footer.logo}
                                alt="Lawustice Logo"
                                width={400}
                                height={400}
                                className="h-16 sm:h-24 w-auto object-contain"
                                priority
                            />
                        </Link>

                        {/* Description */}
                        <p className="mt-8 max-w-sm text-base leading-8 text-gray-300">
                            {footer.tagline}
                        </p>

                        {/* Divider */}
                        <div className="my-8 flex items-center gap-4">
                            <div className="h-px w-14 bg-amber-400/60 sm:w-16" />
                            <div className="h-2 w-2 rotate-45 bg-amber-400" />
                            <div className="h-px w-14 bg-amber-400/60 sm:w-16" />
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-3">
                            {footer.socials.map(({ label, href }) => {
                                const Icon = socialIconMap[label];
                                if (!Icon) return null;
                                return (
                                    <Link
                                        key={label}
                                        href={href}
                                        aria-label={label}
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-400 text-white transition-all duration-300 hover:bg-amber-400 hover:text-black sm:h-11 sm:w-11"
                                    >
                                        <Icon size={18} />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* ================= PRACTICE AREAS ================= */}
                    <div className="lg:border-l lg:border-white/10 lg:pl-8">
                        <h3 className="font-serif text-2xl  text-white sm:text-3xl">
                            Practice Areas
                        </h3>

                        <div className="mt-4 h-1 w-14 rounded bg-amber-400" />

                        <ul className="mt-8 space-y-4">
                            {footer.practiceAreas.map((item) => (
                                <li
                                    key={item}
                                    className="border-b border-white/10 pb-3 last:border-none"
                                >
                                    <Link
                                        href={`/services/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="group flex items-center gap-3 text-base transition-colors hover:text-amber-400"
                                    >
                                        <ChevronRight
                                            size={17}
                                            className="shrink-0 text-amber-400 transition-transform group-hover:translate-x-1"
                                        />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ================= USEFUL LINKS ================= */}
                    <div className="lg:border-l lg:border-white/10 lg:pl-8">
                        <h3 className="font-serif text-2xl  text-white sm:text-3xl">
                            Useful Links
                        </h3>

                        <div className="mt-4 h-1 w-14 rounded bg-amber-400" />

                        <ul className="mt-8 space-y-4">
                            {footer.usefulLinks.map((item) => (
                                <li
                                    key={item.label}
                                    className="border-b border-white/10 pb-3 last:border-none"
                                >
                                    <Link
                                        href={item.href}
                                        className="group flex items-center gap-3 text-base transition-colors hover:text-amber-400"
                                    >
                                        <ChevronRight
                                            size={17}
                                            className="shrink-0 text-amber-400 transition-transform group-hover:translate-x-1"
                                        />
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ================= CONTACT ================= */}
                    <div className="lg:border-l lg:border-white/10 lg:pl-8">
                        <h3 className="font-serif text-2xl text-white sm:text-3xl">
                            Contact Info
                        </h3>

                        <div className="mt-4 h-1 w-14 rounded bg-amber-400" />

                        <div className="mt-4 space-y-2">
                            {footer.contacts.map((item, index) => {
                                const Icon = contactIconMap[item.icon];
                                if (!Icon) return null;
                                return (
                                    <div
                                        key={index}
                                        className="flex gap-4 border-b border-white/10 pb-2"
                                    >
                                        {/* Icon */}
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-amber-400 text-amber-400">
                                            <Icon size={21} />
                                        </div>

                                        {/* Contact Text */}
                                        <div className="text-sm leading-7 text-gray-300">
                                            {item.value.map((text, valueIndex) => (
                                                <p key={valueIndex}>{text}</p>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>

                {/* ================= BOTTOM ================= */}
                <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-amber-400/30 pt-5 lg:flex-row">
                    <p className="text-center text-sm text-gray-400 lg:text-left">
                        © {footer.copyright}
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                        <Link
                            href="/privacy-policy"
                            className="transition-colors hover:text-amber-400"
                        >
                            Privacy Policy
                        </Link>

                        <span className="text-amber-400">|</span>

                        <Link
                            href="/terms-conditions"
                            className="transition-colors hover:text-amber-400"
                        >
                            Terms & Conditions
                        </Link>

                        <span className="text-amber-400">|</span>

                        <Link
                            href="/legal-disclaimer"
                            className="transition-colors hover:text-amber-400"
                        >
                            Legal Disclaimer
                        </Link>
                    </div>
                </div>

                {/* ================= JUSTICE SCALE ================= */}
                <div className="pointer-events-none absolute bottom-12 z-0 opacity-50 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:bottom-16 md:right-16 lg:right-28 xl:right-36">
                    <Image
                        src="/images/footer-law-image.png"
                        alt="Justice Scale"
                        width={300}
                        height={300}
                        className="h-auto w-40 sm:w-40 md:w-48 lg:w-56 xl:w-64"
                    />
                </div>
            </div>
        </footer>
    );
}
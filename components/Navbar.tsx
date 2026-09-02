"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDown, Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NavItem } from "@/types";
import siteData from "@/data/siteData";
import { FaPhoneAlt } from "react-icons/fa";

const { navbar: navData } = siteData;
const navItems: NavItem[] = navData.navItems;

export default function Navbar() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [hoveredNav, setHoveredNav] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenu((prev) => !prev);
        setOpenDropdown(null);
    };

    const toggleDropdown = (name: string) => {
        setOpenDropdown((prev) => (prev === name ? null : name));
    };

    const closeMobileMenu = () => {
        setMobileMenu(false);
        setOpenDropdown(null);
    };

    return (
        <header
            className={`fixed z-40 w-full font-roboto transition-all duration-300 ${scrolled
                ? "top-0 border-b border-white/10 bg-[#051A2F] shadow-lg shadow-black/20"
                : "top-0 border-b border-white/10 bg-transparent"
                }`}
        >
            <div className="mx-auto flex h-20 sm:h-24 w-full items-center justify-between px-5 sm:px-10 md:px-16 lg:px-20 xl:px-24">

                {/* ==================== LOGO ==================== */}
                <Link
                    href="/"
                    className="relative z-10 flex shrink-0 items-center"
                    onClick={closeMobileMenu}
                >
                    <Image
                        src={navData.logo}
                        alt="Lawustice Logo"
                        width={400}
                        height={400}
                        className="h-16 sm:h-24 w-auto object-contain"
                        priority
                    />
                </Link>

                {/* ==================== DESKTOP NAVIGATION ==================== */}
                <nav className="hidden lg:block">
                    <ul className="flex items-center gap-8 xl:gap-10">
                        {navItems.map((item) => (
                            <li
                                key={item.name}
                                className="relative py-8"
                                onMouseEnter={() => {
                                    if (item.dropdown) {
                                        setHoveredNav(item.name);
                                    }
                                }}
                                onMouseLeave={() => {
                                    setHoveredNav(null);
                                }}
                            >
                                {/* Nav Item */}
                                <div className="flex cursor-pointer items-center gap-1">
                                    <Link
                                        href={item.href || "#"}
                                        className="text-md font-medium text-white transition-colors duration-200 hover:text-[#DAA734]"
                                    >
                                        {item.name}
                                    </Link>

                                    {/* Dropdown Arrow */}
                                    {item.dropdown && (
                                        <motion.div
                                            animate={{
                                                rotate:
                                                    hoveredNav === item.name
                                                        ? 180
                                                        : 0,
                                            }}
                                            transition={{
                                                duration: 0.2,
                                            }}
                                        >
                                            <ChevronDown
                                                size={16}
                                                strokeWidth={2}
                                                className="text-white transition-colors duration-200 hover:text-[#DAA734]"
                                            />
                                        </motion.div>
                                    )}
                                </div>

                                {/* ================= DESKTOP DROPDOWN ================= */}
                                <AnimatePresence>
                                    {item.dropdown &&
                                        hoveredNav === item.name && (
                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    y: 8,
                                                    scale: 0.98,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    y: 0,
                                                    scale: 1,
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    y: 6,
                                                    scale: 0.98,
                                                }}
                                                transition={{
                                                    duration: 0.18,
                                                    ease: "easeOut",
                                                }}
                                                className="absolute left-1/2 top-full z-50 mt-1 w-60 -translate-x-1/2 border border-gray-100 bg-white p-2 shadow-xl shadow-black/10"
                                            >
                                                {item.dropdown.map(
                                                    (dropdownItem) => (
                                                        <Link
                                                            key={
                                                                dropdownItem.name
                                                            }
                                                            href={
                                                                dropdownItem.href
                                                            }
                                                            className="block rounded-md px-4 py-2.5 text-sm font-medium text-gray-700 transition-all duration-200 hover:translate-x-1 hover:bg-[#DAA734]/10 hover:text-[#DAA734]"
                                                        >
                                                            {
                                                                dropdownItem.name
                                                            }
                                                        </Link>
                                                    )
                                                )}
                                            </motion.div>
                                        )}
                                </AnimatePresence>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* ==================== DESKTOP PHONE ==================== */}
                <div className="hidden items-center lg:flex">
                    <a
                        href={`tel:${navData.phone.replace(/\s/g, "")}`}
                        className="group flex items-center gap-3"
                    >
                        {/* Phone Icon */}
                        <div className="flex h-16 w-16 items-center justify-center">
                            <FaPhoneAlt
                                size={28}
                                strokeWidth={1.8}
                                className="text-[#DAA734]"
                            />
                        </div>

                        {/* Phone Details */}
                        <div>
                            <p className="text-sm font-base text-white/60">
                                {navData.phoneLabel}
                            </p>

                            <p className="text-md font-bold text-white transition-colors duration-200 group-hover:text-[#DAA734]">
                                {navData.phone}
                            </p>
                        </div>
                    </a>
                </div>

                {/* ==================== MOBILE MENU BUTTON ==================== */}
                <button
                    type="button"
                    onClick={toggleMobileMenu}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white transition-colors duration-200 hover:border-[#DAA734] hover:text-[#DAA734] lg:hidden"
                    aria-label={
                        mobileMenu
                            ? "Close navigation menu"
                            : "Open navigation menu"
                    }
                    aria-expanded={mobileMenu}
                >
                    {mobileMenu ? (
                        <X size={22} strokeWidth={2} />
                    ) : (
                        <Menu size={22} strokeWidth={2} />
                    )}
                </button>
            </div>

            {/* ==================== MOBILE NAVIGATION ==================== */}
            <AnimatePresence>
                {mobileMenu && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                        className="overflow-hidden border-t border-white/10 bg-[#051A2F] shadow-2xl lg:hidden"
                    >
                        <nav className="px-5 pb-6 pt-3">
                            <ul className="space-y-0">
                                {navItems.map((item, idx) => (
                                    <motion.li
                                        key={item.name}
                                        initial={{ opacity: 0, x: -16 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.2, delay: idx * 0.05 }}
                                        className="border-b border-white/10 last:border-0"
                                    >
                                        {/* Mobile Nav Item Row */}
                                        <div className="flex items-center justify-between">
                                            <Link
                                                href={item.href || "#"}
                                                onClick={() => {
                                                    if (!item.dropdown) closeMobileMenu();
                                                }}
                                                className="flex-1 py-3.5 text-[15px] font-medium text-white transition-colors duration-200 hover:text-[#DAA734]"
                                            >
                                                {item.name}
                                            </Link>

                                            {/* Chevron toggle for dropdown */}
                                            {item.dropdown && (
                                                <button
                                                    type="button"
                                                    onClick={() => toggleDropdown(item.name)}
                                                    className="p-3 text-white/50 transition-colors duration-200 hover:text-[#DAA734]"
                                                    aria-label={`Toggle ${item.name} submenu`}
                                                    aria-expanded={openDropdown === item.name}
                                                >
                                                    <motion.div
                                                        animate={{ rotate: openDropdown === item.name ? 180 : 0 }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        <ChevronDown size={18} />
                                                    </motion.div>
                                                </button>
                                            )}
                                        </div>

                                        {/* Mobile Dropdown */}
                                        <AnimatePresence>
                                            {item.dropdown && openDropdown === item.name && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.22 }}
                                                    className="mb-3 ml-3 overflow-hidden border-l-2 border-[#DAA734] pl-4"
                                                >
                                                    {item.dropdown.map((dropdownItem) => (
                                                        <Link
                                                            key={dropdownItem.name}
                                                            href={dropdownItem.href}
                                                            onClick={closeMobileMenu}
                                                            className="block py-2 text-sm font-medium text-white/70 transition-all duration-200 hover:translate-x-1 hover:text-[#DAA734]"
                                                        >
                                                            {dropdownItem.name}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.li>
                                ))}
                            </ul>

                            {/* ================= MOBILE PHONE + CTA ================= */}
                            <div className="mt-5 border-t border-white/10 pt-5 space-y-4">
                                {/* Phone */}
                                <a
                                    href={`tel:${navData.phone.replace(/\s/g, "")}`}
                                    onClick={closeMobileMenu}
                                    className="group flex items-center gap-3"
                                >
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#DAA734]/10">
                                        <FaPhoneAlt size={18} className="text-[#DAA734]" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium text-white/50">
                                            {navData.phoneLabel}
                                        </p>
                                        <p className="text-sm font-bold text-white transition-colors duration-200 group-hover:text-[#DAA734]">
                                            {navData.phone}
                                        </p>
                                    </div>
                                </a>

                                {/* Book Consultation CTA */}
                                <Link
                                    href="/book-consultation"
                                    onClick={closeMobileMenu}
                                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#DAA734] px-5 py-3 text-sm font-bold text-[#051A2F] transition-all duration-200 hover:bg-[#c99620] active:scale-95"
                                >
                                    Book Consultation
                                </Link>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
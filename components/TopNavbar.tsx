"use client";

import { useEffect, useState } from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
} from "react-icons/fa";
import { IconType } from "react-icons";
import siteData from "@/data/data.json";

// Map label → react-icons component
const socialIconMap: Record<string, IconType> = {
    Facebook: FaFacebookF,
    Twitter: FaTwitter,
    Instagram: FaInstagram,
    LinkedIn: FaLinkedinIn,
};

const { topNavbar } = siteData;

export default function TopNavbar() {
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHidden(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`fixed left-0 top-0 z-50 w-full bg-[#031224] text-white transition-transform duration-300 ${
                hidden ? "-translate-y-full" : "translate-y-0"
            }`}
        >
            <div className="mx-auto flex min-h-11 w-full items-center justify-between px-5 sm:px-10 md:px-16 lg:px-20 xl:px-24">
                {/* Left Contact Information */}
                <div className="flex items-center gap-5 text-xs sm:gap-8 sm:text-sm">
                    {/* Phone */}
                    <a
                        href={`tel:${topNavbar.phone}`}
                        className="transition-colors hover:text-[#DAA734]"
                    >
                        <span className="font-medium">Call Us:</span>{" "}
                        {topNavbar.phone}
                    </a>

                    {/* Email */}
                    <a
                        href={`mailto:${topNavbar.email}`}
                        className="hidden transition-colors hover:text-[#DAA734] sm:block"
                    >
                        <span className="font-medium">Email us:</span>{" "}
                        {topNavbar.email}
                    </a>

                    {/* Address */}
                    <span className="hidden lg:block">
                        <span className="font-medium">Our address:</span>{" "}
                        {topNavbar.address}
                    </span>
                </div>

                {/* Right Social Icons */}
                <div className="flex items-center gap-1">
                    {topNavbar.socials.map(({ label, href }: { label: string; href: string }) => {
                        const Icon = socialIconMap[label];
                        if (!Icon) return null;
                        return (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 hover:bg-[#DAA734] hover:text-[#031224]"
                            >
                                <Icon size={14} />
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
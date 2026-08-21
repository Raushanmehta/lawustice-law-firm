"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";
import type { PageTopProps, BreadcrumbItem } from "@/types";

export default function PageTopSection({
    title,
    subtitle,
    breadcrumbs,
    bgImage = "https://img.magnific.com/free-photo/gavel-scales-justice-law-books_23-2151998158.jpg?semt=ais_hybrid&w=740&q=80",
}: PageTopProps): React.JSX.Element {
    const defaultBreadcrumbs: BreadcrumbItem[] = [
        { label: "Home", href: "/" },
        { label: title },
    ];

    const activeBreadcrumbs = breadcrumbs || defaultBreadcrumbs;

    return (
        <section className="relative w-full overflow-hidden bg-[#031224] pt-40 pb-20 sm:pt-48 sm:pb-24 lg:pt-52 lg:pb-28">
            {/* ================= BACKGROUND IMAGE ================= */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={bgImage}
                    alt={title}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center opacity-30"
                />
                {/* Dark Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#031224]/80 via-[#031224]/90 to-[#031224]" />
                <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#031224]/60 to-[#031224]" />
            </div>

            {/* ================= CONTENT CONTAINER ================= */}
            <div className="relative z-10 mx-auto w-full px-5 sm:px-10 md:px-16 lg:px-20 xl:px-24 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="space-y-4"
                >
                    {/* Page Title */}
                    <h1 className="font-serif text-4xl font-base tracking-tight text-[#e2a83e] sm:text-5xl lg:text-6xl">
                        {title}
                    </h1>

                    {/* Optional Subtitle */}
                    {subtitle && (
                        <p className="mx-auto max-w-xl text-base text-gray-300">
                            {subtitle}
                        </p>
                    )}

                    {/* Breadcrumbs */}
                    <div className="flex items-center justify-center gap-2 pt-2 text-sm sm:text-base">
                        {activeBreadcrumbs.map((crumb, index) => {
                            const isLast = index === activeBreadcrumbs.length - 1;
                            const isFirst = index === 0;

                            return (
                                <React.Fragment key={crumb.label}>
                                    {index > 0 && (
                                        <ChevronRight className="h-4 w-4 text-white/60" />
                                    )}

                                    {crumb.href && !isLast ? (
                                        <Link
                                            href={crumb.href}
                                            className="inline-flex items-center gap-1.5 font-medium text-white transition-colors duration-200 hover:text-[#e2a83e]"
                                        >
                                            {isFirst && <Home className="h-4 w-4" />}
                                            <span>{crumb.label}</span>
                                        </Link>
                                    ) : (
                                        <span className="font-medium text-[#e2a83e]">
                                            {crumb.label}
                                        </span>
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    FaBuilding,
    FaUserTie,
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaFileAlt,
    FaCheckCircle,
    FaShieldAlt,
    FaCogs,
    FaChartLine,
    FaDownload,
    FaArrowRight,
    FaPhoneAlt,
} from "react-icons/fa";
import { CaseStudyItem } from "@/types/sections";
import siteData from "@/data/data.json";
import { FadeLeft, FadeRight, FadeUp } from "@/components/ui/AnimationWrapper";

const iconMap: Record<string, React.ElementType> = {
    FaBuilding,
    FaUserTie,
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaFileAlt,
    FaShieldAlt,
    FaCogs,
    FaChartLine,
    FaCheckCircle,
};

const getIcon = (name?: string): React.ElementType => {
    if (name && iconMap[name]) return iconMap[name];
    return FaFileAlt;
};

export default function CaseStudyDetailPage({
    caseStudy,
}: {
    caseStudy?: CaseStudyItem;
}): React.JSX.Element {
    const defaultCaseStudy = siteData.caseStudies.items[0] as unknown as CaseStudyItem;
    const currentStudy: CaseStudyItem = caseStudy || defaultCaseStudy;

    const metaList = currentStudy.metaItems || [];
    const approachList = currentStudy.approachItems || [];
    const resultList = currentStudy.resultItems || [];
    const highlightList = currentStudy.highlightItems || [];
    const relatedList =
        currentStudy.relatedCaseStudies ||
        (siteData.caseStudies.items
            .filter((item) => item.slug !== currentStudy.slug)
            .slice(0, 3) as unknown as typeof currentStudy.relatedCaseStudies);

    const contactPhone =
        siteData.topNavbar?.phone || siteData.navbar?.phone || "+91 11 4356 0000";

    return (
        <main className="relative">
            <section className="px-5 py-16 sm:px-10 sm:py-20 md:px-16 lg:px-20 xl:px-24">
                <div className="mx-auto space-y-16">
                    {/* Content + Sidebar */}
                    <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
                        {/* Main Content */}
                        <FadeLeft className="space-y-8 lg:col-span-8">
                            <div className="grid grid-cols-1 items-center gap-8 rounded-2xl border border-[#f0ebde] bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)] sm:p-6 lg:grid-cols-12">
                                <div className="relative h-72 w-full overflow-hidden rounded-xl bg-[#0b1329] sm:h-80 lg:col-span-5">
                                    <Image
                                        src={currentStudy.image || "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80"}
                                        alt={currentStudy.title}
                                        fill
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 42vw"
                                        className="object-cover"
                                    />
                                </div>

                                <div className="space-y-6 lg:col-span-7">
                                    <div className="space-y-3">
                                        <span className="text-[11px] font-semibold uppercase tracking-widest text-[#d9983b]">
                                            {currentStudy.category}
                                        </span>

                                        <h1 className="font-serif text-2xl leading-tight text-[#0b1329] sm:text-3xl lg:text-4xl">
                                            {currentStudy.title}
                                        </h1>

                                        <div className="h-[2px] w-12 bg-[#d9983b]" />

                                        <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
                                            {currentStudy.description}
                                        </p>
                                    </div>
                                </div>

                                {metaList.length > 0 && (
                                    <div className="lg:col-span-12">
                                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                                            {metaList.map((item, idx) => {
                                                const Icon = getIcon(item.icon);
                                                return (
                                                    <div
                                                        key={idx}
                                                        className="flex flex-col items-center space-y-1 rounded-xl border border-[#f5eddce6] bg-[#fdfaf3] p-3 text-center"
                                                    >
                                                        <Icon className="h-4 w-4 text-[#d9983b]" />

                                                        <span className="text-[10px] font-semibold uppercase text-gray-400">
                                                            {item.label}
                                                        </span>

                                                        <span className="text-xs font-semibold text-[#0b1329]">
                                                            {item.value}
                                                        </span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Overview */}
                            {currentStudy.overview && (
                                <ContentCard icon={FaFileAlt} title="Overview">
                                    <p>{currentStudy.overview}</p>
                                </ContentCard>
                            )}

                            {/* Challenge */}
                            {currentStudy.challenge && (
                                <ContentCard icon={FaShieldAlt} title="The Challenge">
                                    <p>{currentStudy.challenge}</p>
                                </ContentCard>
                            )}

                            {/* Approach */}
                            {(currentStudy.approachText || approachList.length > 0) && (
                                <ContentCard icon={FaCogs} title="Our Approach">
                                    {currentStudy.approachText && (
                                        <p>{currentStudy.approachText}</p>
                                    )}

                                    {approachList.length > 0 && (
                                        <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
                                            {approachList.map((item, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-center gap-2.5 text-xs font-medium text-gray-700"
                                                >
                                                    <FaCheckCircle className="h-3.5 w-3.5 shrink-0 text-[#d9983b]" />
                                                    <span>{item.title}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </ContentCard>
                            )}

                            {/* Results */}
                            {(currentStudy.resultText || resultList.length > 0) && (
                                <ContentCard icon={FaChartLine} title="The Results">
                                    {currentStudy.resultText && (
                                        <p>{currentStudy.resultText}</p>
                                    )}

                                    {resultList.length > 0 && (
                                        <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-3">
                                            {resultList.map((item, idx) => (
                                                <div
                                                    key={idx}
                                                    className="space-y-1 rounded-xl border border-[#f5eddce6] bg-[#fdfaf3] p-4 text-center"
                                                >
                                                    <h3 className="font-serif text-2xl font-bold text-[#0b1329]">
                                                        {item.value}
                                                    </h3>

                                                    <p className="text-[11px] text-gray-500">
                                                        {item.label}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </ContentCard>
                            )}

                            {/* Testimonial */}
                            {currentStudy.testimonial && (
                                <div className="flex flex-col items-center gap-6 rounded-2xl bg-[#0b1329] p-6 text-white shadow-md sm:flex-row sm:p-8">
                                    <div className="shrink-0 font-serif text-4xl text-[#d9983b]">
                                        “
                                    </div>

                                    <div className="space-y-3">
                                        <p className="font-serif text-sm italic leading-relaxed text-gray-200 sm:text-base">
                                            &ldquo;{currentStudy.testimonial}&rdquo;
                                        </p>

                                        {currentStudy.testimonialAuthor && (
                                            <div className="text-xs font-semibold text-[#d9983b]">
                                                — {currentStudy.testimonialAuthor}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </FadeLeft>

                        {/* Sidebar */}
                        <FadeRight className="space-y-8 lg:col-span-4">
                            {/* Case Details */}
                            {metaList.length > 0 && (
                                <SidebarCard title="Case Details">
                                    <div className="space-y-4">
                                        <SidebarItem
                                            icon={FaBuilding}
                                            label="Practice Area"
                                            value={currentStudy.category}
                                        />
                                        {metaList.map((item, idx) => {
                                            const Icon = getIcon(item.icon);
                                            return (
                                                <SidebarItem
                                                    key={idx}
                                                    icon={Icon}
                                                    label={item.label}
                                                    value={item.value}
                                                    last={idx === metaList.length - 1}
                                                />
                                            );
                                        })}
                                    </div>
                                </SidebarCard>
                            )}

                            {/* Highlights */}
                            {highlightList.length > 0 && (
                                <SidebarCard title="Key Highlights">
                                    <div className="space-y-5">
                                        {highlightList.map((item, idx) => {
                                            const Icon = getIcon(item.icon);

                                            return (
                                                <div
                                                    key={idx}
                                                    className="flex items-start gap-3"
                                                >
                                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#fdfaf3] text-[#d9983b]">
                                                        <Icon className="h-3.5 w-3.5" />
                                                    </div>

                                                    <div>
                                                        <h4 className="font-serif text-xs font-semibold text-[#0b1329]">
                                                            {item.title}
                                                        </h4>

                                                        <p className="text-[11px] leading-relaxed text-gray-500">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </SidebarCard>
                            )}

                            {/* Downloads */}
                            <SidebarCard title="Downloads">
                                <div className="space-y-3">
                                    <DownloadButton
                                        href="/downloads/case-study.pdf"
                                        title="Download Case Study (PDF)"
                                    />

                                    <DownloadButton
                                        href="/downloads/summary.pdf"
                                        title="Download Summary (PDF)"
                                    />
                                </div>
                            </SidebarCard>

                            {/* CTA */}
                            <div className="space-y-6 rounded-2xl border border-[#162340] bg-[#0b1329] p-6 text-white shadow-xl sm:p-8">
                                <div className="space-y-1 border-b border-[#1b2b4c] pb-3">
                                    <h3 className="font-serif text-xl font-semibold">
                                        Have a Complex Legal Challenge?
                                    </h3>

                                    <div className="h-[2px] w-10 bg-[#d9983b]" />
                                </div>

                                <p className="text-xs leading-relaxed text-gray-300">
                                    Our experienced attorneys are here to provide
                                    strategic solutions tailored to your legal
                                    needs.
                                </p>

                                <Link
                                    href="/book-consultation"
                                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#d9983b] py-3.5 text-xs font-semibold tracking-wider text-[#0b1329] transition hover:bg-[#c28530]"
                                >
                                    Schedule a Consultation
                                    <FaArrowRight className="h-3 w-3" />
                                </Link>

                                <div className="flex items-center gap-2 text-xs font-semibold text-[#d9983b]">
                                    <FaPhoneAlt className="h-3 w-3" />
                                    <span>{contactPhone}</span>
                                </div>
                            </div>
                        </FadeRight>
                    </div>

                    {/* Related Case Studies */}
                    {relatedList && relatedList.length > 0 && (
                        <FadeUp className="space-y-8 border-t border-[#f0ebde] pt-8">
                            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                                <div className="space-y-2">
                                    <h2 className="font-serif text-2xl text-[#0b1329] sm:text-3xl">
                                        Related Case Studies
                                    </h2>

                                    <div className="h-[2px] w-10 bg-[#d9983b]" />
                                </div>

                                <Link
                                    href="/case-studies"
                                    className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d9983b]"
                                >
                                    View All Case Studies
                                    <FaArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                                {relatedList.map((item, idx) => (
                                    <article
                                        key={idx}
                                        className="flex flex-col overflow-hidden rounded-2xl border border-[#f0ebde] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
                                    >
                                        <div className="relative h-48 w-full bg-[#0b1329]">
                                            <Image
                                                src={item.image || "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80"}
                                                alt={item.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                                className="object-cover"
                                            />
                                        </div>

                                        <div className="flex flex-1 flex-col justify-between p-6">
                                            <div className="space-y-2">
                                                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#d9983b]">
                                                    {item.category}
                                                </span>

                                                <h4 className="font-serif text-lg leading-snug text-[#0b1329] line-clamp-2">
                                                    {item.title}
                                                </h4>

                                                <p className="text-xs text-gray-600 line-clamp-2">
                                                    {item.description}
                                                </p>
                                            </div>

                                            <Link
                                                href={`/case-studies/${item.slug}`}
                                                className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#d9983b]"
                                            >
                                                Read Case Study
                                                <FaArrowRight className="h-3 w-3" />
                                            </Link>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </FadeUp>
                    )}
                </div>
            </section>
        </main>
    );
}

/* ================= COMPONENTS ================= */

interface ContentCardProps {
    icon: React.ElementType;
    title: string;
    children: React.ReactNode;
}

function ContentCard({
    icon: Icon,
    title,
    children,
}: ContentCardProps): React.JSX.Element {
    return (
        <div className="space-y-5 rounded-2xl border border-[#f0ebde] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] sm:p-8">
            <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0b1329] text-[#d9983b]">
                    <Icon className="h-4 w-4" />
                </div>

                <h2 className="font-serif text-xl text-[#0b1329] sm:text-2xl">
                    {title}
                </h2>
            </div>

            <div className="space-y-4 pl-0 text-xs leading-relaxed text-gray-600 sm:pl-13 sm:text-sm">
                {children}
            </div>
        </div>
    );
}

interface SidebarCardProps {
    title: string;
    children: React.ReactNode;
}

function SidebarCard({
    title,
    children,
}: SidebarCardProps): React.JSX.Element {
    return (
        <div className="space-y-6 rounded-2xl border border-[#f0ebde] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] sm:p-8">
            <div className="space-y-1 border-b border-[#f0ebde] pb-3">
                <h3 className="font-serif text-xl font-semibold text-[#0b1329]">
                    {title}
                </h3>

                <div className="h-[2px] w-10 bg-[#d9983b]" />
            </div>

            {children}
        </div>
    );
}

interface SidebarItemProps {
    icon: React.ElementType;
    label: string;
    value: string;
    last?: boolean;
}

function SidebarItem({
    icon: Icon,
    label,
    value,
    last = false,
}: SidebarItemProps): React.JSX.Element {
    return (
        <div
            className={`flex items-start gap-3 ${!last ? "border-b border-[#f8f5ee] pb-3" : ""
                }`}
        >
            <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#d9983b]" />

            <div>
                <span className="block text-[10px] font-semibold uppercase text-gray-400">
                    {label}
                </span>

                <span className="font-medium text-[#0b1329]">{value}</span>
            </div>
        </div>
    );
}

interface DownloadButtonProps {
    href: string;
    title: string;
}

function DownloadButton({
    href,
    title,
}: DownloadButtonProps): React.JSX.Element {
    return (
        <a
            href={href}
            download
            className="flex items-center justify-between rounded-xl border border-[#f0ebde] bg-[#fdfaf3] p-3.5 text-xs font-semibold text-[#0b1329] transition-colors hover:border-[#d9983b]"
        >
            <span className="flex items-center gap-2">
                <FaFileAlt className="h-4 w-4 text-[#d9983b]" />
                {title}
            </span>

            <FaDownload className="h-3 w-3 text-gray-400" />
        </a>
    );
}

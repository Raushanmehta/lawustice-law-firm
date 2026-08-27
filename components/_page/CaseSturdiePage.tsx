"use client";

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

interface MetaItem {
    label: string;
    value: string;
    icon: React.ElementType;
}

interface ApproachItem {
    title: string;
}

interface ResultItem {
    value: string;
    label: string;
}

interface HighlightItem {
    title: string;
    description: string;
    icon: React.ElementType;
}

interface RelatedCaseStudy {
    image: string;
    alt: string;
    category: string;
    title: string;
    description: string;
    href: string;
}

const metaItems: MetaItem[] = [
    {
        label: "Industry",
        value: "Professional Services",
        icon: FaBuilding,
    },
    {
        label: "Client",
        value: "Leading Services Co.",
        icon: FaUserTie,
    },
    {
        label: "Duration",
        value: "6 Months",
        icon: FaCalendarAlt,
    },
    {
        label: "Location",
        value: "Multiple States, USA",
        icon: FaMapMarkerAlt,
    },
];

const approachItems: ApproachItem[] = [
    {
        title: "Comprehensive Due Diligence",
    },
    {
        title: "Risk Mitigation Strategy",
    },
    {
        title: "Regulatory Compliance Management",
    },
    {
        title: "Integration & Implementation Support",
    },
];

const resultItems: ResultItem[] = [
    {
        value: "100%",
        label: "Regulatory Approvals Obtained On Time",
    },
    {
        value: "25%",
        label: "Increase in Market Expansion",
    },
    {
        value: "Seamless",
        label: "Integration Across All States",
    },
];

const highlightItems: HighlightItem[] = [
    {
        title: "Multi-State Compliance",
        description:
            "Navigated complex regulatory landscapes across multiple states.",
        icon: FaFileAlt,
    },
    {
        title: "Risk Mitigation",
        description:
            "Identified and mitigated potential legal and operational risks.",
        icon: FaShieldAlt,
    },
    {
        title: "Seamless Integration",
        description:
            "Ensured smooth integration of business operations and legal frameworks.",
        icon: FaCogs,
    },
    {
        title: "Business Growth",
        description:
            "Enabled the client to expand market presence and achieve significant growth.",
        icon: FaChartLine,
    },
];

const relatedCaseStudies: RelatedCaseStudy[] = [
    {
        image: "/images/news-mic.png",
        alt: "Real Estate",
        category: "REAL ESTATE",
        title: "Resolving a High-Value Property Dispute",
        description:
            "Successfully defended client rights in complex multi-million dollar real estate litigation.",
        href: "/case-studies/property-dispute",
    },
    {
        image: "/images/news-papers.png",
        alt: "Litigation",
        category: "LITIGATION",
        title: "Favorable Verdict in a Commercial Litigation",
        description:
            "Represented corporate entity in high-stakes breach of contract dispute.",
        href: "/case-studies/commercial-litigation",
    },
    {
        image: "/images/news-event.png",
        alt: "Family Law",
        category: "FAMILY LAW",
        title: "Securing the Best Outcome for Child Custody",
        description:
            "Guided client through delicate family proceedings with favorable custody arrangement.",
        href: "/case-studies/child-custody",
    },
];

export default function CaseStudyDetailPage(): React.JSX.Element {
    return (
        <main className="relative bg-[#fdfbf7]">
            <section className="px-5 py-16 sm:px-10 sm:py-20 md:px-16 lg:px-20 xl:px-24">
                <div className="mx-auto  space-y-16">

                    {/* Hero */}


                    {/* Content + Sidebar */}
                    <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">


                        {/* Main Content */}
                        <div className="space-y-8 lg:col-span-8">
                            <div className="grid grid-cols-1 items-center gap-8 rounded-2xl border border-[#f0ebde] bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)] sm:p-4 lg:grid-cols-12">

                                <div className="relative h-72 w-full overflow-hidden rounded-xl bg-[#0b1329] sm:h-80 lg:col-span-5">
                                    <Image
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj4E-qX4qXAcXhHD-iMowMcCIJE9pWXmEaZWrg1ECntkYVF5erjdA1dCw&s=10"
                                        alt="Successful Merger for a Multi-State Company"
                                        fill
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 42vw"
                                        className="object-cover"
                                    />
                                </div>

                                <div className="space-y-6 lg:col-span-7">
                                    <div className="space-y-3">
                                        <span className="text-[11px] font-semibold uppercase tracking-widest text-[#d9983b]">
                                            Corporate & Commercial
                                        </span>

                                        <h1 className="font-serif text-3xl leading-tight text-[#0b1329] sm:text-4xl">
                                            Successful Merger for a Multi-State Company
                                        </h1>

                                        <div className="h-[2px] w-12 bg-[#d9983b]" />

                                        <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
                                            We advised a leading services company on a
                                            complex merger deal, ensuring regulatory
                                            compliance and minimizing business disruption
                                            across multiple states.
                                        </p>
                                    </div>


                                </div>
                                <div className="lg:col-span-12">
                                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                                        {metaItems.map((item) => {
                                            const Icon = item.icon;

                                            return (
                                                <div
                                                    key={item.label}
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

                            </div>

                            {/* Overview */}
                            <ContentCard
                                icon={FaFileAlt}
                                title="Overview"
                            >
                                <p>
                                    Our client, a rapidly growing professional
                                    services company, acquired three regional
                                    firms across different states to expand its
                                    footprint and service offerings. The
                                    transaction involved complex regulatory
                                    approvals, multi-state compliance, and the
                                    integration of operational and legal
                                    frameworks.
                                </p>
                            </ContentCard>

                            {/* Challenge */}
                            <ContentCard
                                icon={FaShieldAlt}
                                title="The Challenge"
                            >
                                <p>
                                    The merger involved multiple jurisdictions,
                                    each with unique regulatory requirements.
                                    The client needed to ensure a smooth
                                    transition while minimizing downtime,
                                    retaining key talent, and maintaining
                                    client trust throughout the process.
                                </p>
                            </ContentCard>

                            {/* Approach */}
                            <ContentCard
                                icon={FaCogs}
                                title="Our Approach"
                            >
                                <p>
                                    Our legal team provided end-to-end support,
                                    including due diligence, contract review,
                                    regulatory filings, and risk assessment.
                                    We developed a tailored integration plan
                                    that addressed legal, operational, and
                                    compliance considerations in each state.
                                </p>

                                <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
                                    {approachItems.map((item) => (
                                        <div
                                            key={item.title}
                                            className="flex items-center gap-2.5 text-xs font-medium text-gray-700"
                                        >
                                            <FaCheckCircle className="h-3.5 w-3.5 shrink-0 text-[#d9983b]" />

                                            <span>{item.title}</span>
                                        </div>
                                    ))}
                                </div>
                            </ContentCard>

                            {/* Results */}
                            <ContentCard
                                icon={FaChartLine}
                                title="The Results"
                            >
                                <p>
                                    The merger was completed seamlessly across
                                    all states, with all regulatory approvals
                                    obtained on time. The client achieved
                                    operational synergies quickly and saw a
                                    25% increase in market expansion within
                                    the first year.
                                </p>

                                <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-3">
                                    {resultItems.map((item) => (
                                        <div
                                            key={item.value}
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
                            </ContentCard>

                            {/* Testimonial */}
                            <div className="flex flex-col items-center gap-6 rounded-2xl bg-[#0b1329] p-6 text-white shadow-md sm:flex-row sm:p-8">
                                <div className="shrink-0 font-serif text-4xl text-[#d9983b]">
                                    “
                                </div>

                                <div className="space-y-3">
                                    <p className="font-serif text-sm italic leading-relaxed text-gray-200 sm:text-base">
                                        "Their expertise and attention to detail
                                        were instrumental in making a complex
                                        multi-state merger feel seamless and
                                        efficient."
                                    </p>

                                    <div className="text-xs font-semibold text-[#d9983b]">
                                        — CEO, Leading Services Company
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className="space-y-8 lg:col-span-4">

                            {/* Case Details */}
                            <SidebarCard title="Case Details">
                                <div className="space-y-4">
                                    <SidebarItem
                                        icon={FaBuilding}
                                        label="Practice Area"
                                        value="Corporate & Commercial"
                                    />

                                    <SidebarItem
                                        icon={FaBuilding}
                                        label="Industry"
                                        value="Professional Services"
                                    />

                                    <SidebarItem
                                        icon={FaUserTie}
                                        label="Client"
                                        value="Leading Services Company"
                                    />

                                    <SidebarItem
                                        icon={FaCalendarAlt}
                                        label="Duration"
                                        value="6 Months"
                                    />

                                    <SidebarItem
                                        icon={FaMapMarkerAlt}
                                        label="Location"
                                        value="Multiple States, USA"
                                        last
                                    />
                                </div>
                            </SidebarCard>

                            {/* Highlights */}
                            <SidebarCard title="Key Highlights">
                                <div className="space-y-5">
                                    {highlightItems.map((item) => {
                                        const Icon = item.icon;

                                        return (
                                            <div
                                                key={item.title}
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
                                    strategic solutions tailored to your business
                                    needs.
                                </p>

                                <Link
                                    href="/contact"
                                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#d9983b] py-3.5 text-xs font-semibold tracking-wider text-[#0b1329] transition hover:bg-[#c28530]"
                                >
                                    Schedule a Consultation
                                    <FaArrowRight className="h-3 w-3" />
                                </Link>

                                <div className="flex items-center gap-2 text-xs font-semibold text-[#d9983b]">
                                    <FaPhoneAlt className="h-3 w-3" />
                                    <span>+1 875 74885</span>
                                </div>
                            </div>
                        </aside>
                    </div>

                    {/* Related Case Studies */}
                    <section className="space-y-8 border-t border-[#f0ebde] pt-8">
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
                            {relatedCaseStudies.map((item) => (
                                <article
                                    key={item.title}
                                    className="flex flex-col overflow-hidden rounded-2xl border border-[#f0ebde] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
                                >
                                    <div className="relative h-48 w-full bg-[#0b1329]">
                                        <Image
                                            src={item.image}
                                            alt={item.alt}
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

                                            <h4 className="font-serif text-lg leading-snug text-[#0b1329]">
                                                {item.title}
                                            </h4>

                                            <p className="text-xs text-gray-600">
                                                {item.description}
                                            </p>
                                        </div>

                                        <Link
                                            href={item.href}
                                            className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#d9983b]"
                                        >
                                            Read Case Study
                                            <FaArrowRight className="h-3 w-3" />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
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

                <span className="font-medium text-[#0b1329]">
                    {value}
                </span>
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
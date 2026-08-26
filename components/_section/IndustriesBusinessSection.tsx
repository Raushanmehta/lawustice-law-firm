import React from "react";
import { 
    FaFileAlt, 
    FaFileContract, 
    FaUsers, 
    FaHandshake, 
    FaBalanceScale, 
    FaShieldAlt, 
    FaGlobe, 
    FaLock 
} from "react-icons/fa";

interface HelpItem {
    title: string;
    description: string;
    icon?: React.ReactNode;
}

interface IndustriesBusinessSectionProps {
    smallHeading?: string;
    titlePart1?: string;
    titlePart2?: string;
    subtitle?: string;
    items?: HelpItem[];
}

export default function IndustriesBusinessSection({
    smallHeading = "HOW WE HELP",
    titlePart1 = "Comprehensive Legal Solutions",
    titlePart2 = "For Your Business",
    subtitle = "We partner with you to navigate legal challenges, mitigate risks, and seize opportunities for sustainable growth.",
    items = [
        {
            title: "Business Formation & Structuring",
            description: "Choosing the right structure and setting a solid legal foundation for your business.",
            icon: <FaFileAlt className="h-7 w-7 text-[#d9983b]" />
        },
        {
            title: "Contracts & Commercial Agreements",
            description: "Drafting, reviewing, and negotiating agreements that protect your interests.",
            icon: <FaFileContract className="h-7 w-7 text-[#d9983b]" />
        },
        {
            title: "Corporate Governance & Compliance",
            description: "Ensuring regulatory compliance and implementing governance best practices.",
            icon: <FaUsers className="h-7 w-7 text-[#d9983b]" />
        },
        {
            title: "Mergers, Acquisitions & Restructuring",
            description: "Strategic legal guidance through complex transactions and business transitions.",
            icon: <FaHandshake className="h-7 w-7 text-[#d9983b]" />
        },
        {
            title: "Shareholder & Partnership Matters",
            description: "Resolving disputes and managing relationships to protect business value and continuity.",
            icon: <FaBalanceScale className="h-7 w-7 text-[#d9983b]" />
        },
        {
            title: "Risk Management & Dispute Resolution",
            description: "Identifying risks early and providing effective solutions to disputes.",
            icon: <FaShieldAlt className="h-7 w-7 text-[#d9983b]" />
        },
        {
            title: "Commercial Transactions & Operations",
            description: "Advising on day-to-day commercial matters to keep your business moving forward.",
            icon: <FaGlobe className="h-7 w-7 text-[#d9983b]" />
        },
        {
            title: "Confidentiality & Data Protection",
            description: "Safeguarding your confidential information and ensuring data privacy compliance.",
            icon: <FaLock className="h-7 w-7 text-[#d9983b]" />
        }
    ]
}: IndustriesBusinessSectionProps) {
    const helpIcons = [
        <FaFileAlt key="file" className="h-7 w-7 text-[#d9983b]" />,
        <FaFileContract key="contract" className="h-7 w-7 text-[#d9983b]" />,
        <FaUsers key="users" className="h-7 w-7 text-[#d9983b]" />,
        <FaHandshake key="handshake" className="h-7 w-7 text-[#d9983b]" />,
        <FaBalanceScale key="balance" className="h-7 w-7 text-[#d9983b]" />,
        <FaShieldAlt key="shield" className="h-7 w-7 text-[#d9983b]" />,
        <FaGlobe key="globe" className="h-7 w-7 text-[#d9983b]" />,
        <FaLock key="lock" className="h-7 w-7 text-[#d9983b]" />,
    ];

    return (
        <section className="relative overflow-hidden bg-[#fdfbf7] px-5 py-16 sm:px-10 sm:py-20 md:px-16 lg:px-20 xl:px-24">
            <div className="mx-auto">
                
                {/* ================= SECTION HEADER ================= */}
                <div className="mx-auto mb-16 max-w-3xl text-center space-y-3">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#d9983b]">
                        {smallHeading}
                    </span>

                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0b1329] leading-tight">
                        {titlePart1} <br />
                        For <span className="text-[#d9983b]">{titlePart2}</span>
                    </h2>

                    <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-600 max-w-xl mx-auto pt-2">
                        {subtitle}
                    </p>
                </div>

                {/* ================= MAIN CONTAINER BOX WITH DIVIDED GRID ================= */}
                <div className="rounded-2xl bg-white shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-[#f0ebde] overflow-hidden">
                    
                    {/* Grid with vertical and horizontal border divisions */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#f0ebde]">
                        {items.map((item, index) => (
                            <div 
                                key={index} 
                                className={`flex flex-col space-y-4 p-8 sm:p-10 ${
                                    // Add horizontal borders between the two rows for desktop (items 4 and above)
                                    index >= 4 ? 'lg:border-t lg:border-[#f0ebde]' : ''
                                }`}
                            >
                                
                                {/* Icon */}
                                <div className="text-[#d9983b]">
                                    {item.icon ?? helpIcons[index % helpIcons.length]}
                                </div>

                                {/* Title */}
                                <h3 className="font-serif text-lg sm:text-xl text-[#0b1329] leading-snug min-h-[3.2rem]">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-xs sm:text-sm leading-relaxed text-gray-600">
                                    {item.description}
                                </p>

                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}
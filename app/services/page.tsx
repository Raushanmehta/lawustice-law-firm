"use client";

import NeedLegalSection from "@/components/_section/NeedLegalSection";
import PageTopSection from "@/components/PageTopSection";
import ServiceCard from "@/components/ServiceCard";
import { FaBalanceScale, FaChild, FaHome, FaHandHoldingHeart, FaFileContract, FaUserShield } from "react-icons/fa";
import siteData from "@/data/data.json";

const servicesData = [
    {
        title: "Civil Litigation",
        description: "We represent individuals and businesses in a broad range of civil disputes, advocating for your rights in court with confidence.",
        image: "/images/law-banner.png",
        icon: <FaBalanceScale className="h-7 w-7 text-[#d9983b]" />,
        linkUrl: "/practice/civil-litigation"
    },
    {
        title: "Family Law",
        description: "Compassionate guidance through divorce, child custody, and support with personalized legal support.",
        image: "/images/law-banner.png",
        icon: <FaChild className="h-7 w-7 text-[#d9983b]" />,
        linkUrl: "/practice/family-law"
    },
    {
        title: "Property Division",
        description: "Equitable division of marital assets and debts with a strategic approach tailored to your case.",
        image: "/images/law-banner.png",
        icon: <FaHome className="h-7 w-7 text-[#d9983b]" />,
        linkUrl: "/practice/property-division"
    },
    {
        title: "Spousal Support",
        description: "Guidance on alimony and spousal maintenance suits, enforcement, and modifications.",
        image: "/images/law-banner.png",
        icon: <FaHandHoldingHeart className="h-7 w-7 text-[#d9983b]" />,
        linkUrl: "/practice/spousal-support"
    },
    {
        title: "Prenuptial Agreements",
        description: "Drafting comprehensive agreements that protect your assets and provide peace of mind for the future.",
        image: "/images/law-banner.png",
        icon: <FaFileContract className="h-7 w-7 text-[#d9983b]" />,
        linkUrl: "/practice/prenuptial-agreements"
    },
    {
        title: "Criminal Defense",
        description: "Aggressive and strategic legal defense to protect your rights, freedom, and record.",
        image: "/images/law-banner.png",
        icon: <FaUserShield className="h-7 w-7 text-[#d9983b]" />,
        linkUrl: "/practice/criminal-defense"
    }
];

export default function ServicesPage() {
    return (
        <main className="bg-[#fdfbf7] min-h-screen">
            {/* Top Banner Section */}
            <PageTopSection title="Services" />

            {/* Main Content Section */}
            <section className="px-5 py-16 sm:px-10 sm:py-20 md:px-16 lg:px-20 xl:px-24">
                <div className="mx-auto max-w-7xl">
                    
                    {/* Header Info */}
                    <div className="mx-auto mb-16 max-w-2xl text-center space-y-4">
                        <div className="flex items-center justify-center gap-3">
                            <span className="h-px w-10 bg-[#d9983b]" />
                            <span className="text-xs font-semibold uppercase tracking-widest text-[#d9983b]">
                                What We Do
                            </span>
                            <span className="h-px w-10 bg-[#d9983b]" />
                        </div>

                        <h1 className="font-serif text-3xl sm:text-5xl text-[#0b1329]">
                            Our <span className="font-serif text-[#d9983b]">Practice Areas</span>
                        </h1>

                        <p className="text-sm sm:text-base leading-relaxed text-gray-600">
                            Our experienced attorneys deliver focused representation in a wide range of legal areas. Click on any service to learn more about how we can help you.
                        </p>
                    </div>

                    {/* Services Cards Grid */}
                    <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {servicesData.map((service, index) => (
                            <ServiceCard 
                                key={index}
                                title={service.title}
                                description={service.description}
                                image={service.image}
                                icon={service.icon}
                                linkUrl={service.linkUrl}
                            />
                        ))}
                    </div>

                </div>
            </section>
            <NeedLegalSection
                leftColumnImage={siteData.results.leftColumnImage}
                rightBgImage={siteData.results.rightBgImage}
                phone={siteData.navbar.phone}
            />
        </main>
    );
}
import Link from "next/link";
import siteData from "@/data/siteData";
import type { TermsItem } from "@/types";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/AnimationWrapper";

interface LegalPageSectionProps {
    terms?: TermsItem[];
    contactUrl?: string;
    acknowledgementText?: string;
    assistanceTitle?: string;
    assistanceDescription?: string;
    buttonText?: string;
}

export default function LegalPageSection({
    terms = siteData.legalPage.terms,
    contactUrl = siteData.legalPage.contactUrl,
    acknowledgementText = siteData.legalPage.acknowledgementText,
    assistanceTitle = siteData.legalPage.assistanceTitle,
    assistanceDescription = siteData.legalPage.assistanceDescription,
    buttonText = siteData.legalPage.buttonText,
}: LegalPageSectionProps) {
    return (
        <section className="relative px-5 py-16 sm:px-10 sm:py-20 md:px-16 lg:px-24 xl:px-24">
            <div className="mx-auto space-y-12">

                {/* ================= TERMS LIST CONTAINER ================= */}
                <StaggerContainer className="space-y-10">
                    {terms.map((term, index) => (
                        <StaggerItem key={index} className="space-y-2 pb-8 border-b border-[#f0ebde] last:border-b-0">

                            {/* Section Title */}
                            <h3 className="font-serif text-lg sm:text-2xl text-[#0b1329] font-medium">
                                <span className="mr-2">{term.number}</span>
                                <span>{term.title}</span>
                            </h3>

                            {/* Section Content */}
                            <p className="text-md sm:text-md leading-relaxed text-gray-600 pl-5">
                                {term.content}
                            </p>

                        </StaggerItem>
                    ))}
                </StaggerContainer>


                {/* ================= ACKNOWLEDGEMENT NOTICE BOX ================= */}
                <FadeUp delay={0.2}>
                    <div className="rounded-xl bg-[#fcf8f0] border border-[#f5eddce6] p-4 sm:p-5 text-center">
                        <p className="text-sm sm:text-md text-gray-700 font-medium">
                            {acknowledgementText}
                        </p>
                    </div>
                </FadeUp>


                {/* ================= NEED LEGAL ASSISTANCE BANNER ================= */}
                <FadeUp delay={0.3}>
                    <div className="rounded-2xl bg-[#070f22] p-6 sm:p-8 text-white shadow-xl border border-[#162340] flex flex-col sm:flex-row items-center justify-between gap-6">

                        {/* Text Details */}
                        <div className="space-y-1.5 text-center sm:text-left">
                            <h3 className="font-serif text-xl sm:text-3xl text-white">
                                {assistanceTitle}
                            </h3>
                            <p className="text-sm text-gray-300 leading-relaxed max-w-lg">
                                {assistanceDescription}
                            </p>
                        </div>

                        {/* Contact Button */}
                        <div className="shrink-0">
                            <Link
                                href={contactUrl}
                                className="inline-flex items-center justify-center rounded-lg bg-[#d9983b] px-8 py-3.5 text-sm font-semibold tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#c28530]"
                            >
                                {buttonText}
                            </Link>
                        </div>

                    </div>
                </FadeUp>

            </div>
        </section>
    );
}

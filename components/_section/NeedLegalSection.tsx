import { FiPhoneCall } from "react-icons/fi";
import siteData from "@/data/data.json";

export interface NeedLegalSectionProps {
    leftColumnImage?: string;
    rightBgImage?: string;
    phone?: string;
    onBookConsultation?: () => void;
    tagline?: string;
    title?: string;
    titleHighlight?: string;
    description?: string;
    buttonText?: string;
}

export default function NeedLegalSection({
    leftColumnImage = siteData.needLegal.leftColumnImage,
    rightBgImage = siteData.needLegal.rightBgImage,
    phone = siteData.navbar?.phone || "+91 11 4356 0000",
    onBookConsultation,
    tagline = siteData.needLegal.tagline,
    title = siteData.needLegal.title,
    titleHighlight = siteData.needLegal.titleHighlight,
    description = siteData.needLegal.description,
    buttonText = siteData.needLegal.buttonText,
}: NeedLegalSectionProps) {
    return (
        <section className="relative overflow-hidden bg-[#fdfbf7] px-5 py-16 sm:px-10 sm:py-20 md:px-16 lg:px-20 xl:px-24">

            {/* ================= LEFT CORINTHIAN COLUMN ================= */}
            <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-[30%] overflow-hidden lg:block">
                <img
                    src={leftColumnImage}
                    alt="Corinthian Column"
                    className="absolute left-[-100px] top-[-40px] h-[115%] w-[520px] max-w-none object-contain object-left opacity-[0.45] mix-blend-multiply"
                />
            </div>

            {/* ================= RIGHT PLANT BACKGROUND & SHADOW ================= */}
            <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[30%] overflow-hidden lg:block">
                <img
                    src={rightBgImage}
                    alt="Plant Background Shadow"
                    className="absolute right-[-180px] top-[-20px] h-[110%] w-[700px] max-w-none object-cover object-left opacity-[0.9] grayscale blur-[1px]"
                />
                {/* Soft fade blend over the right image */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#fdfbf7]/40 to-[#fdfbf7]" />
            </div>

            {/* ================= 3-COLUMN GRID CONTAINER ================= */}
            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-3 lg:gap-8">

                    {/* 1. LEFT: Large Contact Icon */}
                    <div className="flex justify-center lg:justify-right">
                        <div className="flex h-36 w-36 sm:h-40 sm:w-40 items-center justify-center rounded-full bg-white shadow-[0_10px_30px_rgba(217,152,59,0.12)] border border-[#f5eddce6]">
                            <div className="flex h-28 w-28 sm:h-40 border border-gray-250 border-glow sm:w-40 items-center justify-center rounded-full bg-[#fdfaf3]">
                                <FiPhoneCall className="h-16 w-16 text-[#d9983b]" />
                            </div>
                        </div>
                    </div>

                    {/* 2. CENTER: Titles & Description */}
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-3">
                        {/* Subheading with underline */}
                        <div className="flex flex-col items-center lg:items-start">
                            <span className="text-sm font-semibold uppercase tracking-widest text-[#d9983b]">
                                {tagline}
                            </span>
                            <div className="mt-1 h-[2px] w-10 bg-[#d9983b]" />
                        </div>

                        {/* Main Heading */}
                        <h2 className="font-serif text-3xl font-normal leading-[1.15] tracking-tight text-black sm:text-5xl md:text-5xl lg:text-6xl">
                            {title} <br />
                            <span className="font-serif text-[#d9983b]">{titleHighlight}</span>
                        </h2>

                        {/* Description */}
                        <p className="mx-auto max-w-xl text-sm leading-relaxed sm:text-base text-slate-800">
                            {description}
                        </p>
                    </div>

                    {/* 3. RIGHT: Large Button & Phone Number */}
                    <div className="flex flex-col items-center lg:items-left gap-3 text-center lg:text-right">
                        {/* Large Action Button */}
                        <button
                            onClick={onBookConsultation}
                            className="group flex w-full sm:w-auto items-center justify-between gap-6 rounded-md bg-[#081225] px-8 py-5 text-sm font-semibold tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-[#111f3d]"
                        >
                            <span>{buttonText}</span>
                            <svg
                                className="h-4 w-4 text-[#d9983b] transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>

                        {/* Phone Number Below Button */}
                        <div className="text-sm sm:text-base 2xl:text-lg text-gray-700 text-left w-full sm:w-auto">
                            or call us at{" "}
                            <a
                                href={`tel:${phone.replace(/\s+/g, "")}`}
                                className="font-semibold text-[#d9983b] transition-colors hover:underline"
                            >
                                {phone}
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
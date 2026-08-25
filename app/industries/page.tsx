import IndustrieCard from "@/components/IndustrieCard";
import PageTopSection from "@/components/PageTopSection";
import { Scale } from "lucide-react";

export default function IndustriesPage() {
    return (
        <div className="min-h-screen bg-[#fdfbf7]">
            {/* ================= PAGE TOP ================= */}
            <PageTopSection title="Industries" />

            {/* ================= INDUSTRIES SECTION ================= */}
            <section className="relative z-10 w-full px-5 py-16 sm:px-10 sm:py-20 md:px-16 lg:px-20 xl:px-24">
                <div className="mx-auto">

                    {/* ================= SECTION HEADER ================= */}
                    <div className="mx-auto mb-14 max-w-4xl space-y-5 text-center">

                        {/* Small Heading */}
                        <div className="flex items-center justify-center gap-3">
                            <span className="h-px w-8 bg-[#d9983b]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d9983b] sm:text-sm">
                                Industries We Serve
                            </span>

                            <span className="h-px w-8 bg-[#d9983b]" />
                        </div>

                        {/* Main Heading */}
                        <h2 className="font-serif text-3xl w-full font-normal leading-[1.15] tracking-tight text-[#0b1329] sm:text-5xl md:text-5xl lg:text-6xl">
                            Legal Solutions{" "}
                            <span className="text-[#d9983b]">
                                Tailored To Your Industry
                            </span>
                        </h2>

                        {/* Decorative Divider */}
                        <div className="flex items-center justify-center gap-3">
                            <span className="h-px w-12 bg-[#d9983b]/60" />

                            <Scale
                                className="h-6 w-6 text-[#d9983b]"
                                strokeWidth={1.5}
                            />

                            <span className="h-px w-12 bg-[#d9983b]/60" />
                        </div>

                        {/* Description */}
                        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
                            We provide trusted legal guidance across a wide
                            range of industries, delivering practical
                            solutions tailored to the unique challenges and
                            requirements of your business.
                        </p>
                    </div>

                    {/* ================= INDUSTRIES CARDS ================= */}
                    <div className="mt-8">
                        <IndustrieCard />
                    </div>

                </div>
            </section>
        </div>
    );
}
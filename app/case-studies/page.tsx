import PageTopSection from "@/components/_page/PageTopSection";
import CaseSturdieCard from "@/components/CaseSturdieCard";
import siteData from "@/data/siteData";
import { CaseStudiesData } from "@/types/sections";

export default function CaseSturdies() {
    const caseStudiesData = siteData.caseStudies as CaseStudiesData;

    return (
        <main>
            <PageTopSection title="Case Studies" />

            <section className="bg-white px-5 py-16 sm:px-10 md:px-20 lg:px-24">
                <div className="mx-auto">
                    {/* Header */}
                    <div className="mx-auto mb-14 max-w-2xl text-center space-y-4">
                        <div className="flex items-center justify-center gap-3">
                            <span className="h-px w-10 bg-[#d9983b]" />
                            <span className="text-sm font-semibold uppercase tracking-widest text-[#d9983b]">
                                Our Case Studies
                            </span>
                            <span className="h-px w-10 bg-[#d9983b]" />
                        </div>
                        <h2 className="font-serif text-3xl font-normal leading-[1.15] tracking-tight text-black sm:text-4xl lg:text-5xl">
                            {caseStudiesData.title}
                        </h2>
                        <p className="mx-auto max-w-xl text-sm leading-relaxed text-slate-700">
                            {caseStudiesData.description}
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        {caseStudiesData.items.slice(0, 3).map((caseStudy) => (
                            <CaseSturdieCard
                                key={caseStudy.id}
                                caseStudy={caseStudy}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
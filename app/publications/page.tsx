import PageTopSection from "@/components/_page/PageTopSection";
import PublicationCard from "@/components/PublicationCard";
import siteData from "@/data/data.json";
import { PublicationsData } from "@/types/sections";

export default function PublicationsPage() {
    const publicationsData = siteData.publications as PublicationsData;

    return (
        <main className="">
            <PageTopSection title="Publications" />

            <section className="px-5 py-16 sm:px-10 sm:py-20 md:px-16 lg:px-20 xl:px-24">
                <div className="mx-auto ">
                    {/* Header Info */}
                    <div
                        className="mx-auto mb-16 max-w-2xl text-center space-y-4"
                    >
                        <div className="flex items-center justify-center gap-3">
                            <span className="h-px w-10 bg-[#d9983b]" />
                            <span className="text-sm font-semibold uppercase tracking-widest text-[#d9983b]">
                                Our Publications
                            </span>
                            <span className="h-px w-10 bg-[#d9983b]" />
                        </div>

                        <h2 className="font-serif text-3xl font-normal leading-[1.15] tracking-tight text-black sm:text-5xl md:text-5xl lg:text-6xl">
                            Publications
                        </h2>

                        <p className="mx-auto max-w-xl text-sm leading-relaxed sm:text-base text-slate-800">
                            {publicationsData.description}
                        </p>
                    </div>

                    {/* Publication Cards Grid */}
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
                        {publicationsData.items.slice(0, 3).map((publication) => (
                            <PublicationCard
                                key={publication.id}
                                publication={publication}
                            />
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
}

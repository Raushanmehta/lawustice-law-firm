import PageTopSection from "@/components/_page/PageTopSection";
import OfficeLocationCard from "@/components/OfficeLocationCard";
import siteData from "@/data/data.json";

export default function OfficeLocation() {
    const officeLocations = siteData.officeLocations;

    return (
        <main>
            {/* Page Top */}
            <PageTopSection title={officeLocations.pageTitle} />

            {/* Office Locations Section */}
            <section className="bg-[#fdfbf7] px-5 py-16 sm:px-10 sm:py-20 lg:px-24">
                <div className="mx-auto ">

                    {/* Section Heading */}
                    <div className="mb-12 text-center">
                        <h1 className="font-serif text-3xl font-normal leading-[1.15] tracking-tight  sm:text-5xl md:text-5xl lg:text-5xl">
                            {officeLocations.sectionTitle}
                        </h1>

                        {/* Decorative Divider */}
                        <div className="mt-4 flex items-center justify-center gap-3">
                            <span className="h-px w-12 bg-gradient-to-r from-transparent via-[#d99a32] to-[#d99a32] sm:w-16" />

                            <span className="h-2 w-2 rotate-45 bg-[#e4a33b]" />

                            <span className="h-px w-12 bg-gradient-to-l from-[#d99a32] via-[#d99a32] to-transparent sm:w-16" />
                        </div>
                    </div>

                    {/* Office Cards */}
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        {officeLocations.locations.map((location) => (
                            <OfficeLocationCard key={location.cityName} {...location} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
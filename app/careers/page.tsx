import PageTopSection from "@/components/_page/PageTopSection";
import CareerPageJobSection from "@/components/_section/CareerPageJobSection";
import siteData from "@/data/siteData";

export default function CareersPage() {
    return (
        <main>
            <PageTopSection title="Careers" />
            <CareerPageJobSection data={siteData.careersJob} />
        </main>
    );
}
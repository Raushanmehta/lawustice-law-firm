import PageTopSection from "@/components/_page/PageTopSection";
import CareerPageJobSection from "@/components/_section/CareerPageJobSection";
import siteData from "@/data/siteData";


export default function JobDetailPage() {
    return (
        <main>
            <PageTopSection title="Job Details" />
            <CareerPageJobSection data={siteData.careersJob} />
        </main>
    )
}
import PageTopSection from "@/components/_page/PageTopSection";
import FaqPageSection from "@/components/_section/FaqPageSection";
import siteData from "@/data/siteData";

export default function FaqsPage() {
    return (
        <main>
            <PageTopSection title="FAQs" />
            <FaqPageSection data={siteData.faqsPage} />
        </main>
    );
}
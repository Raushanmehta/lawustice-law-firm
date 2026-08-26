import PageTopSection from "@/components/_page/PageTopSection";
import BookConsultationPageSection from "@/components/_section/BookConsultationPageSection";
import siteData from "@/data/data.json";

export default function BookConsultationPage() {
    const data = siteData.bookConsultation;
    return (
        <main>
            <PageTopSection title={data.pageTitle} />
            <BookConsultationPageSection data={data} />
        </main>
    );
}
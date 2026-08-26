import PageTopSection from "@/components/_page/PageTopSection";
import LegalPageSection from "@/components/_section/LegalPageSection";
import siteData from "@/data/data.json";

export default function TermsConditionsPage() {
    return (
        <main>
            <PageTopSection title="Terms & Conditions" />
            <LegalPageSection terms={siteData.legalPage.terms} />
        </main>
    );
}
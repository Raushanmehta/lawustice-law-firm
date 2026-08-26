import PageTopSection from "@/components/_page/PageTopSection";
import LegalPageSection from "@/components/_section/LegalPageSection";
import siteData from "@/data/data.json";

export default function LegalDisclaimerPage() {
    return (
        <main>
            <PageTopSection title="Legal Disclaimer" />
            <LegalPageSection terms={siteData.legalPage.disclaimerTerms} />
        </main>
    );
}
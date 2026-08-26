import PageTopSection from "@/components/_page/PageTopSection";
import LegalPageSection from "@/components/_section/LegalPageSection";
import siteData from "@/data/data.json";

export default function PrivacyPolicyPage() {
    return (
        <main>
            <PageTopSection title="Privacy Policy" />
            <LegalPageSection terms={siteData.legalPage.privacyPolicyTerms} />
        </main>
    );
}
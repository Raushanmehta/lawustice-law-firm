import { notFound } from "next/navigation";
import LegalUpdateDetailPage from "@/components/_page/LegalUpdateDetailPage";
import PageTopSection from "@/components/_page/PageTopSection";
import siteData from "@/data/data.json";
import { LegalUpdateItem, LegalUpdatesData } from "@/types/sections";

interface LegalUpdateRouteProps {
    params: Promise<{ slug: string }>;
}

export default async function LegalUpdateDetail({ params }: LegalUpdateRouteProps) {
    const { slug } = await params;
    const legalData = siteData.legalUpdates as unknown as LegalUpdatesData;

    const update = legalData?.items?.find(
        (item: LegalUpdateItem) => item.slug === slug || String(item.id) === slug
    );

    if (!update) {
        notFound();
    }

    return (
        <main>
            <PageTopSection title="Legal Update Detail" />
            <LegalUpdateDetailPage
                update={update}
                practiceAreas={legalData.practiceAreas}
                popularPosts={legalData.popularPosts}
            />
        </main>
    );
}
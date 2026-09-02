import { notFound } from "next/navigation";
import PageTopSection from "@/components/_page/PageTopSection";
import CaseSturdieDetailPage from "@/components/_page/CaseSturdiePage";
import siteData from "@/data/siteData";
import { CaseStudiesData, CaseStudyItem } from "@/types/sections";

interface CaseStudyDetailRouteProps {
    params: Promise<{ slug: string }>;
}

export default async function CaseStudiesDetail({ params }: CaseStudyDetailRouteProps) {
    const { slug } = await params;
    const caseStudiesData = siteData.caseStudies as CaseStudiesData;

    const caseStudy = caseStudiesData.items.find(
        (item: CaseStudyItem) => item.slug === slug || String(item.id) === slug
    );

    if (!caseStudy) {
        notFound();
    }

    return (
        <main>
            <PageTopSection title="Case Studies Detail" />
            <CaseSturdieDetailPage caseStudy={caseStudy} />
        </main>
    );
}
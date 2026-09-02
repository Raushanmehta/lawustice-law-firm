import { notFound } from "next/navigation";
import PageTopSection from "@/components/_page/PageTopSection";
import PublicationDetailPage from "@/components/_page/PublicationDetailPage";
import siteData from "@/data/siteData";
import { PublicationsData, PublicationItem } from "@/types/sections";

interface PublicationDetailRouteProps {
    params: Promise<{ slug: string }>;
}

export default async function PublicationDetail({ params }: PublicationDetailRouteProps) {
    const { slug } = await params;
    const publicationsData = siteData.publications as PublicationsData;

    const publication = publicationsData.items.find(
        (item: PublicationItem) => item.slug === slug || String(item.id) === slug
    );

    if (!publication) {
        notFound();
    }

    return (
        <main >
            <PageTopSection title={publication.title} />
            <PublicationDetailPage publication={publication} />
        </main>
    );
}

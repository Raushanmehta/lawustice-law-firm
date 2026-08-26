import ServiceDetailPage from "@/components/_page/ServiceDetailPage";
import PageTopSection from "@/components/_page/PageTopSection";
import siteData from "@/data/data.json";
import type { ServicesPageData } from "@/types";

const servicesData = siteData.services as ServicesPageData;

interface ServiceDetailRouteProps {
    params: Promise<{ slug: string }>;
}

export default async function ServiceDetail({ params }: ServiceDetailRouteProps) {
    const { slug } = await params;
    const selectedService = servicesData.items.find(
        (service) => service.linkUrl === `/services/${slug}`
    ) ?? servicesData.items[0];
    const detailData = {
        ...servicesData.detail,
        overview: {
            ...servicesData.detail.overview,
            heroImage: selectedService.image,
            titlePart1: selectedService.title,
            titleHighlight: "Legal Support",
            titlePart2: "You Can Trust",
            description: selectedService.description,
            secondaryDescription: `Our attorneys provide focused guidance and dedicated representation for ${selectedService.title.toLowerCase()}.`,
        },
    };

    return (
        <main>
            <PageTopSection title={selectedService.title} />
            <ServiceDetailPage data={detailData} />
        </main>
    );
}
import ServicesChooseusSection from "../_section/ServicesChooseusSection";
import ServiceOurProcessSection from "../_section/ServicesOurProcessSection";
import ServicesOverviewSection from "../_section/ServicesOverviewSection";
import siteData from "@/data/siteData";
import type { ServiceDetailData, ServicesPageData } from "@/types";

interface ServiceDetailPageProps {
    data?: ServiceDetailData;
}

export default function ServiceDetailPage({ data }: ServiceDetailPageProps) {
    const serviceData = data ?? (siteData.services as ServicesPageData).detail;

    return (
        <main>
            <ServicesOverviewSection data={serviceData.overview} />
            <ServicesChooseusSection data={serviceData.chooseUs} />
            <ServiceOurProcessSection data={serviceData.process} />
        </main>
    )
}
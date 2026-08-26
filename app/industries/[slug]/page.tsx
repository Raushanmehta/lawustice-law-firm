import { notFound } from "next/navigation";
import IndustriesBusinessSection from "@/components/_section/IndustriesBusinessSection";
import IndustriesFeaturesSection from "@/components/_section/IndustriesFeaturesSection";
import IndustriesServeSection from "@/components/_section/IndustriesServeSection";
import PageTopSection from "@/components/_page/PageTopSection";
import data from "@/data/data.json";

export function generateStaticParams() {
    return data.industries.items.map((industry) => ({ slug: industry.slug }));
}

interface IndustriesDetailPageProps {
    params: Promise<{ slug: string }>;
}

export default async function IndustriesDetailPage({ params }: IndustriesDetailPageProps) {
    const { slug } = await params;
    const industry = data.industries.items.find((item) => item.slug === slug);

    if (!industry) {
        notFound();
    }

    return (
        <div>
            <PageTopSection title={industry.title} />
            <IndustriesServeSection
                smallHeading="INDUSTRIES WE SERVE"
                title={industry.title}
                description={industry.description}
                imageSrc={industry.image}
                consultationUrl="/contact"
                brochureUrl="/contact"
            />
            <IndustriesFeaturesSection />
            <IndustriesBusinessSection />
        </div>
    )
}
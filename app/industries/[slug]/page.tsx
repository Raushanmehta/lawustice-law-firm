
import IndustriesFeaturesSection from "@/components/_section/IndustriesFeaturesSection";
import IndustriesServeSection from "@/components/_section/IndustriesServeSection";
import PageTopSection from "@/components/PageTopSection";

export default function IndustriesDetailPage() {
    return (
        <div>
            <PageTopSection title="Industries Details" />
            <IndustriesServeSection/>
            <IndustriesFeaturesSection/>

        </div>
    )
}
import AwardsRecognitionSection from "@/components/_section/AwardsRecognitionSection";
import PageTopSection from "@/components/_page/PageTopSection";
import data from "@/data/siteData";

export default function AwardRecognitionPage() {
  return (
    <div>
      <PageTopSection title="Awards & Recognition" />
        <AwardsRecognitionSection data={data.awardsRecognition} />
    </div>
  );
}

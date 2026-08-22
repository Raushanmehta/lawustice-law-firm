import { notFound } from "next/navigation";
import TeamDetailPage from "@/components/_section/_page/TeamDetailPage";
import PageTopSection from "@/components/PageTopSection";
import { teamData } from "@/data/teamData";

interface TeamDetailRouteProps {
    params: Promise<{ slug: string }>;
}

export default async function TeamDetail({ params }: TeamDetailRouteProps) {
    const { slug } = await params;
    const member = teamData.find((teamMember) => teamMember.slug === slug);

    if (!member) {
        notFound();
    }

    return (
        <>
            <PageTopSection title={member.name} />
            <TeamDetailPage {...member} quoteText={member.quote} />
        </>
    );
}
import { notFound } from "next/navigation";
import TeamDetailPage from "@/components/_page/TeamDetailPage";
import PageTopSection from "@/components/_page/PageTopSection";
import siteData from "@/data/siteData";
import { TeamMember } from "@/types";

const teamData: TeamMember[] = siteData.team.members;

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
import { LucideIcon } from "lucide-react";

// ================= HERO SECTION TYPES =================
export interface HeroSlide {
    image: string;
    badge: string;
    titleLine1: string;
    titleLine2: string;
    highlight: string;
    description: string;
    buttonText: string;
    buttonLink: string;
}

// ================= FEATURE CARDS TYPES =================
export interface FeatureCard {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
    bgImage: string;
    variant: "dark" | "gold";
}

// ================= ABOUT SECTION TYPES =================
export interface AboutFeature {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
}

// ================= WHY CHOOSE US SECTION TYPES =================
export interface WhyChooseUsFeature {
    title: string;
    description: string;
    icon: string;
}

export interface WhyChooseUsData {
    tagline: string;
    title: string;
    description: string;
    rightImage: string;
    features: WhyChooseUsFeature[];
}

// ================= STATS SECTION TYPES =================
export interface StatsItem {
    icon: string;
    value: string;
    title: string;
}

export interface StatsSectionData {
    stats: StatsItem[];
}

// ================= OUR APPROACH SECTION TYPES =================
export interface OurApproachStep {
    number: string;
    title: string;
    description: string;
    icon: string;
}

export interface OurApproachData {
    titlePart1: string;
    titlePart2: string;
    subtitle: string;
    steps: OurApproachStep[];
}

// ================= OUR VALUES SECTION TYPES =================
export interface OurValue {
    title: string;
    description: string;
    icon: string;
}

export interface OurValuesData {
    smallHeading: string;
    titlePart1: string;
    titlePart2: string;
    subtitle: string;
    values: OurValue[];
}

// ================= SERVICES SECTION TYPES =================
export interface Service {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
    image: string;
}

// ================= PROCESS SECTION TYPES =================
export interface ProcessStep {
    step: string;
    title: string;
    description: string;
    icon: LucideIcon;
    image: string;
}

// ================= TEAM SECTION TYPES =================
export interface TeamSocial {
    label: string;
    href: string;
}

export interface TeamMember {
    id: number;
    slug: string;
    name: string;
    firstName: string;
    lastName: string;
    role: string;
    specialty: string;
    icon: string;
    image: string;
    bio: string;
    address: string;
    phone: string;
    email: string;
    socials: {
        facebook: string;
        twitter: string;
        linkedin: string;
        emailUrl: string;
    };
    aboutParagraphs: string[];
    quote: string;
    practiceAreas: {
        title: string;
        description: string;
        icon: string;
    }[];
}

export interface TeamSectionData {
    tagline: string;
    title: string;
    highlight: string;
    bgImage: string;
    socials: TeamSocial[];
    members: TeamMember[];
}

// ================= RESULTS SECTION TYPES =================
export interface StatItem {
    id?: number;
    value: string;
    suffix: string;
    label: string;
    icon: string;
}

export interface ResultsSectionData {
    titleLine1: string;
    titleLine2: string;
    highlight: string;
    description: string;
    leftColumnImage?: string;
    rightBgImage?: string;
    stats: StatItem[];
}

// ================= TESTIMONIALS SECTION TYPES =================
export interface TestimonialItem {
    id?: number;
    text: string;
    name: string;
    role: string;
}

export interface TestimonialsSectionData {
    title: string;
    description: string;
    bgImage: string;
    items: TestimonialItem[];
}

// ================= BLOG SECTION TYPES =================
export interface BlogPost {
    id: number;
    title: string;
    description: string;
    image: string;
    date: {
        day: string;
        month: string;
    };
    author: string;
    commentsCount: string;
    slug: string;
}

export interface BlogSectionData {
    tagline: string;
    title: string;
    posts: BlogPost[];
}

// ================= PAGE TOP BANNER TYPES =================
export interface BreadcrumbItem {
    label: string;
    href?: string;
}

export interface PageTopProps {
    title: string;
    subtitle?: string;
    breadcrumbs?: BreadcrumbItem[];
    bgImage?: string;
}

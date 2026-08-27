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
export type OurApproachIcon = "comments" | "search" | "file" | "user" | "shield";

export interface OurApproachStep {
    number: string;
    title: string;
    description: string;
    icon: OurApproachIcon;
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

export interface ServicesPageItem {
    id: number;
    title: string;
    description: string;
    icon: string;
    image: string;
    linkUrl: string;
}

export interface ServicesPageData {
    pageTitle: string;
    tagline: string;
    title: string;
    titleSuffix: string;
    highlight: string;
    description: string;
    learnMoreText: string;
    bgImage: string;
    items: ServicesPageItem[];
    detail: ServiceDetailData;
}

// ================= PROCESS SECTION TYPES =================
export interface ProcessStep {
    step: string;
    title: string;
    description: string;
    icon: LucideIcon;
    image: string;
}

// ================= SERVICE DETAIL PAGE TYPES =================
export interface ServiceDetailPracticeArea {
    title: string;
    description: string;
    icon: string;
}

export interface ServiceDetailOverviewData {
    heroImage: string;
    phoneNumber: string;
    titlePart1: string;
    titleHighlight: string;
    titlePart2: string;
    description: string;
    secondaryDescription: string;
    practiceAreasLabel: string;
    practiceAreasTitle: string;
    practiceAreasHighlight: string;
    practiceAreas: ServiceDetailPracticeArea[];
}

export interface ServiceDetailChooseUsData {
    imageSrc: string;
    smallHeading: string;
    titlePart1: string;
    titlePart2: string;
    items: { text: string }[];
}

export interface ServiceDetailProcessStep {
    step: string;
    title: string;
    description: string;
    icon: string;
}

export interface ServiceDetailFaq {
    question: string;
    answer: string;
}

export interface ServiceDetailPracticeAreaLink {
    title: string;
    url: string;
}

export interface ServiceDetailProcessData {
    processLabel: string;
    processTitle: string;
    processHighlight: string;
    steps: ServiceDetailProcessStep[];
    faqsLabel: string;
    faqsTitle: string;
    faqsHighlight: string;
    faqs: ServiceDetailFaq[];
    relatedTitle: string;
    practiceAreas: ServiceDetailPracticeAreaLink[];
}

export interface ServiceDetailData {
    overview: ServiceDetailOverviewData;
    chooseUs: ServiceDetailChooseUsData;
    process: ServiceDetailProcessData;
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

// ================= AWARDS SECTION TYPES =================
export interface AwardItem {
    year: string;
    title: string;
    organization: string;
    category: string;
    icon: string;
}

export interface AwardTimelineYear {
    year: string;
    achievements: { title: string; org: string }[];
}

export interface AwardStat {
    value: string;
    label: string;
    description: string;
    icon: string;
}

export interface AwardsRecognitionSectionData {
    featured: {
        image: string;
        year: string;
        title: string;
        organization: string;
        description: string;
        link: string;
    };
    recentTitle: string;
    recentAwards: AwardItem[];
    stats: AwardStat[];
    timelineTitle: string;
    timelineData: AwardTimelineYear[];
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

// ================= FAQ PAGE TYPES =================
export interface FaqCategory {
    name: string;
    count: string;
    icon: string;
}

export interface FaqQuestion {
    question: string;
    answer: string;
    category: string;
}

export interface FaqPageData {
    categories: FaqCategory[];
    faqs: FaqQuestion[];
    smallHeading: string;
    title: string;
    description: string;
    contactUrl: string;
    phoneNumber: string;
    emailAddress: string;
    officeHours: string;
}

// ================= CAREER JOB SECTION TYPES =================
export interface CareerJobData {
    backUrl: string;
    jobTitle: string;
    location: string;
    jobType: string;
    experience: string;
    postedDate: string;
    overviewText: string;
    responsibilities: string[];
    whatWeLookingFor: string[];
    preferredQualifications: string[];
}

// ================= OFFICE LOCATIONS & CONTACT TYPES =================
export interface OfficeLocation {
    cityName: string;
    city?: string;
    addressLine1?: string;
    addressLine2?: string;
    address?: string;
    phone: string;
    email: string;
    imageSrc?: string;
}

export interface OfficeLocationsData {
    pageTitle: string;
    sectionTitle: string;
    locations: OfficeLocation[];
}

export interface ContactInfoItem {
    label: string;
    lines?: string[];
    numbers?: string[];
    emails?: string[];
    hours?: string[];
}

export interface ContactGetInTouch {
    title: string;
    description: string;
    headOffice: ContactInfoItem;
    phone: ContactInfoItem;
    email: ContactInfoItem;
    workingHours: ContactInfoItem;
}

export interface ContactFormData {
    title: string;
    subtitle: string;
    buttonText: string;
    securityNote: string;
}

export interface ContactOfficesSection {
    title: string;
    mapImageSrc: string;
}

export interface ContactPageData {
    form: ContactFormData;
    getInTouch: ContactGetInTouch;
    officesSection: ContactOfficesSection;
}

export interface ContactPageSectionProps {
    offices?: OfficeLocation[];
    mapImageSrc?: string;
    onSubmitForm?: (e: React.FormEvent<HTMLFormElement>) => void;
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

// ================= LEGAL PAGE TYPES =================
export interface TermsItem {
    number: string;
    title: string;
    content: string;
}

export interface LegalPageData {
    contactUrl: string;
    acknowledgementText: string;
    assistanceTitle: string;
    assistanceDescription: string;
    buttonText: string;
    terms: TermsItem[];
    privacyPolicyTerms: TermsItem[];
    disclaimerTerms: TermsItem[];
}

// ================= BOOK CONSULTATION TYPES =================
export interface SelectOption {
    value: string;
    label: string;
}

export interface ConsultationSidebarItem {
    title: string;
    subtitle: string;
    description: string;
}

export interface ConsultationFeatureItem {
    title: string;
    description: string;
}

export interface BookConsultationData {
    pageTitle: string;
    title: string;
    description: string;
    formLabels: {
        fullName: string;
        fullNamePlaceholder: string;
        emailAddress: string;
        emailPlaceholder: string;
        phoneNumber: string;
        phonePlaceholder: string;
        preferredDate: string;
        preferredTime: string;
        practiceArea: string;
        caseDescription: string;
        caseDescriptionPlaceholder: string;
        referralSource: string;
        termsText: string;
        buttonText: string;
        securityNote: string;
    };
    timeOptions: SelectOption[];
    practiceAreaOptions: SelectOption[];
    referralOptions: SelectOption[];
    sidebar: {
        title: string;
        items: ConsultationSidebarItem[];
        immediateAssistance: {
            title: string;
        };
    };
    whyConsult: {
        title: string;
        features: ConsultationFeatureItem[];
    };
}


// ================= NEED LEGAL ASSISTANCE TYPES =================
export interface NeedLegalData {
    tagline: string;
    title: string;
    titleHighlight: string;
    description: string;
    buttonText: string;
    leftColumnImage: string;
    rightBgImage: string;
}

// ================= EVENTS TYPES =================
export interface EventSpeaker {
    name: string;
    role: string;
    image: string;
    bio: string;
    linkedin?: string;
    email?: string;
}

export interface EventTimelineItem {
    time: string;
    title: string;
    description: string;
}

export interface EventItem {
    id: number;
    slug?: string;
    category?: string;
    title: string;
    date: string;
    time: string;
    location: string;
    author?: string;
    readTime?: string;
    description: string;
    fullDescription?: string;
    image?: string;
    iconType?: "file" | "laptop" | "calendar" | "shield" | "user" | string;
    speaker?: string;
    speakers?: EventSpeaker[];
    timeline?: EventTimelineItem[];
    agenda?: string[];
    linkUrl?: string;
}

export interface EventsData {
    title: string;
    description: string;
    items: EventItem[];
}

// ================= PUBLICATIONS TYPES =================
export interface PublicationLegalFrameworkItem {
    id: number;
    title: string;
    description: string;
}

export interface PublicationRelated {
    id: number;
    title: string;
    date: string;
    category: string;
    href: string;
}

export interface PublicationItem {
    id: number;
    slug: string;
    badge?: string;
    title: string;
    date: string;
    category: string;
    readTime?: string;
    image?: string;
    imageAlt?: string;
    description: string;
    intro?: string;
    introduction?: string;
    recentDevelopments?: string;
    conclusion?: string;
    legalFramework?: PublicationLegalFrameworkItem[];
    pdf?: {
        name: string;
        size: string;
        href: string;
    };
    relatedPublications?: PublicationRelated[];
}

export interface PublicationsData {
    title: string;
    description: string;
    items: PublicationItem[];
}

// ================= LEGAL UPDATES TYPES =================
export interface LegalUpdateItem {
    id: number;
    title: string;
    date: string;
    category: string;
    summary: string;
}

export interface LegalUpdatesData {
    title: string;
    description: string;
    items: LegalUpdateItem[];
}

// ================= SITEMAP TYPES =================
export interface SitemapLink {
    name: string;
    href: string;
}

export interface SitemapCategory {
    category: string;
    links: SitemapLink[];
}

export interface SitemapData {
    title: string;
    description: string;
    sections: SitemapCategory[];
}

// ================= CASE STUDIES TYPES =================
export interface CaseStudyMetaItem {
    label: string;
    value: string;
    icon: string;
}

export interface CaseStudyApproachItem {
    title: string;
}

export interface CaseStudyResultItem {
    value: string;
    label: string;
}

export interface CaseStudyHighlightItem {
    title: string;
    description: string;
    icon: string;
}

export interface CaseStudyRelated {
    slug: string;
    category: string;
    title: string;
    description: string;
    image: string;
}

export interface CaseStudyItem {
    id: number;
    slug: string;
    category: string;
    title: string;
    description: string;
    image: string;
    overview: string;
    challenge: string;
    approachText: string;
    approachItems: CaseStudyApproachItem[];
    resultText: string;
    resultItems: CaseStudyResultItem[];
    testimonial: string;
    testimonialAuthor: string;
    metaItems: CaseStudyMetaItem[];
    highlightItems: CaseStudyHighlightItem[];
    relatedCaseStudies: CaseStudyRelated[];
}

export interface CaseStudiesData {
    title: string;
    description: string;
    items: CaseStudyItem[];
}

// ================= MASTER SITE DATA INTERFACE =================
export interface SiteData {
    topNavbar: {
        phone: string;
        email: string;
        address: string;
        socials: { label: string; href: string }[];
    };
    navbar: {
        logo: string;
        phone: string;
        phoneLabel: string;
        navItems: { name: string; href: string; dropdown?: { name: string; href: string }[] }[];
    };
    hero: {
        slides: HeroSlide[];
    };
    featureCards: FeatureCard[];
    about: {
        tagline: string;
        title: string;
        description: string;
        image: string;
        features: AboutFeature[];
    };
    whyChooseUs: WhyChooseUsData;
    statsSection: StatsSectionData;
    ourApproach: OurApproachData;
    ourValues: OurValuesData;
    services: ServicesPageData;
    industries: {
        titlePart1: string;
        titlePart2: string;
        description: string;
        items: {
            id: number;
            slug: string;
            title: string;
            description: string;
            image: string;
            features: string[];
            fullContent: string;
        }[];
    };
    team: TeamSectionData;
    awardsRecognition: AwardsRecognitionSectionData;
    faqsPage: FaqPageData;
    careersJob: CareerJobData;
    officeLocations: OfficeLocationsData;
    contactPage: ContactPageData;
    results: ResultsSectionData;
    testimonials: TestimonialsSectionData;
    blog: BlogSectionData;
    footer: {
        logo: string;
        tagline: string;
        practiceAreas: string[];
        usefulLinks: { label: string; href: string }[];
        contacts: { icon: string; value: string[] }[];
        socials: TeamSocial[];
        copyright: string;
    };
    legalPage: LegalPageData;
    bookConsultation: BookConsultationData;
    needLegal: NeedLegalData;
    events: EventsData;
    publications: PublicationsData;
    legalUpdates: LegalUpdatesData;
    caseStudies: CaseStudiesData;
    sitemap: SitemapData;
}


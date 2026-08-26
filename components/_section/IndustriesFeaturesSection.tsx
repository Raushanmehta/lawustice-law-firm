import React from "react";
import { 
    FaUsers, 
    FaShieldAlt, 
    FaHandshake, 
    FaCheckCircle 
} from "react-icons/fa";

interface FeatureItem {
    title: string;
    description: string;
    icon?: React.ReactNode;
}

interface IndustriesFeaturesSectionProps {
    features?: FeatureItem[];
}

export default function IndustriesFeaturesSection({
    features = [
        {
            title: "Business-Focused Approach",
            description: "Practical legal solutions aligned with your business objectives.",
            icon: <FaUsers className="h-7 w-7 text-[#d9983b]" />
        },
        {
            title: "Experienced Attorneys",
            description: "A dedicated team with deep expertise in corporate and commercial law.",
            icon: <FaShieldAlt className="h-7 w-7 text-[#d9983b]" />
        },
        {
            title: "End-to-End Support",
            description: "From day-to-day matters to complex transactions, we're with you every step.",
            icon: <FaHandshake className="h-7 w-7 text-[#d9983b]" />
        },
        {
            title: "Proven Track Record",
            description: "Trusted by businesses across industries to deliver results that matter.",
            icon: <FaCheckCircle className="h-7 w-7 text-[#d9983b]" />
        }
    ]
}: IndustriesFeaturesSectionProps) {
    const featureIcons = [
        <FaUsers key="users" className="h-7 w-7 text-[#d9983b]" />,
        <FaShieldAlt key="shield" className="h-7 w-7 text-[#d9983b]" />,
        <FaHandshake key="handshake" className="h-7 w-7 text-[#d9983b]" />,
        <FaCheckCircle key="check" className="h-7 w-7 text-[#d9983b]" />,
    ];

    return (
        <section className="relative overflow-hidden bg-[#fdfbf7] px-5 py-16 sm:px-10 sm:py-20 md:px-16 lg:px-20 xl:px-24">
    <div className="mx-auto ">

        <div className="rounded-2xl border border-[#162340] bg-[#070f22] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.25)] sm:p-12">

            <div className="grid grid-cols-1 items-stretch gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-[#1b2b4c]">

                {features.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col ${
                            index !== 0 ? "lg:pl-8" : ""
                        } ${
                            index !== features.length - 1 ? "lg:pr-8" : ""
                        }`}
                    >
                        {/* Icon Left + Title Right */}
                        <div className="flex items-start gap-4">

                            {/* Icon */}
                            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#d9983b]/50 bg-[#0b1429] shadow-[0_0_15px_rgba(217,152,59,0.2)]">
                                {item.icon ?? featureIcons[index % featureIcons.length]}
                            </div>

                            {/* Title + Underline */}
                            <div className="min-w-0 space-y-2">
                                <h3 className="font-serif text-lg leading-snug text-white sm:text-xl">
                                    {item.title}
                                </h3>

                                <div className="flex items-center gap-1">
                                    <span className="h-[2px] w-5 bg-[#4a5568]" />
                                    <span className="h-[2px] w-7 bg-[#d9983b]" />
                                </div>
                            </div>
                        </div>

                        {/* Description - Below */}
                        <p className="mt-5 text-xs leading-relaxed text-gray-300 sm:text-sm">
                            {item.description}
                        </p>
                    </div>
                ))}

            </div>

        </div>
    </div>
</section>
    );
}
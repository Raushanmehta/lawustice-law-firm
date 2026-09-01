import React from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FadeUp } from "@/components/ui/AnimationWrapper";

interface OfficeLocationCardProps {
    cityName?: string;
    addressLine1?: string;
    addressLine2?: string;
    phone?: string;
    email?: string;
    imageSrc?: string;
}

export default function OfficeLocationCard({
    cityName = "Delhi",
    addressLine1 = "N-45, Connaught Place,",
    addressLine2 = "New Delhi – 110001",
    phone = "+91 11 4356 0000",
    email = "delhi@lawfirm.com",
    imageSrc = "/images/delhi-landmark.png"
}: OfficeLocationCardProps) {
    return (
        <FadeUp>
        <div className="group relative w-full h-full overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-[#f0ebde] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)]">
            
            {/* ================= TOP BANNER IMAGE ================= */}
            <div className="relative h-52 w-full overflow-hidden bg-[#0b1329]">
                <Image
                    src={imageSrc}
                    alt={cityName}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* ================= CARD CONTENT ================= */}
            <div className="p-4 sm:p-6 space-y-2">
                
                {/* City Title & Golden Underline */}
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[#d9983b]">
                        <FaMapMarkerAlt className="h-4 w-4 shrink-0" />
                        <h3 className="font-serif text-2xl font-medium text-[#0b1329]">
                            {cityName}
                        </h3>
                    </div>
                    {/* Golden Underline */}
                    <div className="h-[2px] w-12 bg-[#d9983b]" />
                </div>

                {/* Address Details */}
                <div className="text-md sm:text-md leading-relaxed text-gray-600 space-y-0.5">
                    <p>{addressLine1}</p>
                    <p>{addressLine2}</p>
                </div>

                {/* Contact Info (Phone & Email) */}
                <div className="space-y-3 pt-4 border-t border-[#f0ebde]">
                    
                    {/* Phone */}
                    <div className="flex items-center gap-3">
                        <FaPhoneAlt className="h-3.5 w-3.5 text-[#d9983b] shrink-0" />
                        <a
                            href={`tel:${phone.replace(/\s+/g, "")}`}
                            className="text-xs sm:text-sm font-medium text-gray-700 transition-colors hover:text-[#d9983b]"
                        >
                            {phone}
                        </a>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-3">
                        <FaEnvelope className="h-3.5 w-3.5 text-[#d9983b] shrink-0" />
                        <a
                            href={`mailto:${email}`}
                            className="text-xs sm:text-sm font-medium text-gray-700 transition-colors hover:text-[#d9983b]"
                        >
                            {email}
                        </a>
                    </div>

                </div>

            </div>

        </div>
        </FadeUp>
    );
}
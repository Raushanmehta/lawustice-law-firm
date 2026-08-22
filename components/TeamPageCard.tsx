"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import type { TeamMember } from "@/types";

interface TeamPageCardProps {
    member: TeamMember;
}

export default function TeamPageCard({ member }: TeamPageCardProps) {
    const router = useRouter();
    const profilePath = `/team/${member.slug}`;

    const openProfile = () => router.push(profilePath);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openProfile();
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                duration: 0.6,
                ease: "easeOut",
            }}
            whileHover={{ y: -8 }}
            role="link"
            tabIndex={0}
            onClick={openProfile}
            onKeyDown={handleKeyDown}
            className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300"
        >
            {/* Image */}
            <div className="relative h-[250px] w-full overflow-hidden">
                <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="font-serif text-2xl font-base text-[#0d131a]">
                    {member.name}
                </h3>

                <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-[#d9983b]">
                    {member.role}
                </p>


               <div className="my-3 h-0.5 w-10 bg-[#d9983b]" />

                <p className="mb-6 flex-grow text-sm leading-relaxed font-base text-slate-800">
                    {member.bio}
                </p>

                <div className="mt-5 flex items-center gap-2.5">
                    <a
                        href={member.socials.facebook}
                        onClick={(event) => event.stopPropagation()}
                        aria-label={`${member.name} on Facebook`}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-800 transition hover:bg-[#d9983b] hover:text-white"
                    >
                        <FaFacebookF className="h-4 w-4" />
                    </a>
                    <a
                        href={member.socials.twitter}
                        onClick={(event) => event.stopPropagation()}
                        aria-label={`${member.name} on Twitter`}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-800 transition hover:bg-[#d9983b] hover:text-white"
                    >
                        <FaTwitter className="h-4 w-4" />
                    </a>
                    <a
                        href={member.socials.linkedin}
                        onClick={(event) => event.stopPropagation()}
                        aria-label={`${member.name} on LinkedIn`}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-800 transition hover:bg-[#d9983b] hover:text-white"
                    >
                        <FaLinkedinIn className="h-4 w-4" />
                    </a>
                    <a
                        href={member.socials.emailUrl}
                        onClick={(event) => event.stopPropagation()}
                        aria-label={`Email ${member.name}`}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-800 transition hover:bg-[#d9983b] hover:text-white"
                    >
                        <MdMailOutline className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
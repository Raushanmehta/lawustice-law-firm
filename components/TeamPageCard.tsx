"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LiaLinkedin } from "react-icons/lia";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";


export default function TeamPageCard() {
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
            className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300"
        >
            {/* Image */}
            <div className="relative h-[300px] w-full overflow-hidden">
                <Image
                    src="/images/team/team-1.jpg"
                    alt="Team Member"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="p-5 text-center">
                <h3 className="font-serif text-2xl font-semibold text-[#0d131a]">
                    John Doe
                </h3>

                <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-[#d9983b]">
                    role
                </p>


                <div className="mx-auto my-3 h-0.5 w-10 bg-[#d9983b]" />

                <p className="mb-6 flex-grow text-sm lg:text-md leading-relaxed text-slate-400">
                    Description
                </p>

                {/* Social Icons */}
                <div className="flex justify-center gap-2.5">
                    <a
                        href="#"
                        aria-label="LinkedIn"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-800 transition hover:bg-[#d9983b] hover:text-white"
                    >
                        <LiaLinkedin className="h-4 w-4" />
                    </a>

                    <a
                        href="#"
                        aria-label="Instagram"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-800 transition hover:bg-[#d9983b] hover:text-white"
                    >
                        <BsInstagram className="h-4 w-4" />
                    </a>

                    <a
                        href="#"
                        aria-label="Facebook"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-800 transition hover:bg-[#d9983b] hover:text-white"
                    >
                        <FaFacebook className="h-4 w-4" />
                    </a>

                    <a
                        href="#"
                        aria-label="Twitter"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-800 transition hover:bg-[#d9983b] hover:text-white"
                    >
                        <BsTwitter className="h-4 w-4" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
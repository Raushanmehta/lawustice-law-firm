"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaBalanceScale,
  FaChild,
  FaFileContract,
  FaHome,
  FaHandHoldingHeart,
  FaQuoteLeft,
} from "react-icons/fa";
import { GoLaw } from "react-icons/go";

interface PracticeArea {
  title: string;
  description: string;
  icon: React.ReactNode | string;
}

interface TeamDetailPageProps {
  image: string;
  specialty: string;
  firstName: string;
  lastName: string;
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
  quoteText: string;
  practiceAreas: PracticeArea[];
}

const practiceAreaIcons: Record<string, React.ReactNode> = {
  balance: <FaBalanceScale className="h-8 w-8 text-[#d9983b]" />,
  child: <FaChild className="h-8 w-8 text-[#d9983b]" />,
  contract: <FaFileContract className="h-8 w-8 text-[#d9983b]" />,
  home: <FaHome className="h-8 w-8 text-[#d9983b]" />,
  heart: <FaHandHoldingHeart className="h-8 w-8 text-[#d9983b]" />,
  money: <span className="font-serif text-lg font-bold text-[#d9983b]">$</span>,
};

export default function TeamDetailPage({
  image,
  specialty,
  firstName,
  lastName,
  bio,
  address,
  phone,
  email,
  socials,
  aboutParagraphs,
  quoteText,
  practiceAreas,
}: TeamDetailPageProps) {
  return (
    <div className="bg-[#fdfbf7]">
      {/* ================= PART 1: ATTORNEY PROFILE SECTION ================= */}
      <section className="relative px-5 py-16 sm:px-10 sm:py-20 md:px-16 lg:px-20 xl:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* LEFT: Portrait Image */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-6"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.12)]">
                <Image
                  src={image}
                  alt={`${firstName} ${lastName}`}
                  className="h-[700px] w-full object-cover sm:h-[800px]"
                  height={1000}
                  width={800}
                />
              </div>
            </motion.div>

            {/* RIGHT: Details & Info */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="flex flex-col lg:col-span-6 space-y-6"
            >
              <div className="space-y-3">
                <span className="text-sm font-semibold uppercase tracking-widest text-[#d9983b]">
                  {specialty}
                </span>

                <div className="flex flex-col mt-4 sm:flex-row sm:items-center gap-4">
                  <h1 className="font-serif text-3xl font-normal leading-[1.15] tracking-tight text-black sm:text-5xl md:text-5xl lg:text-6xl">
                    {firstName}{" "}
                    <span className="font-serif text-[#d9983b]">
                      {lastName}
                    </span>
                  </h1>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <span className="h-px w-12 bg-[#d9983b]" />
                  <GoLaw className="h-5 w-5 text-[#d9983b]" />
                  <span className="h-px w-12 bg-[#d9983b]" />
                </div>

                <p className="pt-2 mx-auto max-w-xl text-sm leading-relaxed sm:text-base text-slate-800">
                  {bio}
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3 pt-1">
                <a
                  href={socials.facebook}
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-white border border-[#e6dec9] text-gray-700 shadow-sm transition-all hover:bg-[#d9983b] hover:text-white hover:border-[#d9983b]"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="h-6 w-6" />
                </a>
                <a
                  href={socials.twitter}
                  className="flex  h-16 w-16 items-center justify-center rounded-full bg-white border border-[#e6dec9] text-gray-700 shadow-sm transition-all hover:bg-[#d9983b] hover:text-white hover:border-[#d9983b]"
                  aria-label="Twitter"
                >
                  <FaTwitter className="h-6 w-6" />
                </a>
                <a
                  href={socials.linkedin}
                  className="flex  h-16 w-16 items-center justify-center rounded-full bg-white border border-[#e6dec9] text-gray-700 shadow-sm transition-all hover:bg-[#d9983b] hover:text-white hover:border-[#d9983b]"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="h-6 w-6" />
                </a>
                <a
                  href={socials.emailUrl}
                  className="flex  h-16 w-16 items-center justify-center rounded-full bg-white border border-[#e6dec9] text-gray-700 shadow-sm transition-all hover:bg-[#d9983b] hover:text-white hover:border-[#d9983b]"
                  aria-label="Email"
                >
                  <FaEnvelope className="h-6 w-6" />
                </a>
              </div>

              {/* Contact Info List */}
              <div className="mt-4 divide-y divide-[#ece4d0] border-t border-b border-[#ece4d0]">
                <div className="flex items-center justify-between py-4">
                  <div className="flex items-center gap-6 text-gray-900 font-medium">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0b1329] text-[#d9983b]">
                      <FaMapMarkerAlt className="h-6 w-6" />
                    </div>
                    <span className="text-md sm:text-lg">Address</span>
                  </div>
                  <div className="text-right text-md sm:text-lg text-gray-600 whitespace-pre-line">
                    {address}
                  </div>
                </div>

                <div className="flex items-center justify-between py-4">
                  <div className="flex items-center gap-6 text-gray-900 font-medium">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0b1329] text-[#d9983b]">
                      <FaPhoneAlt className="h-6 w-6" />
                    </div>
                    <span className="text-md sm:text-lg">Phone Number</span>
                  </div>
                  <a
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="text-md sm:text-lg text-gray-600 transition-colors hover:text-[#d9983b]"
                  >
                    {phone}
                  </a>
                </div>

                <div className="flex items-center justify-between py-4">
                  <div className="flex items-center gap-6 text-gray-900 font-medium">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0b1329] text-[#d9983b]">
                      <FaEnvelope className="h-6 w-6" />
                    </div>
                    <span className="text-md sm:text-lg">Email</span>
                  </div>
                  <a
                    href={`mailto:${email}`}
                    className="text-md sm:text-lg text-gray-600 transition-colors hover:text-[#d9983b]"
                  >
                    {email}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= PART 2: ABOUT & PRACTICE AREAS SECTION ================= */}
      <section className="relative px-5 pb-16 sm:px-10 sm:pb-20 md:px-16 lg:px-20 xl:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16 items-stretch">
            {/* LEFT CARD: About & Quote (Changed to lg:col-span-6) */}
            <div className="flex flex-col justify-between rounded-2xl bg-white p-8 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-[#f0ebde] lg:col-span-6">
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-4xl sm:text-5xl text-[#0b1329]">
                    About{" "}
                    <span className="font-serif text-[#d9983b]">
                      {firstName} {lastName}
                    </span>
                  </h2>
                  <div className="mt-3 h-[2px] w-12 bg-[#d9983b]" />
                </div>

                <div className="space-y-4 text-sm leading-relaxed sm:text-base text-slate-800">
                  {aboutParagraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-xl bg-[#081225] p-6 sm:p-8 text-white relative overflow-hidden shadow-md">
                <FaQuoteLeft className="absolute -top-3 -left-3 h-16 w-16 text-[#132242] opacity-50 pointer-events-none" />
                <p className="relative z-10 text-md sm:text-sm italic leading-relaxed text-gray-200">
                  {quoteText}
                </p>
                <div className="mt-4 text-right">
                  <span className="text-sm sm:text-sm font-medium tracking-wide text-[#d9983b]">
                    — {firstName} {lastName}
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT CARD: Practice Areas Grid (Changed to lg:col-span-6) */}
            <div className="rounded-2xl bg-white p-8 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-[#f0ebde] lg:col-span-6 flex flex-col justify-between">
              {/* Heading */}
              <div>
                <h2 className="font-serif text-3xl text-[#0b1329] sm:text-5xl">
                  Practice Areas
                </h2>

                <div className="mt-3 h-[2px] w-12 bg-[#d9983b]" />
              </div>

              {/* Grid */}
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {practiceAreas.map((area, index) => (
                  <div key={index} className="border-t border-[#f0ebde] py-4">
                    {/* Icon + Title */}
                    <div className="flex items-center gap-2">
                      {/* Icon */}
                      <div className="flex h-18 w-18 shrink-0 items-center justify-center rounded-full border border-[#f5eddce6] bg-[#fdfaf3]">
                        {typeof area.icon === "string"
                          ? practiceAreaIcons[area.icon]
                          : area.icon}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg text-[#0b1329] sm:text-xl">
                        {area.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className=" pl-20 text-sm leading-relaxed text-slate-600 sm:text-base">
                      {area.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

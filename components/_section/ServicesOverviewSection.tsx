"use client";

import React from "react";
import Image from "next/image";
import {
  FaFileContract,
  FaHome,
  FaUserShield,
  FaBriefcase,
  FaHandHoldingUsd,
  FaUsers,
} from "react-icons/fa";
import type { ServiceDetailOverviewData } from "@/types";
import { BiSolidPhoneCall } from "react-icons/bi";
import { motion } from "framer-motion";

interface ServicesOverviewSectionProps {
  data: ServiceDetailOverviewData;
  onSubmitForm?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const practiceAreaIcons: Record<string, React.ReactNode> = {
  contract: <FaFileContract className="h-6 w-6 text-[#d9983b]" />,
  property: <FaHome className="h-6 w-6 text-[#d9983b]" />,
  tort: <FaUserShield className="h-6 w-6 text-[#d9983b]" />,
  business: <FaBriefcase className="h-6 w-6 text-[#d9983b]" />,
  debt: <FaHandHoldingUsd className="h-6 w-6 text-[#d9983b]" />,
  employment: <FaUsers className="h-6 w-6 text-[#d9983b]" />,
};

export default function ServicesOverviewSection({
  data,
  onSubmitForm = (e) => e.preventDefault(),
}: ServicesOverviewSectionProps) {
  const { heroImage, phoneNumber, practiceAreas } = data;
  return (
    <section className="relative bg-[#fdfbf7] px-5 py-16 sm:px-10 sm:py-20 md:px-16 lg:px-20 xl:px-24">
      <div className="mx-auto ">
        {/* Main Wrapper Grid (Left Content vs Right Sidebar Form) */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12 items-start">
          {/* ================= LEFT MAIN CONTENT (Col Span 8) ================= */}
          <div className="flex flex-col lg:col-span-8 space-y-10">
            {/* Top Overview & Image Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Overview Text Block */}
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="md:col-span-7 space-y-4"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-[#d9983b]">
                  OVERVIEW
                </span>

                <h1 className="font-serif text-3xl sm:text-3xl lg:text-4xl text-[#0b1329] leading-tight">
                  {data.titlePart1} <br />
                  {data.titleHighlight}{" "}
                  <span className="text-[#d9983b]">{data.titlePart2}</span>
                </h1>

                <div className="h-0.5 w-12 bg-[#d9983b]" />

                <p className="text-xs sm:text-sm leading-relaxed text-gray-600 pt-2">
                  {data.description}
                </p>

                <p className="text-xs sm:text-sm leading-relaxed text-gray-600">
                  {data.secondaryDescription}
                </p>
              </motion.div>

              {/* Overview Image Card */}
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
                className="md:col-span-5"
              >
                <div className="relative h-[280px] sm:h-[360px] lg:h-[320px] w-full overflow-hidden rounded-2xl border border-[#f0ebde]">
                  <Image
                    src={heroImage}
                    alt="Civil Litigation Attorney Writing"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </motion.div>
            </div>
            {/* What We Handle Section */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-8 border-t border-gray-200"
            >
              {/* Section Header */}
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#d9983b]">
                  {data.practiceAreasLabel}
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl text-[#0b1329]">
                  {data.practiceAreasTitle}{" "}
                  <span className="text-[#d9983b]">
                    {data.practiceAreasHighlight}
                  </span>
                </h2>
              </div>

              {/* 3x2 Practice Areas Grid */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {practiceAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                      ease: "easeOut",
                    }}
                    className="flex items-start gap-4"
                  >
                    {/* Circular Icon - Left */}
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#f5eddce6] bg-white shadow-sm">
                      {practiceAreaIcons[area.icon]}
                    </div>

                    {/* Title + Description - Right */}
                    <div className="min-w-0 space-y-1">
                      <h3 className="font-serif font-medium text-xl text-[#0b1329]">
                        {area.title}
                      </h3>

                      <p className="text-sm leading-relaxed text-gray-600">
                        {area.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ================= RIGHT SIDEBAR FORM (Col Span 4) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-4 min-h-[620px] rounded-2xl bg-[#081225] p-6 sm:min-h-[720px] sm:p-8 text-white shadow-xl border border-[#162340]"
          >
            {/* Form Header */}
            <div className="space-y-2 mb-6">
              <h3 className="font-serif text-3xl text-white">
                Need Legal Assistance?
              </h3>
              <h4 className="font-serif text-3xl text-[#d9983b]">
                We’re Here To Help.
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed pt-1">
                Fill out the form below and our team will get back to you
                shortly.
              </p>
            </div>

            {/* Consultation Form */}
            <form onSubmit={onSubmitForm} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full rounded-md bg-[#0e1b36] border border-[#1f3159] px-4 py-3 text-xs text-white placeholder-gray-400 focus:border-[#d9983b] focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full rounded-md bg-[#0e1b36] border border-[#1f3159] px-4 py-3 text-xs text-white placeholder-gray-400 focus:border-[#d9983b] focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="w-full rounded-md bg-[#0e1b36] border border-[#1f3159] px-4 py-3 text-xs text-white placeholder-gray-400 focus:border-[#d9983b] focus:outline-none"
                />
              </div>
              <div>
                <select
                  defaultValue=""
                  required
                  className="w-full rounded-md bg-[#0e1b36] border border-[#1f3159] px-4 py-3 text-xs text-gray-400 focus:border-[#d9983b] focus:outline-none"
                >
                  <option value="" disabled>
                    Practice Area
                  </option>
                  <option value="civil">Civil Litigation</option>
                  <option value="family">Family Law</option>
                  <option value="criminal">Criminal Defense</option>
                  <option value="corporate">Corporate Law</option>
                </select>
              </div>
              <div>
                <textarea
                  rows={3}
                  placeholder="Brief Details Of Your Case"
                  required
                  className="w-full rounded-md bg-[#0e1b36] border border-[#1f3159] px-4 py-3 text-xs text-white placeholder-gray-400 focus:border-[#d9983b] focus:outline-none resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-md bg-[#d9983b] px-6 py-4 text-xs font-semibold tracking-wider text-[#081225] shadow-md transition-all duration-300 hover:bg-[#c28530]"
              >
                <span>REQUEST A CONSULTATION</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </form>

            {/* Direct Phone Call Card Box */}
            <div className="mt-6 rounded-xl border border-[#d9983b] p-4 flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#081225] border border-[#d9983b] text-[#d9983b]">
                <BiSolidPhoneCall className="h-8 w-8" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[11px]  tracking-wider text-[#d9983b] block">
                  Or Call Us Directly
                </span>
                <a
                  href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
                  className=" text-lg font-semibold text-white transition-colors hover:text-[#d9983b] block"
                >
                  {phoneNumber}
                </a>
                <span className="text-[10px] text-gray-400 block">
                  Available 24/7 For Your Support
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

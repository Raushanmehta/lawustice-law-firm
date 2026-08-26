"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { FaqPageData } from "@/types/sections";

import {
  FaBriefcase,
  FaBalanceScale,
  FaUsers,
  FaGavel,
  FaHome,
  FaFileContract,
  FaLightbulb,
  FaPlus,
  FaMinus,
  FaComments,
  FaArrowRight,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

interface FaqPageProps {
  data: FaqPageData;
}

export default function FaqPageSection({ data }: FaqPageProps) {
  const { categories, faqs, smallHeading, title, description, contactUrl, phoneNumber, emailAddress, officeHours } = data;
  const categoryIcons = {
    briefcase: FaBriefcase,
    balance: FaBalanceScale,
    users: FaUsers,
    gavel: FaGavel,
    home: FaHome,
    contract: FaFileContract,
    lightbulb: FaLightbulb,
  };
  const [selectedCategory, setSelectedCategory] = useState("All Questions");

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const filteredFaqs =
    selectedCategory === "All Questions"
      ? faqs
      : faqs.filter((faq) => faq.category === selectedCategory);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <section className="relative px-5 py-16 sm:px-10 sm:py-20 md:px-16 lg:px-20 xl:px-24">
      <div className="mx-auto ">
        {/* ================= FAQ MAIN SECTION ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12"
        >
          {/* ================= LEFT SIDEBAR ================= */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-4 rounded-2xl border border-[#f0ebde] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] sm:p-8 lg:col-span-5"
          >
            {/* Header */}
            <div className="space-y-1 border-b border-[#f0ebde] pb-3">
              <h3 className="font-serif text-2xl  text-[#0b1329] sm:text-3xl">
                Browse by Category
              </h3>

              <div className="h-[2px] w-10 bg-[#d9983b]" />
            </div>

            {/* Category List */}
            <div className="space-y-1.5">
              {categories.map((cat, index) => {
                const isActive = selectedCategory === cat.name;

                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(cat.name);
                      setOpenFaqIndex(0);
                    }}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-sm font-medium transition-all duration-200 sm:text-base ${
                      isActive
                        ? "border-l-4 border-[#d9983b] bg-[#fdf8f0] font-semibold text-[#0b1329] shadow-sm"
                        : "text-gray-600 hover:bg-gray-50 hover:text-[#0b1329]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={
                          isActive ? "text-[#d9983b]" : "text-gray-400 text-lg"
                        }
                      >
                        {(() => {
                          const Icon = categoryIcons[cat.icon as keyof typeof categoryIcons] ?? FaBriefcase;
                          return <Icon className="h-4 w-4" />;
                        })()}
                      </span>

                      <span>{cat.name}</span>
                    </div>

                    <span
                      className={`rounded-md px-2.5 py-1 text-xs ${
                        isActive
                          ? "bg-[#d9983b]/15 text-[#d9983b]"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* ================= RIGHT FAQ CONTENT ================= */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6 lg:col-span-7"
          >
            {/* Section Header */}
            <div className="space-y-1 border-b border-[#f0ebde] pb-3">
              <h2 className="font-serif text-2xl text-[#0b1329] sm:text-3xl">
                {selectedCategory}
              </h2>

              <div className="h-[2px] w-12 bg-[#d9983b]" />
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => {
                  const isOpen = openFaqIndex === index;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
                      className={`overflow-hidden rounded-xl border bg-white transition-all duration-300 ${
                        isOpen
                          ? "border-[#d9983b]/60 bg-[#fffdf9] shadow-md"
                          : "border-[#f0ebde] shadow-sm"
                      }`}
                    >
                      {/* Question */}
                      <button
                        type="button"
                        onClick={() => toggleFaq(index)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between p-5 text-left font-serif text-base text-[#0b1329] transition-colors hover:text-[#d9983b] sm:text-lg"
                      >
                        <span className="pr-4">{faq.question}</span>

                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                            isOpen
                              ? "rotate-180 border-[#d9983b] bg-[#d9983b] text-white"
                              : "border-[#f5eddce6] bg-[#fdfaf3] text-[#d9983b]"
                          }`}
                        >
                          {isOpen ? (
                            <FaMinus className="h-3 w-3" />
                          ) : (
                            <FaPlus className="h-3 w-3" />
                          )}
                        </span>
                      </button>

                      {/* Answer */}
                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden px-5">
                          <div className="border-t border-[#f8f5ee] py-4 text-xs leading-relaxed text-gray-600 sm:text-sm">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              ) : (
                <p className="py-8 text-center text-sm text-gray-500">
                  No questions found in this category.
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* ================= CONTACT CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mt-12 bg-[#fdfaf3] rounded-2xl border border-[#f0ebde] p-8 sm:p-12"
        >
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
            {/* LEFT CONTENT */}
            <div className="flex flex-col items-start gap-6 sm:flex-row lg:col-span-7">
              {/* Chat Icon */}
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-[#f5eddce6] bg-white text-[#d9983b] ">
                <FaComments className="h-8 w-8" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <span className="text-sm font-semibold uppercase tracking-widest text-[#d9983b]">
                    {smallHeading}
                  </span>

                  <h3 className="font-serif text-3xl text-[#0b1329] sm:text-4xl">
                    {title}
                  </h3>

                  <p className="max-w-md text-sm leading-relaxed text-gray-600 sm:text-md font-base">
                    {description}
                  </p>
                </div>

                {/* Contact Button */}
                <div className="pt-2">
                  <Link
                    href={contactUrl}
                    className="group inline-flex items-center gap-3 rounded-lg bg-[#081225] px-8 py-3.5 text-md font-semibold tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#111f3d]"
                  >
                    <span>CONTACT US</span>

                    <FaArrowRight className="h-3.5 w-3.5 text-[#d9983b] transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT DETAILS */}
            <div className="space-y-6 lg:col-span-5 lg:border-l lg:border-[#f0ebde] lg:pl-10 ">
              {/* PHONE */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center text-[#d9983b]">
                  <FaPhoneAlt className="h-8 w-8" />
                </div>

                <div className="space-y-0.5">
                  <span className="block text-md font-semibold uppercase tracking-wider text-[#0b1329]">
                    Phone
                  </span>

                  <a
                    href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
                    className="block text-md font-medium text-gray-600 transition-colors hover:text-[#d9983b]"
                  >
                    {phoneNumber}
                  </a>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center  text-[#d9983b]">
                  <FaEnvelope className="h-8 w-8" />
                </div>

                <div className="space-y-0.5">
                  <span className="block text-md font-semibold uppercase tracking-wider text-[#0b1329]">
                    Email
                  </span>

                  <a
                    href={`mailto:${emailAddress}`}
                    className="block text-md font-medium text-gray-600 transition-colors hover:text-[#d9983b]"
                  >
                    {emailAddress}
                  </a>
                </div>
              </div>

              {/* OFFICE HOURS */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center  text-[#d9983b]">
                  <FaClock className="h-8 w-8" />
                </div>

                <div className="space-y-0.5">
                  <span className="block text-md font-semibold uppercase tracking-wider text-[#0b1329]">
                    Office Hours
                  </span>

                  <p className="text-md font-medium text-gray-600">
                    {officeHours}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

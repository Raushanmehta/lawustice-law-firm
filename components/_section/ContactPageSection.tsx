"use client";

import React from "react";
import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaBuilding,
  FaArrowRight,
} from "react-icons/fa";
import siteData from "@/data/data.json";
import type { ContactPageSectionProps } from "@/types";
import { FadeUp } from "@/components/ui/AnimationWrapper";

const { contactPage, officeLocations } = siteData;

export default function ContactPageSection({
  offices = officeLocations.locations,
  mapImageSrc = contactPage.officesSection.mapImageSrc,
  onSubmitForm = (e) => e.preventDefault(),
}: ContactPageSectionProps) {
  const { form, getInTouch, officesSection } = contactPage;
  return (
    <section className="relative px-5 py-16 sm:px-10 sm:py-20 lg:px-20 xl:px-24 space-y-24">
      <div className="mx-auto space-y-20">
        {/* ================= PART 1: SEND US A MESSAGE & GET IN TOUCH ================= */}
        <FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* LEFT: Send Us a Message Form (Col Span 7) */}
            <div className="lg:col-span-7 rounded-2xl bg-white p-8 sm:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-[#f0ebde] flex flex-col justify-between">
              <div className="space-y-2 mb-8">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#0b1329]">
                  {form.title}
                </h2>
                <div className="h-[2px] w-10 bg-[#d9983b]" />
                <p className="text-sm sm:text-md text-gray-600 pt-1">
                  {form.subtitle}
                </p>
              </div>

              <form onSubmit={onSubmitForm} className="space-y-5">
                {/* Row 1: Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-[#0b1329] block">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      required
                      className="w-full rounded-lg border border-[#f0ebde]  px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:border-[#d9983b] focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-[#0b1329] block">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      required
                      className="w-full rounded-lg border border-[#f0ebde] px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:border-[#d9983b] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Row 2: Phone Number & Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-[#0b1329] block">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      required
                      className="w-full rounded-lg border border-[#f0ebde] px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:border-[#d9983b] focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-[#0b1329] block">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      defaultValue=""
                      required
                      className="w-full rounded-lg border border-[#f0ebde] px-4 py-3 text-sm text-gray-500 focus:border-[#d9983b] focus:outline-none"
                    >
                      <option value="" disabled>
                        Select a subject
                      </option>
                      <option value="consultation">Legal Consultation</option>
                      <option value="corporate">Corporate Inquiry</option>
                      <option value="careers">Careers</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* How can we help you? */}
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-[#0b1329] block">
                    How can we help you? <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Briefly describe your query"
                    required
                    className="w-full rounded-lg border border-[#f0ebde] px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:border-[#d9983b] focus:outline-none"
                  />
                </div>

                {/* Your Message */}
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-[#0b1329] block">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Write your message here..."
                    required
                    className="w-full rounded-lg border border-[#f0ebde] px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:border-[#d9983b] focus:outline-none resize-none"
                  />
                </div>

                {/* Submit Button & Security Note */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-lg bg-[#081225] px-8 py-4 text-sm font-semibold tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#111f3d]"
                  >
                    <span>{form.buttonText}</span>
                    <FaArrowRight className="h-3 w-3 text-[#d9983b] transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <span className="h-2 w-2 rounded-full bg-green-500" />
                    <span>{form.securityNote}</span>
                  </div>
                </div>
              </form>
            </div>

            {/* RIGHT: Get in Touch Dark Sidebar (Col Span 5) */}
            <div className="lg:col-span-5 rounded-2xl bg-[#070f22] p-8 sm:p-10 text-white shadow-xl border border-[#162340] flex flex-col justify-between space-y-8">
              <div className="space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl text-white">{getInTouch.title}</h3>
                <div className="h-[2px] w-10 bg-[#d9983b]" />
                <p className="text-sm sm:text-md text-gray-300 leading-relaxed pt-2">
                  {getInTouch.description}
                </p>
              </div>

              <div className="space-y-6 divide-y divide-[#1b2b4c]">
                {/* Head Office */}
                <div className="flex items-start gap-4 pt-4 first:pt-0">
                  <div className="mt-1 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#0b1429] border border-[#d9983b]/50 text-[#d9983b]">
                    <FaMapMarkerAlt className="h-8 w-8" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-sm font-semibold uppercase tracking-wider text-[#d9983b] block">
                      {getInTouch.headOffice.label}
                    </span>
                    <p className="text-md sm:text-md text-gray-200 leading-relaxed">
                      {getInTouch.headOffice.lines?.map((line, idx) => (
                        <React.Fragment key={idx}>
                          {line}
                          {idx < (getInTouch.headOffice.lines?.length || 0) - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 pt-4">
                  <div className="mt-1 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#0b1429] border border-[#d9983b]/50 text-[#d9983b]">
                    <FaPhoneAlt className="h-8 w-8" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-sm font-semibold uppercase tracking-wider text-[#d9983b] block">
                      {getInTouch.phone.label}
                    </span>
                    <p className="text-md sm:text-md text-gray-200 leading-relaxed">
                      {getInTouch.phone.numbers?.map((num, idx) => (
                        <React.Fragment key={idx}>
                          <a
                            href={`tel:${num.replace(/\s+/g, "")}`}
                            className="hover:text-[#d9983b] transition-colors block"
                          >
                            {num}
                          </a>
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 pt-4">
                  <div className="mt-1 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#0b1429] border border-[#d9983b]/50 text-[#d9983b]">
                    <FaEnvelope className="h-8 w-8" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-sm font-semibold uppercase tracking-wider text-[#d9983b] block">
                      {getInTouch.email.label}
                    </span>
                    <p className="text-md sm:text-md text-gray-200 leading-relaxed">
                      {getInTouch.email.emails?.map((mail, idx) => (
                        <React.Fragment key={idx}>
                          <a
                            href={`mailto:${mail}`}
                            className="hover:text-[#d9983b] transition-colors block"
                          >
                            {mail}
                          </a>
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4 pt-4">
                  <div className="mt-1 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#0b1429] border border-[#d9983b]/50 text-[#d9983b]">
                    <FaClock className="h-8 w-8" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-sm font-semibold uppercase tracking-wider text-[#d9983b] block">
                      {getInTouch.workingHours.label}
                    </span>
                    <p className="text-md sm:text-md text-gray-200 leading-relaxed">
                      {getInTouch.workingHours.hours?.map((hour, idx) => (
                        <React.Fragment key={idx}>
                          {hour}
                          {idx < (getInTouch.workingHours.hours?.length || 0) - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ================= PART 2: OUR OFFICES (MAP & LIST) ================= */}
        <FadeUp delay={0.2}>
          <div className="space-y-12 pt-10">
            {/* Section Header */}
            <div className="mx-auto max-w-xl text-center space-y-3">
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-[#d9983b]" />
                <span className="h-2 w-2 rotate-45 bg-[#d9983b]" />
                <span className="h-px w-10 bg-[#d9983b]" />
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0b1329]">
                {officesSection.title}
              </h2>
            </div>

            {/* Grid: Map on Left vs Office Cards List on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Map Image Box (Col Span 6) */}
              <div className="lg:col-span-6 rounded-2xl bg-white p- sm:p- border border-[#f0ebde] shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                <div className="relative h-[400px] sm:h-[820px] w-full overflow-hidden rounded-xl">
                  <Image
                    src={mapImageSrc}
                    alt="India Map Office Locations"
                    fill
                    className="object-contain object-center"
                  />
                </div>
              </div>

              {/* Right Office Cards List (Col Span 6) */}
              <div className="lg:col-span-6 space-y-5">
                {offices.map((office, index) => {
                  const cityName = office.cityName || office.city || "";
                  const address =
                    office.address ||
                    [office.addressLine1, office.addressLine2]
                      .filter(Boolean)
                      .join(" ");

                  return (
                    <div
                      key={cityName || index}
                      className="rounded-2xl bg-white p-6 border border-[#f0ebde] shadow-sm transition-all duration-300 hover:shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
                    >
                      {/* Left Building Icon & Details */}
                      <div className="flex items-start gap-4">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#fdfaf3] border border-[#f5eddce6] text-[#d9983b]">
                          <FaBuilding className="h-8 w-8" />
                        </div>

                        <div className="space-y-1.5">
                          <h3 className="font-serif text-2xl text-[#0b1329] ">
                            {cityName}
                          </h3>
                          <p className="text-md sm:text-md text-gray-600 leading-relaxed max-w-xs">
                            {address}
                          </p>

                          {/* Phone & Email Row */}
                          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-gray-600">
                            {office.phone && (
                              <div className="flex items-center gap-2">
                                <FaPhoneAlt className="text-[#d9983b] h-4 w-4" />
                                <a
                                  href={`tel:${office.phone.replace(/\s+/g, "")}`}
                                  className="hover:text-[#d9983b] font-medium"
                                >
                                  {office.phone}
                                </a>
                              </div>
                            )}
                            {office.email && (
                              <div className="flex items-center gap-2">
                                <FaEnvelope className="text-[#d9983b] h-3 w-3" />
                                <a
                                  href={`mailto:${office.email}`}
                                  className="hover:text-[#d9983b] font-medium"
                                >
                                  {office.email}
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

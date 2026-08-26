"use client";

import React, { useState } from "react";
import siteData from "@/data/data.json";
import {
    FaUser,
    FaEnvelope,
    FaPhone,
    FaCalendarAlt,
    FaClock,
    FaBriefcase,
    FaArrowRight,
    FaLock,
    FaHourglassHalf,
    FaLaptop,
    FaRupeeSign,
    FaUsers,
    FaShieldAlt,
    FaBullseye,
    FaHeart
} from "react-icons/fa";

interface BookConsultationPageSectionProps {
    data?: typeof siteData.bookConsultation;
    onSubmitForm?: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function BookConsultationPageSection({
    data = siteData.bookConsultation,
    onSubmitForm = (e) => e.preventDefault()
}: BookConsultationPageSectionProps) {
    const [caseDescription, setCaseDescription] = useState("");

    const {
        title,
        description,
        formLabels,
        timeOptions,
        practiceAreaOptions,
        referralOptions,
        sidebar,
        whyConsult
    } = data;

    const sidebarIcons = [FaHourglassHalf, FaLaptop, FaRupeeSign];
    const whyConsultIcons = [FaUsers, FaShieldAlt, FaBullseye, FaHeart];

    return (
        <section className="relative px-5 py-16 sm:px-10 sm:py-20 md:px-16 lg:px-20 xl:px-24 space-y-20">
            <div className="mx-auto space-y-16">

                {/* ================= TOP GRID: CONSULTATION FORM & INFO SIDEBAR ================= */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">

                    {/* ================= LEFT SIDE: CONSULTATION DETAILS FORM (Col Span 7) ================= */}
                    <div className="lg:col-span-7 rounded-2xl bg-white p-8 sm:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-[#f0ebde] flex flex-col justify-between">

                        {/* Header */}
                        <div className="space-y-2 mb-8">
                            <h2 className="font-serif text-3xl sm:text-4xl text-[#0b1329]">
                                {title}
                            </h2>
                            <div className="flex items-center gap-2">
                                <div className="h-[2px] w-10 bg-[#d9983b]" />
                                <div className="h-1.5 w-1.5 rotate-45 bg-[#d9983b]" />
                            </div>
                            <p className="text-md sm:text-md text-gray-600 pt-1">
                                {description}
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={onSubmitForm} className="space-y-5">

                            {/* Full Name & Email Address */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-sm text-[#0b1329] block">
                                        {formLabels.fullName} <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative flex items-center">
                                        <FaUser className="absolute left-3.5 h-3.5 w-3.5 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder={formLabels.fullNamePlaceholder}
                                            required
                                            className="w-full rounded-lg border border-[#f0ebde] bg-[#fdfbf7] pl-10 pr-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:border-[#d9983b] focus:outline-none"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-sm text-[#0b1329] block">
                                        {formLabels.emailAddress} <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative flex items-center">
                                        <FaEnvelope className="absolute left-3.5 h-3.5 w-3.5 text-gray-400" />
                                        <input
                                            type="email"
                                            placeholder={formLabels.emailPlaceholder}
                                            required
                                            className="w-full rounded-lg border border-[#f0ebde] bg-[#fdfbf7] pl-10 pr-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:border-[#d9983b] focus:outline-none"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Phone Number & Preferred Date */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-sm text-[#0b1329] block">
                                        {formLabels.phoneNumber} <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative flex items-center">
                                        <FaPhone className="absolute left-3.5 h-3.5 w-3.5 text-gray-400" />
                                        <input
                                            type="tel"
                                            placeholder={formLabels.phonePlaceholder}
                                            required
                                            className="w-full rounded-lg border border-[#f0ebde] bg-[#fdfbf7] pl-10 pr-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:border-[#d9983b] focus:outline-none"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-sm text-[#0b1329] block">
                                        {formLabels.preferredDate} <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative flex items-center">
                                        <input
                                            type="date"
                                            required
                                            className="w-full rounded-lg border border-[#f0ebde] bg-[#fdfbf7] px-4 py-3 text-sm text-gray-600 focus:border-[#d9983b] focus:outline-none"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Preferred Time & Practice Area */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-sm text-[#0b1329] block">
                                        {formLabels.preferredTime} <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative flex items-center">
                                        <FaClock className="absolute left-3.5 h-3.5 w-3.5 text-gray-400" />
                                        <select
                                            defaultValue=""
                                            required
                                            className="w-full rounded-lg border border-[#f0ebde] bg-[#fdfbf7] pl-10 pr-4 py-3 text-sm text-gray-500 focus:border-[#d9983b] focus:outline-none"
                                        >
                                            <option value="" disabled>Select a time</option>
                                            {timeOptions.map((opt) => (
                                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-sm text-[#0b1329] block">
                                        {formLabels.practiceArea} <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        defaultValue=""
                                        required
                                        className="w-full rounded-lg border border-[#f0ebde] bg-[#fdfbf7] px-4 py-3 text-sm text-gray-500 focus:border-[#d9983b] focus:outline-none"
                                    >
                                        <option value="" disabled>Select a practice area</option>
                                        {practiceAreaOptions.map((opt) => (
                                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Briefly Describe Your Case / Query */}
                            <div className="space-y-1.5 relative">
                                <label className="text-sm text-[#0b1329] block">
                                    {formLabels.caseDescription} <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    rows={4}
                                    maxLength={500}
                                    value={caseDescription}
                                    onChange={(e) => setCaseDescription(e.target.value)}
                                    placeholder={formLabels.caseDescriptionPlaceholder}
                                    required
                                    className="w-full rounded-lg border border-[#f0ebde] bg-[#fdfbf7] p-4 text-sm text-gray-800 placeholder-gray-400 focus:border-[#d9983b] focus:outline-none resize-none"
                                />
                                <span className="absolute bottom-3 right-3 text-[10px] text-gray-400">
                                    {caseDescription.length}/500
                                </span>
                            </div>

                            {/* How did you hear about us? */}
                            <div className="space-y-1.5">
                                <label className="text-sm text-[#0b1329] block">
                                    {formLabels.referralSource}
                                </label>
                                <select
                                    defaultValue=""
                                    className="w-full rounded-lg border border-[#f0ebde] bg-[#fdfbf7] px-4 py-3 text-sm text-gray-500 focus:border-[#d9983b] focus:outline-none"
                                >
                                    <option value="" disabled>Select an option</option>
                                    {referralOptions.map((opt) => (
                                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Terms Checkbox */}
                            <div className="flex items-start gap-2.5 pt-1">
                                <input
                                    type="checkbox"
                                    required
                                    id="terms"
                                    className="mt-0.5 h-4 w-4 rounded border-gray-300 text-[#d9983b] focus:ring-[#d9983b]"
                                />
                                <label htmlFor="terms" className="text-[13px] text-gray-600 leading-normal">
                                    {formLabels.termsText}
                                </label>
                            </div>

                            {/* Submit Button & Security Note */}
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                                <button
                                    type="submit"
                                    className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-lg bg-[#081225] px-8 py-4 text-xs font-semibold tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#111f3d]"
                                >
                                    <span>{formLabels.buttonText}</span>
                                    <FaArrowRight className="h-3 w-3 text-[#d9983b] transition-transform duration-300 group-hover:translate-x-1" />
                                </button>

                                <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                                    <FaLock className="h-3 w-3 text-gray-400" />
                                    <span>{formLabels.securityNote}</span>
                                </div>
                            </div>

                        </form>

                    </div>

                    {/* ================= RIGHT SIDE: CONSULTATION INFO SIDEBAR (Col Span 5) ================= */}
                    <div className="lg:col-span-5 rounded-2xl bg-[#070f22] p-8 sm:p-10 text-white shadow-xl border border-[#162340] flex flex-col justify-between space-y-8">

                        {/* Header */}
                        <div className="space-y-2">
                            <h3 className="font-serif text-4xl text-white">
                                {sidebar.title}
                            </h3>
                            <div className="h-[2px] w-10 bg-[#d9983b]" />
                        </div>

                        {/* Info List */}
                        <div className="space-y-6 divide-y divide-[#1b2b4c]">
                            {sidebar.items.map((item, idx) => {
                                const IconComponent = sidebarIcons[idx % sidebarIcons.length];
                                return (
                                    <div key={idx} className="flex items-start gap-4 pt-4 first:pt-0">
                                        <div className="mt-1 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#0b1429] border border-[#d9983b]/50 text-[#d9983b]">
                                            <IconComponent className="h-8 w-8" />
                                        </div>
                                        <div className="space-y-1">
                                            <span className="text-sm font-semibold uppercase tracking-wider text-[#d9983b] block">
                                                {item.title}
                                            </span>
                                            <h4 className="text-lg text-white font-medium">{item.subtitle}</h4>
                                            <p className="text-sm text-gray-400">{item.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Immediate Assistance Box */}
                        <div className="rounded-xl bg-[#0b1429] p-5 border border-[#1b2b4c] space-y-2">
                            <h4 className="font-serif text-md text-[#d9983b]">
                                {sidebar.immediateAssistance.title}
                            </h4>
                            <p className="text-sm text-gray-300 leading-relaxed">
                                Call us at <strong className="text-white">{siteData.topNavbar.phone}</strong><br />
                                or email <strong className="text-white">{siteData.topNavbar.email}</strong>
                            </p>
                        </div>

                    </div>

                </div>


                {/* ================= BOTTOM SECTION: WHY CONSULT WITH US? ================= */}
                <div className="space-y-10 pt-10">

                    {/* Header */}
                    <div className="mx-auto max-w-xl text-center space-y-3">
                        <h2 className="font-serif text-3xl sm:text-4xl text-[#0b1329]">
                            {whyConsult.title}
                        </h2>
                        <div className="flex items-center justify-center gap-2">
                            <div className="h-[2px] w-10 bg-[#d9983b]" />
                            <div className="h-1.5 w-1.5 rotate-45 bg-[#d9983b]" />
                            <div className="h-[2px] w-10 bg-[#d9983b]" />
                        </div>
                    </div>

                    {/* 4-Column Feature Cards Container Box */}
                    <div className="rounded-2xl bg-white p-8 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-[#f0ebde]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 lg:divide-x divide-[#f0ebde]">
                            {whyConsult.features.map((feature, idx) => {
                                const IconComponent = whyConsultIcons[idx % whyConsultIcons.length];
                                return (
                                    <div key={idx} className="flex flex-col items-center text-center space-y-3 pt-6 sm:pt-0 lg:px-4 first:lg:pl-0 last:lg:pr-0">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#fdfaf3] border border-[#f5eddce6] text-[#d9983b]">
                                            <IconComponent className="h-8 w-8" />
                                        </div>
                                        <h3 className="font-serif text-xl text-[#0b1329]">{feature.title}</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

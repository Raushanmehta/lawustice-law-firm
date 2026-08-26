"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { CareerJobData } from "@/types/sections";
import { 
    FaArrowLeft, 
    FaMapMarkerAlt, 
    FaBriefcase, 
    FaClock, 
    FaCalendarAlt, 
    FaCloudUploadAlt, 
    FaLock 
} from "react-icons/fa";

interface CareerPageJobSectionProps {
    data: CareerJobData;
    onSubmitApplication?: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function CareerPageJobSection({
    data,
    onSubmitApplication = (e) => e.preventDefault()
}: CareerPageJobSectionProps) {
    const { backUrl, jobTitle, location, jobType, experience, postedDate, overviewText, responsibilities, whatWeLookingFor, preferredQualifications } = data;
    const [fileName, setFileName] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
        }
    };

    return (
        <section className="relative px-5 py-12 sm:px-10 sm:py-16 md:px-16 lg:px-20 xl:px-24">
            <div className="">
                
                {/* Back Link */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className="mb-8"
                >
                    <Link
                        href={backUrl}
                        className="inline-flex items-center gap-2 text-md font-medium text-[#d9983b] transition-colors hover:text-[#b87c2b]"
                    >
                        <FaArrowLeft className="h-4 w-4" />
                        <span className="text-black text-md">Back to Open Positions</span>
                    </Link>
                </motion.div>

                {/* Main 2-Column Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* ================= LEFT SIDE: JOB DETAILS CONTENT (Col Span 7) ================= */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.65, ease: "easeOut" }}
                        className="lg:col-span-7 space-y-10"
                    >
                        
                        {/* Header Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="space-y-4"
                        >
                            <span className="text-md font-semibold uppercase tracking-widest text-[#d9983b]">
                                OPEN POSITION
                            </span>

                            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0b1329] leading-tight">
                                {jobTitle}
                            </h1>

                            {/* Meta Tags Row */}
                            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-md text-gray-600 pt-1">
                                <div className="flex items-center gap-1.5">
                                    <FaMapMarkerAlt className="text-[#d9983b]" />
                                    <span>{location}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <FaBriefcase className="text-[#d9983b]" />
                                    <span>{jobType}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <FaClock className="text-[#d9983b]" />
                                    <span>{experience}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <FaCalendarAlt className="text-[#d9983b]" />
                                    <span>{postedDate}</span>
                                </div>
                            </div>

                            {/* Overview Description */}
                            <p className="text-md sm:text-md leading-relaxed text-gray-600 pt-2">
                                {overviewText}
                            </p>
                        </motion.div>

                        {/* Divider Line */}
                        <div className="h-px w-full bg-[#f0ebde]" />

                        {/* Key Responsibilities */}
                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
                            className="space-y-4"
                        >
                            <div className="flex items-center gap-3">
                                <span className="h-6 w-1 bg-[#d9983b]" />
                                <h3 className="font-serif text-2xl text-[#0b1329]">
                                    Key Responsibilities
                                </h3>
                            </div>
                            <ul className="space-y-2.5">
                                {responsibilities.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-md sm:text-md text-gray-600">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#d9983b] shrink-0 mt-2" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Divider Line */}
                        <div className="h-px w-full bg-[#f0ebde]" />

                        {/* What We're Looking For */}
                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: 0.16, ease: "easeOut" }}
                            className="space-y-4"
                        >
                            <div className="flex items-center gap-3">
                                <span className="h-6 w-1 bg-[#d9983b]" />
                                <h3 className="font-serif text-2xl text-[#0b1329]">
                                    What We&apos;re Looking For
                                </h3>
                            </div>
                            <ul className="space-y-2.5">
                                {whatWeLookingFor.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-md sm:text-md text-gray-600">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#d9983b] shrink-0 mt-2" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Divider Line */}
                        <div className="h-px w-full bg-[#f0ebde]" />

                        {/* Preferred Qualifications */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="h-6 w-1 bg-[#d9983b]" />
                                <h3 className="font-serif text-2xl text-[#0b1329]">
                                    Preferred Qualifications
                                </h3>
                            </div>
                            <ul className="space-y-2.5">
                                {preferredQualifications.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-md sm:text-md text-gray-600">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#d9983b] shrink-0 mt-2" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </motion.div>

                    {/* ================= RIGHT SIDE: APPLICATION FORM SIDEBAR (Col Span 5) ================= */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
                        className="lg:col-span-5 rounded-2xl bg-white p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-[#f0ebde]"
                    >
                        
                        {/* Form Title */}
                        <div className="space-y-1 pb-4 border-b border-[#f0ebde] mb-6">
                            <h3 className="font-serif text-xl sm:text-2xl text-[#0b1329]">
                                Apply for this Position
                            </h3>
                            <div className="h-[2px] w-10 bg-[#d9983b]" />
                        </div>

                        {/* Application Form */}
                        <form onSubmit={onSubmitApplication} className="space-y-4">
                            
                            {/* Full Name */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-[#0b1329] block">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    required
                                    className="w-full rounded-lg border border-[#f0ebde] bg-[#fdfbf7] px-4 py-3 text-xs text-gray-800 placeholder-gray-400 focus:border-[#d9983b] focus:outline-none"
                                />
                            </div>

                            {/* Email Address */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-[#0b1329] block">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    className="w-full rounded-lg border border-[#f0ebde] bg-[#fdfbf7] px-4 py-3 text-xs text-gray-800 placeholder-gray-400 focus:border-[#d9983b] focus:outline-none"
                                />
                            </div>

                            {/* Phone Number */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-[#0b1329] block">
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    placeholder="+91 98765 43210"
                                    required
                                    className="w-full rounded-lg border border-[#f0ebde] bg-[#fdfbf7] px-4 py-3 text-xs text-gray-800 placeholder-gray-400 focus:border-[#d9983b] focus:outline-none"
                                />
                            </div>

                            {/* Current Location */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-[#0b1329] block">
                                    Current Location *
                                </label>
                                <select
                                    defaultValue=""
                                    required
                                    className="w-full rounded-lg border border-[#f0ebde] bg-[#fdfbf7] px-4 py-3 text-xs text-gray-500 focus:border-[#d9983b] focus:outline-none"
                                >
                                    <option value="" disabled>Select your location</option>
                                    <option value="mumbai">Mumbai</option>
                                    <option value="delhi">Delhi NCR</option>
                                    <option value="bangalore">Bangalore</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            {/* Total Experience */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-[#0b1329] block">
                                    Total Experience (Years) *
                                </label>
                                <select
                                    defaultValue=""
                                    required
                                    className="w-full rounded-lg border border-[#f0ebde] bg-[#fdfbf7] px-4 py-3 text-xs text-gray-500 focus:border-[#d9983b] focus:outline-none"
                                >
                                    <option value="" disabled>Select experience</option>
                                    <option value="1-2">1-2 Years</option>
                                    <option value="2-4">2-4 Years</option>
                                    <option value="4+">4+ Years</option>
                                </select>
                            </div>

                            {/* Upload Resume Box */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-[#0b1329] block">
                                    Upload Resume *
                                </label>
                                <label className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#f0ebde] bg-[#fdfbf7] p-6 text-center cursor-pointer transition-colors hover:border-[#d9983b]">
                                    <FaCloudUploadAlt className="h-6 w-6 text-[#d9983b] mb-1" />
                                    <span className="text-xs font-semibold text-[#0b1329]">
                                        {fileName ? fileName : "Click to upload or drag and drop"}
                                    </span>
                                    <span className="text-[10px] text-gray-400 mt-0.5">
                                        PDF, DOC, DOCX (Max 5MB)
                                    </span>
                                    <input 
                                        type="file" 
                                        accept=".pdf,.doc,.docx" 
                                        required 
                                        onChange={handleFileChange}
                                        className="hidden" 
                                    />
                                </label>
                            </div>

                            {/* Cover Letter (Optional) */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-[#0b1329] block">
                                    Cover Letter (Optional)
                                </label>
                                <textarea
                                    rows={3}
                                    placeholder="Tell us why you're a good fit (optional)"
                                    className="w-full rounded-lg border border-[#f0ebde] bg-[#fdfbf7] px-4 py-3 text-xs text-gray-800 placeholder-gray-400 focus:border-[#d9983b] focus:outline-none resize-none"
                                />
                            </div>

                            {/* Privacy Policy Checkbox */}
                            <div className="flex items-start gap-2.5 pt-1">
                                <input
                                    type="checkbox"
                                    required
                                    id="privacy"
                                    className="mt-0.5 h-4 w-4 rounded border-gray-300 text-[#d9983b] focus:ring-[#d9983b]"
                                />
                                <label htmlFor="privacy" className="text-[11px] text-gray-600 leading-normal">
                                    I agree to the <a href="#" className="text-[#d9983b] underline">privacy policy</a> and consent to the processing of my personal data.
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full rounded-xl bg-[#081225] py-4 text-xs font-semibold tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#111f3d]"
                            >
                                Submit Application
                            </button>

                            {/* Security Disclaimer */}
                            <div className="flex items-center justify-center gap-1.5 pt-2 text-center">
                                <FaLock className="h-3 w-3 text-gray-400" />
                                <span className="text-[10px] text-gray-500">
                                    Your information is secure and confidential.
                                </span>
                            </div>

                        </form>

                    </motion.div>

                </div>

            </div>
        </section>
    );
}
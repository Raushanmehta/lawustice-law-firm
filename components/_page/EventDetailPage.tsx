"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    FaUser,
    FaEnvelope,
    FaPhone,
    FaCalendarAlt,
    FaLock,
    FaLinkedinIn,
    FaEnvelopeOpen,
    FaPhoneAlt,
    FaArrowRight,
    FaUsers,
    FaComments,
    FaBookOpen,
    FaNetworkWired,
    FaCheckCircle,
    FaClock,
    FaMapMarkerAlt
} from "react-icons/fa";
import { EventItem } from "@/types/sections";
import siteData from "@/data/siteData";
import { FadeLeft, FadeRight } from "@/components/ui/AnimationWrapper";

interface EventDetailPageProps {
    event?: EventItem;
}

export default function EventDetailPage({ event }: EventDetailPageProps) {
    const currentEvent: EventItem = event || (siteData.events.items[0] as EventItem);

    const [registered, setRegistered] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        seats: "1"
    });

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.fullName && formData.email) {
            setRegistered(true);
        }
    };

    return (
        <section className="relative bg-white px-5 py-16 sm:px-10 sm:py-20 md:px-16 lg:px-20 xl:px-24">
            <div className="mx-auto">

                {/* Main 2-Column Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                    {/* ================= LEFT SIDE CONTENT (Col Span 8) ================= */}
                    <FadeLeft className="lg:col-span-8 space-y-12">

                        {/* 1. About This Seminar / Event Card */}
                        <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-[#f0ebde] space-y-6">

                            {/* Main Event Image Banner */}
                            {currentEvent.image && (
                                <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-xl bg-[#0b1329]">
                                    <Image
                                        src={currentEvent.image}
                                        alt={currentEvent.title}
                                        fill
                                        className="object-cover object-center"
                                        priority
                                    />
                                    {currentEvent.category && (
                                        <div className="absolute top-4 left-4 bg-[#d9983b] text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider shadow-md">
                                            {currentEvent.category}
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Meta Info Bar */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-[#fdfbf7] border border-[#f0ebde] text-sm">
                                <div className="flex items-center gap-2.5 text-gray-700 font-medium">
                                    <FaCalendarAlt className="text-[#d9983b] h-4 w-4 shrink-0" />
                                    <div>
                                        <span className="text-[10px] uppercase text-gray-400 block font-semibold">Date</span>
                                        <span>{currentEvent.date}</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2.5 text-gray-700 font-medium">
                                    <FaClock className="text-[#d9983b] h-4 w-4 shrink-0" />
                                    <div>
                                        <span className="text-[10px] uppercase text-gray-400 block font-semibold">Time</span>
                                        <span>{currentEvent.time}</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2.5 text-gray-700 font-medium sm:col-span-1">
                                    <FaMapMarkerAlt className="text-[#d9983b] h-4 w-4 shrink-0" />
                                    <div>
                                        <span className="text-[10px] uppercase text-gray-400 block font-semibold">Venue</span>
                                        <span>{currentEvent.location}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h2 className="font-serif text-2xl sm:text-3xl text-[#0b1329]">
                                    About This Event
                                </h2>
                                <div className="h-[2px] w-10 bg-[#d9983b]" />
                            </div>

                            <p className="text-sm sm:text-md leading-relaxed text-gray-600">
                                {currentEvent.fullDescription || currentEvent.description}
                            </p>

                            {/* 4 Feature Badges Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                                <div className="rounded-xl border border-[#f5eddce6] bg-[#fdfaf3] p-3.5 flex flex-col items-center text-center space-y-1.5">
                                    <div className="text-[#d9983b]">
                                        <FaUsers className="h-6 w-6" />
                                    </div>
                                    <h4 className="font-serif text-md  text-[#0b1329]">Expert Speakers</h4>
                                    <p className="text-xs text-gray-500">Industry Professionals</p>
                                </div>

                                <div className="rounded-xl border border-[#f5eddce6] bg-[#fdfaf3] p-3.5 flex flex-col items-center text-center space-y-1.5">
                                    <div className="text-[#d9983b]">
                                        <FaComments className="h-6 w-6" />
                                    </div>
                                    <h4 className="font-serif text-md  text-[#0b1329]">Interactive Session</h4>
                                    <p className="text-xs text-gray-500">Q&A and Discussion</p>
                                </div>

                                <div className="rounded-xl border border-[#f5eddce6] bg-[#fdfaf3] p-3.5 flex flex-col items-center text-center space-y-1.5">
                                    <div className="text-[#d9983b]">
                                        <FaBookOpen className="h-6 w-6" />
                                    </div>
                                    <h4 className="font-serif text-md  text-[#0b1329]">Useful Resources</h4>
                                    <p className="text-xs text-gray-500">Handouts & Materials</p>
                                </div>

                                <div className="rounded-xl border border-[#f5eddce6] bg-[#fdfaf3] p-3.5 flex flex-col items-center text-center space-y-1.5">
                                    <div className="text-[#d9983b]">
                                        <FaNetworkWired className="h-6 w-6" />
                                    </div>
                                    <h4 className="font-serif text-md  text-[#0b1329]">Networking</h4>
                                    <p className="text-xs text-gray-500">Connect with Peers</p>
                                </div>
                            </div>
                        </div>


                        {/* 2. Meet Our Speakers Card */}
                        {currentEvent.speakers && currentEvent.speakers.length > 0 && (
                            <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-[#f0ebde] space-y-6">
                                <div className="space-y-2">
                                    <h3 className="font-serif text-2xl sm:text-3xl text-[#0b1329]">
                                        Meet Our Speakers
                                    </h3>
                                    <div className="h-[2px] w-10 bg-[#d9983b]" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {currentEvent.speakers.map((spk, idx) => (
                                        <div key={idx} className="rounded-xl border border-[#f0ebde] bg-[#fdfbf7] flex flex-col justify-between space-y-4">

                                            {/* Top Section: Image on Left, Details on Right */}
                                            <div className="flex gap-4 items-start">

                                                {/* Image (Left Side) */}
                                                <div className="relative h-50 w-40 shrink-0 overflow-hidden rounded-xl bg-gray-200">
                                                    <Image
                                                        src={spk.image}
                                                        alt={spk.name}
                                                        fill
                                                        className="object-cover object-center"
                                                    />
                                                </div>

                                                {/* Data/Text Content (Right Side) */}
                                                <div className="space-y-1 flex-1 py-4">
                                                    <div className="space-y-1">
                                                        <h4 className=" text-md font-semibold text-[#0b1329]">{spk.name}</h4>
                                                        <span className="text-sm font-semibold text-[#d9983b] block">{spk.role}</span>
                                                    </div>

                                                    <p className="text-xs text-gray-600 leading-relaxed">
                                                        {spk.bio}
                                                    </p>

                                                    <div className="flex gap-2 pt-1">
                                                        <a href="#" className="h-7 w-7 rounded-lg bg-white border border-[#f0ebde] flex items-center justify-center text-gray-600 hover:text-[#d9983b]">
                                                            <FaLinkedinIn className="h-3 w-3" />
                                                        </a>
                                                        <a href="#" className="h-7 w-7 rounded-lg bg-white border border-[#f0ebde] flex items-center justify-center text-gray-600 hover:text-[#d9983b]">
                                                            <FaEnvelopeOpen className="h-3 w-3" />
                                                        </a>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}


                        {/* 3. Seminar Agenda Timeline Card */}
                        {currentEvent.timeline && currentEvent.timeline.length > 0 && (
                            <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-[#f0ebde] space-y-6">
                                <div className="space-y-2">
                                    <h3 className="font-serif text-2xl sm:text-3xl text-[#0b1329]">
                                        Event Schedule & Agenda
                                    </h3>
                                    <div className="h-[2px] w-10 bg-[#d9983b]" />
                                </div>

                                {/* Timeline Items */}
                                <div className="relative pl-2 sm:pl-4 space-y-4 before:absolute before:left-[113px] sm:before:left-[149px] before:top-2 before:bottom-2 before:w-[2px] before:bg-[#f0ebde]">
                                    {currentEvent.timeline.map((item, idx) => (
                                        <div key={idx} className="relative flex items-start gap-4 sm:gap-8">
                                            <span className="w-24 sm:w-28 text-right text-xs font-semibold text-[#d9983b] pt-0.5 shrink-0">
                                                {item.time}
                                            </span>
                                            <div className="absolute left-[107px] sm:left-[127px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#d9983b] shadow-sm z-10" />
                                            <div className="pl-6 space-y-1">
                                                <h4 className="font-serif text-md  text-[#0b1329]">{item.title}</h4>
                                                <p className="text-[12px] text-gray-500">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                    </FadeLeft>


                    {/* ================= RIGHT SIDE SIDEBAR (Col Span 4) ================= */}
                    <FadeRight className="lg:col-span-4 space-y-8">

                        {/* 1. Register for This Event Form Card */}
                        <div className="rounded-2xl bg-[#070f22] p-6 sm:p-8 text-white shadow-xl border border-[#162340] space-y-6">

                            <div className="space-y-1 pb-3 border-b border-[#1b2b4c]">
                                <h3 className="font-serif text-2xl  text-white flex items-center gap-2.5">
                                    <span className="text-[#d9983b]">📅</span> Register for This Event
                                </h3>
                            </div>

                            {registered ? (
                                <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-800 text-emerald-300 space-y-2 text-center">
                                    <FaCheckCircle className="h-8 w-8 text-emerald-400 mx-auto" />
                                    <h4 className="font-bold text-sm text-white">Registration Confirmed!</h4>
                                    <p className="text-xs text-emerald-200">
                                        Thank you, {formData.fullName}. We have reserved {formData.seats} seat(s) for "{currentEvent.title}".
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleRegister} className="space-y-4">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-semibold text-gray-300 block">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your full name"
                                            required
                                            value={formData.fullName}
                                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                            className="w-full rounded-lg border border-[#1b2b4c] bg-[#0b1429] px-4 py-3 text-xs text-white placeholder-gray-500 focus:border-[#d9983b] focus:outline-none"
                                        />
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-xs font-semibold text-gray-300 block">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full rounded-lg border border-[#1b2b4c] bg-[#0b1429] px-4 py-3 text-xs text-white placeholder-gray-500 focus:border-[#d9983b] focus:outline-none"
                                        />
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-xs font-semibold text-gray-300 block">Phone Number</label>
                                        <input
                                            type="tel"
                                            placeholder="Enter your phone number"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full rounded-lg border border-[#1b2b4c] bg-[#0b1429] px-4 py-3 text-xs text-white placeholder-gray-500 focus:border-[#d9983b] focus:outline-none"
                                        />
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-xs font-semibold text-gray-300 block">Number of Seats</label>
                                        <select
                                            value={formData.seats}
                                            onChange={(e) => setFormData({ ...formData, seats: e.target.value })}
                                            className="w-full rounded-lg border border-[#1b2b4c] bg-[#0b1429] px-4 py-3 text-xs text-white focus:border-[#d9983b] focus:outline-none"
                                        >
                                            <option value="1">1 Seat</option>
                                            <option value="2">2 Seats</option>
                                            <option value="3">3 Seats</option>
                                            <option value="4">4+ Seats</option>
                                        </select>
                                    </div>

                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#d9983b] py-3.5 text-xs font-semibold tracking-wider text-[#070f22] transition-all hover:bg-[#c28530] cursor-pointer"
                                        >
                                            <span>REGISTER NOW</span>
                                            <FaArrowRight className="h-3 w-3" />
                                        </button>
                                    </div>
                                </form>
                            )}

                            <div className="flex items-center gap-2 text-gray-400 text-[12px] pt-1">
                                <FaLock className="h-3 w-3 text-gray-500 shrink-0" />
                                <span>Your information is safe with us. Never share your details.</span>
                            </div>

                        </div>


                        {/* 2. Have an Event in Mind? Card */}
                        <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-[#f0ebde] space-y-4">
                            <div className="space-y-1 pb-2 border-b border-[#f0ebde]">
                                <h3 className="font-serif text-2xl  text-[#0b1329]">
                                    Have an Event in Mind?
                                </h3>
                                <div className="h-[2px] w-10 bg-[#d9983b]" />
                            </div>

                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                Partner with Lawustice to organize legal seminars, webinars, or workshops.
                            </p>

                            <div className="pt-2">
                                <Link
                                    href="/contact-us"
                                    className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#d9983b] py-3 text-sm font-semibold tracking-wider text-[#0b1329] transition-all duration-300 hover:bg-[#d9983b] hover:text-white"
                                >
                                    <FaPhoneAlt className="h-4 w-4 text-sm text-[#d9983b] group-hover:text-white" />
                                    <span>CONTACT US</span>
                                    <FaArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>

                    </FadeRight>

                </div>

            </div>
        </section>
    );
}
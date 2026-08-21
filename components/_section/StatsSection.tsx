"use client";

import { Handshake, Scale, Trophy, Users } from "lucide-react";

const stats = [
    {
        icon: Users,
        value: "20+",
        title: "Years of Experience",
    },
    {
        icon: Scale,
        value: "4356+",
        title: "Satisfied Clients",
    },
    {
        icon: Trophy,
        value: "98%",
        title: "Success Rate",
    },
    {
        icon: Handshake,
        value: "50+",
        title: "Practice Areas",
    },
];

export default function StatsSection() {
    return (
        <section className="bg-white py-14 lg:py-20">
            <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
                <div className="overflow-hidden rounded-xl border border-[#273340] bg-[#08131d] shadow-2xl py-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
                        {stats.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={index}
                                    className={`relative flex items-center gap-4 px-6 py-8 lg:px-8 xl:px-10
                    ${index !== stats.length - 1
                                            ? "border-b sm:border-b xl:border-b-0 xl:border-r border-[#2c3947]"
                                            : ""
                                        }`}
                                >
                                    {/* Diamond Divider */}
                                    {index !== stats.length - 1 && (
                                        <span className="absolute right-0 top-1/2 hidden h-3 w-3 translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#d8aa52] xl:block" />
                                    )}

                                    {/* Icon */}
                                    <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#d8aa52] bg-[#0b1722] shadow-[0_0_30px_rgba(216,170,82,0.35)] sm:h-20 sm:w-20 lg:h-24 lg:w-24">
                                        {/* Glow */}
                                        <div className="absolute h-12 w-12 rounded-full bg-[#d8aa52]/10 blur-xl" />

                                        <Icon
                                            className="relative h-7 w-7 text-[#d8aa52] sm:h-8 sm:w-8 lg:h-10 lg:w-10"
                                            strokeWidth={1.8}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h2 className="font-serif text-4xl font-semibold leading-none text-white lg:text-5xl">
                                            {item.value}
                                        </h2>

                                        {/* Decorative Line */}
                                        <div className="my-3 flex items-center">
                                            <div className="h-[2px] w-8 bg-[#d8aa52] lg:w-12" />

                                            <div className="mx-2 h-2 w-2 rotate-45 bg-[#d8aa52]" />

                                            <div className="h-[2px] w-8 bg-[#d8aa52] lg:w-12" />
                                        </div>

                                        <p className="text-sm text-gray-300 lg:text-base">
                                            {item.title}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
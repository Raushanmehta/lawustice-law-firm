"use client";

import { motion } from "framer-motion";
import { UserRound } from "lucide-react";
import type { TestimonialsSectionData } from "@/types";

interface TestimonialCardProps {
    data: TestimonialsSectionData;
}

export default function TestimonialCard({ data }: TestimonialCardProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12 } },
            }}
            className="relative mx-auto grid w-full grid-cols-1 gap-6 py-1 sm:grid-cols-2 lg:grid-cols-4"
        >
            {data.items.map((testimonial, index) => (
                <motion.div
                    key={testimonial.id ?? index}
                    variants={{
                        hidden: { opacity: 0, y: 28 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex h-full w-full flex-col"
                >
                    <div className="flex h-full w-full flex-col rounded-2xl border border-gray-200 p-5  sm:p-5 lg:p-5">
                        <div className="text-center">
                            <div className=" font-serif text-[64px] leading-none text-[#e7a43b] sm:text-[80px]">
                                “
                            </div>

                            <div className="mb-4 flex items-center justify-center gap-3">
                                <span className="h-px w-12 bg-gradient-to-r from-transparent via-[#d99a32] to-[#d99a32] sm:w-16" />
                                <span className="h-2 w-2 rotate-45 bg-[#e4a33b]" />
                                <span className="h-px w-12 bg-gradient-to-l from-transparent via-[#d99a32] to-transparent sm:w-16" />
                            </div>

                            <p className="min-h-[110px] text-sm font-medium leading-6 text-slate-800 sm:min-h-[135px] sm:text-[15px] sm:leading-7">
                                {testimonial.text}
                            </p>

                            <div className="my-4 h-px w-full bg-gradient-to-r from-transparent via-[#8d6327] to-transparent" />

                            <div className="mb-4 flex justify-center gap-1" aria-label="5 star rating">
                                {Array.from({ length: 5 }).map((_, star) => (
                                    <span key={star} className="text-xl text-[#e7a43b]">
                                        ★
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-3 text-left">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#e4a33b]">
                                    <UserRound className="h-6 w-6 text-[#e4a33b]" strokeWidth={1.5} />
                                </div>

                                <div className="min-w-0">
                                    <h3 className="truncate text-base font-semibold text-[#e4a33b]">
                                        {testimonial.name}
                                    </h3>
                                    <p className="truncate text-sm text-gray-400">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
}

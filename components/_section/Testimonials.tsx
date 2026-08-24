"use client";

import React from "react";
import {
    Scale,
    UserRound,
} from "lucide-react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";

import siteData from "@/data/data.json";
import type { TestimonialItem } from "@/types";

const { testimonials } = siteData;

export default function Testimonials() {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
        if (!api) return;

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <section
            className="relative w-full overflow-hidden bg-[#050b12] py-20 text-white sm:py-24"
            style={{
                backgroundImage: `linear-gradient(rgba(3,8,15,0.78), rgba(3,8,15,0.88)), url('${testimonials.bgImage}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Background overlay */}
            <div className="absolute inset-0 bg-black/20" />

            {/* ================= CONTENT ================= */}
            <div className="relative z-10 w-full px-5 sm:px-10 md:px-16 lg:px-20 xl:px-24">
                {/* ================= SECTION HEADER ================= */}
                <div className="mx-auto mb-16 max-w-4xl space-y-4 text-center">
                    {/* Small Heading */}
                    <div className="flex items-center justify-center gap-2">
                        <span className="h-px w-8 bg-[#d9983b]" />
                        <span className="text-sm font-semibold uppercase tracking-widest text-White">
                            Testominial
                        </span>
                        <span className="h-px w-8 bg-[#d9983b]" />
                    </div>

                    {/* Scale Icon */}
                    <div className="flex items-center justify-center">
                        <Scale
                            className="h-14 w-14 text-[#e4a33b]"
                            strokeWidth={1.5}
                        />
                    </div>

                    {/* Main Heading */}
                    <h2 className="font-serif text-3xl font-normal leading-[1.15] tracking-tight text-white sm:text-5xl md:text-5xl lg:text-6xl">
                        {testimonials.title}
                    </h2>

                    {/* Divider */}
                    <div className="mx-auto h-px w-12 bg-[#d99a32]" />

                    {/* Description */}
                    <p className="mx-auto max-w-xl text-lg font-base leading-relaxed text-gray-300 sm:text-ms">
                        {testimonials.description}
                    </p>
                </div>

                {/* ================= TESTIMONIALS CAROUSEL ================= */}
                <div className="relative mx-auto w-full">
                    <Carousel
                        setApi={setApi}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4 sm:-ml-6 py-1">
                            {testimonials.items.map((testimonial: TestimonialItem, index: number) => (
                                <CarouselItem
                                    key={index}
                                    className="flex h-auto basis-full pl-4 sm:pl-6 md:basis-1/2 lg:basis-1/4"
                                >
                                    <div className="flex h-full w-full flex-col rounded-2xl border border-[#c88728] bg-[#07121d]/95 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.35)] sm:p-6 lg:p-7">
                                        {/* Quote */}
                                        <div className="text-center">
                                            <div className="mb-2 text-[64px] font-serif leading-none text-[#e7a43b] sm:text-[80px]">
                                                “
                                            </div>

                                            <div className="mb-4 flex items-center justify-center gap-3">
                                                <span className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent via-[#d99a32] to-[#d99a32]" />

                                                <span className="h-2 w-2 rotate-45 bg-[#e4a33b]" />

                                                <span className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent via-[#d99a32] to-[#d99a32]" />
                                            </div>

                                            {/* Text */}
                                            <p className="min-h-[110px] text-sm leading-6 text-gray-200 sm:min-h-[135px] sm:leading-7 sm:text-[15px]">
                                                {testimonial.text}
                                            </p>

                                            {/* Divider */}
                                            <div className="my-4 h-px w-full bg-gradient-to-r from-transparent via-[#8d6327] to-transparent" />

                                            {/* Stars */}
                                            <div className="mb-4 flex justify-center gap-1">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <span
                                                        key={star}
                                                        className="text-xl text-[#e7a43b]"
                                                    >
                                                        ★
                                                    </span>
                                                ))}
                                            </div>

                                            {/* User */}
                                            <div className="flex items-center gap-3 text-left">
                                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#e4a33b]">
                                                    <UserRound
                                                        className="h-6 w-6 text-[#e4a33b]"
                                                        strokeWidth={1.5}
                                                    />
                                                </div>

                                                <div>
                                                    <h3 className="text-base font-semibold text-[#e4a33b]">
                                                        {testimonial.name}
                                                    </h3>

                                                    <p className="text-sm text-gray-400">
                                                        {testimonial.role}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {/* Left Arrow */}
                        <CarouselPrevious
                            className="-left-2 z-30 flex h-10 w-10 items-center justify-center border border-[#d99a32] bg-[#08121c]/95 text-[#d99a32] shadow-xl transition-all hover:bg-[#d99a32] hover:text-white sm:-left-1 sm:h-12 sm:w-12 [&_svg]:size-5 sm:[&_svg]:size-6"
                        />

                        {/* Right Arrow */}
                        <CarouselNext
                            className="-right-2 z-30 flex h-10 w-10 items-center justify-center border border-[#d99a32] bg-[#08121c]/95 text-[#d99a32] shadow-xl transition-all hover:bg-[#d99a32] hover:text-white sm:-right-1 sm:h-12 sm:w-12 [&_svg]:size-5 sm:[&_svg]:size-6"
                        />
                    </Carousel>
                </div>

                {/* ================= FUNCTIONAL INTERACTIVE DOTS ================= */}
                <div className="mt-10 flex items-center justify-center gap-3">
                    {testimonials.items.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => api?.scrollTo(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            className={`h-3 transition-all duration-300 rounded-full ${current === i
                                ? "w-8 bg-[#e4a33b]"
                                : "w-3 bg-white/30 hover:bg-white/60"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
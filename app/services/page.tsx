"use client";

import NeedLegalSection from "@/components/_section/NeedLegalSection";
import PageTopSection from "@/components/_page/PageTopSection";
import ServiceCard from "@/components/ServiceCard";
import {
  Scale,
  FileText,
  Gavel,
  Users,
  Building2,
  Landmark,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import siteData from "@/data/siteData";
import type { ServicesPageData } from "@/types";

const services = siteData.services as ServicesPageData;
const iconMap: Record<string, LucideIcon> = {
  Scale,
  FileText,
  Gavel,
  Users,
  Building2,
  Landmark,
};

export default function ServicesPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Top Banner Section */}
      <PageTopSection title={services.pageTitle} />

      {/* Main Content Section */}
      <section className="px-5 py-16 sm:px-10 sm:py-20 md:px-16 lg:px-20 xl:px-24">
        <div className="mx-auto ">
          {/* Header Info */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto mb-16 max-w-4xl text-center space-y-4"
          >
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#d9983b]" />
              <span className="text-sm font-semibold uppercase tracking-widest text-[#d9983b]">
                {services.tagline}
              </span>
              <span className="h-px w-10 bg-[#d9983b]" />
            </div>

            <h2 className="font-serif text-3xl font-normal leading-[1.15] tracking-tight text-black sm:text-5xl md:text-5xl lg:text-6xl">
              {services.title} {""}
              <span className="font-serif text-[#d9983b]">
                {services.highlight}
              </span>
            </h2>

            <p className="mx-auto max-w-xl text-sm leading-relaxed sm:text-base text-slate-800">
              {services.description}
            </p>
          </motion.div>

          {/* Services Cards Grid */}
          <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {services.items.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{
                    duration: 0.55,
                    delay: (service.id - 1) * 0.08,
                    ease: "easeOut",
                  }}
                  className="w-full"
                >
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    image={service.image}
                    icon={<Icon className="h-7 w-7 text-[#d9983b]" />}
                    linkUrl={service.linkUrl}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <NeedLegalSection
          leftColumnImage={siteData.results.leftColumnImage}
          rightBgImage={siteData.results.rightBgImage}
          phone={siteData.navbar.phone}
        />
      </motion.div>
    </main>
  );
}

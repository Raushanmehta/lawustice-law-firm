import Link from "next/link";
import PageTopSection from "@/components/_page/PageTopSection";
import siteData from "@/data/data.json";

export default function SitemapPage() {
    const { title, description, sections } = siteData.sitemap;
    return (
        <main className="min-h-screen bg-[#fdfbf7]">
            <PageTopSection title={title} subtitle={description} />
            <section className="mx-auto max-w-7xl px-5 py-16 sm:px-10 md:px-16 lg:px-20">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {sections.map((section, idx) => (
                        <div key={idx} className="rounded-xl border border-[#f0ebde] bg-white p-6 shadow-sm">
                            <h3 className="border-b border-[#f0ebde] pb-3 font-serif text-xl font-medium text-[#0b1329]">
                                {section.category}
                            </h3>
                            <ul className="mt-4 space-y-2.5">
                                {section.links.map((link, lIdx) => (
                                    <li key={lIdx}>
                                        <Link href={link.href} className="text-sm text-gray-600 transition-colors hover:text-[#d9983b]">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
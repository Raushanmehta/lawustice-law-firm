import PageTopSection from "@/components/_page/PageTopSection";
import siteData from "@/data/data.json";

export default function PublicationsPage() {
    const { title, description, items } = siteData.publications;
    return (
        <main className="min-h-screen bg-[#fdfbf7]">
            <PageTopSection title={title} subtitle={description} />
            <section className="mx-auto max-w-7xl px-5 py-16 sm:px-10 md:px-16 lg:px-20">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {items.map((pub) => (
                        <div key={pub.id} className="rounded-xl border border-[#f0ebde] bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#d9983b]">
                                <span>{pub.category}</span>
                                <span>{pub.date}</span>
                            </div>
                            <h3 className="mt-3 font-serif text-2xl text-[#0b1329] font-medium">{pub.title}</h3>
                            <p className="mt-2 text-xs font-medium text-gray-500">By {pub.author}</p>
                            <p className="mt-4 text-sm leading-relaxed text-gray-600">{pub.summary}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
import Link from 'next/link';
import PageTopSection from '@/components/_page/PageTopSection';
import { ArrowRight, CalendarRange, Scale } from 'lucide-react';

interface SitemapItem {
    number: string;
    title: string;
    href: string;
}

const column1: SitemapItem[] = [
    { number: '01', title: 'Home 🏠', href: '/' },
    { number: '02', title: 'About Us', href: '/about' },
    { number: '03', title: 'Why Choose Us', href: '/why-choose-us' },
    { number: '04', title: 'Our Approach', href: '/our-approach' },
    { number: '05', title: 'Services', href: '/services' },
    { number: '06', title: 'Services Detail', href: '/services' },
    { number: '07', title: 'Our Team', href: '/team' },
    { number: '08', title: 'Team Detail', href: '/team' },
    { number: '09', title: 'Industries', href: '/industries' },
    { number: '10', title: 'Industry Detail', href: '/industries' },
    { number: '11', title: 'Case Studies / Representative Matters', href: '/case-studies' },
];

const column2: SitemapItem[] = [
    { number: '12', title: 'Case Study Detail', href: '/case-studies' },
    { number: '13', title: 'Insights / Blog', href: '/blog' },
    { number: '14', title: 'Blog Detail', href: '/blog' },
    { number: '15', title: 'Legal Updates', href: '/legal-updates' },
    { number: '16', title: 'Legal Updates Detail', href: '/legal-updates' },
    { number: '17', title: 'News & Media', href: '/news-media' },
    { number: '18', title: 'Events', href: '/events' },
    { number: '19', title: 'Event Detail', href: '/events' },
    { number: '20', title: 'Publications', href: '/publications' },
    { number: '21', title: 'Publication Detail', href: '/publications' },
    { number: '22', title: 'Awards & Recognition', href: '/awards-recognition' },
];

const column3: SitemapItem[] = [
    { number: '23', title: 'Testimonials', href: '/testimonials' },
    { number: '24', title: 'FAQs', href: '/faqs' },
    { number: '25', title: 'Careers', href: '/careers' },
    { number: '26', title: 'Job Detail', href: '/job-detail' },
    { number: '27', title: 'Office Locations', href: '/office-locations' },
    { number: '28', title: 'Contact Us', href: '/contact-us' },
    { number: '29', title: 'Book Consultation', href: '/book-consultation' },
    { number: '30', title: '404 Page', href: '/not-found' },
    { number: '31', title: 'Privacy Policy', href: '/privacy-policy' },
    { number: '32', title: 'Terms & Conditions', href: '/terms-conditions' },
    { number: '33', title: 'Legal Disclaimer', href: '/legal-disclaimer' },
];

export default function SitemapPage() {
    return (
        <main>
            <PageTopSection title='Sitemap' />
            <div className="min-h-screen  text-[#2C2C2C] px-4 md:px-12 py-12">

                <div className="max-w-7xl mx-auto space-y-12">

                    {/* Header Section */}
                    <div className="text-center space-y-3">
                        <p className="text-xs uppercase tracking-widest text-[#C27803] font-semibold">
                            — Sitemap —
                        </p>
                        <h1 className="text-3xl md:text-5xl font-serif text-[#1A1A1A]">
                            Explore All Pages
                        </h1>
                        <div className="flex items-center justify-center gap-3">
                            <span className="h-px w-12 bg-[#d9983b]/60" />
                            <Scale className="h-6 w-6 text-[#d9983b]" strokeWidth={1.5} />
                            <span className="h-px w-12 bg-[#d9983b]/60" />
                        </div>
                    </div>

                    {/* 3-Column Sitemap Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Column 1 */}
                        <div className="space-y-3">
                            {column1.map((item) => (
                                <Link
                                    key={item.number}
                                    href={item.href}
                                    className="bg-[#FBF9F4] border border-gray-200/80 rounded-lg p-4 flex items-center justify-between shadow-sm hover:border-[#D4AF37] hover:shadow-md transition-all duration-200 group"
                                >
                                    <div className="flex items-center space-x-3">
                                        <span className="bg-[#0B131D] text-[#D4AF37] text-sm font-bold px-2 py-1 rounded">
                                            {item.number}
                                        </span>
                                        <span className="text-sm font-semibold text-[#0B131D] group-hover:text-[#C27803] transition-colors">
                                            {item.title}
                                        </span>
                                    </div>
                                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-[#C27803] group-hover:translate-x-1 transition-all duration-200" />
                                </Link>
                            ))}
                        </div>

                        {/* Column 2 */}
                        <div className="space-y-3">
                            {column2.map((item) => (
                                <Link
                                    key={item.number}
                                    href={item.href}
                                    className="bg-[#FBF9F4] border border-gray-200/80 rounded-lg p-4 flex items-center justify-between shadow-sm hover:border-[#D4AF37] hover:shadow-md transition-all duration-200 group"
                                >
                                    <div className="flex items-center space-x-3">
                                        <span className="bg-[#0B131D] text-[#D4AF37] text-sm font-bold px-2 py-1 rounded">
                                            {item.number}
                                        </span>
                                        <span className="text-sm font-semibold text-[#0B131D] group-hover:text-[#C27803] transition-colors">
                                            {item.title}
                                        </span>
                                    </div>
                                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-[#C27803] group-hover:translate-x-1 transition-all duration-200" />
                                </Link>
                            ))}
                        </div>

                        {/* Column 3 */}
                        <div className="space-y-3">
                            {column3.map((item) => (
                                <Link
                                    key={item.number}
                                    href={item.href}
                                    className="bg-[#FBF9F4] border border-gray-200/80 rounded-lg p-4 flex items-center justify-between shadow-sm hover:border-[#D4AF37] hover:shadow-md transition-all duration-200 group"
                                >
                                    <div className="flex items-center space-x-3">
                                        <span className="bg-[#0B131D] text-[#D4AF37] text-sm font-bold px-2 py-1 rounded">
                                            {item.number}
                                        </span>
                                        <span className="text-sm font-semibold text-[#0B131D] group-hover:text-[#C27803] transition-colors">
                                            {item.title}
                                        </span>
                                    </div>
                                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-[#C27803] group-hover:translate-x-1 transition-all duration-200" />
                                </Link>
                            ))}
                        </div>

                    </div>

                    {/* Bottom CTA Banner */}
                    <div className="bg-[#FBF5EC] border border-[#F0E6D8] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between shadow-sm gap-6">
                        <div className="flex items-center space-x-4">
                            <div className="w-14 h-14 rounded-xl bg-[#0B131D] text-[#D4AF37] flex items-center justify-center text-2xl shadow-md flex-shrink-0">
                                <CalendarRange />
                            </div>
                            <div>
                                <h3 className="text-lg md:text-2xl font-serif text-[#1A1A1A]">
                                    Can&apos;t Find What You&apos;re Looking For?
                                </h3>
                                <p className="text-xs md:text-sm text-gray-600 mt-0.5">
                                    Our team is here to help. Get in touch with us for any assistance.
                                </p>
                            </div>
                        </div>
                        <Link
                            href="/contact-us"
                            className="bg-[#D4AF37] hover:bg-[#c29e2f] text-[#0B131D] font-semibold text-sm px-6 py-3 rounded-xl shadow transition-colors flex items-center space-x-2 whitespace-nowrap"
                        >
                            <span>Contact Us</span>
                            <span>→</span>
                        </Link>
                    </div>

                </div>
            </div>
        </main>
    );
}
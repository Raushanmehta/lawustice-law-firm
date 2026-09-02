"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PageTopSection from "@/components/_page/PageTopSection";
import BlogCard from "@/components/BlogCard";
import siteData from "@/data/siteData";
import { BlogPost, BlogSectionData } from "@/types/sections";

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

export default function BlogPage() {
    const blogData = siteData.blog as unknown as BlogSectionData;
    const blogs = blogData?.posts || [];

    // Pagination settings
    const blogsPerPage = 6;

    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(blogs.length / blogsPerPage);

    // Calculate current page blogs
    const startIndex = (currentPage - 1) * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;

    const currentBlogs = blogs.slice(startIndex, endIndex);

    // Previous page
    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);

            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    // Next page
    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);

            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    // Change page
    const handlePageChange = (page: number) => {
        setCurrentPage(page);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <main>
            <PageTopSection title="Blog" />

            <section className="bg-white  container mx-auto px-5 py-16 sm:px-10 md:px-20 lg:px-24">
                <div className="">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="mx-auto mb-14 max-w-2xl space-y-4 text-center"
                    >
                        <div className="flex items-center justify-center gap-3">
                            <span className="h-px w-10 bg-[#d9983b]" />

                            <span className="text-md font-semibold uppercase tracking-widest text-[#d9983b]">
                                {blogData?.tagline || "Our Blogs"}
                            </span>

                            <span className="h-px w-10 bg-[#d9983b]" />
                        </div>

                        <h2 className="font-serif text-3xl font-normal leading-[1.15] tracking-tight text-black sm:text-4xl lg:text-5xl">
                            {blogData?.title || "Latest Insights"}
                        </h2>

                        <p className="mx-auto max-w-xl text-md leading-relaxed text-slate-800">
                            Find comprehensive legal guides, case study analyses, and expert
                            insights in our blog section. Stay updated with the latest legal
                            news.
                        </p>
                    </motion.div>

                    {/* Blog Cards */}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {currentBlogs.map((blog: BlogPost, index: number) => {
                            const formattedDate =
                                blog.formattedDate ||
                                (blog.date
                                    ? `${blog.date.month} ${blog.date.day}, ${blog.date.year || "2024"}`
                                    : "2024");
                            return (
                                <motion.div
                                    key={blog.id || blog.slug}
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.15 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                        ease: "easeOut",
                                    }}
                                >
                                    <BlogCard
                                        title={blog.title}
                                        category={blog.category}
                                        imageSrc={
                                            blog.image ||
                                            "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80"
                                        }
                                        date={formattedDate}
                                        readTime={blog.readTime}
                                        description={blog.description}
                                        readMoreUrl={`/blog/${blog.slug}`}
                                    />
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="mt-14">
                            <Pagination>
                                <PaginationContent>
                                    {/* Previous */}
                                    <PaginationItem>
                                        <PaginationPrevious
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handlePrevious();
                                            }}
                                            className={
                                                currentPage === 1
                                                    ? "pointer-events-none opacity-50"
                                                    : "cursor-pointer"
                                            }
                                        />
                                    </PaginationItem>

                                    {/* Page Numbers */}
                                    {Array.from(
                                        { length: totalPages },
                                        (_, index) => index + 1
                                    ).map((page) => (
                                        <PaginationItem key={page}>
                                            <PaginationLink
                                                href="#"
                                                isActive={currentPage === page}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handlePageChange(page);
                                                }}
                                                className="cursor-pointer"
                                            >
                                                {page}
                                            </PaginationLink>
                                        </PaginationItem>
                                    ))}

                                    {/* Ellipsis */}
                                    {totalPages > 5 && (
                                        <PaginationItem>
                                            <PaginationEllipsis />
                                        </PaginationItem>
                                    )}

                                    {/* Next */}
                                    <PaginationItem>
                                        <PaginationNext
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleNext();
                                            }}
                                            className={
                                                currentPage === totalPages
                                                    ? "pointer-events-none opacity-50"
                                                    : "cursor-pointer"
                                            }
                                        />
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
import { notFound } from "next/navigation";
import BlogDetailPage from "@/components/_page/BlogDetailPage";
import PageTopSection from "@/components/_page/PageTopSection";
import siteData from "@/data/siteData";
import { BlogPost, BlogSectionData } from "@/types/sections";

interface BlogDetailRouteProps {
    params: Promise<{ slug: string }>;
}

export default async function BlogDetail({ params }: BlogDetailRouteProps) {
    const { slug } = await params;
    const blogData = siteData.blog as unknown as BlogSectionData;

    const post = blogData.posts.find(
        (item: BlogPost) => item.slug === slug || String(item.id) === slug
    );

    if (!post) {
        notFound();
    }

    return (
        <main>
            <PageTopSection title="Blog Detail" />
            <BlogDetailPage
                post={post}
                allPosts={blogData.posts}
                categories={blogData.categories}
            />
        </main>
    );
}

import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";

interface NotFoundPageProps {
    imageSrc?: string;
    homeUrl?: string;
}

export default function NotFoundPage({
    imageSrc = "https://media.istockphoto.com/id/2202761531/photo/justice-statue-gavel-with-law-justice-lawyers-having-team-meeting-at-law-firm-background.jpg?s=612x612&w=0&k=20&c=wpcgr8UuSl9pzg664rpk8dUH-aLC1XQp_v6FEW4YRCM=",
    homeUrl = "/",
}: NotFoundPageProps) {
    return (
        <section className="relative min-h-screen w-full overflow-hidden ">
            {/* ================= BACKGROUND IMAGE ================= */}
            <div className="absolute inset-y-0 right-0 w-full lg:w-[60%]">
                <Image
                    src={imageSrc}
                    alt="Law Justice"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center"
                />

                {/* Dark Overlay */}
               <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent" />
                {/* Mobile Bottom Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#031224] via-transparent to-transparent lg:hidden" />
            </div>

            {/* ================= CONTENT CONTAINER ================= */}
            <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 sm:px-10 lg:grid-cols-12 lg:gap-16 lg:px-16">
                
                {/* ================= LEFT CONTENT ================= */}
                <div className="flex flex-col items-start space-y-6 lg:col-span-6">

                    {/* 404 */}
                    <h1 className="font-serif text-8xl font-bold tracking-tight  sm:text-9xl">
                        404
                    </h1>

                    {/* Divider */}
                    <div className="flex w-full max-w-xs items-center gap-3">
                        <div className="h-px w-full bg-[#d9983b]/60" />

                        <div className="h-2 w-2 shrink-0 rotate-45 bg-[#d9983b]" />

                        <div className="h-px w-full bg-[#d9983b]/60" />
                    </div>

                    {/* Message */}
                    <div className="max-w-md space-y-3">
                        <h2 className="font-serif text-3xl font-normal leading-[1.15] tracking-tight text-black sm:text-5xl md:text-5xl lg:text-6xl">
                            Oops! Page Not Found
                        </h2>

                        <p className="text-sm leading-relaxed text-slate-800 sm:text-base">
                            The page you&apos;re looking for doesn&apos;t exist
                            or has been moved.
                        </p>
                    </div>

                    {/* Back Home */}
                    <div className="pt-2">
                        <Link
                            href={homeUrl}
                            className="group inline-flex items-center gap-3 rounded-lg bg-[#081225] px-6 py-4 text-xs font-semibold tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-[#111f3d] sm:text-sm"
                        >
                            <FaArrowLeft className="h-3.5 w-3.5 text-[#d9983b] transition-transform duration-300 group-hover:-translate-x-1" />

                            <span>BACK TO HOME</span>
                        </Link>
                    </div>
                </div>

                {/* ================= RIGHT IMAGE SPACE ================= */}
                <div className="hidden lg:col-span-6 lg:block" />
            </div>
        </section>
    );
}
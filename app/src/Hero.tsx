"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link";
import Sara from "../src/assets/sara.png"
import Image from "next/image";
import { Testimonial } from "../src/data/testimonial"
// import { Card, CardContent } from "@/components/ui/card";
// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
// } from "@/components/ui/carousel";
// import { Services } from "../src/data/services"
import { Clients } from "../src/data/clients"


export default function Hero() {
    return (
        <>
            {/* HERO SECTION */}
            <section className="py-12 sm:py-16 md:py-24 text-center bg-white px-4 sm:px-6">
                <h1 className="text-3xl leading-tight sm:text-4xl sm:leading-20 md:text-5xl lg:text-6xl font-extrabold text-blue-950 drop-shadow-xl"
                >
                    Strategy at Core, <br className="hidden sm:block" />
                    Formula as <span className="text-amber-500">Crown</span>
                </h1>
                <p className="mt-4 sm:mt-6 text-base sm:text-lg text-blue-950 max-w-2xl mx-auto"
                >
                    Forge Your Business Legend with our bespoke royal formula for unstoppable growth
                </p>
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                    <Button className="bg-amber-500 text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-amber-600 w-full sm:w-auto">
                        <Link href="/register">Register Now</Link>
                    </Button>
                    <Button variant="outline" className="text-blue-950 bg-(--dck-bg) cursor-pointer text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-gray-200 w-full sm:w-auto">
                        Watch Intro Video
                    </Button>
                </div>
            </section>

            {/* DESCRIPTION / PROMISE */}
            <section className="bg-(--dck-bg) text-center py-12 sm:py-16 md:py-20 px-4 sm:px-6">
                <p className="text-base sm:text-lg md:text-xl text-blue-950">
                    For entrepreneurs looking to grow<br className="hidden sm:block" />No marketing skills? No team?<br className="hidden sm:block" />Starting from zero?
                </p>

                <p className="mt-4 sm:mt-6 text-xl sm:text-2xl font-bold text-blue-950">
                    AI + Marketing Management + Automation System
                </p>

                <p className="text-blue-950 mt-3 sm:mt-4 text-base sm:text-lg">Break the traditional business model.</p>

                <p className="mt-6 sm:mt-8 md:mt-10 text-lg sm:text-xl font-bold text-gray-500">
                    365 days online & offline guidance<br className="hidden sm:block" />Marketing strategy + systems + resources
                </p>

                <h2 className="mt-6 sm:mt-8 text-2xl sm:text-3xl font-extrabold text-blue-950">
                    Practical, hands-on support to fully automate your business.
                </h2>
            </section>

            {/* VIDEO */}
            <section className="flex justify-center bg-(--dck-bg) py-8 sm:py-12 md:py-16 px-4">
                <div className="w-full max-w-4xl border-2 sm:border-4 border-white shadow-lg sm:shadow-2xl rounded-lg sm:rounded-xl overflow-hidden"
                >
                    <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[450px] bg-gray-900 flex items-center justify-center">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/zs7u0qG9pNI"
                            title="Intro Video"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* PAIN POINTS */}
            <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-blue-950">Does this sound like you?</h2>
                <p className="text-blue-950 max-w-2xl mx-auto mb-8 sm:mb-10 text-sm sm:text-base">
                    Before automation, most entrepreneurs are stuck in the same loop:
                    doing everything manually, burning out, and not seeing scalable results.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto text-left">
                    <div className="bg-gray-900/60 border border-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                        <h3 className="font-semibold mb-2 sm:mb-3 text-white text-base sm:text-lg">Manual & Chaotic</h3>
                        <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">
                            <li>❌ Manual follow-ups that never end</li>
                            <li>❌ Customer data scattered everywhere</li>
                            <li>❌ No clear tracking of leads & sales</li>
                        </ul>
                    </div>
                    <div className="bg-gray-900/60 border border-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                        <h3 className="font-semibold mb-2 sm:mb-3 text-white text-base sm:text-lg">No Team, No Time</h3>
                        <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">
                            <li>❌ Doing marketing, sales, and ops alone</li>
                            <li>❌ No structure or clear system</li>
                            <li>❌ Stuck inside the business, not growing it</li>
                        </ul>
                    </div>
                    <div className="bg-gray-900/60 border border-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                        <h3 className="font-semibold mb-2 sm:mb-3 text-white text-base sm:text-lg">Tools Don&apos;t Talk</h3>
                        <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">
                            <li>❌ Too many apps that don&apos;t connect</li>
                            <li>❌ Leads slip through the cracks</li>
                            <li>❌ No real automation, just more work</li>
                        </ul>
                    </div>
                </div>
            </section>



            {/* WHO IS THIS FOR */}
            <section className="bg-(--dck-bg) py-12 sm:py-16 md:py-20 px-4 sm:px-6 text-blue-950">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-start">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Who is this program for?</h2>
                        <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
                            This is not another &quot;motivation only&quot; seminar. It&apos;s for people who
                            want real systems and results.
                        </p>
                        <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                            <li>✔ Solo entrepreneurs who want to operate like a full team</li>
                            <li>✔ Business owners who want to automate lead & customer flow</li>
                            <li>✔ Coaches & trainers building scalable online programs</li>
                            <li>✔ Freelancers turning skills into a productized business</li>
                            <li>❌ Not for people who refuse to take action</li>
                            <li>❌ Not for those expecting results overnight without work</li>
                        </ul>
                    </div>
                    <div className="bg-slate-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-inner">
                        <h3 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">In this program, you will:</h3>
                        <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                            <li>→ Build your own automated client journey</li>
                            <li>→ Design offers, funnels, and follow-up sequences</li>
                            <li>→ Implement AI into content, sales, and operations</li>
                            <li>→ Launch, test, and optimize with real guidance</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS / ROADMAP */}
            <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-amber-500">How It Works</h2>
                <p className="text-blue-950 mb-8 sm:mb-10 max-w-2xl mx-auto text-sm sm:text-base">
                    A simple 3-stage roadmap to transform your business into an automated,
                    AI-assisted system.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto text-left">
                    <div className="bg-gray-900/70 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-800">
                        <p className="text-xs sm:text-sm font-semibold text-amber-500 mb-1 sm:mb-2">STEP 1</p>
                        <h3 className="font-bold mb-2 sm:mb-3 text-white text-base sm:text-lg">Foundation & Clarity</h3>
                        <p className="text-xs sm:text-sm text-gray-300">
                            Clarify your offer, audience, and business model. Map out your customer
                            journey from first touch to long-term client.
                        </p>
                    </div>
                    <div className="bg-gray-900/70 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-800">
                        <p className="text-xs sm:text-sm font-semibold text-amber-500 mb-1 sm:mb-2">STEP 2</p>
                        <h3 className="font-bold mb-2 sm:mb-3 text-white text-base sm:text-lg">Systems & Automation</h3>
                        <p className="text-xs sm:text-sm text-gray-300">
                            Build your funnels, CRM flows, tags, tasks, follow-ups, and AI-assisted
                            workflows using our templates.
                        </p>
                    </div>
                    <div className="bg-gray-900/70 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-800">
                        <p className="text-xs sm:text-sm font-semibold text-amber-500 mb-1 sm:mb-2">STEP 3</p>
                        <h3 className="font-bold mb-2 sm:mb-3 text-white text-base sm:text-lg">Scale & Optimization</h3>
                        <p className="text-xs sm:text-sm text-gray-300">
                            Optimize campaigns, track numbers, and scale what works while the
                            system runs 24/7.
                        </p>
                    </div>
                </div>
            </section>

            {/* FOUNDER SECTION */}
            <section className="bg-(--dck-bg) py-12 sm:py-16 md:py-20 px-4 sm:px-6 text-center md:text-left flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12">
                <div className="w-48 sm:w-64 md:w-72 lg:w-80">
                    <Image
                        src={Sara}
                        alt="sara"
                        width={300}
                        height={350}
                        className="rounded-xl w-full h-auto"
                    />
                </div>

                <div className="text-blue-950 max-w-xl mt-6 sm:mt-8 md:mt-0">
                    <p className="text-blue-950 text-lg sm:text-xl">I am <span className="text-amber-500 font-bold">Sara Yeong</span></p>
                    <p className="mt-1 sm:mt-2 text-blue-950 text-sm sm:text-base">Founder of <span className="font-bold">DCK Media & Business Consulting</span></p>

                    <p className="mt-3 sm:mt-4 leading-relaxed text-blue-950 text-sm sm:text-base">
                        My mission is simple: help ordinary people achieve the power of
                        <span className="font-semibold"> &quot;one person equals one full team&quot;</span>
                        using AI, structured marketing systems, and automation.
                    </p>

                    <p className="mt-3 sm:mt-4 leading-relaxed text-blue-950 text-sm sm:text-base">
                        Together with our team, we&apos;re building Malaysia&apos;s top-level,
                        fully automated business ecosystem — designed for entrepreneurs who
                        want scalable, predictable growth.
                    </p>

                    <Button className="bg-amber-500 text-white text-base sm:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full mt-6 sm:mt-8 hover:bg-amber-600 hover:scale-105 transition duration-300 w-full sm:w-auto">
                        Register
                    </Button>
                </div>
            </section>

            {/* FEATURE GRID */}
            <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 text-blue-950">
                <div>
                    <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">Customer Management</h3>
                    <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                        <li>✔ Auto tag, notes, and tasks</li>
                        <li>✔ Auto follow-up messaging</li>
                        <li>✔ Smart segmentation & pipeline tracking</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">Website & Funnels</h3>
                    <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                        <li>✔ No coding needed — drag & drop builder</li>
                        <li>✔ Professionally designed templates</li>
                        <li>✔ Fully mobile-responsive</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">Multi-Platform Control</h3>
                    <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                        <li>✔ Manage Facebook / IG / TikTok</li>
                        <li>✔ Bulk content scheduling</li>
                        <li>✔ Auto sync ad leads</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">Membership / Course System</h3>
                    <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                        <li>✔ Track learning progress</li>
                        <li>✔ Smart course reminders</li>
                        <li>✔ Step-by-step learning paths</li>
                    </ul>
                </div>
            </section>

            {/* BONUS PACK */}
            <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-amber-500">Client Success Stories</h2>
                <p className="text-blue-950 max-w-2xl mx-auto mb-8 sm:mb-10 text-sm sm:text-base">
                    A complete ecosystem of tools, templates, and guidance to shortcut
                    years of trial and error.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto text-left">
                    <div className="bg-gray-900/70 border border-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                        <h3 className="font-semibold mb-2 sm:mb-3 text-white text-base sm:text-lg">Bonus #1 — Automation Library</h3>
                        <p className="text-xs sm:text-sm text-gray-300">
                            20+ ready-to-use automation workflows for leads, sales,
                            onboarding, and retention.
                        </p>
                    </div>
                    <div className="bg-gray-900/70 border border-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                        <h3 className="font-semibold mb-2 sm:mb-3 text-white text-base sm:text-lg">Bonus #2 — AI Marketing Scripts</h3>
                        <p className="text-xs sm:text-sm text-gray-300">
                            Plug-and-play prompts and templates for ads, emails, content,
                            and sales pages.
                        </p>
                    </div>
                    <div className="bg-gray-900/70 border border-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                        <h3 className="font-semibold mb-2 sm:mb-3 text-white text-base sm:text-lg">Bonus #3 — Funnel Packs</h3>
                        <p className="text-xs sm:text-sm text-gray-300">
                            High-converting funnel structures customized for different
                            industries and offers.
                        </p>
                    </div>
                </div>
            </section>

            {/* SOCIAL PROOF & TESTIMONIALS */}
            <section className="bg-(--dck-bg) py-12 sm:py-16 md:py-20 px-4 sm:px-6 text-center text-blue-950">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Testimonial</h2>
                <p className="text-gray-700 max-w-2xl mx-auto mb-8 sm:mb-10 text-sm sm:text-base">
                    Real people building real automated businesses. These are some of the
                    results from our community members.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto text-center">
                    {Testimonial.map((data, index) => (
                        <div key={index} className="bg-white flex flex-col h-full justify-between items-center rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6">
                            <div className="text-xs mb-2 font-bold text-gray-500">{data.type}</div>
                            <Image src={data.image} alt="image" className="w-full" />
                            <div className="text-gray-500 text-xs sm:text-sm font-bold mt-2"> {data.title}</div>
                            <p className="text-xs mt-2">{data.description}</p>
                            <p className="text-xs mt-2 font-bold text-gray-500">{data.category}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CLIENTS'S LOGO */}
            <section className="flex flex-col items-center justify-center py-4 sm:py-8 px-4 h-auto sm:h-[55vh] bg-white">
                <h1
                    className="text-2xl sm:text-3xl md:text-4xl font-bold mt-6 sm:mt-8 md:mt-10 mb-6 sm:mb-8 md:mb-10 pt-3 sm:pt-4 md:pt-5 text-amber-500"
                    data-aos="fade-up"
                >
                    Our Clients
                </h1>

                <div
                    className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-center mb-10 sm:mb-16 md:mb-20"
                    data-aos="fade-up"
                >
                    {Clients.map((data, index) => (
                        <div key={index} className="flex justify-center">
                            <Image
                                src={data.image}
                                alt={"Client logo"}
                                className="rounded-lg sm:rounded-xl md:rounded-2xl w-16 sm:w-20 md:w-24 lg:w-28 xl:w-30 cursor-pointer hover:scale-105 sm:hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* CASE STUDY SECTION */}
            <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 text-blue-950">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Case Study: From Manual Chaos to <span className="text-amber-500">Predictable Growth</span></h2>
                        <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4">
                            A local service business owner went from manually handling every
                            lead to running a semi-automated operation.
                        </p>
                        <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                            <li>→ Centralized all leads from Facebook & Instagram</li>
                            <li>→ Implemented automated follow-up sequences</li>
                            <li>→ Built membership portal for existing clients</li>
                            <li>→ 2.3x increase in monthly revenue within 4 months</li>
                        </ul>
                    </div>
                    <div className="bg-slate-100 rounded-xl sm:rounded-2xl h-48 sm:h-56 md:h-64 shadow-inner flex items-center justify-center text-gray-500 text-xs sm:text-sm mt-6 md:mt-0">
                        image something here
                    </div>
                </div>
            </section>

            {/* PRICING SECTION */}
            {/* <section className="bg-slate-200 py-12 sm:py-16 md:py-24 text-center px-4 sm:px-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-2">Choose Your Plan</h2>
                <div className="flex items-center justify-center gap-4 mt-8 sm:mt-10 mb-3">
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl"
                        data-aos="fade-up"
                    >
                        <CarouselContent>
                            {Services.map((data, index) => (
                                <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
                                    <div className="p-1 h-full w-full">
                                        <Card className="h-full flex flex-col">
                                            <CardContent className="flex flex-col items-center justify-between p-4 sm:p-6 md:p-8 lg:p-10 hover:scale-105 transition-transform duration-300 flex-grow min-h-[250px] sm:min-h-[280px] md:min-h-[300px] lg:min-h-[320px]">
                                                <div className="flex flex-col items-center justify-center grow w-full">
                                                    <data.icon className="text-center w-full text-4xl sm:text-5xl mb-3 sm:mb-5 text-gray-500" />
                                                    <h1 className="font-bold text-base sm:text-lg text-(--color1) text-center">
                                                        {data.h1}
                                                    </h1>
                                                </div>
                                                <p className="mt-2 sm:mt-3 leading-5 sm:leading-6 text-xs sm:text-sm text-center w-full">
                                                    {data.p}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="cursor-pointer" />
                        <CarouselNext className="cursor-pointer" />
                    </Carousel>
                </div>
            </section> */}

            {/* GUARANTEE SECTION */}
            <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 text-center">
                <div className="max-w-3xl mx-auto border border-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 bg-gray-900/70">
                    <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">No-Risk, Action-Based Guarantee</h2>
                    <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">
                        If you show up, follow the steps, and implement the systems but see
                        zero improvement in your business within 60 days, reach out to us.
                    </p>
                    <p className="text-gray-300 text-xs sm:text-sm">
                        We&apos;ll review your setup together and either help you fix it or
                        arrange a fair refund. We only want committed entrepreneurs inside.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="bg-(--dck-bg) text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6  border-gray-800">
                <h2 className="text-2xl text-blue-950 sm:text-3xl font-bold text-center mb-8 sm:mb-10">Frequently Asked Questions</h2>
                <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
                    <details className="bg-gray-900/70 p-4 sm:p-6 rounded-lg sm:rounded-xl">
                        <summary className="cursor-pointer text-base sm:text-lg font-semibold">
                            Do I need prior experience?
                        </summary>
                        <p className="mt-2 sm:mt-3 text-gray-300 text-xs sm:text-sm">
                            No. This program is designed for beginners and advanced users. We
                            provide step-by-step guidance and templates.
                        </p>
                    </details>
                    <details className="bg-gray-900/70 p-4 sm:p-6 rounded-lg sm:rounded-xl">
                        <summary className="cursor-pointer text-base sm:text-lg font-semibold">
                            Is everything really automated?
                        </summary>
                        <p className="mt-2 sm:mt-3 text-gray-300 text-xs sm:text-sm">
                            You&apos;ll be able to automate 70–90% of your workflows depending on
                            your business model. Some tasks are still human-driven by design.
                        </p>
                    </details>
                    <details className="bg-gray-900/70 p-4 sm:p-6 rounded-lg sm:rounded-xl">
                        <summary className="cursor-pointer text-base sm:text-lg font-semibold">
                            How much time do I need each week?
                        </summary>
                        <p className="mt-2 sm:mt-3 text-gray-300 text-xs sm:text-sm">
                            Expect to commit 3–5 hours per week in the first month to build
                            your systems. After that, your workload goes down as automation
                            kicks in.
                        </p>
                    </details>
                    <details className="bg-gray-900/70 p-4 sm:p-6 rounded-lg sm:rounded-xl">
                        <summary className="cursor-pointer text-base sm:text-lg font-semibold">
                            Can I cancel anytime?
                        </summary>
                        <p className="mt-2 sm:mt-3 text-gray-300 text-xs sm:text-sm">
                            Yes. You&apos;re free to cancel anytime. You keep your data and assets
                            even after cancellation.
                        </p>
                    </details>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 text-center text-blue-950">
                <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 sm:mb-4">Ready to Build Your Automated Business?</h2>
                <p className="max-w-2xl mx-auto text-xs sm:text-sm mb-6 sm:mb-8">
                    Join the next cohort and start implementing AI, marketing systems,
                    and automation into your business with real guidance — not just theory.
                </p>
                <Button className="bg-amber-500 text-white text-base sm:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full hover:bg-amber-600 hover:scale-105 transition duration-300 w-full sm:w-auto">
                    Yes, I&apos;m Ready to Automate
                </Button>
            </section>
        </>
    )
}
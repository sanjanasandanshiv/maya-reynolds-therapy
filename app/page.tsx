
"use client";

import Image from "next/image";

const services = [
  {
    number: "01",
    title: "Anxiety & Stress",
    description:
      "Find ways to manage overwhelming thoughts, reduce stress, and feel more grounded in everyday life.",
  },
  {
    number: "02",
    title: "Life Transitions",
    description:
      "Navigate change, uncertainty, and new chapters with greater clarity and self-understanding.",
  },
  {
    number: "03",
    title: "Trauma & Healing",
    description:
      "Explore difficult experiences at a pace that feels safe, with care that respects your individual journey.",
  },
];

export default function Home() {
  return (
    <main className="bg-[#F7F5F0] text-[#30332F]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-[#30332F]/10 bg-[#F7F5F0]/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-12 lg:px-16">
          <a href="#home" className="flex flex-col">
            <span className="font-serif text-[34px] leading-none tracking-tight md:text-[35px]">
  Maya Reynolds, PsyD
</span>
            <span className="mt-1 text-[12px] uppercase tracking-[0.4em] text-[#789184]">
              Therapy & Wellness
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            <a href="#about" className="nav-link">About</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#approach" className="nav-link">My Approach</a>
            <a href="#office" className="nav-link">The Office</a>
          </nav>

          <a href="#contact" className="rounded-full border border-[#30332F]/50 px-6 py-3 text-[10px] uppercase tracking-[0.2em] transition hover:bg-[#30332F] hover:text-white">
            Get in touch
          </a>
        </div>

        <nav className="flex justify-center gap-6 border-t border-[#30332F]/10 px-3 py-3 text-[9px] uppercase tracking-[0.18em] lg:hidden">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#approach">Approach</a>
          <a href="#office">Office</a>
        </nav>
      </header>

      {/* Hero */}
<section id="home" className="grid grid-cols-1 md:grid-cols-2">

  {/* Image */}
  <div className="relative min-h-[420px] overflow-hidden md:min-h-[680px]">
    <Image
      src="/images/halls.jpg"
      alt="Calm and welcoming therapy office in Santa Monica"
      fill
      priority
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-cover object-center brightness-110 saturate-90"
    />
  </div>

  {/* Content */}
  <div className="flex flex-col justify-center px-8 py-16 md:px-12 lg:px-20 lg:py-20">

    <p className="mb-7 text-[15px] uppercase tracking-[0.35em] text-[#718B80]">
      Santa Monica, California
    </p>

    <h1 className="max-w-2xl font-serif text-[clamp(3rem,5vw,5.2rem)] leading-[1.06] tracking-[-0.04em]">
      Therapy for anxiety, trauma, and burnout{" "}
      <span className="italic text-[#82998E]">
        in Santa Monica.
      </span>
    </h1>

    <p className="mt-8 max-w-xl text-[15px] leading-[1.9] text-[#626A64] md:text-[16px]">
      Warm, collaborative therapy for adults who feel overwhelmed,
      stuck in overthinking, or exhausted from carrying too much for too long.
    </p>

    <p className="mt-5 max-w-xl text-[14px] leading-[1.9] text-[#69716B]">
      In-person therapy in Santa Monica and secure telehealth for clients
      located in California.
    </p>

    <a
      href="#contact"
      className="mt-9 w-fit border-b border-[#30332F] pb-2 text-[10px] uppercase tracking-[0.22em] transition hover:text-[#82998E]"
    >
      Begin your journey <span className="ml-4">↗</span>
    </a>

    <div className="mt-12 flex items-center gap-4 text-xs tracking-wide text-[#78867D]">
      <span className="h-px w-10 bg-[#B77961]" />
      Practical tools, depth, and space to reconnect with yourself.
    </div>

  </div>
</section>

      {/* Intro */}
<section className="bg-[#E7EAE2] px-6 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24">
  <div className="mx-auto max-w-[1240px]">

    <div className="mb-12 h-px w-full bg-[#30332F]/15" />

    <div className="grid gap-14 md:grid-cols-[1.05fr_0.95fr] md:gap-20 lg:gap-28">

      {/* Left */}
      <div>
        <p className="mb-7 text-[10px] uppercase tracking-[0.32em] text-[#718B80]">
          A space for you
        </p>

        <div className="flex items-start gap-5">
          <span className="hidden pt-2 font-serif text-sm italic text-[#B77961] sm:block">
            01
          </span>

          <h2 className="max-w-[680px] font-serif text-[clamp(2.7rem,4.8vw,4.8rem)] leading-[1.16] tracking-[-0.04em]">
            You may look like you&apos;re{" "}
            <span className="italic text-[#82998E]">
              doing fine.
            </span>
          </h2>
        </div>
      </div>

      {/* Right */}
      <div>
        <div className="mb-7 h-px w-12 bg-[#B77961]" />

        <p className="max-w-[520px] text-[15px] leading-[1.9] text-[#5F6862]">
          Many of the adults I work with are thoughtful, self-aware, and
          high-achieving, yet privately feel exhausted, stuck in overthinking,
          or constantly on edge.
        </p>

        <p className="mt-6 max-w-[520px] text-[15px] leading-[1.9] text-[#5F6862]">
          Therapy can be a place to slow down, understand what you are
          carrying, and develop more sustainable ways of living and working.
        </p>

        <a
          href="#about"
          className="mt-8 inline-flex items-center gap-4 border-b border-[#30332F]/50 pb-2 text-[10px] uppercase tracking-[0.18em] transition hover:border-[#82998E] hover:text-[#82998E]"
        >
          Get to know Maya
          <span>↗</span>
        </a>
      </div>
    </div>

    <div className="mt-14 border-t border-[#30332F]/15 pt-7">
      <p className="max-w-[850px] font-serif text-xl leading-relaxed text-[#49534D] md:text-2xl">
        You do not have to keep pushing through everything on your own.
      </p>
    </div>

  </div>
</section>
{/* About */}
<section
  id="about"
  className="bg-[#ECE7DE] px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20"
>
  <div className="mx-auto max-w-[1240px]">

    <div className="flex items-center justify-between border-t border-[#30332F]/15 pt-5">
      <span className="text-[10px] uppercase tracking-[0.3em] text-[#7A817A]">
        About
      </span>

      <span className="font-serif text-sm italic text-[#B77961]">
        01
      </span>
    </div>

    <div className="mt-4 grid items-center gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-14 lg:mt-6 lg:gap-20">

      {/* Portrait */}
      <div className="relative flex justify-center md:justify-start">

        <div className="absolute -left-3 -top-3 h-full w-full max-w-[390px] border border-[#B8B2A8]/60" />

        <div className="relative h-[460px] w-full max-w-[390px] overflow-hidden bg-[#DDD8CE] md:h-[500px]">
          <Image
            src="/images/Dr. Maya Reynolds.png"
            alt="Portrait of Dr. Maya Reynolds, PsyD"
            fill
            sizes="(max-width: 768px) 100vw, 390px"
            className="object-contain object-center"
          />
        </div>

        <div className="absolute bottom-4 right-4 bg-[#F7F5F0] px-5 py-4 shadow-sm md:-right-8">
          <p className="font-serif text-sm italic text-[#71877C]">
            Warm, grounded, collaborative care.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[610px]">

        <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-[#718B80]">
          Get to know Maya
        </p>

        <h2 className="font-serif text-[clamp(2.8rem,4.7vw,4.5rem)] leading-[1.18] tracking-[-0.04em]">
          A little about{" "}
          <span className="italic text-[#82998E]">
            Maya.
          </span>
        </h2>

        <div className="mt-8 h-px w-12 bg-[#B77961]" />

        <p className="mt-8 max-w-[560px] text-[15px] leading-[2] text-[#606760]">
          I work with adults who may look like they have it all together on
          the outside while privately feeling exhausted, overwhelmed, or
          stuck in overthinking.
        </p>

        <p className="mt-5 max-w-[560px] text-[15px] leading-[2] text-[#606760]">
          My approach is warm, collaborative, and grounded. I combine practical
          tools with space for reflection and depth, helping clients develop
          insight, resilience, and a stronger relationship with themselves.
        </p>

        <p className="mt-5 max-w-[560px] text-[15px] leading-[2] text-[#606760]">
          I frequently support people navigating anxiety, panic, trauma,
          professional burnout, perfectionism, and high internal pressure.
        </p>

        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-4 border-b border-[#30332F]/60 pb-2 text-[10px] uppercase tracking-[0.18em] transition-all duration-300 hover:border-[#82998E] hover:text-[#82998E]"
        >
          Let&apos;s connect
          <span>↗</span>
        </a>

      </div>
    </div>
  </div>
</section>
{/* Services */}
<section
  id="services"
  className="bg-[#F2EEE6]"
>
  <div className="grid grid-cols-1 md:grid-cols-[46%_54%]">

    {/* Image */}
    <div className="relative min-h-[680px] md:min-h-0">
      <Image
        src="/images/office-2.jpg"
        alt="Calm therapy space with natural light"
        fill
        sizes="(max-width: 768px) 100vw, 46vw"
        className="object-cover object-center"
      />

      <div className="absolute bottom-5 left-5 bg-[#F7F5F0]/95 px-5 py-3">
        <p className="font-serif text-sm italic text-[#71877C]">
          A calm place to begin.
        </p>
      </div>
    </div>

    {/* Content */}
    <div className="flex flex-col justify-center px-8 py-12 md:px-10 md:py-14 lg:px-14 lg:py-16 xl:px-20">

      <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#718B80]">
        How I can help
      </p>

      <h2 className="max-w-[650px] font-serif text-[clamp(2.8rem,4.3vw,4.3rem)] leading-[1.08] tracking-[-0.04em]">
        Support for what you are{" "}
        <span className="italic text-[#82998E]">
          carrying.
        </span>
      </h2>

      <div className="mt-5 h-px w-10 bg-[#B77961]" />

      {/* 01 */}
      <article className="mt-6 border-t border-[#30332F]/15 py-5">
        <div className="flex gap-5">
          <span className="pt-1 font-serif text-sm italic text-[#B77961]">
            01
          </span>

          <div className="flex-1">
            <h3 className="font-serif text-[23px] leading-tight">
              Anxiety & Panic
            </h3>

            <p className="mt-3 max-w-[520px] text-[13px] leading-[1.7] text-[#606760]">
              Support for constant worry, overthinking, tension, panic,
              difficulty sleeping, and the feeling that you are always bracing
              for something to go wrong.
            </p>

            <a
              href="#contact"
              className="mt-4 inline-flex items-center gap-3 border-b border-[#30332F]/25 pb-1 text-[9px] uppercase tracking-[0.16em] transition-colors hover:border-[#82998E] hover:text-[#82998E]"
            >
              Learn more
              <span>↗</span>
            </a>
          </div>
        </div>
      </article>

      {/* 02 */}
      <article className="border-t border-[#30332F]/15 py-5">
        <div className="flex gap-5">
          <span className="pt-1 font-serif text-sm italic text-[#B77961]">
            02
          </span>

          <div className="flex-1">
            <h3 className="font-serif text-[23px] leading-tight">
              Trauma & Healing
            </h3>

            <p className="mt-3 max-w-[520px] text-[13px] leading-[1.7] text-[#606760]">
              Thoughtful, paced support for single-incident trauma and
              longer-standing patterns connected to childhood, relationships,
              or chronic stress.
            </p>

            <a
              href="#contact"
              className="mt-4 inline-flex items-center gap-3 border-b border-[#30332F]/25 pb-1 text-[9px] uppercase tracking-[0.16em] transition-colors hover:border-[#82998E] hover:text-[#82998E]"
            >
              Learn more
              <span>↗</span>
            </a>
          </div>
        </div>
      </article>

      {/* 03 */}
      <article className="border-t border-[#30332F]/15 py-5">
        <div className="flex gap-5">
          <span className="pt-1 font-serif text-sm italic text-[#B77961]">
            03
          </span>

          <div className="flex-1">
            <h3 className="font-serif text-[23px] leading-tight">
              Burnout & Perfectionism
            </h3>

            <p className="mt-3 max-w-[520px] text-[13px] leading-[1.7] text-[#606760]">
              Space to slow down, reconnect, and develop more sustainable ways
              of living and working when pressure, achievement, and burnout
              have taken over.
            </p>

            <a
              href="#contact"
              className="mt-4 inline-flex items-center gap-3 border-b border-[#30332F]/25 pb-1 text-[9px] uppercase tracking-[0.16em] transition-colors hover:border-[#82998E] hover:text-[#82998E]"
            >
              Learn more
              <span>↗</span>
            </a>
          </div>
        </div>
      </article>

    </div>
  </div>
</section>
{/* My Approach */}
<section
  id="approach"
  className="bg-[#F7F5F0] px-6 py-14 md:px-12 md:py-18 lg:px-16 lg:py-20"
>
  <div className="mx-auto max-w-[1240px]">

    <div className="flex items-center justify-between border-t border-[#30332F]/15 pt-5">
      <span className="text-[10px] uppercase tracking-[0.3em] text-[#7A817A]">
        My Approach
      </span>

      <span className="font-serif text-sm italic text-[#B77961]">
        03
      </span>
    </div>

    <div className="mt-10 grid items-start gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-20 lg:mt-14 lg:gap-28">

      {/* Left */}
      <div className="max-w-[520px]">

        <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-[#718B80]">
          How therapy can work
        </p>

        <h2 className="font-serif text-[clamp(2.8rem,4.7vw,4.6rem)] leading-[1.15] tracking-[-0.04em]">
          Care that meets you{" "}
          <span className="italic text-[#82998E]">
            where you are.
          </span>
        </h2>

        <div className="mt-8 h-px w-12 bg-[#B77961]" />

        <p className="mt-8 max-w-[470px] text-[15px] leading-[2] text-[#606760]">
          I integrate evidence-based methods while keeping therapy human,
          flexible, and collaborative. Sessions are structured enough to feel
          supportive while leaving space for reflection and depth.
        </p>

        <p className="mt-5 max-w-[470px] text-[15px] leading-[2] text-[#606760]">
          Trauma work is paced carefully, with an emphasis on safety,
          stabilization, and helping you feel more regulated in daily life.
        </p>
      </div>

      {/* Right */}
      <div>

        {/* 01 */}
        <article className="border-t border-[#30332F]/15 py-6">
          <div className="flex gap-5">
            <span className="pt-1 font-serif text-sm italic text-[#B77961]">
              01
            </span>

            <div className="flex-1">
              <h3 className="font-serif text-[23px]">
                Cognitive Behavioral Therapy (CBT)
              </h3>

              <p className="mt-3 text-[14px] leading-[1.8] text-[#606760]">
                Practical support for understanding patterns between thoughts,
                emotions, and behaviors.
              </p>
            </div>
          </div>
        </article>

        {/* 02 */}
        <article className="border-t border-[#30332F]/15 py-6">
          <div className="flex gap-5">
            <span className="pt-1 font-serif text-sm italic text-[#B77961]">
              02
            </span>

            <div className="flex-1">
              <h3 className="font-serif text-[23px]">
                EMDR
              </h3>

              <p className="mt-3 text-[14px] leading-[1.8] text-[#606760]">
                An evidence-based approach used to support trauma processing
                and help clients move toward greater safety and regulation.
              </p>
            </div>
          </div>
        </article>

        {/* 03 */}
        <article className="border-t border-[#30332F]/15 py-6">
          <div className="flex gap-5">
            <span className="pt-1 font-serif text-sm italic text-[#B77961]">
              03
            </span>

            <div className="flex-1">
              <h3 className="font-serif text-[23px]">
                Mindfulness-Based Practices
              </h3>

              <p className="mt-3 text-[14px] leading-[1.8] text-[#606760]">
                Gentle practices that support awareness, grounding, and a more
                connected relationship with your present experience.
              </p>
            </div>
          </div>
        </article>

        {/* 04 */}
        <article className="border-t border-[#30332F]/15 py-6">
          <div className="flex gap-5">
            <span className="pt-1 font-serif text-sm italic text-[#B77961]">
              04
            </span>

            <div className="flex-1">
              <h3 className="font-serif text-[23px]">
                Body-Oriented Techniques
              </h3>

              <p className="mt-3 text-[14px] leading-[1.8] text-[#606760]">
                Attention to the physiological side of stress, emotion, and
                trauma as part of the therapeutic process.
              </p>
            </div>
          </div>
        </article>

      </div>
    </div>
  </div>
</section>
{/* The Office */}
<section
  id="office"
  className="bg-[#EAE4D9] px-6 md:px-10 lg:px-16"
>
  <div className="mx-auto flex min-h-[calc(100vh-96px)] max-w-[1240px] flex-col justify-center py-8 md:py-10">

    {/* Heading + description */}
    <div className="grid items-end gap-6 md:grid-cols-[1.05fr_0.95fr] md:gap-12 lg:gap-20">

      {/* Heading */}
      <div>
        <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#718B80]">
          A space to feel at ease
        </p>

        <h2 className="max-w-[720px] font-serif text-[clamp(2.6rem,4vw,4.2rem)] leading-[1.05] tracking-[-0.04em]">
          A space to pause and{" "}
          <span className="italic text-[#82998E]">
            begin again.
          </span>
        </h2>
      </div>

      {/* Description */}
      <div className="max-w-[470px]">
        <div className="mb-4 h-px w-12 bg-[#B77961]" />

        <p className="text-[14px] leading-[1.8] text-[#606760]">
          A quiet, private space in Santa Monica designed to feel calm and
          grounding, with natural light and a comfortable, uncluttered
          environment.
        </p>

        <p className="mt-4 text-[11px] uppercase tracking-[0.15em] text-[#718B80]">
          In-person in Santa Monica · Secure telehealth throughout California
        </p>

        <p className="mt-3 text-sm text-[#606760]">
          123th Street 45 W, Santa Monica, CA 90401
        </p>
      </div>
    </div>

    {/* Office Gallery */}
    <div className="mt-6 grid min-h-0 flex-1 gap-5 md:mt-7 md:grid-cols-[1.15fr_0.85fr] md:gap-6">

      {/* Main office image */}
      <div className="relative min-h-0 overflow-hidden md:h-[46vh]">
        <Image
          src="/images/office-1.jpg"
          alt="Maya Reynolds' therapy office in Santa Monica with natural light and comfortable seating"
          fill
          sizes="(max-width: 768px) 100vw, 58vw"
          className="object-cover object-center"
        />

        <div className="absolute bottom-4 left-4 bg-[#F7F5F0]/95 px-4 py-3 shadow-sm">
          <p className="font-serif text-sm italic text-[#71877C]">
            A comfortable place to slow down.
          </p>
        </div>
      </div>

      {/* Second office image */}
      <div className="relative min-h-0 overflow-hidden md:h-[46vh]">
        <Image
          src="/images/office-2.jpg"
          alt="Quiet and uncluttered therapy space in Santa Monica"
          fill
          sizes="(max-width: 768px) 100vw, 42vw"
          className="object-cover object-center"
        />
      </div>
    </div>

  </div>
</section>
{/* FAQs */}
<section
  id="faqs"
  className="bg-[#F7F5F0] px-6 py-16 md:px-12 md:py-20 lg:px-16"
>
  <div className="mx-auto max-w-[1240px]">

    <div className="flex items-center justify-between border-t border-[#30332F]/15 pt-5">
      <span className="text-[10px] uppercase tracking-[0.3em] text-[#7A817A]">
        Frequently asked
      </span>

      <span className="font-serif text-sm italic text-[#B77961]">
        05
      </span>
    </div>

    <div className="mt-10 grid gap-14 md:grid-cols-[0.8fr_1.2fr] md:gap-20">

      <div>
        <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-[#718B80]">
          Common questions
        </p>

        <h2 className="font-serif text-[clamp(2.8rem,4.5vw,4.4rem)] leading-[1.1] tracking-[-0.04em]">
          Before we{" "}
          <span className="italic text-[#82998E]">
            begin.
          </span>
        </h2>
      </div>

      <div>

        {/* FAQ 1 */}
        <article className="border-t border-[#30332F]/15 py-6">
          <h3 className="font-serif text-[22px]">
            Do you offer in-person therapy?
          </h3>

          <p className="mt-3 max-w-[620px] text-[14px] leading-[1.8] text-[#606760]">
            Yes. Maya offers in-person therapy from her office in Santa
            Monica, California.
          </p>
        </article>

        {/* FAQ 2 */}
        <article className="border-t border-[#30332F]/15 py-6">
          <h3 className="font-serif text-[22px]">
            Do you offer online therapy?
          </h3>

          <p className="mt-3 max-w-[620px] text-[14px] leading-[1.8] text-[#606760]">
            Yes. Secure telehealth sessions are available for clients located
            in California.
          </p>
        </article>

        {/* FAQ 3 */}
        <article className="border-t border-[#30332F]/15 py-6">
          <h3 className="font-serif text-[22px]">
            Who do you work with?
          </h3>

          <p className="mt-3 max-w-[620px] text-[14px] leading-[1.8] text-[#606760]">
            Maya works with adults experiencing anxiety, panic, trauma,
            burnout, perfectionism, and high internal pressure.
          </p>
        </article>

        {/* FAQ 4 */}
        <article className="border-t border-[#30332F]/15 py-6">
          <h3 className="font-serif text-[22px]">
            What approaches do you use?
          </h3>

          <p className="mt-3 max-w-[620px] text-[14px] leading-[1.8] text-[#606760]">
            Maya integrates cognitive behavioral therapy (CBT), EMDR,
            mindfulness-based practices, and body-oriented techniques.
          </p>
        </article>

        {/* FAQ 5 */}
        <article className="border-y border-[#30332F]/15 py-6">
          <h3 className="font-serif text-[22px]">
            Do I need to have everything figured out before starting?
          </h3>

          <p className="mt-3 max-w-[620px] text-[14px] leading-[1.8] text-[#606760]">
            No. Therapy can begin with simply creating space to understand
            what you are experiencing and deciding together what support
            would be most useful.
          </p>
        </article>

      </div>
    </div>
  </div>
</section>

      {/* Contact */}
<footer
  id="contact"
  className="bg-[#E7EAE2] px-6 py-16 md:px-12 md:py-20 lg:px-16"
>
  <div className="mx-auto max-w-[1100px]">

    {/* Contact card */}
    <div className="bg-[#F3F0E9] px-8 py-12 md:px-12 md:py-14 lg:px-16 lg:py-16">

      <div className="grid gap-14 md:grid-cols-2 md:gap-20">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-between">

          <div>
            <p className="text-[15px] uppercase tracking-[0.3em] text-[#718B80]">
              Get in touch
            </p>

            <h2 className="mt-6 font-serif text-4xl font-normal leading-tight text-[#30332F] md:text-5xl">
              Let&apos;s talk.
            </h2>

            <p className="mt-5 max-w-[360px] text-[14px] font-normal leading-7 text-[#626A64]">
              I&apos;d like to hear from you. If you have questions or simply
              want to say hello, you are welcome to reach out.
            </p>
          </div>

          {/* Contact details */}
          <div className="mt-12 space-y-5">

            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#718B80]">
                Email
              </p>

              <a
                href="mailto:hello@mayareynoldstherapy.com"
                className="mt-2 inline-block text-sm font-normal text-[#30332F] transition-colors hover:text-[#82998E]"
              >
                hello@mayareynoldstherapy.com
              </a>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#718B80]">
                Availability
              </p>

              <p className="mt-2 text-sm font-normal text-[#626A64]">
                By appointment · In person & online
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <form
          className="flex flex-col"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Name row */}
          <div className="grid gap-5 sm:grid-cols-2">

            <div>
              <label
                htmlFor="firstName"
                className="text-[11px] font-normal uppercase tracking-[0.18em] text-[#626A64]"
              >
                First Name
              </label>

              <input
                id="firstName"
                name="firstName"
                type="text"
                className="mt-2 w-full border border-[#30332F]/25 bg-[#F7F5F0] px-3 py-3 text-sm font-normal text-[#30332F] outline-none transition-colors focus:border-[#82998E]"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="text-[11px] font-normal uppercase tracking-[0.18em] text-[#626A64]"
              >
                Last Name
              </label>

              <input
                id="lastName"
                name="lastName"
                type="text"
                className="mt-2 w-full border border-[#30332F]/25 bg-[#F7F5F0] px-3 py-3 text-sm font-normal text-[#30332F] outline-none transition-colors focus:border-[#82998E]"
              />
            </div>

          </div>

          {/* Email */}
          <div className="mt-5">
            <label
              htmlFor="email"
              className="text-[11px] font-normal uppercase tracking-[0.18em] text-[#626A64]"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              className="mt-2 w-full border border-[#30332F]/25 bg-[#F7F5F0] px-3 py-3 text-sm font-normal text-[#30332F] outline-none transition-colors focus:border-[#82998E]"
            />
          </div>

          {/* Message */}
          <div className="mt-5">
            <label
              htmlFor="message"
              className="text-[11px] font-normal uppercase tracking-[0.18em] text-[#626A64]"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows={5}
              className="mt-2 w-full resize-none border border-[#30332F]/25 bg-[#F7F5F0] px-3 py-3 text-sm font-normal text-[#30332F] outline-none transition-colors focus:border-[#82998E]"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-6 w-fit bg-[#82998E] px-8 py-3 text-[11px] font-normal uppercase tracking-[0.2em] text-[#F7F5F0] transition-colors hover:bg-[#30332F]"
          >
            Send
          </button>
        </form>
      </div>
    </div>

    {/* Footer bottom */}
    <div className="mt-8 flex flex-col justify-between gap-3 border-t border-[#30332F]/15 pt-5 text-[11px] font-normal text-[#68736C] md:flex-row">
      <p>
        © {new Date().getFullYear()} Maya Reynolds Therapy & Wellness
      </p>

      <a
        href="#home"
        className="transition-colors hover:text-[#82998E]"
      >
        Back to top ↑
      </a>
    </div>
  </div>
</footer>
    </main>
  );
}
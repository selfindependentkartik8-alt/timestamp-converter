"use client";

import { useState } from "react";

type Mode = "timestamp" | "date";

export default function Home() {
  const [mode, setMode] = useState<Mode>("timestamp");
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleConvert = () => {
    if (!input.trim()) {
      setError("Please enter something to convert.");
      setResult("");
      return;
    }

    setError("");

    try {
      if (mode === "timestamp") {
        const value = Number(input.trim());

        if (!Number.isFinite(value)) {
          throw new Error();
        }

        // Automatically detect seconds vs milliseconds
        const milliseconds =
          Math.abs(value) < 100000000000 ? value * 1000 : value;

        const date = new Date(milliseconds);

        if (Number.isNaN(date.getTime())) {
          throw new Error();
        }

        setResult(
          [
            `Local: ${date.toLocaleString()}`,
            `UTC: ${date.toUTCString()}`,
            `ISO: ${date.toISOString()}`,
          ].join("\n")
        );
      } else {
        const date = new Date(input);

        if (Number.isNaN(date.getTime())) {
          throw new Error();
        }

        const seconds = Math.floor(date.getTime() / 1000);
        const milliseconds = date.getTime();

        setResult(
          [
            `Unix Seconds: ${seconds}`,
            `Unix Milliseconds: ${milliseconds}`,
          ].join("\n")
        );
      }
    } catch {
      setResult("");
      setError(
        mode === "timestamp"
          ? "Invalid timestamp. Please enter a valid Unix timestamp."
          : "Invalid date. Try something like 2026-08-23 17:30."
      );
    }
  };

  const handleCurrentTimestamp = () => {
    const now = Date.now();

    setMode("timestamp");
    setInput(Math.floor(now / 1000).toString());
    setError("");

    const date = new Date(now);

    setResult(
      [
        `Local: ${date.toLocaleString()}`,
        `UTC: ${date.toUTCString()}`,
        `ISO: ${date.toISOString()}`,
      ].join("\n")
    );
  };

  const handleCopy = async () => {
    if (!result) return;
    await navigator.clipboard.writeText(result);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
    setError("");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-sky-950 via-slate-950 to-black text-white">

      {/* ========================================================= */}
      {/* BACKGROUND GLOW */}
      {/* ========================================================= */}

      <div className="pointer-events-none absolute left-1/2 top-[-260px] h-[620px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[170px]" />

      <div className="pointer-events-none absolute left-[-220px] top-[30%] h-[420px] w-[420px] rounded-full bg-sky-400/10 blur-[150px]" />

      <div className="pointer-events-none absolute right-[-220px] top-[55%] h-[450px] w-[450px] rounded-full bg-cyan-300/10 blur-[160px]" />

      <div className="pointer-events-none absolute left-1/2 top-[75%] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-sky-400/[0.04] blur-[170px]" />

      {/* ========================================================= */}
      {/* NAVBAR */}
      {/* ========================================================= */}

      <nav className="relative z-30 mx-auto w-full max-w-6xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between rounded-2xl border border-white/[0.08] bg-black/40 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:px-5">

          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-cyan-300/20 bg-white/10 shadow-lg shadow-cyan-400/10">
              <img
                src="/logo.png"
                alt="KrishAIWorks Logo"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-sm font-bold tracking-tight text-white sm:text-base">
                KrishAIWorks
              </h2>

              <p className="text-[9px] font-medium tracking-wide text-zinc-500 sm:text-[10px]">
                AI Solutions That Work
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">

            <a
              href="#features"
              className="rounded-xl px-4 py-2 text-sm text-zinc-400 transition hover:bg-white/[0.05] hover:text-cyan-300"
            >
              Features
            </a>

            <a
              href="#how"
              className="rounded-xl px-4 py-2 text-sm text-zinc-400 transition hover:bg-white/[0.05] hover:text-cyan-300"
            >
              How To Use
            </a>

            <a
              href="#faq"
              className="rounded-xl px-4 py-2 text-sm text-zinc-400 transition hover:bg-white/[0.05] hover:text-cyan-300"
            >
              FAQ
            </a>

            <a
              href="https://instagram.com/KrishAIWorks"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 rounded-xl border border-cyan-300/20 bg-cyan-400/10 px-5 py-2 text-sm font-semibold text-cyan-300 shadow-lg shadow-cyan-400/10 transition hover:-translate-y-0.5 hover:bg-cyan-400/20 active:scale-95"
            >
              Follow
            </a>

          </div>

          {/* Mobile Follow */}
          <a
            href="https://instagram.com/KrishAIWorks"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold text-cyan-300 transition hover:bg-cyan-400/20 md:hidden"
          >
            Follow
          </a>

        </div>
      </nav>

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-5 pb-20 pt-20 text-center sm:px-8 sm:pt-24">

        <div className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-xs text-cyan-200 shadow-lg shadow-cyan-950/30 backdrop-blur-xl">
          🕐 Timestamp Converter
        </div>

        <p className="mt-4 text-xs text-zinc-500">
          Built by{" "}
          <span className="font-semibold text-cyan-300">
            KrishAIWorks
          </span>
        </p>

        <h1 className="mt-7 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
          Convert Time.
          <br />
          <span className="bg-gradient-to-r from-cyan-100 via-sky-300 to-cyan-500 bg-clip-text text-transparent">
            Instantly.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
          Convert Unix timestamps into readable dates or transform dates back
          into Unix timestamps with a fast, simple and privacy-friendly tool.
        </p>

        {/* Feature Pills */}
        <div className="mt-7 flex flex-wrap justify-center gap-2.5">

          <span className="rounded-full border border-white/5 bg-white/[0.04] px-4 py-2 text-xs text-zinc-300 backdrop-blur-xl">
            ⚡ Instant Conversion
          </span>

          <span className="rounded-full border border-white/5 bg-white/[0.04] px-4 py-2 text-xs text-zinc-300 backdrop-blur-xl">
            🔒 Private
          </span>

          <span className="rounded-full border border-white/5 bg-white/[0.04] px-4 py-2 text-xs text-zinc-300 backdrop-blur-xl">
            📱 Mobile Friendly
          </span>

        </div>

        {/* ========================================================= */}
        {/* CONVERTER */}
        {/* ========================================================= */}

        <div
          id="converter"
          className="mt-12 w-full max-w-4xl scroll-mt-8"
        >
          <div className="rounded-[2rem] border border-cyan-300/10 bg-black/55 p-5 shadow-2xl shadow-cyan-950/30 backdrop-blur-2xl sm:p-7">

            {/* Heading */}
            <div className="mb-6 text-left">

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                <div>
                  <div className="mb-2 inline-flex rounded-lg border border-cyan-300/10 bg-cyan-400/10 px-3 py-1">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                      Converter
                    </span>
                  </div>

                  <h2 className="text-lg font-semibold text-white sm:text-xl">
                    Timestamp Converter
                  </h2>

                  <p className="mt-1 text-xs text-zinc-500 sm:text-sm">
                    Convert timestamps and dates in seconds.
                  </p>
                </div>

                {/* Mode */}
                <div className="flex w-full rounded-xl border border-white/10 bg-white/[0.03] p-1 sm:w-fit">

                  <button
                    onClick={() => {
                      setMode("timestamp");
                      setResult("");
                      setError("");
                    }}
                    className={`h-11 flex-1 rounded-lg px-4 text-xs font-semibold transition sm:h-10 sm:flex-none ${
                      mode === "timestamp"
                        ? "bg-cyan-400 text-black shadow-lg shadow-cyan-400/20"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    Timestamp → Date
                  </button>

                  <button
                    onClick={() => {
                      setMode("date");
                      setResult("");
                      setError("");
                    }}
                    className={`h-11 flex-1 rounded-lg px-4 text-xs font-semibold transition sm:h-10 sm:flex-none ${
                      mode === "date"
                        ? "bg-cyan-400 text-black shadow-lg shadow-cyan-400/20"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    Date → Timestamp
                  </button>

                </div>

              </div>
            </div>

            {/* Input */}
            <div className="text-left">

              <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                {mode === "timestamp"
                  ? "UNIX TIMESTAMP"
                  : "DATE & TIME"}
              </label>

              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={
                  mode === "timestamp"
                    ? "Example: 1755964800"
                    : "Example: 2026-08-23 17:30"
                }
                className="min-h-[150px] w-full resize-y rounded-2xl border border-cyan-300/20 bg-black/50 p-5 text-sm leading-7 text-white placeholder:text-zinc-600 outline-none transition focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20"
              />

            </div>

            {/* Actions */}
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">

              <button
                onClick={handleConvert}
                className="h-14 w-full flex-1 rounded-2xl bg-cyan-400 px-7 text-base font-semibold text-black shadow-xl shadow-cyan-400/20 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 active:scale-[0.98]"
              >
                ✨ Convert
              </button>

              <button
                onClick={handleCurrentTimestamp}
                className="h-14 w-full flex-1 rounded-2xl border border-cyan-300/15 bg-cyan-400/5 px-7 text-base font-semibold text-cyan-200 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-400/10 active:scale-[0.98]"
              >
                🕐 Current
              </button>

              <button
                onClick={handleClear}
               className="h-14 w-full flex-1 rounded-2xl border border-white/10 bg-white/[0.04] px-7 text-base font-semibold text-zinc-300 transition duration-300 hover:bg-white/[0.08] hover:text-white active:scale-[0.98]"
              >
                Clear
              </button>

            </div>

            {/* Error */}
            {error && (
              <div className="mt-4 rounded-xl border border-red-400/10 bg-red-500/5 px-4 py-3 text-left text-xs leading-6 text-red-300">
                {error}
              </div>
            )}

            {/* Result */}
            {result && (
              <div className="mt-7 rounded-2xl border border-cyan-300/10 bg-black/50 p-5 text-left sm:p-6">

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                  <div>
                    <div className="mb-2 inline-flex rounded-lg border border-cyan-300/10 bg-cyan-400/10 px-3 py-1">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                        Result
                      </span>
                    </div>

                    <h3 className="text-sm font-extrabold tracking-wide text-white sm:text-base">
                      ✨ Converted Result
                    </h3>

                    <p className="mt-1 text-xs text-zinc-500">
                      Conversion completed successfully.
                    </p>
                  </div>

                  <button
                    onClick={handleCopy}
                    className="h-11 w-full rounded-xl bg-cyan-400 px-5 text-sm font-semibold text-black shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300 active:scale-95 sm:w-fit"
                  >
                    📋 Copy
                  </button>

                </div>

                <div className="mt-5 max-h-[300px] overflow-auto rounded-xl border border-white/5 bg-black/60 p-4">
                  <pre className="whitespace-pre-wrap break-words text-sm leading-7 text-zinc-300">
                    {result}
                  </pre>
                </div>

              </div>
            )}

            <p className="mt-3 text-left text-xs text-zinc-600">
              Your data is processed directly in your browser.
            </p>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FEATURES */}
      {/* ========================================================= */}

      <section
        id="features"
        className="relative z-10 mx-auto w-full max-w-6xl scroll-mt-10 px-5 py-24 sm:px-8"
      >

        <div className="mx-auto max-w-2xl text-center">

          <div className="mx-auto inline-flex rounded-full border border-cyan-300/10 bg-cyan-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Why Use It
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Simple, fast and reliable.
          </h2>

          <p className="mt-4 text-sm leading-7 text-zinc-500">
            Everything you need for working with Unix timestamps and dates.
          </p>

        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">

          <FeatureCard
            icon="⚡"
            number="01"
            title="Instant Conversion"
            description="Convert timestamps and dates instantly without waiting for a server."
          />

          <FeatureCard
            icon="🔒"
            number="02"
            title="Browser Based"
            description="Your data stays inside your browser and does not need to be uploaded."
          />

          <FeatureCard
            icon="🌎"
            number="03"
            title="UTC Support"
            description="View your converted date in local time, UTC and ISO format."
          />

        </div>
      </section>

      {/* ========================================================= */}
      {/* HOW TO USE */}
      {/* ========================================================= */}

      <section
        id="how"
        className="relative z-10 mx-auto w-full max-w-6xl scroll-mt-10 px-5 py-24 sm:px-8"
      >

        <div className="mx-auto max-w-2xl text-center">

          <div className="mx-auto inline-flex rounded-full border border-cyan-300/10 bg-cyan-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            How To Use
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Three simple steps.
          </h2>

          <p className="mt-4 text-sm leading-7 text-zinc-500">
            Convert your timestamp in seconds.
          </p>

        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">

          <StepCard
            number="01"
            title="Enter Value"
            description="Enter a Unix timestamp or a readable date depending on the selected mode."
          />

          <StepCard
            number="02"
            title="Choose Direction"
            description="Select Timestamp to Date or Date to Timestamp."
          />

          <StepCard
            number="03"
            title="Convert & Copy"
            description="Convert instantly and copy the generated result with one click."
          />

        </div>
      </section>

      {/* ========================================================= */}
      {/* FAQ */}
      {/* ========================================================= */}

      <section
        id="faq"
        className="relative z-10 mx-auto w-full max-w-3xl scroll-mt-10 px-5 py-24 sm:px-8"
      >

        <div className="text-center">

          <div className="mx-auto inline-flex rounded-full border border-cyan-300/10 bg-cyan-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            FAQ
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>

        </div>

        <div className="mt-10 space-y-4">

          <Faq
            question="What is a Unix timestamp?"
            answer="A Unix timestamp represents a specific point in time as the number of seconds elapsed since January 1, 1970 UTC."
          />

          <Faq
            question="Does the converter support milliseconds?"
            answer="Yes. The converter automatically detects common Unix timestamps expressed in seconds or milliseconds."
          />

          <Faq
            question="Is my data uploaded?"
            answer="No. The conversion happens directly inside your browser, so your entered data does not need to be sent to a server."
          />

          <Faq
            question="What date format can I enter?"
            answer="You can enter common date formats such as 2026-08-23 17:30 or other formats supported by your browser's Date parser."
          />

        </div>
      </section>

      {/* ========================================================= */}
      {/* CTA */}
      {/* ========================================================= */}

      <section className="relative z-10 mx-auto w-full max-w-5xl px-5 py-20 sm:px-8">

        <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/10 bg-gradient-to-br from-sky-950/70 via-black/80 to-black px-6 py-14 text-center shadow-2xl shadow-cyan-950/30 backdrop-blur-xl sm:px-12">

          <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[350px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />

          <div className="relative">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-2xl shadow-lg shadow-cyan-400/10">
              🕐
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              KrishAIWorks
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Convert Time. Done.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-500">
              A lightweight timestamp utility built for developers and everyday
              time conversion tasks.
            </p>

            <button
              onClick={() =>
                document
                  .getElementById("converter")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="mt-8 h-14 w-full rounded-2xl bg-cyan-400 px-7 text-base font-semibold text-black shadow-xl shadow-cyan-400/20 transition hover:-translate-y-0.5 hover:bg-cyan-300 active:scale-[0.98] sm:w-auto"
            >
              🕐 Try It Now
            </button>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FOOTER */}
      {/* ========================================================= */}

      <footer className="relative z-10 border-t border-white/5 px-5 py-10">

        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-7 sm:flex-row">

          <div className="flex items-center gap-3">

            <img
              src="/logo.png"
              alt="KrishAIWorks Logo"
              className="h-12 w-12 rounded-full border border-cyan-300/20 object-cover shadow-lg shadow-cyan-400/10"
            />

            <div>
              <p className="font-semibold text-white">
                KrishAIWorks
              </p>

              <p className="mt-1 text-xs text-zinc-600">
                AI Solutions That Work
              </p>
            </div>

          </div>

          <a
            href="https://instagram.com/KrishAIWorks"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 transition hover:text-cyan-300"
          >
            Instagram · @KrishAIWorks
          </a>

          <div className="text-center sm:text-right">

            <p className="text-xs text-zinc-600">
              © {new Date().getFullYear()} KrishAIWorks
            </p>

            <p className="mt-1 text-xs text-zinc-700">
              Built with simplicity.
            </p>

          </div>

        </div>
      </footer>
    </main>
  );
}

/* =============================================================== */
/* FEATURE CARD */
/* =============================================================== */

function FeatureCard({
  icon,
  number,
  title,
  description,
}: {
  icon: string;
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl border border-white/[0.08] bg-black/40 p-6 shadow-xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20">

      <div className="flex items-center justify-between">

        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/10 bg-cyan-400/10 text-xl">
          {icon}
        </div>

        <span className="text-xs font-bold tracking-[0.2em] text-cyan-400/50">
          {number}
        </span>

      </div>

      <div className="mt-6 inline-flex rounded-lg border border-cyan-300/10 bg-cyan-400/10 px-3 py-1">
        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300">
          Feature
        </span>
      </div>

      <h3 className="mt-3 text-lg font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-zinc-500">
        {description}
      </p>

    </div>
  );
}

/* =============================================================== */
/* STEP CARD */
/* =============================================================== */

function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-black/40 p-6 shadow-xl shadow-black/20 backdrop-blur-xl">

      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/10 bg-cyan-400/10 text-sm font-bold text-cyan-300">
        {number}
      </div>

      <div className="mt-6 inline-flex rounded-lg border border-cyan-300/10 bg-cyan-400/10 px-3 py-1">
        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300">
          Step {number}
        </span>
      </div>

      <h3 className="mt-3 text-lg font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-zinc-500">
        {description}
      </p>

    </div>
  );
}

/* =============================================================== */
/* FAQ */
/* =============================================================== */

function Faq({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="group rounded-2xl border border-white/[0.08] bg-black/40 p-5 shadow-lg shadow-black/20 backdrop-blur-xl">

      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-white">

        <span>{question}</span>

        <span className="text-xl text-cyan-300 transition group-open:rotate-45">
          +
        </span>

      </summary>

      <p className="mt-4 border-t border-white/5 pt-4 text-sm leading-7 text-zinc-500">
        {answer}
      </p>

    </details>
  );
}
"use client";
import { useRef, useState } from "react";
import { applyCareer } from "@/services/CareerRequest";
import Image from "next/image";
import toast from "react-hot-toast";
import localFont from "next/font/local";
import { Fraunces, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

const display = localFont({
  src: "../../fonts/Fraunces.ttf",
  variable: "--font-display",
});

const mono = localFont({
  src: "../../fonts/IBMPlexMono-Regular.ttf",
  variable: "--font-mono",
});

const sans = localFont({
  src: "../../fonts/IBMPlexSans-Regular.ttf",
  variable: "--font-sans",
});
const DUTIES = [
  "Ensure that bills and claims are accurate and comply with insurance requirements and regulations.",
  "Verify patient information, insurance coverage and medical procedures performed.",
  "Identify and resolve billing discrepancies and issues.",
  "Follow up with insurance companies and patients to ensure claims are processed in a timely manner.",
  "Maintain accurate and up-to-date billing records and patient information.",
  "Provide excellent customer service to patients and insurance companies.",
  "Meet or exceed individual and team performance goals.",
  "Strong communication and interpersonal skills.",
];

const DETAILS = [
  { label: "Role", value: "Other" },
  { label: "Industry Type", value: "IT Services & Consulting" },
  { label: "Department", value: "Other" },
  { label: "Employment Type", value: "Full Time, Permanent" },
  { label: "Role Category", value: "Other" },
];

const SKILLS = ["Medical Billing Executive", "Payment Posting", "US Healthcare"];

export default function Job() {
  const [resume, setResume] = useState<File | null>(null);
const [loading, setLoading] = useState(false);
const fileInputRef = useRef<HTMLInputElement>(null);

const handleFileChange = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  if (e.target.files && e.target.files.length > 0) {
    setResume(e.target.files[0]);
  }
};

const handleClear = () => {
  setResume(null);
  if (fileInputRef.current) {
    fileInputRef.current.value = "";
  }
};

const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  if (!resume) {
    toast.error("Please select a resume.");
    return;
  }

  try {
    setLoading(true);

    await applyCareer(resume);

    toast.success("Resume uploaded successfully!");

    setResume(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  } catch (error) {
    console.error(error);

    toast.error("Failed to upload resume.");
  } finally {
    setLoading(false);
  }
}; return (
    <div
      className={`${display.variable} ${mono.variable} ${sans.variable} job-wrap max-screen mt-20 max-w-10xl px-4`}
    >
      <div className="file-card relative">
        {/* Vertical file tab — desktop */}
        <div className="tab-vertical reveal" style={{ ["--d" as string]: "0ms" }}>
          <span>FILE NO. MB&#8209;2026&#8209;0417</span>
          <i className="punch" />
          <i className="punch" />
          <i className="punch" />
        </div>

        {/* Horizontal file tab — mobile */}
        <div className="tab-mobile reveal" style={{ ["--d" as string]: "0ms" }}>
            FILE NO. MB&#8209;2026&#8209;0417
        </div>

        {/* Ink stamp */}
        <div className="stamp reveal" style={{ ["--d" as string]: "80ms" }} aria-hidden="true">
          <svg viewBox="0 0 120 120" width="100" height="100">
            <defs>
              <path id="stampCircle" d="M 10,60 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" />
            </defs>
            <circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" strokeWidth="1.6" strokeDasharray="3 4" />
            <circle cx="60" cy="60" r="41" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <text fontSize="8.4" fill="currentColor" letterSpacing="2.5">
              <textPath href="#stampCircle" startOffset="1%">
                &#8226; NOW HIRING &#8226; ACTIVELY RECRUITING &#8226; NOW HIRING &#8226;
              </textPath>
            </text>
            <text x="60" y="57" textAnchor="middle" fontSize="17" fontWeight="700" fill="currentColor" fontFamily="var(--font-mono)">
              OPEN
            </text>
            <text x="60" y="71" textAnchor="middle" fontSize="7" fontWeight="600" fill="currentColor" fontFamily="var(--font-mono)" letterSpacing="1">
              POSITION
            </text>
          </svg>
        </div>

        <div className="card-inner">
          {/* Header */}
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
            <div className="reveal" style={{ ["--d" as string]: "40ms" }}>
              <p className="eyebrow">HEALTHCARE &middot; REVENUE CYCLE OPS</p>
              <h1 className="job-title">Medical Billing Executive</h1>

              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                <span className="company-name">M3 Global Services</span>
                <span className="stars" aria-label="Rated 5 out of 5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="13" height="13" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1L4.6 17.8l1.3-6-4.6-4.1 6.1-.6L10 1.5z" />
                    </svg>
                  ))}
                  <span className="stars-num">5.0</span>
                </span>
                <a href="#" className="review-link">
                  Employee Reviews
                </a>
              </div>
            </div>

            <div className="reveal flex shrink-0 flex-col items-center gap-4" style={{ ["--d" as string]: "80ms" }}>
              <div className="photo-tab">
                <Image
                  src="/logo/m3-logo.png"
                  alt="M3 Global Services logo"
                  width={92}
                  height={92}
                  className="block"
                />
              </div>
              <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
                <div className="flex flex-col items-center gap-2">
                  <input
                    ref={fileInputRef}
                    id="resume-file"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="file-input-hidden"
                  />

                  <label
                    htmlFor="resume-file"
                    className={`file-chip${resume ? " has-file" : ""}`}
                  >
                    <svg
                      className="file-chip-icon"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12 4v10" />
                      <path d="M8 8l4-4 4 4" />
                      <path d="M5 16v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2" />
                    </svg>
                    <span className="file-chip-text" aria-live="polite">
                      {resume ? resume.name : "Attach resume (PDF/DOC)"}
                    </span>
                  </label>

                  {resume && (
                    <button
                      type="button"
                      className="file-chip-clear"
                      onClick={handleClear}
                    >
                      Remove file
                    </button>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn-stamp"
                  disabled={loading}
                >
                  {loading ? "Uploading..." : "Apply with Resume →"}
                </button>
              </form>
            </div>
          </div>

          {/* Quick-glance fields */}
          <div className="glance reveal" style={{ ["--d" as string]: "120ms" }}>
            <div className="glance-item">
              <span className="glance-label">Experience</span>
              <span className="glance-value">0 &ndash; 2 Years</span>
            </div>
            <div className="glance-item">
              <span className="glance-label">Compensation</span>
              <span className="glance-value">Best in Industry</span>
            </div>
            <div className="glance-item">
              <span className="glance-label">Location</span>
              <span className="glance-value">Guntur, Andhra Pradesh</span>
            </div>
          </div>

          <div className="tear-line" role="presentation" />

          {/* Job Description */}
          <section className="reveal" style={{ ["--d" as string]: "160ms" }}>
            <p className="section-mark">&sect; SECTION A</p>
            <h2 className="section-title">Duties &amp; Responsibilities</h2>
            <ul className="duties">
              {DUTIES.map((duty, i) => (
                <li key={duty}>
                  <span className="duty-index">{String(i + 1).padStart(2, "0")}</span>
                  <span>{duty}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Position details */}
          <section className="mt-14 reveal" style={{ ["--d" as string]: "200ms" }}>
            <p className="section-mark">&sect; SECTION B</p>
            <h2 className="section-title">Position Details</h2>
            <div className="details-grid">
              {DETAILS.map((d) => (
                <div className="field-row" key={d.label}>
                  <span className="field-label">{d.label}</span>
                  <span className="field-dots" aria-hidden="true" />
                  <span className="field-value">{d.value}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mt-14 reveal" style={{ ["--d" as string]: "240ms" }}>
            <p className="section-mark">&sect; SECTION C</p>
            <h2 className="section-title">Education</h2>
            <div className="details-grid">
              <div className="field-row">
                <span className="field-label">UG</span>
                <span className="field-dots" aria-hidden="true" />
                <span className="field-value">Any Graduate</span>
              </div>
              <div className="field-row">
                <span className="field-label">PG</span>
                <span className="field-dots" aria-hidden="true" />
                <span className="field-value">Any Postgraduate</span>
              </div>
            </div>
          </section>

          {/* Key Skills */}
          <section className="mt-14 reveal" style={{ ["--d" as string]: "280ms" }}>
            <p className="section-mark">&sect; SECTION D</p>
            <h2 className="section-title">Key Skills</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {SKILLS.map((skill) => (
                <span className="skill-tag" key={skill}>
                  <i className="skill-dot" />
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>

      <style jsx>{`
        .job-wrap {
          --paper: #e8dcc3;
          --paper-dark: #f7f4ec;
          --ink: #22302c;
          --ink-soft: #5b675f;
          --teal: #1f5c56;
          --teal-deep: #123c38;
          --stamp: #1d4c8c;
          --line: #c9bb9c;
          font-family: var(--font-sans), sans-serif;
          color: var(--ink);
        }

        .file-card {
          position: relative;
          background: var(--paper-dark);
          border: 1px solid var(--ink);
          border-radius: 4px;
          box-shadow: 6px 6px 0 var(--paper), 7px 7px 0 var(--ink);
          background-image: repeating-linear-gradient(
            to bottom,
            transparent,
            transparent 27px,
            rgba(34, 48, 44, 0.055) 28px
          );
        }

        .card-inner {
          padding: 2.75rem 2rem 3.25rem;
        }
        @media (min-width: 768px) {
          .card-inner {
            padding: 3.5rem 4rem 4rem 5rem;
          }
        }

        .tab-vertical {
          display: none;
        }
        @media (min-width: 768px) {
          .tab-vertical {
            display: flex;
            position: absolute;
            left: -34px;
            top: 48px;
            bottom: 48px;
            width: 34px;
            background: var(--teal-deep);
            border: 1px solid var(--ink);
            border-right: none;
            border-radius: 4px 0 0 4px;
            align-items: center;
            justify-content: center;
            padding: 1rem 0;
            gap: 0.6rem;
          }
          .tab-vertical span {
            writing-mode: vertical-rl;
            transform: rotate(180deg);
            font-family: var(--font-mono), monospace;
            font-size: 0.62rem;
            letter-spacing: 0.14em;
            color: var(--paper);
            white-space: nowrap;
          }
          .punch {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: var(--paper-dark);
            box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.5);
            flex-shrink: 0;
          }
        }

        .tab-mobile {
          display: block;
          background: var(--teal-deep);
          color: var(--paper);
          font-family: var(--font-mono), monospace;
          font-size: 0.65rem;
          letter-spacing: 0.12em;
          padding: 0.5rem 1rem;
          border-bottom: 1px solid var(--ink);
          border-radius: 4px 4px 0 0;
        }
        @media (min-width: 768px) {
          .tab-mobile {
            display: none;
          }
        }

        .stamp {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          color: var(--stamp);
          opacity: 0.82;
          mix-blend-mode: multiply;
          transform: rotate(-9deg);
          transition: transform 300ms ease;
          pointer-events: none;
        }
        @media (min-width: 768px) {
          .stamp {
            top: 2.5rem;
            right: 2.5rem;
          }
        }
        .file-card:hover .stamp {
          transform: rotate(-4deg) scale(1.03);
        }

        .eyebrow {
          font-family: var(--font-mono), monospace;
          font-size: 0.7rem;
          letter-spacing: 0.18em;
          color: var(--teal);
          text-transform: uppercase;
          margin-bottom: 0.6rem;
        }

        .job-title {
          font-family: var(--font-display), serif;
          font-weight: 600;
          font-size: 2.35rem;
          line-height: 1.08;
          color: var(--ink);
          max-width: 20ch;
        }
        @media (min-width: 768px) {
          .job-title {
            font-size: 3rem;
          }
        }

        .company-name {
          font-family: var(--font-mono), monospace;
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--teal);
          letter-spacing: 0.01em;
        }

        .stars {
          display: inline-flex;
          align-items: center;
          gap: 2px;
          color: var(--stamp);
        }
        .stars-num {
          margin-left: 5px;
          font-family: var(--font-mono), monospace;
          font-size: 0.8rem;
          color: var(--ink-soft);
        }

        .review-link {
          font-family: var(--font-mono), monospace;
          font-size: 0.78rem;
          color: var(--ink-soft);
          text-decoration: underline;
          text-decoration-style: dotted;
          text-underline-offset: 3px;
        }
        .review-link:hover {
          color: var(--teal);
        }

        .photo-tab {
          background: #fff;
          padding: 0.6rem;
          border: 1px dashed var(--line);
          transform: rotate(-2deg);
          box-shadow: 3px 3px 0 rgba(34, 48, 44, 0.1);
        }

        .file-input-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        .file-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          max-width: 220px;
          font-family: var(--font-mono), monospace;
          font-size: 0.74rem;
          letter-spacing: 0.03em;
          color: var(--ink-soft);
          background: var(--paper);
          border: 1px dashed var(--line);
          border-radius: 2px;
          padding: 0.6rem 0.85rem;
          cursor: pointer;
          user-select: none;
          transition: border-color 150ms ease, color 150ms ease,
            background 150ms ease;
        }
        .file-chip:hover {
          border-color: var(--teal);
          color: var(--teal-deep);
        }
        .file-input-hidden:focus-visible + .file-chip {
          outline: 2px solid var(--stamp);
          outline-offset: 2px;
        }
        .file-chip.has-file {
          border-style: solid;
          border-color: var(--teal);
          color: var(--teal-deep);
          background: var(--paper-dark);
        }
        .file-chip-icon {
          flex-shrink: 0;
        }
        .file-chip-text {
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .file-chip-clear {
          font-family: var(--font-mono), monospace;
          font-size: 0.66rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--ink-soft);
          background: none;
          border: none;
          padding: 0;
          text-decoration: underline;
          text-decoration-style: dotted;
          text-underline-offset: 3px;
          cursor: pointer;
        }
        .file-chip-clear:hover {
          color: var(--stamp);
        }

        .btn-stamp {
          font-family: var(--font-mono), monospace;
          font-size: 0.78rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--paper-dark);
          background: var(--teal-deep);
          border: 1px solid var(--ink);
          padding: 0.75rem 1.4rem;
          border-radius: 2px;
          cursor: pointer;
          transition: transform 150ms ease, background 150ms ease;
          white-space: nowrap;
        }
        .btn-stamp:hover {
          background: var(--teal);
          transform: translateY(-1px);
        }
        .btn-stamp:active {
          transform: scale(0.96);
        }
        .btn-stamp:focus-visible {
          outline: 2px solid var(--stamp);
          outline-offset: 2px;
        }

        .glance {
          margin-top: 2.5rem;
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.1rem;
          padding: 1.1rem 0;
          border-top: 1px solid var(--line);
        }
        @media (min-width: 640px) {
          .glance {
            grid-template-columns: repeat(3, auto);
            gap: 2.5rem;
          }
        }
        .glance-item {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .glance-label {
          font-family: var(--font-mono), monospace;
          font-size: 0.66rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--ink-soft);
        }
        .glance-value {
          font-size: 0.98rem;
          font-weight: 500;
        }

        .tear-line {
          margin: 2.5rem 0;
          height: 0;
          border-top: 2px dashed var(--line);
        }

        .section-mark {
          font-family: var(--font-mono), monospace;
          font-size: 0.68rem;
          letter-spacing: 0.16em;
          color: var(--stamp);
          margin-bottom: 0.4rem;
        }
        .section-title {
          font-family: var(--font-display), serif;
          font-style: italic;
          font-weight: 500;
          font-size: 1.5rem;
          margin-bottom: 1.4rem;
          color: var(--ink);
        }

        .duties {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .duties li {
          display: flex;
          gap: 0.9rem;
          line-height: 1.65;
          color: var(--ink-soft);
          font-size: 0.98rem;
        }
        .duty-index {
          font-family: var(--font-mono), monospace;
          font-size: 0.78rem;
          color: var(--teal);
          padding-top: 0.2rem;
          flex-shrink: 0;
        }

        .details-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.9rem 2.5rem;
        }
        @media (min-width: 768px) {
          .details-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        .field-row {
          display: flex;
          align-items: baseline;
          gap: 0.6rem;
        }
        .field-label {
          font-family: var(--font-mono), monospace;
          font-size: 0.78rem;
          color: var(--ink-soft);
          white-space: nowrap;
        }
        .field-dots {
          flex: 1;
          border-bottom: 1px dotted var(--line);
          transform: translateY(-3px);
        }
        .field-value {
          font-size: 0.95rem;
          font-weight: 500;
          white-space: nowrap;
        }

        .skill-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono), monospace;
          font-size: 0.78rem;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          color: var(--teal-deep);
          background: var(--paper);
          border: 1px solid var(--teal);
          padding: 0.5rem 0.9rem;
          transition: transform 150ms ease, background 150ms ease;
        }
        .skill-tag:hover {
          background: var(--teal);
          color: var(--paper-dark);
          transform: translateY(-2px);
        }
        .skill-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: currentColor;
        }

        .reveal {
          animation: rise 560ms both;
          animation-delay: var(--d, 0ms);
        }
        @keyframes rise {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .reveal {
            animation: none;
          }
          .btn-stamp,
          .stamp,
          .skill-tag,
          .file-chip {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}
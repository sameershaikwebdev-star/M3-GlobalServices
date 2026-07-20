"use client";
import { useState } from "react";
import { sendContactMessage } from "@/services/contact";
import Footer from "@/components/footer/Footer";
import toast from "react-hot-toast";
import { Fraunces, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

import localFont from "next/font/local";

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
const DIRECT_LINES = [
  { label: "General Enquiries", value: "m3globalservicespvtltd@gmail.com" },
  { label: "Phone", value: "+916301422662" },
  { label: "Office Hours", value: "Mon\u2013SAT, 9:00\u201318:00 IST" },
];

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      await sendContactMessage(formData);

      toast.success("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error: any) {
      console.error(error);

      if (!error.response) {
        toast.error("Backend server is not running. Please try again later.");
      } else {
        const data = error.response.data;

        if (Array.isArray(data?.errors) && data.errors.length > 0) {
          toast.error(data.errors[0].defaultMessage);
        } else if (typeof data === "string") {
          toast.error(data);
        } else {
          toast.error(data?.message || "Failed to send message.");
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className={`${display.variable} ${mono.variable} ${sans.variable} contact-wrap py-32`}>
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          {/* Heading */}
          <div className="text-center reveal" style={{ ["--d" as string]: "0ms" }}>
            <p className="eyebrow">&sect; Contact</p>
            <h1 className="page-title">Reach Out To Us</h1>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 intro-copy">
              We&apos;re always happy to help. Whether you have questions about our
              Healthcare, BPO, Software Development or Publishing Services,
              our team is ready to assist you.
            </p>
          </div>

          {/* Form + direct lines */}
          <div className="mx-auto mt-20 max-w-6xl">
            <div className="file-card relative reveal" style={{ ["--d" as string]: "60ms" }}>
              {/* Vertical file tab — desktop */}
              <div className="tab-vertical">
                <span>INTAKE FORM &middot; CONTACT-2026</span>
                <i className="punch" />
                <i className="punch" />
                <i className="punch" />
              </div>

              {/* Horizontal file tab — mobile */}
              <div className="tab-mobile">INTAKE FORM &middot; CONTACT-2026</div>

              {/* Ink stamp */}
              <div className="stamp" aria-hidden="true">
                <svg viewBox="0 0 120 120" width="92" height="92">
                  <defs>
                    <path id="stampCircle2" d="M 10,60 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" />
                  </defs>
                  <circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" strokeWidth="1.6" strokeDasharray="3 4" />
                  <circle cx="60" cy="60" r="41" fill="none" stroke="currentColor" strokeWidth="1.2" />
                  <text fontSize="8" fill="currentColor" letterSpacing="2.2">
                    <textPath href="#stampCircle2" startOffset="1%">
                      &#8226; WE REPLY FAST &#8226; WE REPLY FAST &#8226;
                    </textPath>
                  </text>
                  <text x="60" y="57" textAnchor="middle" fontSize="15" fontWeight="700" fill="currentColor" fontFamily="var(--font-mono)">
                    REACH
                  </text>
                  <text x="60" y="71" textAnchor="middle" fontSize="7" fontWeight="600" fill="currentColor" fontFamily="var(--font-mono)" letterSpacing="1">
                    OUT
                  </text>
                </svg>
              </div>

              <div className="card-inner grid gap-14 lg:grid-cols-[1.5fr_1fr]">
                {/* Form */}
                <form className="space-y-9" onSubmit={handleSubmit}>
                  <p className="section-mark">&sect; SECTION A</p>
                  <h2 className="section-title">Send a Message</h2>

                  <div className="form-field">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid gap-9 sm:grid-cols-2">
                    <div className="form-field">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="phone">Phone</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="subject">Subject</label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Enter subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="ruled"
                      placeholder="Write your message..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-stamp"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>

                {/* Direct lines */}
                <aside className="direct-lines">
                  <p className="section-mark">&sect; SECTION B</p>
                  <h2 className="section-title">Direct Lines</h2>
                  <div className="flex flex-col gap-6">
                    {DIRECT_LINES.map((d) => (
                      <div className="field-row-stack" key={d.label}>
                        <span className="field-label">{d.label}</span>
                        <span className="field-value">{d.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="tear-line" role="presentation" />

                  <p className="footnote">
                  
                  </p>
                </aside>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .contact-wrap {
            --paper: #e8dcc3;
            --paper-dark: #f7f4ec;
            --ink: #22302c;
            --ink-soft: #5b675f;
            --teal: #1f5c56;
            --teal-deep: #123c38;
            --stamp: #1d4c8c;
            --line: #c9bb9c;
            background: var(--paper);
            font-family: var(--font-sans), sans-serif;
            color: var(--ink);
          }

          .eyebrow {
            font-family: var(--font-mono), monospace;
            font-size: 0.72rem;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            color: var(--teal);
          }

          .page-title {
            margin-top: 1rem;
            font-family: var(--font-display), serif;
            font-weight: 700;
            font-size: 3rem;
            line-height: 1.05;
            color: var(--ink);
          }
          @media (min-width: 768px) {
            .page-title {
              font-size: 3.75rem;
            }
          }

          .intro-copy {
            color: var(--ink-soft);
          }

          .file-card {
            background: var(--paper-dark);
            border: 1px solid var(--ink);
            border-radius: 4px;
            box-shadow: 6px 6px 0 var(--paper), 7px 7px 0 var(--ink);
            background-image: repeating-linear-gradient(
              to bottom,
              transparent,
              transparent 27px,
              rgba(34, 48, 44, 0.05) 28px
            );
          }

          .card-inner {
            padding: 2.5rem 1.75rem 3rem;
          }
          @media (min-width: 768px) {
            .card-inner {
              padding: 3.5rem 3.5rem 3.75rem 5rem;
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
            letter-spacing: 0.1em;
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
            top: 1.1rem;
            right: 1.1rem;
            color: var(--stamp);
            opacity: 0.82;
            mix-blend-mode: multiply;
            transform: rotate(8deg);
            transition: transform 300ms ease;
            pointer-events: none;
          }
          @media (min-width: 768px) {
            .stamp {
              top: 2.25rem;
              right: 2.25rem;
            }
          }
          .file-card:hover .stamp {
            transform: rotate(3deg) scale(1.03);
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
            font-size: 1.45rem;
            margin-bottom: 1.6rem;
            color: var(--ink);
          }

          .form-field {
            display: flex;
            flex-direction: column;
            gap: 0.6rem;
          }
          .form-field label {
            font-family: var(--font-mono), monospace;
            font-size: 0.72rem;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: var(--ink-soft);
          }
          .form-field input,
          .form-field textarea {
            width: 100%;
            background: transparent;
            border: none;
            border-bottom: 1.5px dotted var(--line);
            padding: 0.6rem 0.1rem;
            font-family: var(--font-sans), sans-serif;
            font-size: 1rem;
            color: var(--ink);
            outline: none;
            transition: border-color 180ms ease, background 180ms ease;
          }
          .form-field input::placeholder,
          .form-field textarea::placeholder {
            color: var(--ink-soft);
            opacity: 0.55;
          }
          .form-field input:focus,
          .form-field textarea:focus {
            border-bottom: 1.5px solid var(--teal);
          }
          .form-field textarea.ruled {
            border: 1px solid var(--line);
            border-radius: 2px;
            padding: 0.9rem 1rem;
            resize: vertical;
            background-image: repeating-linear-gradient(
              to bottom,
              transparent,
              transparent 26px,
              var(--line) 27px
            );
            line-height: 27px;
          }
          .form-field textarea.ruled:focus {
            border-color: var(--teal);
          }

          .btn-stamp {
            font-family: var(--font-mono), monospace;
            font-size: 0.8rem;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: var(--paper-dark);
            background: var(--teal-deep);
            border: 1px solid var(--ink);
            padding: 0.85rem 1.6rem;
            border-radius: 2px;
            cursor: pointer;
            transition: transform 150ms ease, background 150ms ease;
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

          .direct-lines {
            border-top: 1px dashed var(--line);
            padding-top: 2rem;
          }
          @media (min-width: 1024px) {
            .direct-lines {
              border-top: none;
              border-left: 1px dashed var(--line);
              padding-top: 0;
              padding-left: 2.5rem;
            }
          }

          .field-row-stack {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
          }
          .field-label {
            font-family: var(--font-mono), monospace;
            font-size: 0.68rem;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: var(--ink-soft);
          }
          .field-value {
            font-size: 0.98rem;
            font-weight: 500;
            color: var(--ink);
          }

          .tear-line {
            margin: 2rem 0 1.5rem;
            height: 0;
            border-top: 2px dashed var(--line);
          }

          .footnote {
            font-size: 0.85rem;
            line-height: 1.6;
            color: var(--ink-soft);
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
            .form-field input,
            .form-field textarea {
              transition: none;
            }
          }
        `}</style>
      </section>
    </>
  );
}
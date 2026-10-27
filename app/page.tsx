"use client";

import { useMemo, useState } from "react";
import { display, body } from "./fonts";
import { SiteHeader, SiteFooter } from "./components/SiteChrome";
import { BRAND } from "./site-data";


/* ---------- EDIT THESE ---------- */
const FILTERS = ["All", "Family", "Honeymoon"];

type Pkg = { cat: string; title: string; href: string; length: string; route: string; blurb: string; tone: number };

// Sample content: replace durations, routes and wording with your real itineraries.
const PACKAGES: Pkg[] = [
  { cat: "Family", title: "Family Tour Package A", href: "/family-tour-package-a", length: "5 nights, 6 days", route: "Port Blair, Havelock", blurb: "Easy pacing, short transfers and stays that suit children and grandparents alike.", tone: 1 },
  { cat: "Honeymoon", title: "Honeymoon Package A", href: "/honeymoon-package-a", length: "5 nights, 6 days", route: "Port Blair, Havelock", blurb: "Private beach time at Radhanagar, candlelight dinners and unhurried days for two.", tone: 0 },
  { cat: "Family", title: "Family Tour Package B", href: "/family-tour-package-b", length: "6 nights, 7 days", route: "Port Blair, Havelock, Neil", blurb: "A longer family holiday adding Neil Island, with relaxed sightseeing and beach days.", tone: 2 },
  { cat: "Honeymoon", title: "Honeymoon Package B", href: "/honeymoon-package-b", length: "6 nights, 7 days", route: "Port Blair, Havelock, Neil", blurb: "Three islands at a gentle pace, with sunset spots, water activities and quiet evenings.", tone: 3 },
];
/* -------------------------------- */

export default function Home() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", month: "", interest: "Honeymoon Package A" });

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PACKAGES.filter((p) => (filter === "All" || p.cat === filter) && (!q || `${p.title} ${p.route} ${p.blurb}`.toLowerCase().includes(q)));
  }, [filter, query]);

  const waLink = useMemo(() => {
    const msg = `Hi Yellow Fin Tours, I'm ${form.name || "(name)"}. I'd like to enquire about the ${form.interest}${form.month ? ` for ${form.month}` : ""}. My number is ${form.phone || "(phone)"}.`;
    return `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(msg)}`;
  }, [form]);

  return (
    <div className={`yf-page ${body.className}`} style={{ ["--display" as string]: display.style.fontFamily }}>
      <SiteHeader query={query} onQuery={setQuery} />

      <main>
        {/* ---------- Hero ---------- */}
        <section className="yf-hero">
          <div className="yf-hero-copy">
            <h1 className="yf-display">Island holidays, planned on the islands.</h1>
            <p>
              Yellow Fin Tours and Travels arranges stays, ferries, sightseeing and activities across the
              Andaman and Nicobar Islands.
            </p>
            <div className="yf-hero-actions">
              <a href="#packages" className="yf-btn-primary">See packages</a>
              <a href="#enquire" className="yf-btn-ghost">Plan my trip</a>
            </div>
          </div>
        </section>

        {/* ---------- Packages ---------- */}
        <section id="packages" className="yf-section">
          <div className="yf-section-head">
            <h2 className="yf-display">Choose how you want to travel</h2>
            <p>Pick a package. Every package can be adjusted to your dates and budget.</p>
          </div>

          <div className="yf-chips" role="tablist" aria-label="Package type">
            {FILTERS.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                className={filter === f ? "yf-chip-on" : "yf-chip"}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {shown.length === 0 ? (
            <p className="yf-empty">
              No package matches "{query}". Clear the search, or <a href="#enquire">talk to us</a>.
            </p>
          ) : (
            <ul className="yf-grid">
              {shown.map((p) => (
                <li key={p.title} className="yf-card">
                  {/* Replace this block with <Image src="/packages/xyz.jpg" ... /> when you have photos */}
                  <div className={`yf-photo yf-tone${p.tone}`}>
                    <span>{p.cat}</span>
                  </div>
                  <div className="yf-card-body">
                    <h3 className="yf-display">{p.title}</h3>
                    <p className="yf-meta">{p.length} &mdash; {p.route}</p>
                    <p>{p.blurb}</p>
                    <a href={p.href} className="yf-link">View details</a>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* ---------- Enquiry ---------- */}
        <section id="enquire" className="yf-enquire">
          <div>
            <h2 className="yf-display">Talk to a trip expert</h2>
            <p>Share a few details and we will reply on WhatsApp with options and a quote.</p>
          </div>
          <div className="yf-form">
            <label>
              Your name
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} autoComplete="name" />
            </label>
            <label>
              Phone number
              <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} inputMode="tel" autoComplete="tel" />
            </label>
            <label>
              Travel month
              <input value={form.month} onChange={(e) => setForm({ ...form, month: e.target.value })} placeholder="e.g. December" />
            </label>
            <label>
              Package
              <select value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })}>
                {PACKAGES.map((p) => (
                  <option key={p.title}>{p.title}</option>
                ))}
              </select>
            </label>
            <a className="yf-btn-primary" href={waLink} target="_blank" rel="noopener noreferrer">
              Send on WhatsApp
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

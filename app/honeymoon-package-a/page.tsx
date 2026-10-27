import type { Metadata } from "next";
import { display, body } from "../fonts";
import { SiteHeader, SiteFooter } from "../components/SiteChrome";
import { BRAND, tel } from "../site-data";

export const metadata: Metadata = {
  title: "Andaman Honeymoon Package: 5 Nights 6 Days | Yellow Fin Tours & Travels",
  description:
    "Five-night Andaman honeymoon covering Port Blair, Swaraj Dweep (Havelock) and Shaheed Dweep (Neil), with AC accommodation, breakfast, ferry transfers and sightseeing.",
};

/* ---------- EDIT CONTENT HERE ---------- */
const TRIP = {
  title: "Andaman Honeymoon Package",
  length: "5 nights, 6 days",
  route: "Port Blair, Swaraj Dweep (Havelock), Shaheed Dweep (Neil)",
};

type Day = { day: number; title: string; stops: string[]; note?: string };

const DAYS: Day[] = [
  {
    day: 1,
    title: "Welcome to Port Blair",
    stops: [
      "Arrive in the Andaman Islands and transfer to your hotel",
      "Explore Cellular Jail, Marine Aquarium, Flag Point and Marina Park",
      "Evening Cellular Jail Light and Sound Show",
    ],
  },
  {
    day: 2,
    title: "Explore Swaraj Dweep (Havelock Island)",
    stops: [
      "Early morning ferry to Havelock Island",
      "Excursion to Elephanta Beach, where water activities may be available",
      "Relax at Radhanagar Beach and enjoy a beautiful sunset together",
    ],
  },
  {
    day: 3,
    title: "Discover Shaheed Dweep (Neil Island)",
    stops: [
      "Sunrise at Kalapathar Beach",
      "Travel to Neil Island",
      "Laxmanpur Beach 2 and its natural rock formations",
      "Bharatpur Beach",
      "Sunset at Laxmanpur Beach 1",
    ],
  },
  {
    day: 4,
    title: "Return to Port Blair",
    stops: [
      "Sunrise at Sitapur Beach",
      "Return to Port Blair",
      "Samudrika Naval Marine Museum",
      "Shopping at Aberdeen Bazaar",
    ],
  },
  {
    day: 5,
    title: "Explore Ross Island and North Bay",
    stops: [
      "Chatham Saw Mill",
      "Ross Island and North Bay Island",
      "Finish the day at Corbyn's Cove Beach",
    ],
  },
  {
    day: 6,
    title: "Departure",
    stops: ["Breakfast and check out", "Transfer for your departure with beautiful memories of your honeymoon"],
  },
];

const INCLUDED = [
  "AC accommodation with breakfast",
  "Travel and transfers according to the confirmed itinerary",
  "Inter-island ferry tickets for the specified route",
  "Included sightseeing and applicable entry tickets",
  "Cellular Jail Light and Sound Show",
];

const ON_REQUEST = [
  "Scuba diving, sea walking, snorkelling and semi-submarine rides",
  "Rental two-wheelers",
  "Meals other than breakfast",
  "Romantic add-ons and accommodation upgrades",
];

const CARRY = ["ID proof", "Driving licence", "Swimming clothes", "Cap and sunglasses", "Regular medicines, if you use any"];
const BEACH = ["Towel and extra clothes", "Sunscreen", "Waterproof phone pouch", "Light snacks and drinking water"];
/* --------------------------------------- */

export default function HoneymoonPackageAPage() {
  const wa = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
    "Hi Yellow Fin Tours, I'd like details and a quote for the Andaman Honeymoon Package (5 nights 6 days).",
  )}`;

  return (
    <div className={`yf-page ${body.className}`} style={{ ["--display" as string]: display.style.fontFamily }}>
      <SiteHeader current="/honeymoon-package-a" />

      <main>
        {/* ---------- Title block ---------- */}
        <section className="yf-trip-hero">
          <div className="yf-trip-hero-inner">
            <div>
              <p className="yf-crumbs"><a href="/">Home</a> / Andaman Honeymoon Package</p>
              <h1 className="yf-display">{TRIP.title}: {TRIP.length}</h1>
              <p className="yf-trip-lead">
                Begin your new journey together in the tropical paradise of the Andaman Islands, with beautiful sunsets,
                peaceful beaches and exciting island adventures.
              </p>
              <div className="yf-hero-actions">
                <a className="yf-btn-primary" href={wa} target="_blank" rel="noopener noreferrer">Get a quote on WhatsApp</a>
                <a className="yf-btn-ghost" href={tel(BRAND.phone)}>Call {BRAND.phone}</a>
              </div>
            </div>
            <ul className="yf-facts">
              <li><strong>6 days</strong><span>5 nights</span></li>
              <li><strong>3 stops</strong><span>Port Blair, Havelock, Neil</span></li>
              <li><strong>AC stay</strong><span>Breakfast included</span></li>
            </ul>
          </div>
        </section>

        {/* ---------- Itinerary + sidebar ---------- */}
        <section className="yf-trip">
          <div>
            <h2 className="yf-display yf-h2">Day-by-day itinerary</h2>
            <ol className="yf-days">
              {DAYS.map((d) => (
                <li key={d.day} className="yf-day">
                  <span className="yf-day-num" aria-hidden="true"><small>Day</small>{d.day}</span>
                  <div>
                    <h3 className="yf-display">Day {d.day}: {d.title}</h3>
                    <ul className="yf-stops">
                      {d.stops.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                    {d.note && <p className="yf-note"><strong>Note:</strong> {d.note}</p>}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside className="yf-aside" aria-label="Package summary">
            <div className="yf-panel">
              <h2 className="yf-display">At a glance</h2>
              <dl>
                <div><dt>Duration</dt><dd>{TRIP.length}</dd></div>
                <div><dt>Route</dt><dd>{TRIP.route}</dd></div>
                <div><dt>Stay</dt><dd>AC rooms with breakfast</dd></div>
                <div><dt>Ideal for</dt><dd>Newlyweds and couples seeking a tropical getaway</dd></div>
                <div><dt>Price</dt><dd>Available on request</dd></div>
              </dl>
              <a className="yf-btn-primary" href={wa} target="_blank" rel="noopener noreferrer">Enquire on WhatsApp</a>
              <a className="yf-btn-outline" href={tel(BRAND.phone2)}>Call {BRAND.phone2}</a>
            </div>
          </aside>
        </section>

        {/* ---------- Inclusions ---------- */}
        <section className="yf-lists">
          <div className="yf-panel">
            <h2 className="yf-display">Included in this package</h2>
            <ul className="yf-tick">{INCLUDED.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
          <div className="yf-panel">
            <h2 className="yf-display">Optional experiences</h2>
            <ul className="yf-plus">{ON_REQUEST.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
          <div className="yf-panel">
            <h2 className="yf-display">Before you travel, carry</h2>
            <ul className="yf-plain">{CARRY.map((i) => <li key={i}>{i}</li>)}</ul>
            <h3 className="yf-display yf-h3">For beach visits</h3>
            <ul className="yf-plain">{BEACH.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        </section>

        {/* ---------- Closing CTA ---------- */}
        <section className="yf-enquire yf-cta">
          <div>
            <h2 className="yf-display">Make your honeymoon special</h2>
            <p>Send us your travel dates, preferred hotel category and budget. Ask about romantic add-ons and accommodation upgrades.</p>
          </div>
          <div className="yf-cta-actions">
            <a className="yf-btn-primary" href={wa} target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a>
            <a className="yf-btn-ghost" href="/#enquire">Need changes? Talk to us</a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

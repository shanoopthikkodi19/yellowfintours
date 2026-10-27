import type { Metadata } from "next";
import { display, body } from "../fonts";
import { SiteHeader, SiteFooter } from "../components/SiteChrome";
import { BRAND, tel } from "../site-data";

export const metadata: Metadata = {
  title: "Honeymoon Package A: Andaman 5 Nights 6 Days | Yellow Fin Tours & Travels",
  description:
    "Six-day Andaman honeymoon for two covering Port Blair and Swaraj Dweep (Havelock), with AC stay, breakfast, ferry tickets and a candlelight dinner.",
};

/* ---------- EDIT CONTENT HERE ---------- */
const TRIP = {
  title: "Honeymoon Package A",
  length: "5 nights, 6 days",
  route: "Port Blair, Swaraj Dweep (Havelock)",
};

type Day = { day: number; title: string; stops: string[]; note?: string };

// Sample itinerary: replace with your real Honeymoon Package A plan.
const DAYS: Day[] = [
  {
    day: 1,
    title: "Arrive in Port Blair",
    stops: [
      "Airport pick-up",
      "Check in at the hotel and rest",
      "Visit Cellular Jail, Flag Point and Marina Park",
      "Cellular Jail light and sound show",
      "Dinner and back to the room",
    ],
  },
  {
    day: 2,
    title: "Swaraj Dweep (Havelock)",
    stops: [
      "Morning ferry to Swaraj Dweep",
      "Breakfast on arrival, then check in at the resort",
      "Speed boat to Elephanta Beach (water activities available there)",
      "Return and have lunch",
      "Radhanagar Beach for a quiet walk and sunset",
      "Back to the resort",
    ],
  },
  {
    day: 3,
    title: "Havelock for two",
    stops: [
      "Sunrise at Kalapathar Beach",
      "Breakfast",
      "Free time on the beach or optional scuba diving and snorkelling",
      "Candlelight dinner by the sea",
    ],
    note: "The candlelight dinner is subject to the resort and weather. Please confirm it when you book.",
  },
  {
    day: 4,
    title: "Havelock to Port Blair",
    stops: [
      "Breakfast and check out",
      "Ferry to Sri Vijayapuram (Port Blair) and drop at the hotel",
      "Lunch and a short rest",
      "Samudrika Naval Marine Museum",
      "Shopping at Aberdeen Bazaar",
      "Dinner and back to the room",
    ],
  },
  {
    day: 5,
    title: "Ross Island and North Bay",
    stops: [
      "Breakfast",
      "Ross Island and the North Bay Island lighthouse",
      "Back to the jetty in the evening",
      "Corbyn's Cove Beach at sunset",
      "Dinner and back to the room",
    ],
  },
  {
    day: 6,
    title: "Departure",
    stops: ["Breakfast", "Check out", "Return to the mainland with beautiful memories"],
  },
];

const INCLUDED = [
  "AC room, breakfast and travelling facilities",
  "Ferry tickets for Swaraj Dweep, Elephanta Beach, Ross Island and North Bay",
  "All entry tickets and the light and sound show at Cellular Jail",
  "Candlelight dinner on Day 3",
];

const ON_REQUEST = [
  "Activities like scuba diving, sea walk, snorkelling and semi-submarine",
  "Lunch and other dinners",
  "Flower bed decoration and cake for the room",
  "Rental two-wheeler service",
];

const CARRY = ["ID proof", "Marriage certificate or invitation, if available", "Driving licence", "Swimming clothes", "Cap and sunglasses", "Regular medicines, if you use any"];
const BEACH = ["Towel and extra clothes", "Sunscreen", "Waterproof phone pouch", "Light snacks and drinking water"];
/* --------------------------------------- */

export default function HoneymoonPackageAPage() {
  const wa = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
    "Hi Yellow Fin Tours, I'd like details and a quote for Honeymoon Package A (Andaman 5 nights 6 days).",
  )}`;

  return (
    <div className={`yf-page ${body.className}`} style={{ ["--display" as string]: display.style.fontFamily }}>
      <SiteHeader current="/honeymoon-package-a" />

      <main>
        {/* ---------- Title block ---------- */}
        <section className="yf-trip-hero">
          <div className="yf-trip-hero-inner">
            <div>
              <p className="yf-crumbs"><a href="/">Home</a> / Honeymoon Package A</p>
              <h1 className="yf-display">{TRIP.title}: {TRIP.length}</h1>
              <p className="yf-trip-lead">
                The Yellow Fin team welcomes you to a beautiful and memorable start to married life, with private beach
                time and unhurried days for two.
              </p>
              <div className="yf-hero-actions">
                <a className="yf-btn-primary" href={wa} target="_blank" rel="noopener noreferrer">Get a quote on WhatsApp</a>
                <a className="yf-btn-ghost" href={tel(BRAND.phone)}>Call {BRAND.phone}</a>
              </div>
            </div>
            <ul className="yf-facts">
              <li><strong>6 days</strong><span>5 nights</span></li>
              <li><strong>2 stops</strong><span>Port Blair, Havelock</span></li>
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
                <div><dt>Price</dt><dd>On request, based on dates and hotel choice</dd></div>
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
            <h2 className="yf-display">Arranged on request</h2>
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
            <h2 className="yf-display">Planning your honeymoon?</h2>
            <p>Tell us your dates and preferences. We will confirm hotels, ferries and a final price.</p>
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

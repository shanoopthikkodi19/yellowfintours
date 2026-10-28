import type { Metadata } from "next";
import { display, body } from "../fonts";
import { SiteHeader, SiteFooter } from "../components/SiteChrome";
import { BRAND, tel } from "../site-data";

export const metadata: Metadata = {
  title: "Andaman Family Tour Package: 5 Nights 6 Days | Yellow Fin Tours & Travels",
  description:
    "Five-night Andaman family tour covering Port Blair, Swaraj Dweep (Havelock) and Shaheed Dweep (Neil), with AC rooms, breakfast, airport and sightseeing transfers and inter-island ferries.",
};

/* ---------- EDIT CONTENT HERE ---------- */
const TRIP = {
  title: "Andaman Family Tour Package",
  length: "5 nights, 6 days",
  route: "Port Blair, Swaraj Dweep (Havelock), Shaheed Dweep (Neil)",
};

type Day = { day: number; title: string; stops: string[]; note?: string };

const DAYS: Day[] = [
  {
    day: 1,
    title: "Arrive in Port Blair",
    stops: [
      "Arrive at the airport and transfer to your hotel",
      "Visit Cellular Jail, Marine Aquarium, Flag Point and Marina Park",
      "Evening Cellular Jail Light and Sound Show",
    ],
  },
  {
    day: 2,
    title: "Island adventures at Swaraj Dweep",
    stops: [
      "Early morning ferry to Havelock Island",
      "Excursion to Elephanta Beach, where water activities may be available",
      "Radhanagar Beach to relax and enjoy the natural beauty of the island",
    ],
  },
  {
    day: 3,
    title: "Explore Shaheed Dweep",
    stops: [
      "Sunrise at Kalapathar Beach",
      "Travel to Neil Island",
      "Natural rock formations at Laxmanpur Beach 2",
      "Bharatpur Beach",
      "Evening at Laxmanpur Beach 1",
    ],
  },
  {
    day: 4,
    title: "Port Blair sightseeing and shopping",
    stops: [
      "Sunrise at Sitapur Beach",
      "Return to Port Blair",
      "Samudrika Naval Marine Museum",
      "Local shopping at Aberdeen Bazaar",
    ],
  },
  {
    day: 5,
    title: "Discover Ross Island and North Bay",
    stops: [
      "Chatham Saw Mill",
      "Ross Island and North Bay Island",
      "Corbyn's Cove Beach, then back to your hotel",
    ],
  },
  {
    day: 6,
    title: "Departure",
    stops: ["Breakfast and check out", "Transfer for your departure, taking home wonderful family memories"],
  },
];

const INCLUDED = [
  "AC rooms with breakfast",
  "Airport and sightseeing transfers as per itinerary",
  "Inter-island ferry arrangements as per itinerary",
];

const ON_REQUEST = [
  "Activities like scuba diving, sea walk, snorkelling and semi-submarine",
  "Lunch and dinner",
  "Rental two-wheeler service",
];

const CARRY = ["ID proof", "Driving licence", "Swimming clothes", "Cap and sunglasses", "Regular medicines, if you use any", "Umbrella"];
const BEACH = ["Towel and extra clothes", "Sunscreen", "Waterproof phone pouch", "Light snacks and drinking water"];
/* --------------------------------------- */

export default function FamilyTourPackageAPage() {
  const wa = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
    "Hi Yellow Fin Tours, I'd like details and a quote for the Andaman Family Tour Package (5 nights 6 days).",
  )}`;

  return (
    <div className={`yf-page ${body.className}`} style={{ ["--display" as string]: display.style.fontFamily }}>
      <SiteHeader current="/family-tour-package-a" />

      <main>
        {/* ---------- Title block ---------- */}
        <section className="yf-trip-hero">
          <div className="yf-trip-hero-inner">
            <div>
              <p className="yf-crumbs"><a href="/">Home</a> / Andaman Family Tour Package</p>
              <h1 className="yf-display">{TRIP.title}: {TRIP.length}</h1>
              <p className="yf-trip-lead">
                Create wonderful family memories with Yellow Fin Tours. Explore beautiful beaches, discover island
                attractions and enjoy a relaxing holiday with your loved ones.
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
                <div><dt>Ideal for</dt><dd>Families, parents with children, multigenerational holidays</dd></div>
                <div><dt>Price</dt><dd>On request, based on family size and dates</dd></div>
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
            <h2 className="yf-display">Travelling with your family?</h2>
            <p>Tell us your dates and the number of travellers. We will confirm hotels, ferries and a final price.</p>
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

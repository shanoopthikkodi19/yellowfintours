import type { Metadata } from "next";
import { display, body } from "../fonts";
import { SiteHeader, SiteFooter } from "../components/SiteChrome";
import { BRAND, tel } from "../site-data";

export const metadata: Metadata = {
  title: "Andaman Family Tour Package: 3 Nights 4 Days | Yellow Fin Tours & Travels",
  description:
    "Four-day Andaman family tour covering Port Blair, Havelock, Neil and Baratang, with Ross Island by speedboat, Radhanagar Beach, Limestone Cave and Mud Volcano.",
};

/* ---------- EDIT CONTENT HERE ---------- */
const TRIP = {
  title: "Andaman Family Tour Package",
  length: "3 nights, 4 days",
  route: "Port Blair, Havelock Island, Neil Island, Baratang Island",
};

type Day = { day: number; title: string; stops: string[]; note?: string };

const DAYS: Day[] = [
  {
    day: 1,
    title: "Arrival, Ross Island and Havelock Island",
    stops: [
      "Arrive at Port Blair Airport at approximately 6:50 AM",
      "Airport pickup, hotel check-in, breakfast and refreshments",
      "Visit Marina Park Jetty and take a speedboat excursion to Ross Island",
      "Proceed to Haddo Wharf and board the ferry to Havelock Island",
      "Arrive at approximately 2:00 PM, check in and have lunch",
      "Evening at Radhanagar Beach to relax and enjoy the coastal scenery",
      "Dinner and overnight stay at Havelock",
    ],
  },
  {
    day: 2,
    title: "Explore Neil Island and return to Port Blair",
    stops: [
      "Early morning visit to Kalapathar Beach",
      "Breakfast, then ferry to Neil Island at approximately 9:15 AM",
      "Explore Bharatpur Beach, Laxmanpur Beach and the Natural Bridge",
      "Ferry back to Port Blair at approximately 4:15 PM",
      "Overnight stay at Port Blair",
    ],
  },
  {
    day: 3,
    title: "Baratang Limestone Cave and Mud Volcano",
    stops: [
      "Depart at approximately 7:00 AM for Baratang Island",
      "Speedboat excursion to the Limestone Cave",
      "Return to the jetty for lunch",
      "Continue to the Mud Volcano by four-wheeler",
      "Return to Port Blair for dinner and an overnight stay",
    ],
    note: "The route to Baratang passes through the Jarawa Reserve area and follows the applicable regulations.",
  },
  {
    day: 4,
    title: "Corbyn's Cove Beach and departure",
    stops: [
      "Early morning visit to Corbyn's Cove Beach and Flag Point",
      "Return for breakfast and check out",
      "Transfer to the airport at approximately 10:30 AM",
      "Return home with wonderful memories of your Andaman family holiday",
    ],
  },
];

const HIGHLIGHTS = [
  "Beach sightseeing: Radhanagar, Kalapathar, Bharatpur and Laxmanpur",
  "Island excursion: Ross Island by speedboat",
  "Nature experience: Baratang Limestone Cave",
  "Additional attraction: Mud Volcano",
];

const WHY = [
  "Explore multiple destinations in one trip",
  "Enjoy a mix of beach visits, sightseeing and nature experiences",
  "Discover the famous Limestone Cave and Mud Volcano",
  "Plan a shared holiday for family members with different interests",
];

const CARRY = ["ID proof", "Driving licence", "Swimming clothes", "Cap and sunglasses", "Regular medicines, if you use any", "Umbrella"];
const BEACH = ["Towel and extra clothes", "Sunscreen", "Waterproof phone pouch", "Light snacks and drinking water"];
/* --------------------------------------- */

export default function FamilyTourPackageBPage() {
  const wa = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
    "Hi Yellow Fin Tours, I'd like details and a quote for the Andaman Family Tour Package (3 nights 4 days).",
  )}`;

  return (
    <div className={`yf-page ${body.className}`} style={{ ["--display" as string]: display.style.fontFamily }}>
      <SiteHeader current="/andaman-family-tour-package3-4" />

      <main>
        {/* ---------- Title block ---------- */}
        <section className="yf-trip-hero">
          <div className="yf-trip-hero-inner">
            <div>
              <p className="yf-crumbs"><a href="/">Home</a> / Family Tour Package B</p>
              <h1 className="yf-display">{TRIP.title}: {TRIP.length}</h1>
              <p className="yf-trip-lead">
                Make wonderful family memories with Yellow Fin Tours &amp; Travels. Explore beautiful beaches, discover
                fascinating islands and experience the natural wonders of the Andaman Islands on a short yet exciting holiday.
              </p>
              <div className="yf-hero-actions">
                <a className="yf-btn-primary" href={wa} target="_blank" rel="noopener noreferrer">Get a quote on WhatsApp</a>
                <a className="yf-btn-ghost" href={tel(BRAND.phone)}>Call {BRAND.phone}</a>
              </div>
            </div>
            <ul className="yf-facts">
              <li><strong>4 days</strong><span>3 nights</span></li>
              <li><strong>4 stops</strong><span>Port Blair, Havelock, Neil, Baratang</span></li>
              <li><strong>Cave and volcano</strong><span>Limestone Cave, Mud Volcano</span></li>
            </ul>
          </div>
        </section>

        {/* ---------- Itinerary + sidebar ---------- */}
        <section className="yf-trip">
          <div>
            <h2 className="yf-display yf-h2">Your family holiday itinerary</h2>
            <p>
              This package combines the popular beaches of Havelock and Neil Islands with sightseeing in Port Blair and
              an adventure excursion to Baratang Island.
            </p>
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
                <div><dt>Price</dt><dd>On request, based on travel dates, group size, accommodation and availability</dd></div>
              </dl>
              <a className="yf-btn-primary" href={wa} target="_blank" rel="noopener noreferrer">Enquire on WhatsApp</a>
              <a className="yf-btn-outline" href={tel(BRAND.phone2)}>Call {BRAND.phone2}</a>
            </div>
          </aside>
        </section>

        {/* ---------- Highlights ---------- */}
        <section className="yf-lists">
          <div className="yf-panel">
            <h2 className="yf-display">Package highlights</h2>
            <ul className="yf-tick">{HIGHLIGHTS.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
          <div className="yf-panel">
            <h2 className="yf-display">Why choose this family package?</h2>
            <ul className="yf-tick">{WHY.map((i) => <li key={i}>{i}</li>)}</ul>
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
            <h2 className="yf-display">Plan your family holiday with Yellow Fin Tours</h2>
            <p>
              Contact us with your travel dates, family size and accommodation preferences. We will help you confirm the
              itinerary, hotel options, ferry availability and final package price.
            </p>
          </div>
          <div className="yf-cta-actions">
            <a className="yf-btn-primary" href={wa} target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a>
            <a className="yf-btn-ghost" href={tel(BRAND.phone)}>Call {BRAND.phone}</a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

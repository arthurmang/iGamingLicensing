function showNav(){
    document.querySelector('.hamburger').classList.toggle('open')
    document.querySelector('.mobile-navigation').classList.toggle('active')
}

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      document.querySelector('.mobile-navigation').classList.remove('active')
    });
});

const navbar = document.querySelector(".mobile-nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// THE BELOW IS TO FIX THE CONSOLE ERRORS - NEED TO CHANGE initCheckout
// document.addEventListener("DOMContentLoaded", () => {
//   const page = document.body.dataset.page;

//   if (page === "jurisdictions") {
//     initCheckout(); // your big function
//   }
// });

// On page load, check if ?country= is in the URL
window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const country = params.get("country");

  if (country) {
    updateJurisdiction(decodeURIComponent(country));
  }
});

const jurisdictions = [
  {
    name: "Alderney",
    image: "../img/alderney.png",
    description: "Alderney is one of the longest-standing names in online gambling, often chosen by serious operators for its strong credibility and transparent framework. Its Tier One reputation makes it a trusted choice for partnerships and banking.",
    services: "B2B Certificate (Category 2)",
    regulator: "Alderney Gambling Control Commission (AGCC)",
    overview: "Tier One licence recognised by premium providers, strong reputation, low taxes, mature regulation.",
    fees: "Category 2: £50,000 per annum",
    recommendations: "Good for software providers requiring a Tier One licence for credibility.",
    important: "Only businesses with their own platform/Remote Gaming Server (RGS) can apply.",
    benefits: "Tier One status; no gaming duty, no VAT."
  },
  {
    name: "Anjouan",
    image: "../img/anjouan.png",
    description: "A rapidly growing, cost-effective jurisdiction attracting start-ups and smaller operators.",
    services: "B2B Licence / B2C Licence / Recognition",
    regulator: "Anjouan Offshore Finance Authority",
    overview: "Fast-growing regulator; streamlined process and zero GGR tax.",
    fees: "Indicative government/licence fees: ~€17,000.",
    recommendations: "Ideal for start-ups or smaller operators seeking low-cost entry.",
    important: "Recommended to establish a Cyprus payment agent.",
    benefits: "Affordable; licence obtainable within 6 weeks depending on structure."
  },
  {
    name: "Curaçao",
    image: "../img/curacao.png",
    description: "Historically affordable and accessible, now undergoing regulatory reform for credibility.",
    services: "B2B Licence / B2C Licence",
    regulator: "Curaçao Gaming Control Board (GCB)",
    overview: "New framework (LOK) improves standards and reputation.",
    fees: "Bespoke by operator profile under new regime.",
    recommendations: "Reputable licence, less compliance-heavy than Tier One.",
    important: "B2C businesses must establish a local entity.",
    benefits: "Low tax; improved international standing post-overhaul."
  },
  {
    name: "Isle of Man",
    image: "../img/isleofman.png",
    description: "Tier One heavyweight attracting established operators, suppliers and investors.",
    services: "B2B Licence / B2C Licence / Non-regulated entity",
    regulator: "Isle of Man Gambling Supervision Commission (GSC)",
    overview: "B2B licence is among the strongest; B2C licence offers high credibility.",
    fees: "£5,250 application + £36,750 annual renewal.",
    recommendations: "B2B licence is a must for aggregators; B2C licence offers credibility but higher compliance costs.",
    important: "Local entity and officer/hosting requirements.",
    benefits: "Low-tax jurisdiction; globally recognised Tier One status."
  },
  {
    name: "Kahnawake",
    image: "../img/kahnawake.png",
    description: "A long-standing jurisdiction with international recognition since the 1990s.",
    services: "B2B Licence / B2C Licence",
    regulator: "Kahnawàke Gaming Commission (KGC)",
    overview: "Reputable regulator with a long history in online gambling.",
    fees: "Defined by KGC schedule, assessed at application.",
    recommendations: "B2C licence offers credibility with flexible structures.",
    important: "No local substance requirements for many structures.",
    benefits: "Reputable and flexible; apply from any jurisdiction."
  },
  {
    name: "Malta",
    image: "../img/malta.png",
    description: "Europe’s online gambling hub with EU recognition and global prestige.",
    services: "B2B Licence / B2C Licence / Recognition Notice",
    regulator: "Malta Gaming Authority (MGA)",
    overview: "B2C licence sought after for EU status; B2B valued due to Malta’s dense network of B2C licensees.",
    fees: "€5,000 application fee; €5,000 Recognition Notice per year.",
    recommendations: "B2C: High credibility with strict compliance; B2B: strong choice for scale.",
    important: "Local entity required.",
    benefits: "Low tax, Tier One, EU access via MGA framework."
  },
  {
    name: "Nevis",
    image: "../img/nevis.png",
    description: "An emerging competitor offering fast, Tier One-standard licensing.",
    services: "B2B Licence / B2C Licence",
    regulator: "Nevis Island Administration",
    overview: "New regime offering Tier One-standard licence and fast processing.",
    fees: "€28,000 licence including 2 domains; renewal same; extra domains from €750.",
    recommendations: "Alternative to Tobique.",
    important: "Recommended to establish a Cyprus payment agent.",
    benefits: "Licence obtainable quickly under the new process."
  },
  {
    name: "Ontario (Canada)",
    image: "../img/ontario.png",
    description: "One of the most attractive regulated markets in North America.",
    services: "B2B Licence (Gaming-Related Supplier / Manufacturer)",
    regulator: "Alcohol and Gaming Commission of Ontario (AGCO)",
    overview: "For businesses providing content to Ontario B2C operators.",
    fees: "C$3,000 annual (supplier), C$15,000 annual (manufacturer).",
    important: "Available to non-Canadian companies subject to vetting.",
    benefits: "Stable, competitive market with clear rules."
  },
  {
    name: "Republic of Ireland",
    image: "../img/repofireland.png",
    description: "Popular EU market evolving into a structured regulatory framework.",
    services: "B2B Licence / B2C Licence",
    regulator: "Irish Revenue Commissioners (legacy) / GRAI (new)",
    overview: "Attractive evolving market with strong consumer demand.",
    fees: "Remote Bookmaker/Intermediary: €5,000 initial; renewals turnover-based.",
    important: "Irish company required for licensing.",
    benefits: "Popular EU market with ongoing regulatory modernisation."
  },
  {
    name: "Romania",
    image: "../img/romania.png",
    description: "A rigorous but important EU market, especially for B2B suppliers.",
    services: "B2B Licence (Class II)",
    regulator: "National Gambling Office (ONJN)",
    overview: "Class II licence can be held alongside MGA Recognition Notice.",
    fees: "€20,000 annual licence + €15,000 responsible gaming contribution.",
    important: "All documents must be submitted in Romanian.",
    benefits: "Recognised Tier One EU licence with strong credibility."
  },
  {
    name: "Tobique",
    image: "../img/tobique.png",
    description: "Tobique has positioned itself as a flexible and cost-effective licensing option, attracting operators who want a fast entry point into the online gambling market. Its streamlined process and competitive fees make it a practical alternative for smaller operators and those testing new products.",
    services: "B2B Licence / B2C Licence",
    regulator: "Tobique Gaming Commission",
    overview: "Affordable licences with straightforward requirements.",
    fees: "€20,000–€25,000 initial and renewal, depending on model.",
    recommendations: "Suitable for cost-conscious start-ups.",
    important: "Payment challenges — Cyprus payment agent recommended.",
    benefits: "Competitive costs, fast processing, flexible structuring."
  },
  {
    name: "United Arab Emirates (UAE)",
    image: "../img/uae.png",
    description: "A new market aiming to become the Middle Eastern hub for iGaming.",
    services: "B2B Licence (emerging framework)",
    regulator: "General Commercial Gaming Regulatory Authority (GCGRA)",
    overview: "Federal oversight now formalised; lottery launched; first licences issued.",
    fees: "Framework evolving; categories being defined.",
    benefits: "Early-mover advantage in a strategic market."
  },
  {
    name: "United Kingdom",
    image: "../img/uk.png",
    description: "The gold standard in online gambling regulation with a mature market.",
    services: "B2B Licence (Remote Gambling Software)",
    regulator: "UK Gambling Commission (UKGC)",
    overview: "For businesses providing content to UK-licensed B2C operators.",
    fees: "Application and annual fees scale by GGY; 1.1% levy (2025).",
    important: "Can be obtained by an Isle of Man company (subject to UKGC rules).",
    benefits: "Popular, mature market with high partner trust."
  }
];


// DOM refs
const listItems = document.querySelectorAll("#jurisdiction-list li");
const nameEl = document.getElementById("jurisdiction-name");
const imageEl = document.getElementById("jurisdiction-image");
const descEl = document.getElementById("jurisdiction-description");
const servicesEl = document.getElementById("jurisdiction-services");
const regulatorEl = document.getElementById("jurisdiction-regulator");
const overviewEl = document.getElementById("jurisdiction-overview");
const feesEl = document.getElementById("jurisdiction-fees");
const recommendationsEl = document.getElementById("jurisdiction-recommendations");
const importantEl = document.getElementById("jurisdiction-important");
const benefitsEl = document.getElementById("jurisdiction-benefits");

// Mobile controls
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");

// Update UI
function updateJurisdiction(countryName) {
  const j = jurisdictions.find(x => x.name === countryName);
  if (!j) return;

  nameEl.textContent = j.name;
  imageEl.src = j.image;
  imageEl.alt = j.name;
  descEl.textContent = j.description;
  servicesEl.textContent = j.services;
  regulatorEl.textContent = j.regulator;
  overviewEl.textContent = j.overview;
  feesEl.textContent = j.fees;
  recommendationsEl.textContent = j.recommendations;
  importantEl.textContent = j.important;
  benefitsEl.textContent = j.benefits;

  // Highlight active item
  listItems.forEach(li => li.classList.remove("text-primary", "active"));
  const active = Array.from(listItems).find(li => li.dataset.country === countryName);
  if (active) active.classList.add("text-primary", "active");

  // Close sidebar on mobile after selection
  // if (window.innerWidth < 768) {
  //   sidebar.classList.add("hidden");
  // }
}

// Click handlers
listItems.forEach(li => li.addEventListener("click", () => updateJurisdiction(li.dataset.country)));

document.querySelectorAll(".jur-panel-list a").forEach(link => {
  link.addEventListener("click", e => {

    const country = link.dataset.country;
    updateJurisdiction(country);
  });
});

// Mobile toggle
menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
});

// Load default (matches your screenshot)
updateJurisdiction("Alderney");


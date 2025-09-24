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

const articlePage = document.querySelector('#article');
const newsPage = document.querySelector('#news');

if (articlePage || newsPage) {
  document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', () => {
      const articleId = button.dataset.article;
      // Redirect to the article page with query param
      window.location.href = `article.html?article=${articleId}`;
    });
  });

  const articles = {
    "new-igaming-consultancy-launches": {
      title: "New iGaming consultancy launches to meet rising demand for ‘cost-effective’ licences",
      date: "September 8, 2025",
      content: "<p>iGaming Licensing is a new venture from the team behind successful Isle of Man-based regulatory service provider Global Gaming Solutions, which supports clients in acquiring top-tier licences, including in the UK, Isle of Man and Romania.</p><p>iGaming Licensing will focus on helping emerging operators and software providers which are looking to acquire more affordable licences in jurisdictions such as Anjouan, Nevis and Tobique.</p><p>The new venture is being led by brothers Mark and Tom O’Neill, supported by partners James Lees and Rachel Booth, who between them boast several decades of experience in igaming regulation.</p><p>Mark O’Neill, Managing Partner, said: “Not every operator and software provider needs a top-tier gambling licence, the cost of which is often prohibitive for smaller, emerging companies. However, it’s vital companies still ensure they are compliant and have a strong regulatory framework so they can protect their business and players and build a strong foundation for growth.</p><p>“We’re seeing a significant increase in this mindset and the inspiration for iGaming Licensing - to apply our tier-one experience to supporting emerging businesses in successful, more affordable licence applications.</p><p>“We are committed to offering only those licences we can confidently recommend. To support this, our website features a unique recommendations page.</p><p>“Carefully curated by the licensing team, this resource outlines key benefits of specific licences, helping customers identify the option that best suits their business needs. While acknowledging that every operator has its own priorities, the page provides a clear, expert-led overview designed to simplify decision-making.</p><p>“With a compliance-first ethos, a carefully designed recommendations platform, and a reputation for excellence, the group is positioning itself as the go-to partner for businesses seeking trusted licensing solutions in an increasingly complex regulatory landscape.”</p><p>The iGaming Licensing team will be at SBC Lisbon from September 16 to 18. To arrange a meeting, email info@igaminglicensing.io</p>"
    },
    "igaming-attending-SBC": {
      title: "New iGaming licensing heads to SBC Lisbon",
      date: "September 9, 2025",
      content: "<p>I'm excited to be heading to SBC Summit Lisbon this September with the iGaming Licensing team, where we'll be showcasing how we help operators and software providers secure trusted, cost-effective gambling licences.</p><p>iGaming Licensing is a new venture but it has been a long time in the making. The consultancy was born from our experience at Global Gaming Solutions, which has been supporting clients with tier-one and regulated markets licensing and compliance since 2023. That work gave us first-hand insight into the increasing demand for affordable licensing routes. While some companies require top-tier licences in markets such as the UK, Isle of Man or Romania, for many emerging operators those options are simply out of reach.</p><p>That doesn't mean compliance should be compromised. From day one, our focus has been on helping businesses establish strong regulatory frameworks, no matter the market. By applying tier-one standards and best practice to more cost-effective licences in jurisdictions such as Anjouan, Nevis and Tobique, we enable operators to build a safe, scalable foundation for growth, while protecting both their players and their reputation.</p><p>SBC Summit Lisbon provides the perfect platform to demonstrate this approach. It also gives us the chance to highlight our recommendations page - a new resource on our website that outlines the jurisdictions we believe are best suited to different stages of growth. Carefully curated by our licensing team, this page is designed to simplify decision-making by giving businesses a clear, expert-led overview of their options. While every operator has its own priorities, we're committed to offering only those licences we can confidently recommend.</p><p>Lisbon will give potential clients the chance to meet our leadership team, who collectively bring decades of experience in iGaming regulation. We'll be on hand for one-to-one conversations about market entry strategies, regulatory challenges, and how our trusted connections can help smooth the path to licensing success.</p><p>The demand for accessible yet robust licences is only going to grow, particularly as more businesses enter new markets and as player protection standards continue to rise globally. Embedding tier-one compliance standards from the outset isn't just a best practice, it's essential for long-term sustainability. That's why we've built iGaming Licensing with a compliance-first ethos at its core.</p><p>We believe that by blending practical, affordable licensing routes with the rigour of tier-one standards, we can help ambitious operators scale responsibly and confidently.</p><p>If you'll be at SBC Summit Lisbon from 16 to 18 September, we'd love to connect. Come and meet the team, learn more about our approach, and explore how iGaming Licensing can support your next stage of growth.</p><p>- Mark O'Neill, Managing Partner</p>"
    },
  };

  // Get the article parameter from URL
  const urlParams = new URLSearchParams(window.location.search);
  const articleId = urlParams.get('article');

  // Load the article content
  if (articles[articleId]) {
    document.getElementById('article-title').textContent = articles[articleId].title;
    document.getElementById('article-date').textContent = articles[articleId].date;
    document.getElementById('article-content').innerHTML = articles[articleId].content;
  } else {
    document.getElementById('article-content').textContent = "Article not found.";
  }
}



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
    description: "Alderney is one of the longest-standing names in online gambling, often chosen by operators and software providers for its strong credibility. Its Tier One reputation makes it a trusted choice for partnerships.",
    services: "B2B Certificate (Category 2)",
    regulator: "Alderney Gambling Control Commission (AGCC).",
    fees: "Category 2: £50,000 per annum.",
    recommendations: "Alderney offers a reputable licence for software providers seeking Tier One status.",
    important: "Software providers applying for the B2B Certificate(Category 2) must operate their own platform. For software resellers without aproprietary platform, this licence is not applicable.",
    benefits: "Tier One status; no gaming duty, no VAT (for Alderney-based companies)."
  },
  {
    name: "Anjouan",
    image: "../img/anjouan.png",
    description: "A growing and cost-effective jurisdiction, attracting both start-ups and some of the industry’s largest brands. With more than 1,000 licences issued, Anjouan has established itself as a recognised name in the iGaming sector.",
    services: "B2B Licence / B2C Licence / Recognition Notice",
    regulator: "Anjouan Offshore Finance Authority.",
    fees: "Indicative government/licence fees: ~€17,000.",
    recommendations: "Anjouan is well-suited to businesses seeking a low-cost entry into the iGaming market.",
    important: "Banking and payment solutions can be challenging. A common approach is to establish a payment agent entity within the EU.",
    benefits: "Affordable; licence obtainable within 6 weeks (depending on corporate structure) and no gaming duty."
  },
  {
    name: "Curaçao",
    image: "../img/curacao.png",
    description: "A long-standing and respected iGaming jurisdiction, Curaçao has been a major hub for operators worldwide. Today, it continues to strengthen its position through significant regulatory reforms designed to bring it even closer in line with Tier One standards.",
    services: "B2B Licence / B2C Licence",
    regulator: "Curaçao Gaming Control Board (GCB).",
    fees: "B2C - ~€48,000.00, B2B ~€24,600.00.",
    recommendations: "Curaçao is suitable for businesses that are seeking a reputable licence with comparatively lighter regulatory oversight and less stringent enforcement than Tier One jurisdictions.",
    important: "Under Curaçao’s new regulatory reforms, licence holders face more stringent substance requirements, which in turn increase the overall cost of doing business in the jurisdiction.",
    benefits: "A reputable jurisdiction with low taxation."
  },
  {
    name: "Isle of Man",
    image: "../img/isleofman.png",
    description: "The Isle of Man is a Tier One heavyweight, attracting leading operators and software suppliers. Software suppliers can choose to establish an Isle of Man entity without obtaining a licence, taking advantage of the island’s low taxation, supportive iGaming infrastructure and access to local banking.",
    services: "Software Supplier Licence / Full Licence / Network Licence / Non-regulated Entity",
    regulator: "Isle of Man Gambling Supervision Commission (GSC).",
    fees: "£36,750.00 (Software Supplier and Full), £55,000.00 (Network Licence).",
    recommendations: "The Software Supplier Licence is essential for aggregators, while the Full Licence provides significant credibility and maximises access to banking and payment solutions. For software providers, establishing a non-licensed entity in the Isle of Man can be an attractive option to distribute content without a gaming licence, while benefiting from the island’s 0% corporate tax rate.",
    important: "An Isle of Man entity is required, along with the appointment of two Resident Directors.",
    benefits: "A reputable Tier One jurisdiction offering low taxation, including 0% corporate tax."
  },
  {
    name: "Kahnawake",
    image: "../img/kahnawake.png",
    description: "Kahnawake is a long-standing jurisdiction with international recognition dating back to the 1990s. It offers operators and software providers flexibility, with many businesses attracted by its competitive licensing framework, low annual fees and the absence of local corporate substance requirements, all of which underpin its reputation as a credible jurisdiction.",
    services: "B2B Licence / B2C Licence",
    regulator: "Kahnawake Gaming Commission (KGC).",
    fees: "$40,000.00 (Application Fee), $20,000.00 (B2B/B2C Annual Licence Fee).",
    recommendations: "We recommend establishing your corporate structure in a Tier One jurisdiction to maximise opportunities for banking and payment solutions.",
    important: "No local corporate substance requirements.",
    benefits: "Reputable and flexible; apply from most jurisdictions."
  },
  {
    name: "Malta",
    image: "../img/malta.png",
    description: "Malta is a premier Tier One jurisdiction, attracting established operators and leading software suppliers. As part of the EU, it serves as a hub for European-facing businesses, offering one of the lowest taxation regimes in the European Union, making it a highly attractive place to do business.",
    services: "B2B Licence / B2C Licence / Recognition Notice",
    regulator: "Malta Gaming Authority (MGA).",
    fees: 'MGA Licensing fees can be found <a href="https://www.mga.org.mt/app/uploads/Guidance-Note-Licence-Fees-and-Taxation-1.pdf" target="_blank">here.</a>',
    recommendations: "The B2C licence carries high credibility and is particularly well-suited to operators targeting jurisdictions within the EU. For software suppliers, the B2B licence and recognition notice represent a strong choice, given the large concentration of B2C operators based in Malta.",
    important: "The MGA Recognition Notice may be obtained by EU entities, not solely those established in Malta.",
    benefits: "Low tax, Tier One Jurisdiction and EU access."
  },
  {
    name: "Nevis",
    image: "../img/nevis.png",
    description: "In 2025, Nevis introduced new gaming legislation to establish itself as a reputable jurisdiction within the iGaming sector. With clear ambitions to benchmark against the Isle of Man and Malta, Nevis has positioned itself as an emerging Tier One jurisdiction.",
    services: "B2B Licence / B2C Licence",
    regulator: "Nevis Island Administration.",
    fees: "€28,000.00 (B2B/B2C).",
    recommendations: "While Nevis has positioned itself as a Tier One jurisdiction, it may take time for banks, payment providers and other service providers to familiarise themselves with its AML/CFT requirements. Our recommendation is to establish an entity in a Tier One jurisdiction and apply for the Nevis Gaming Licence to maximise the credibility of the business for banks, payment providers and service providers.",
    important: "Banking and payment solutions are likely to prove challenging following the introduction of the new gaming legislation. We recommend establishing a payment agent within the EU to help mitigate these difficulties.",
    benefits: "A licence can be obtained quickly under the new process."
  },
  {
    name: "Ontario (Canada)",
    image: "../img/ontario.png",
    description: "In 2022, Ontario launched its regulated iGaming market. By 2025, with a population exceeding 16 million, it had become not only Canada’s most populous province but also one of the country’s leading regulated iGaming markets.",
    services: "B2B Licence (Gaming-Related Supplier / Manufacturer)",
    regulator: "Alcohol and Gaming Commission of Ontario (AGCO).",
    fees: "C$3,000.00 annual (supplier), C$15,000.00 annual (manufacturer).",
    recommendations: "Consider applying for an Ontario licence from a tax-efficient reputable jurisdiction.",
    important: "In its third year of regulation (April 2024–March 2025), Ontario’s iGaming market generated CA$3.20 billion in gross gaming revenue (GGR) — a 32% increase on the previous year. It is a market that operators and software providers cannot afford to overlook.",
    benefits: "Access a highly attractive market with strong revenue potential."
  },
  {
    name: "Republic of Ireland",
    image: "../img/repofireland.png",
    description: "The Republic of Ireland has historically regulated online sports betting under the Betting (Amendment) Act 2015, which requires all remote bookmakers to be licensed and taxed by the Irish authorities. However, under the Gambling Regulation Act 2024 (“GRA”), Ireland is moving to establish a unified system that will, for the first time, bring online casino operators into a regulated environment alongside the already licensed sportsbook sector.",
    services: "B2B Licence and B2C Licence (applications under the GRA to be accepted late 2025)",
    regulator: "Gambling Regulatory Authority of Ireland (GRAI).",
    fees: "Proposals have been published, but final fees are yet to be confirmed.",
    recommendations: "Our recommendations will be published following the issuance of licences.",
    important: "Ireland’s gambling revenue is set to hit €2.5 billion in 2025, with online gambling growing fast. Strong demand is evident even before official online casino figures are published.",
    benefits: "Access a highly attractive market with strong revenue potential."
  },
  {
    name: "Romania",
    image: "../img/romania.png",
    description: "Romania operates a fully regulated gambling market under the National Gambling Office (ONJN). The Class II (B2B) licence is available to software providers and serves as a strong foundation for growth, offering the credibility of an EU-issued licence.",
    services: "Class II Licence (B2B)",
    regulator: "National Gambling Office (ONJN).",
    fees: "€20,000.00 annual licence and €15,000.00 responsible gaming contribution.",
    recommendations: "For software providers wishing to supply both Romanian operators and MGA-licensed operators, the Class II (B2B) Licence offers a strong foundation and can be used to obtain an MGA Recognition Notice.",
    important: "All documentation must be submitted to the ONJN in Romanian.",
    benefits: "Recognised as a Tier One licence, with the ability to obtain an MGA Recognition Notice."
  },
  {
    name: "Tobique",
    image: "../img/tobique.png",
    description: "Tobique is a relatively new jurisdiction in the iGaming world, but continues to build a strong presence. Its framework, overseen by the Tobique Gaming Commission, offers licences to both operators and software providers, providing a solid foundation for growth and credibility in international markets.",
    services: "B2B Licence and B2C Licence",
    regulator: "Tobique Gaming Commission.",
    fees: "Application Fee €18,000.00, Annual Licence Fee €18,000.00.",
    recommendations: "We recommend establishing your corporate structure in a Tier One jurisdiction to maximise opportunities for banking and payment solutions.",
    important: "Licensing can typically be completed within six to eight weeks, making it one of the quicker processes for obtaining a licence.",
    benefits: "Tobique is gaining credibility as a recognised licence, offering corporate flexibility and low taxation."
  },
  {
    name: "United Arab Emirates (UAE)",
    image: "../img/uae.png",
    description: "The UAE has taken its first steps into iGaming regulation with the creation of the General Commercial Gaming Regulatory Authority (GCGRA). This new regulator has already begun licensing activity, signalling the emergence of a potentially major online market in the Gulf region.",
    services: "Gaming-Related Vendor Licence, Internet Gaming Licence (coming soon)",
    regulator: "General Commercial Gaming Regulatory Authority (GCGRA).",
    fees: "Determined by GCGRA based on the licence type.",
    recommendations: "With the UAE expected to emerge as a major hub for online gambling, operators and software providers should position themselves early to secure a valuable first-mover advantage. Software providers facing international markets should consider establishing an entity within a UAE free zone.",
    benefits: "Early-mover advantage in a strategic market."
  },
  {
    name: "United Kingdom",
    image: "../img/uk.png",
    description: "The United Kingdom is a mature iGaming mark. With a population of over 67 million, it remains one of the world’s most established and influential regulated iGaming jurisdictions.",
    services: "B2B Licence (Remote Gambling Software)",
    regulator: "United Kingdom Gambling Commission.",
    fees: "Licence fees are calculated on a revenue basis.",
    recommendations: "Consider applying for a UK licence from a tax-efficient reputable jurisdiction.",
    important: "The UK is one of the world’s largest regulated iGaming markets, generating more than £10 billion in annual gross gambling yield (GGY). With its mature framework, high player engagement and global credibility, it is a market that operators and software providers cannot afford to overlook.",
    benefits: "Access a highly attractive market with strong revenue potential."
  }
];


// DOM refs
const listItems = document.querySelectorAll("#jurisdiction-list li");
const nameEl = document.getElementById("jurisdiction-name");
const imageEl = document.getElementById("jurisdiction-image");
const descEl = document.getElementById("jurisdiction-description");
const servicesEl = document.getElementById("jurisdiction-services");
const regulatorEl = document.getElementById("jurisdiction-regulator");
const feesEl = document.getElementById("jurisdiction-fees");
const recommendationsEl = document.getElementById("jurisdiction-recommendations");
const importantEl = document.getElementById("jurisdiction-important");
const benefitsEl = document.getElementById("jurisdiction-benefits");



document.querySelectorAll(".jur-panel-list a").forEach(link => {
  link.addEventListener("click", e => {

    const country = link.dataset.country;
    updateJurisdiction(country);
  });
});

const jurisdictionsPage = document.querySelector('#jurisdictions');

if (jurisdictionsPage) {
  
  // Mobile controls
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");

  // Mobile toggle
  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
  });

  
  // Update UI
  function updateJurisdiction(countryName) {
    const j = jurisdictions.find(x => x.name === countryName);
    if (!j) return;

    nameEl.textContent = j.name;
    imageEl.src = j.image;
    imageEl.alt = j.name;

    // Helper: set content or hide parent if empty
    function setContent(el, content, allowHTML = false) {
      if (content && content.trim() !== "") {
        if (allowHTML) {
          el.innerHTML = content;   // render HTML
        } else {
          el.textContent = content; // safe plain text
        }
        el.parentElement.style.display = ""; // show
      } else {
        el.parentElement.style.display = "none"; // hide block
      }
    }

    setContent(descEl, j.description);
    setContent(servicesEl, j.services);
    setContent(regulatorEl, j.regulator);
    setContent(feesEl, j.fees, true); 
    setContent(recommendationsEl, j.recommendations);
    setContent(importantEl, j.important);
    setContent(benefitsEl, j.benefits);

    // Highlight active item
    listItems.forEach(li => li.classList.remove("text-primary", "active"));
    const active = Array.from(listItems).find(li => li.dataset.country === countryName);
    if (active) active.classList.add("text-primary", "active");
  }

  // Click handlers
  listItems.forEach(li => li.addEventListener("click", () => updateJurisdiction(li.dataset.country)));

  // Load default (matches your screenshot)
  updateJurisdiction("Alderney");


}


document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    // collect form values
    const params = {
      name: document.getElementById("contact-name").value,
      email: document.getElementById("contact-email").value,
      jurisdiction: document.getElementById("jurisdiction-select").value,
      information: document.getElementById("contact-msg").value,
    };

    emailjs.send("service_3b74qjm", "template_hj6h9ul", params)
      .then(function(response) {
        alert("✅ Message sent successfully!");
        form.reset();
      }, function(error) {
        alert("❌ Failed to send message. Please try again.");
        console.error("EmailJS Error:", error);
      });
  });
});

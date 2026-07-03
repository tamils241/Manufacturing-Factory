const products = [
  ["Industrial Machines", "Heavy-duty machines for repeatable production lines.", "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=80", ["PLC", "Automation", "High output"]],
  ["Automotive Parts", "Precision machined and assembled components for OEM programs.", "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=80", ["IATF-ready", "Traceable", "Durable"]],
  ["Electrical Panels", "Safe, tested control panels and distribution systems.", "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80", ["Wired", "Tested", "Documented"]],
  ["Steel Components", "Fabricated steel parts with cutting, welding, and finishing.", "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80", ["Laser cut", "Welded", "Coated"]],
  ["Plastic Injection Parts", "Molded plastic parts with tight tolerance and stable supply.", "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80", ["Tooling", "Molding", "QC"]],
  ["CNC Products", "Milled and turned CNC products for advanced assemblies.", "https://images.unsplash.com/photo-1605902711622-cfb43c4437d4?auto=format&fit=crop&w=900&q=80", ["3-axis", "5-axis", "CMM"]],
  ["Hydraulic Equipment", "Hydraulic systems, manifolds, and tested assemblies.", "https://images.unsplash.com/photo-1581092919535-7146ff1a590b?auto=format&fit=crop&w=900&q=80", ["Pressure tested", "Sealed", "Reliable"]],
  ["Robotics Systems", "Robotic cells for handling, welding, and packaging.", "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?auto=format&fit=crop&w=900&q=80", ["Robots", "Vision", "Safety"]]
];

const industries = [
  ["Automotive", "fa-car", "Tier-ready manufacturing for mobility programs."],
  ["Aerospace", "fa-plane", "Precision parts for regulated aerospace supply chains."],
  ["Construction", "fa-helmet-safety", "Rugged components for jobsite equipment."],
  ["Medical", "fa-stethoscope", "Clean, documented production for device makers."],
  ["Electronics", "fa-microchip", "Panels, enclosures, and precision assemblies."],
  ["Food", "fa-wheat-awn", "Hygienic parts and stainless production systems."],
  ["Textile", "fa-shirt", "Machine parts and automation for textile lines."],
  ["Oil & Gas", "fa-oil-well", "Durable equipment for demanding energy operations."]
];

const capabilities = [
  ["CNC Machining", 96],
  ["Laser Cutting", 92],
  ["Welding", 90],
  ["Fabrication", 94],
  ["Assembly", 88],
  ["Quality Testing", 98],
  ["Packaging", 86]
];

const why = [
  ["High Quality", "fa-award"], ["Experienced Team", "fa-users-gear"], ["Fast Delivery", "fa-truck-fast"], ["Affordable Price", "fa-tags"],
  ["Modern Technology", "fa-robot"], ["Customer Support", "fa-headset"], ["Eco-Friendly Manufacturing", "fa-leaf"], ["Global Shipping", "fa-earth-americas"]
];

const gallery = [
  ["factory", "Factory", "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=900&q=80"],
  ["machines", "Machines", "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=900&q=80"],
  ["products", "Products", "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80"],
  ["warehouse", "Warehouse", "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80"],
  ["workers", "Workers", "https://images.unsplash.com/photo-1581091215367-59ab6c189c0b?auto=format&fit=crop&w=900&q=80"],
  ["factory", "Production", "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=80"],
  ["machines", "CNC Cell", "https://images.unsplash.com/photo-1605902711622-cfb43c4437d4?auto=format&fit=crop&w=900&q=80"],
  ["warehouse", "Logistics", "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=900&q=80"]
];

const faqs = [
  ["What is your manufacturing capacity?", "Stackly supports prototype, pilot, and high-volume production with 150 machines and flexible assembly cells."],
  ["What is your delivery time?", "Lead times depend on product complexity, but standard production programs typically ship within 2 to 6 weeks after approval."],
  ["Which countries do you export to?", "We export to 35 countries across North America, Europe, the Middle East, and Asia-Pacific."],
  ["Which certifications do you hold?", "Our systems include ISO 9001, ISO 14001, ISO 45001, CE, RoHS, and GMP-aligned practices."],
  ["Do products include warranty?", "Yes. Warranty terms are defined by product class, specification, and application environment."],
  ["What is your MOQ?", "MOQ varies by product and tooling requirements. Our sales engineers can quote both pilot and production quantities."]
];

function productCard([title, copy, image, features], index = 0) {
  return `<article class="product-card" style="animation-delay:${index * 0.1}s"><div class="product-card-inner"><img loading="lazy" src="${image}" alt="${title}"><div><h3>${title}</h3><p>${copy}</p><div class="feature-list">${features.map(item => `<span>${item}</span>`).join("")}</div><div class="link-row"><a href="#contact">View Details</a><a href="#contact">Download Brochure</a></div></div></div></article>`;
}

function slugify(value) {
  return value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function iconCard([title, icon, copy = "Reliable production support with certified process control."], index = 0) {
  return `<article class="icon-card" id="${slugify(title)}" style="animation-delay:${index * 0.08}s"><i class="fa-solid ${icon}"></i><h3>${title}</h3><p>${copy}</p></article>`;
}

function addNavLists(nav) {
  if (!nav || nav.dataset.listsReady) return;

  const listMenus = {
    "industries.html": [
      ["Automotive", "fa-car", "industries.html#automotive"],
      ["Aerospace", "fa-plane", "industries.html#aerospace"],
      ["Medical", "fa-stethoscope", "industries.html#medical"],
      ["Oil & Gas", "fa-oil-well", "industries.html#oil-and-gas"]
    ],
    "factory.html": [
      ["3D Factory", "fa-cube", "factory.html#factoryCanvas"],
      ["Machines", "fa-gears", "factory.html#machineSlides"],
      ["Factory Audit", "fa-clipboard-check", "contact.html"],
      ["Request Tour", "fa-calendar-check", "contact.html"]
    ],
    "gallery.html": [
      ["Factory", "fa-industry", "gallery.html#galleryGrid"],
      ["Machines", "fa-screwdriver-wrench", "gallery.html#galleryGrid"],
      ["Products", "fa-boxes-stacked", "gallery.html#galleryGrid"],
      ["Warehouse", "fa-warehouse", "gallery.html#galleryGrid"]
    ],
    "blog.html": [
      ["New Machines", "fa-robot", "blog.html#newsGrid"],
      ["Factory Expansion", "fa-building", "blog.html#newsGrid"],
      ["Awards", "fa-award", "blog.html#newsGrid"],
      ["Product Launches", "fa-bullhorn", "blog.html#newsGrid"]
    ],
    "careers.html": [
      ["Production Engineer", "fa-gears", "careers.html#open-roles"],
      ["Quality Specialist", "fa-clipboard-check", "careers.html#open-roles"],
      ["Maintenance Technician", "fa-screwdriver-wrench", "careers.html#open-roles"],
      ["Logistics Coordinator", "fa-truck-ramp-box", "careers.html#open-roles"]
    ]
  };

  Object.entries(listMenus).forEach(([href, items]) => {
    const link = [...nav.querySelectorAll(`a[href="${href}"]`)].find(item => item.parentElement === nav);
    if (!link) return;

    const wrapper = document.createElement("div");
    wrapper.className = "nav-item";
    const parentLink = link.cloneNode(true);
    parentLink.className = "nav-link";
    parentLink.innerHTML = `${link.textContent} <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>`;

    const menu = document.createElement("div");
    menu.className = "nav-list";
    menu.setAttribute("role", "list");
    menu.innerHTML = items.map(([label, icon, itemHref]) => `<a href="${itemHref}" role="listitem"><i class="fa-solid ${icon}"></i><span>${label}</span></a>`).join("");

    wrapper.append(parentLink, menu);
    link.replaceWith(wrapper);
  });

  nav.dataset.listsReady = "true";
}

document.addEventListener("DOMContentLoaded", () => {
  const productGrid = document.getElementById("productGrid");
  const industryGrid = document.getElementById("industryGrid");
  const whyGrid = document.getElementById("whyGrid");
  const progressList = document.getElementById("progressList");
  const galleryGrid = document.getElementById("galleryGrid");
  const faqList = document.getElementById("faqList");
  const newsGrid = document.getElementById("newsGrid");

  if (productGrid) productGrid.innerHTML = products.map(productCard).join("");
  if (industryGrid) industryGrid.innerHTML = industries.map(iconCard).join("");
  if (whyGrid) whyGrid.innerHTML = why.map(iconCard).join("");
  if (progressList) progressList.innerHTML = capabilities.map(([name, value]) => `<div class="progress-item"><div class="progress-meta"><span>${name}</span><span>${value}%</span></div><div class="progress-bar"><span data-width="${value}%"></span></div></div>`).join("");
  if (galleryGrid) galleryGrid.innerHTML = gallery.map(([cat, title, src]) => `<button class="gallery-item" data-category="${cat}" data-src="${src}"><img loading="lazy" src="${src}" alt="${title}"><span>${title}</span></button>`).join("");
  if (faqList) faqList.innerHTML = faqs.map(([q, a]) => `<div class="accordion-item"><button class="accordion-button" type="button">${q}<i class="fa-solid fa-chevron-down"></i></button><div class="accordion-content">${a}</div></div>`).join("");
  if (newsGrid) newsGrid.innerHTML = [
    ["New Robotic Welding Cells Installed", "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?auto=format&fit=crop&w=900&q=80"],
    ["Factory Expansion Opens New Assembly Hall", "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80"],
    ["Stackly Wins Supplier Quality Award", "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80"],
    ["Hydraulic Product Line Launches", "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80"]
  ].map(([title, image]) => `<article class="news-card" data-aos="fade-up"><img loading="lazy" src="${image}" alt="${title}"><div><h3>${title}</h3><p>Latest operational progress from Stackly's production teams.</p></div></article>`).join("");

  const header = document.getElementById("header");
  const nav = document.getElementById("nav");
  const menuToggle = document.getElementById("menuToggle");
  const backTop = document.getElementById("backTop");

  addNavLists(nav);

  menuToggle?.addEventListener("click", () => nav?.classList.toggle("open"));
  nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));

  window.addEventListener("scroll", () => {
    header?.classList.toggle("scrolled", window.scrollY > 40);
    backTop?.classList.toggle("visible", window.scrollY > 600);
  });

  backTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  document.querySelectorAll(".accordion-button").forEach(button => {
    button.addEventListener("click", () => button.parentElement.classList.toggle("open"));
  });

  document.getElementById("galleryFilters")?.addEventListener("click", event => {
    if (!event.target.matches("button")) return;
    document.querySelectorAll("#galleryFilters button").forEach(button => button.classList.remove("active"));
    event.target.classList.add("active");
    const filter = event.target.dataset.filter;
    document.querySelectorAll(".gallery-item").forEach(item => {
      item.style.display = filter === "all" || item.dataset.category === filter ? "block" : "none";
    });
  });

  const lightbox = document.getElementById("lightbox");
  const lightboxImage = lightbox?.querySelector("img");
  document.getElementById("galleryGrid")?.addEventListener("click", event => {
    const item = event.target.closest(".gallery-item");
    if (!item) return;
    if (lightboxImage) {
      lightboxImage.src = item.dataset.src;
      lightboxImage.alt = item.querySelector("img").alt;
    }
    lightbox?.classList.add("open");
  });
  document.getElementById("closeLightbox")?.addEventListener("click", () => lightbox?.classList.remove("open"));
  lightbox?.addEventListener("click", event => {
    if (event.target === lightbox) lightbox.classList.remove("open");
  });

  document.querySelectorAll(".ripple").forEach(button => {
    button.addEventListener("click", event => {
      const circle = document.createElement("span");
      const rect = button.getBoundingClientRect();
      circle.className = "ripple-circle";
      circle.style.left = `${event.clientX - rect.left}px`;
      circle.style.top = `${event.clientY - rect.top}px`;
      button.appendChild(circle);
      setTimeout(() => circle.remove(), 700);
    });
  });

  document.getElementById("playVideo")?.addEventListener("click", () => {
    window.open("https://www.youtube.com/results?search_query=manufacturing+factory+tour", "_blank", "noopener");
  });

  const heroSlides = document.querySelectorAll("#heroBg .hero-slide");
  if (heroSlides.length) {
    let current = 0;
    setInterval(() => {
      heroSlides[current].classList.remove("active");
      current = (current + 1) % heroSlides.length;
      heroSlides[current].classList.add("active");
    }, 5000);
  }
});

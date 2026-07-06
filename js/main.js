const products = [
  ["Industrial Machines", "Heavy-duty machines for repeatable production lines.", "images/c6.webp", ["PLC", "Automation", "High output"]],
  ["Automotive Parts", "Precision machined and assembled components for OEM programs.", "images/c7.webp", ["IATF-ready", "Traceable", "Durable"]],
  ["Electrical Panels", "Safe, tested control panels and distribution systems.", "images/c8.webp", ["Wired", "Tested", "Documented"]],
  ["Steel Components", "Fabricated steel parts with cutting, welding, and finishing.", "images/c9.webp", ["Laser cut", "Welded", "Coated"]],
  ["Plastic Injection Parts", "Molded plastic parts with tight tolerance and stable supply.", "images/10.webp", ["Tooling", "Molding", "QC"]],
  ["CNC Products", "Milled and turned CNC products for advanced assemblies.", "images/12.webp", ["3-axis", "5-axis", "CMM"]],
  ["Hydraulic Equipment", "Hydraulic systems, manifolds, and tested assemblies.", "images/c11.webp", ["Pressure tested", "Sealed", "Reliable"]],
  ["Robotics Systems", "Robotic cells for handling, welding, and packaging.", "images/bg3.webp", ["Robots", "Vision", "Safety"]]
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
  ["factory", "Factory", "images/factory.webp"],
  ["machines", "Machines", "images/machines.webp"],
  ["products", "Products", "images/products.webp"],
  ["warehouse", "Warehouse", "images/warehouse.webp"],
  ["workers", "Workers", "images/workers.webp"],
  ["factory", "Production", "images/production.webp"],
  ["machines", "CNC Cell", "images/cnc-cell.webp"],
  ["warehouse", "Logistics", "images/logistics.webp"]
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
  return `<article class="product-card" style="animation-delay:${index * 0.1}s"><div class="product-card-inner"><img loading="lazy" src="${image}" alt="${title}"><div><h3>${title}</h3><p>${copy}</p><div class="feature-list">${features.map(item => `<span>${item}</span>`).join("")}</div><div class="link-row"><a href="products.html">View Details</a><a href="contact.html">Download Brochure</a></div></div></div></article>`;
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
    ["New Robotic Welding Cells Installed", "images/New Robotic Welding Cells Installed.webp"],
    ["Factory Expansion Opens New Assembly Hall", "images/Factory Expansion Opens New Assembly Hall.webp"],
    ["Stackly Wins Supplier Quality Award", "images/Stackly Wins Supplier Quality Award.webp"],
    ["Hydraulic Product Line Launches", "images/Hydraulic.webp"]
  ].map(([title, image]) => `<article class="news-card" data-aos="fade-up"><div class="news-card-inner"><img loading="lazy" src="${image}" alt="${title}"><div><h3>${title}</h3><p>Latest operational progress from Stackly's production teams.</p></div></div></article>`).join("");

  const header = document.getElementById("header");
  const nav = document.getElementById("nav");
  const menuToggle = document.getElementById("menuToggle");
  const backTop = document.getElementById("backTop");

  addNavLists(nav);

  const closeMenu = document.getElementById("closeMenu");
  const overlay = document.getElementById("menuOverlay");

  if (menuToggle) {
    menuToggle.onclick = function () {
      nav.classList.add("open");
      overlay.classList.add("show");
      document.body.style.overflow = "hidden";
    };
  }

  if (closeMenu) {
    closeMenu.onclick = function () {
      nav.classList.remove("open");
      overlay.classList.remove("show");
      document.body.style.overflow = "";
    };
  }

  if (overlay) {
    overlay.onclick = function () {
      nav.classList.remove("open");
      overlay.classList.remove("show");
      document.body.style.overflow = "";
    };
  }

  if (nav) {
    nav.querySelectorAll("a").forEach(function (link) {
      link.onclick = function () {
        nav.classList.remove("open");
        overlay?.classList.remove("show");
        document.body.style.overflow = "";
      };
    });
  }

  const pageToggle = document.querySelector(".page-toggle");
  if (pageToggle) {
    pageToggle.onclick = function () {
      this.parentElement.classList.toggle("active");
    };
  }

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

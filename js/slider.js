document.addEventListener("DOMContentLoaded", () => {
  const machines = [
    ["CNC Machine", "5-axis precision milling, 24/7 cell readiness.", "images/c6.webp"],
    ["Milling Machine", "High-rigidity milling for complex metal parts.", "images/milling-machine.webp"],
    ["Lathe Machine", "Precision turning for shafts and round components.", "images/lathe-machine.webp"],
    ["Laser Cutting", "Fast flat-sheet cutting with clean edge quality.", "images/laser-cutting.webp"],
    ["Press Machine", "Repeatable forming for structural components.", "images/press-machine.webp"],
    ["Welding Robot", "Programmed weld cells with safety enclosure.", "images/bg3.webp"],
    ["Injection Molding", "Production molding with inspection sampling.", "images/injection-molding.webp"],
    ["Packaging Machine", "Automated labeling, packing, and pallet flow.", "images/packing-machine.webp"]
  ];

  const machineSlides = document.getElementById("machineSlides");
  const testimonialSlides = document.getElementById("testimonialSlides");

  if (machineSlides) machineSlides.innerHTML = machines.map(([title, copy, image]) => `
    <div class="swiper-slide"><article class="machine-card"><div class="machine-card-inner"><img loading="lazy" src="${image}" alt="${title}"><div><h3>${title}</h3><p>${copy}</p><strong>Capacity: 2,000+ cycles/day</strong></div></div></article></div>
  `).join("");

  if (testimonialSlides) testimonialSlides.innerHTML = [
    ["Priya Shah", "AeroAxis, India", "Stackly delivered consistent tolerances and excellent documentation through our ramp-up.", "images/team/1.webp"],
    ["Mark Jensen", "AutoNova, USA", "Their engineering response time and production reliability made supplier onboarding painless.", "images/team/2.webp"],
    ["Elena Rossi", "BuildCore, Italy", "The team handled complex fabrication with clean communication and dependable delivery.", "images/team/3.webp"]
  ].map(([name, company, quote, image]) => `
    <div class="swiper-slide"><article class="testimonial-card"><div class="stars">★★★★★</div><p>${quote}</p><div class="client-meta"><img loading="lazy" src="${image}" alt="${name}"><div><strong>${name}</strong><br><span>${company}</span></div></div></article></div>
  `).join("");

  if (!window.Swiper) return;

  if (document.querySelector(".machineSwiper")) new Swiper(".machineSwiper", {
    effect: "coverflow",
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    autoplay: { delay: 2400 },
    pagination: { el: ".machineSwiper .swiper-pagination", clickable: true },
    coverflowEffect: { rotate: 40, stretch: 0, depth: 120, modifier: 1, slideShadows: true },
    breakpoints: { 700: { slidesPerView: 2 }, 1100: { slidesPerView: 4 } }
  });

  if (document.querySelector(".testimonialSwiper")) new Swiper(".testimonialSwiper", {
    slidesPerView: 1,
    spaceBetween: 18,
    loop: true,
    autoplay: { delay: 3500 },
    pagination: { el: ".testimonialSwiper .swiper-pagination", clickable: true },
    breakpoints: { 800: { slidesPerView: 2 }, 1150: { slidesPerView: 3 } }
  });
});

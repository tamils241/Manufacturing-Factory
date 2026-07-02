document.addEventListener("DOMContentLoaded", () => {
  const machines = [
    ["CNC Machine", "5-axis precision milling, 24/7 cell readiness.", "https://images.unsplash.com/photo-1605902711622-cfb43c4437d4?auto=format&fit=crop&w=900&q=80"],
    ["Milling Machine", "High-rigidity milling for complex metal parts.", "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80"],
    ["Lathe Machine", "Precision turning for shafts and round components.", "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80"],
    ["Laser Cutting", "Fast flat-sheet cutting with clean edge quality.", "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80"],
    ["Press Machine", "Repeatable forming for structural components.", "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=80"],
    ["Welding Robot", "Programmed weld cells with safety enclosure.", "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?auto=format&fit=crop&w=900&q=80"],
    ["Injection Molding", "Production molding with inspection sampling.", "https://images.unsplash.com/photo-1581091215367-59ab6c189c0b?auto=format&fit=crop&w=900&q=80"],
    ["Packaging Machine", "Automated labeling, packing, and pallet flow.", "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80"]
  ];

  const machineSlides = document.getElementById("machineSlides");
  const testimonialSlides = document.getElementById("testimonialSlides");

  if (machineSlides) machineSlides.innerHTML = machines.map(([title, copy, image]) => `
    <div class="swiper-slide"><article class="machine-card"><img loading="lazy" src="${image}" alt="${title}"><div><h3>${title}</h3><p>${copy}</p><strong>Capacity: 2,000+ cycles/day</strong></div></article></div>
  `).join("");

  if (testimonialSlides) testimonialSlides.innerHTML = [
    ["Priya Shah", "AeroAxis, India", "Stackly delivered consistent tolerances and excellent documentation through our ramp-up.", "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"],
    ["Mark Jensen", "AutoNova, USA", "Their engineering response time and production reliability made supplier onboarding painless.", "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"],
    ["Elena Rossi", "BuildCore, Italy", "The team handled complex fabrication with clean communication and dependable delivery.", "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"]
  ].map(([name, company, quote, image]) => `
    <div class="swiper-slide"><article class="testimonial-card"><div class="stars">★★★★★</div><p>${quote}</p><div class="client-meta"><img loading="lazy" src="${image}" alt="${name}"><div><strong>${name}</strong><br><span>${company}</span></div></div></article></div>
  `).join("");

  if (!window.Swiper) return;

  if (document.querySelector(".machineSwiper")) new Swiper(".machineSwiper", {
    slidesPerView: 1,
    spaceBetween: 18,
    loop: true,
    autoplay: { delay: 2400 },
    pagination: { el: ".machineSwiper .swiper-pagination", clickable: true },
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

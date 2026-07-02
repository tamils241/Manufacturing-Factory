document.addEventListener("DOMContentLoaded", () => {
  if (window.AOS) {
    AOS.init({ duration: 760, once: true, offset: 90 });
  }

  if (!window.gsap) {
    document.querySelector(".page-loader")?.remove();
    return;
  }

  if (window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  gsap.to(".page-loader", {
    opacity: 0,
    delay: 0.45,
    duration: 0.55,
    pointerEvents: "none",
    onComplete: () => document.querySelector(".page-loader")?.remove()
  });

  gsap.from(".hero-content > *", {
    y: 36,
    opacity: 0,
    duration: 0.8,
    stagger: 0.12,
    delay: 0.35,
    ease: "power3.out"
  });

  gsap.to(".particles", {
    yPercent: 12,
    scrollTrigger: window.ScrollTrigger ? { trigger: ".hero", scrub: true } : undefined
  });

  document.querySelectorAll(".counter").forEach(counter => {
    const target = Number(counter.dataset.target);
    gsap.to(counter, {
      innerText: target,
      duration: 1.8,
      snap: { innerText: 1 },
      scrollTrigger: window.ScrollTrigger ? { trigger: counter, start: "top 85%" } : undefined,
      onUpdate: () => counter.textContent = `${Math.ceil(counter.innerText)}${target === 20 ? "+" : ""}`
    });
  });

  document.querySelectorAll(".progress-bar span").forEach(bar => {
    gsap.to(bar, {
      width: bar.dataset.width,
      duration: 1.4,
      ease: "power2.out",
      scrollTrigger: window.ScrollTrigger ? { trigger: bar, start: "top 88%" } : undefined
    });
  });
});

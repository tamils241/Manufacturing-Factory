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

  if (document.querySelector(".hero-content")) gsap.from(".hero-content > *:not(h1)", {
    y: 36,
    opacity: 0,
    duration: 0.8,
    stagger: 0.12,
    delay: 0.35,
    ease: "power3.out"
  });

  document.querySelectorAll(".hero-content h1, .page-hero h1").forEach(h1 => {
    if (h1.dataset.animated3d) return;
    h1.dataset.animated3d = "true";
    const lines = h1.innerHTML.split(/<br\s*\/?>/i);
    h1.innerHTML = lines.map(line => {
      const words = line.trim().split(/\s+/);
      return words.map(word => `<span class="hero-word"><span>${word}</span></span>`).join(" ");
    }).join("<br>");
    gsap.from(h1.querySelectorAll(".hero-word > span"), {
      opacity: 0,
      rotationY: -90,
      x: -40,
      duration: 1.2,
      stagger: 0.06,
      ease: "power4.out",
      delay: 0.5
    });
  });

  if (document.querySelector(".particles")) gsap.to(".particles", {
    yPercent: 12,
    scrollTrigger: window.ScrollTrigger ? { trigger: ".hero", scrub: true } : undefined
  });

  document.querySelectorAll(".section-heading").forEach(heading => {
    if (heading.dataset.headingAnimated) return;
    heading.dataset.headingAnimated = "true";
    const children = [...heading.children];
    if (!children.length) return;
    gsap.from(children, {
      y: 40,
      opacity: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: window.ScrollTrigger ? { trigger: heading, start: "top 85%" } : undefined
    });
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

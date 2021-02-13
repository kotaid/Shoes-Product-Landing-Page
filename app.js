const tl = gsap.timeline();

tl.from("img", { y: -100, opacity: 0, duration: 3, ease: "back" })
  .from(".content >*", { x: 100, opacity: 0, duration: 1.5, stagger: 0.4 }, "<")
  .to("img", { y: -10, duration: 1.5, yoyo: true, ease: "back", repeat: "-1" });
const img = document.querySelector("img");
img.addEventListener("mousemove", () => {
  gsap.to("img", { scale: 1.1, duration: 0.3 });
});
img.addEventListener("mouseleave", () => {
  gsap.to("img", { scale: 1, duration: 0.3 });
});

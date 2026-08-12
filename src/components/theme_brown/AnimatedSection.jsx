import { useEffect, useRef } from "react";

export default function AnimatedSection({
  children,
  delay = 0,
  type = "slideUp", // bisa: slideUp, slideDown, slideLeft, slideRight
}) {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.animationDelay = `${delay}s`;
            el.classList.add(`animate-${type}`);
            observer.unobserve(el); // biar animasi hanya sekali
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, type]);

  return (
    <div ref={ref} className="opacity-0">
      {children}
    </div>
  );
}

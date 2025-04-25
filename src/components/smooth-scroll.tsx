"use client";

import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    const sections = ["home", "features", "testimonial", "faq"];
    sections.forEach((id) => {
      const section = document.querySelector(`section[data-section="${id}"]`);
      if (section && !document.getElementById(id)) {
        section.id = id;
      }
    });

    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return null;
}

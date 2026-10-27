"use client";

import { useEffect, useLayoutEffect } from "react";

// Back/forward navigations keep the browser's own scroll restoration.
let fromHistory = false;
let firstLoad = true;
if (typeof window !== "undefined") {
  window.addEventListener("popstate", () => {
    fromHistory = true;
  });
}

// Mounted per route by app/template.js. Every page opened from a link starts
// at the very top (links with a #section still jump to that section), and a
// link to the page already open scrolls back to its top.
export default function ScrollReset() {
  useLayoutEffect(() => {
    const skip = firstLoad || fromHistory || window.location.hash;
    firstLoad = false;
    fromHistory = false;
    if (!skip) window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    const onClick = (e) => {
      // Next.js Link always prevents the default, so that is not checked here.
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest("a[href]");
      if (!a || a.target === "_blank") return;
      const url = new URL(a.href, window.location.href);
      if (url.origin === window.location.origin && url.pathname === window.location.pathname && !url.hash) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}

"use client";

import { useEffect, useRef } from "react";
import mermaid from "mermaid";

let isMermaidInitialized = false;

export default function Mermaid({ chart }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!chart || !ref.current) return;

    let isActive = true;

    // ✅ Initialize only once
    if (!isMermaidInitialized) {
      mermaid.initialize({
        startOnLoad: false,
        theme: "dark",
        flowchart: {
          wrappingWidth: 800,
          useMaxWidth: false,
        },
      });
      isMermaidInitialized = true;
    }

    const renderDiagram = async () => {
      try {
        // ✅ Normalize chart (fixes \n issues)
        const normalizedChart = chart.replace(/\\n/g, "\n").trim();

        // ✅ Ensure DOM is ready
        await new Promise((r) => requestAnimationFrame(r));

        if (!ref.current) return;

        ref.current.innerHTML = "";

        const id = "mermaid-" + Math.random().toString(36).slice(2);

        const { svg } = await mermaid.render(id, normalizedChart);

        if (isActive && ref.current) {
          ref.current.innerHTML = svg;
        }
      } catch (e) {
        console.error("Mermaid render error:", e);
      }
    };

    renderDiagram();

    return () => {
      isActive = false;
    };
  }, [chart]);

  return (
    <div className="not-prose my-12 flex justify-center w-full overflow-x-auto">
      <div className="min-w-[700px]" ref={ref} />
    </div>
  );
}
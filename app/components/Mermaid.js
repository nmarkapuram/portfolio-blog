"use client";

import { useEffect, useRef } from "react";
import mermaid from "mermaid";

export default function Mermaid({ chart }) {
  const ref = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const renderDiagram = async () => {
      if (!ref.current) return;

      try {
        mermaid.initialize({
          startOnLoad: false,
          theme: "dark",
          flowchart:{
            wrappingWidth: 800,
            useMaxWidth: false
          }
        });

        // 🛑 Important: clear safely
        ref.current.innerHTML = "";

        // 🛑 Generate unique id
        const id = "mermaid-" + Math.random().toString(36).slice(2);

        const { svg } = await mermaid.render(id, chart);

        if (isMounted && ref.current) {
          ref.current.innerHTML = svg;
        }
      } catch (e) {
        console.error("Mermaid render error:", e);
      }
    };

    // 🛑 Delay ensures DOM is stable
    const timeout = setTimeout(renderDiagram, 0);

    return () => {
      isMounted = false;
      clearTimeout(timeout);
    };
  }, [chart]);

  return (
    <div className="not-prose my-12 flex justify-center">
      <div ref={ref} />
    </div>
  );
}
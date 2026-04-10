export async function fetchData() {
  // Works in Edge runtime (no Node-only APIs).
  await new Promise((r) => setTimeout(r, 700));

  return {
    message: "Hello from a Server Component (streamed).",
    generatedAt: new Date().toISOString(),
  };
}


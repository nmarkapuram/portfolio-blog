const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    // Pass plugin names as strings to ensure they are serializable for Turbopack
    remarkPlugins: ["remark-gfm", "remark-slug"], 
    rehypePlugins: [
      ["rehype-autolink-headings", { behavior: "wrap" }],
    ],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

module.exports = withMDX(nextConfig);
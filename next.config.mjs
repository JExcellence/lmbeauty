import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */

const nextConfig = {
  eslint: {
    dirs: [],
  },

  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

export default withMDX(nextConfig);

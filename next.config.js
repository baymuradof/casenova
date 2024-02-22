import path from "path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "src")],
  },
  webpack: (config) => {
    config.resolve.alias["@"] = path.join(__dirname, "src", "app");
    return config;
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/main",
      },
    ];
  },
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  outputFileTracingIncludes: {
    "/api/catalog-request": ["./catalogs/*.pdf"],
  },
};

export default nextConfig;

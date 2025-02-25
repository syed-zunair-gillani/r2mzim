import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  "rules": {
    "@typescript-eslint/no-unused-vars": ["off"],
    "react/no-unescaped-entities": 0
  }
};

export default nextConfig;

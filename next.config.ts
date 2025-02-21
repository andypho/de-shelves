import type { NextConfig } from "next";
import CopyPlugin from "copy-webpack-plugin";

const nextConfig: NextConfig = {
  webpack: (config) => {
    const stackPlugin = [
      new CopyPlugin({
        patterns: [
          {
            from: "node_modules/gridstack/dist/gridstack-all.js",
            to: "static/gridstack-all.js",
          },
          {
            from: "node_modules/gridstack/dist/gridstack.min.css",
            to: "static/gridstack.min.css",
          }
        ]
      }
    )];

    config.plugins.push(...stackPlugin);

    return config;
  }
};

export default nextConfig;

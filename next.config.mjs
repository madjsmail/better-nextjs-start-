// import type { NextConfig } from "next";

import createJiti from "jiti";
import { fileURLToPath } from "node:url";

const jiti = createJiti(fileURLToPath(import.meta.url));
jiti("./config/env/env.ts");

const nextConfig = {
  output: "standalone",

  transpilePackages: ["@t3-oss/env-nextjs", "@t3-oss/env-core"],
  experimental: {
    typedRoutes: true,
    authInterrupts: true,
  },
};

export default nextConfig;

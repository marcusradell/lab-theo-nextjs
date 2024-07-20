/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

const cspHeader = `
  default-src: 'self';
  script-src: 'self' 'unsafe-inline' 'unsafe-eval' https://warm-lobster-4.clerk.accounts.dev;
  connect-src: 'self' https://warm-lobster-4.clerk.accounts.dev;
  img-src: 'self' https://img.clerk.com;
  worker-src: 'self' blob:;
  style-src: 'self' 'unsafe-inline';
`;

/** @type {import("next").NextConfig} */
const config = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader.replace(/\n/g, ""),
          },
        ],
      },
    ];
  },
};

export default config;

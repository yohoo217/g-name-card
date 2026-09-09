import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  // GitHub Pages is a static host. This also keeps the existing local and
  // private-site workflow unchanged unless a GitHub Actions build is running.
  output: isGitHubPages ? 'export' : undefined,
  assetPrefix: isGitHubPages ? '/g-name-card' : '',
  trailingSlash: isGitHubPages,
};

export default nextConfig;

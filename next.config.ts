const nextConfig: any = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      {
        source: '/theroadto',
        destination: '/theroadto/index.html',
      },
    ]
  },
};

export default nextConfig;

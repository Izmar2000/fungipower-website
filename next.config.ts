const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/theroadto",
        destination: "/theroadto/index.html",
      },
    ];
  },
};

export default nextConfig;

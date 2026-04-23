const nextConfig = {
  async redirects() {
    return [
      { source: "/theroadto", destination: "/theroadto/index.html", permanent: false },
      { source: "/theroadto/", destination: "/theroadto/index.html", permanent: false },
      { source: "/language", destination: "/language.html", permanent: false },
      { source: "/english", destination: "/english.html", permanent: false },
      { source: "/spanish", destination: "/spanish.html", permanent: false },
      { source: "/italian", destination: "/italian.html", permanent: false },
      { source: "/polish", destination: "/polish.html", permanent: false },
      { source: "/french", destination: "/french.html", permanent: false },
      { source: "/german", destination: "/german.html", permanent: false },
    ];
  },
};

export default nextConfig;

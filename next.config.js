/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  // Inne konfiguracje Next.js

  // Konfiguracja obsługi pliku manifestu
  async headers() {
    return [
      {
        source: "/manifest.json",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
          {
            key: "Content-Type",
            value: "application/json",
          },
        ],
      },
    ];
  },
};

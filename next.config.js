/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  // Inne konfiguracje Next.js

  // Konfiguracja obsługi pliku manifestu
  async headers() {
    return [
      {
        source: "/manifest.json",
      },
    ];
  },
};

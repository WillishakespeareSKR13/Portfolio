module.exports = {
  env: {
    KEYSENDGRID: process.env.KEYSENDGRID
  },
  webpack(config) {
    config.resolve.fallback = { fs: false };
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

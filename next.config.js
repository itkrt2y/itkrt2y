const withPreact = require("next-plugin-preact");

module.exports = withPreact({
  async exportPathMap() {
    return {
      "/": { page: "/" },
      "/experience": { page: "/experience" },
      "/blog": { page: "/blog" },
      "/this-site": { page: "/this-site" },
    };
  },
  experimental: {
    modern: true,
  },
});

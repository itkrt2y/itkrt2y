const withPreact = require('next-plugin-preact');

module.exports = withPreact({
  exportPathMap: async function () {
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
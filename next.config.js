module.exports = {
  exportPathMap: async function() {
    return {
      "/": { page: "/" },
      "/experience": { page: "/experience" },
      "/blog": { page: "/blog" },
      "/this-site": { page: "/this-site" }
    };
  }
};

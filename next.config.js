module.exports = {
  exportPathMap: async function() {
    return {
      "/": { page: "/" },
      "/skills": { page: "/skills" },
      "/experience": { page: "/experience" },
      "/this-site": { page: "/this-site" }
    };
  }
};

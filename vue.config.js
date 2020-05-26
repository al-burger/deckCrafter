// import SASS

module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "@/styles/_variables.scss";`
        }
      }
    }
  };
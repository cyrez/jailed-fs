const path = require('path');

module.exports = async function(eleventyConfig) {
  const { default: config } = await import(path.resolve(__dirname, '.eleventy.mjs'));
  return config(eleventyConfig);
};

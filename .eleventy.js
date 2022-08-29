module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/styles")
    eleventyConfig.addPassthroughCopy("src/images")
    eleventyConfig.addPassthroughCopy("src/scripts")
    eleventyConfig.addPassthroughCopy("src/libs")
    eleventyConfig.addPassthroughCopy("src/projects/**/*.!(md)")
    eleventyConfig.addPassthroughCopy("src/favicon.svg")

    return {
        dir: {
            input: 'src',
            output: 'dist',
            includes: 'includes',
            layouts: 'layouts',
            data: 'data',
        },
        dataTemplateEngine: 'njk',
        markdownTemplateEngine: false,
        htmlTemplateEngine: 'njk',
        passthroughFileCopy: true,
        templateFormats: [
            'md', 'njk'
        ],
    }
}
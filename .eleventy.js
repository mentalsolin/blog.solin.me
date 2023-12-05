module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/styles")
    eleventyConfig.addPassthroughCopy("src/images")
    eleventyConfig.addPassthroughCopy("src/articles/**/*.!(md)")
    eleventyConfig.addPassthroughCopy("src/robots.txt")

    eleventyConfig.addFilter('ruDate', (value) => {
        return value.toLocaleString('ru', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }).replace(' г.', '');
    });

    eleventyConfig.addFilter('prettyTags', (value) => {
        return value.slice(1)
    })

    eleventyConfig.addFilter('articlesLast', (value) => {
        return value.reverse().slice(0, 1)
    })

    eleventyConfig.addFilter('articlesAll', (value) => {
        return value.slice(1)
    })

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

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/styles")
    eleventyConfig.addPassthroughCopy("src/images")
    eleventyConfig.addPassthroughCopy("src/scripts")
    eleventyConfig.addPassthroughCopy("src/libs")
    eleventyConfig.addPassthroughCopy("src/projects")
    eleventyConfig.addPassthroughCopy("src/articles/**/*.!(md)")
    eleventyConfig.addPassthroughCopy("src/robots.txt")

    eleventyConfig.addFilter('ruDate', (value) => {
        return value.toLocaleString('ru', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).replace(' г.', '')
    })

    eleventyConfig.addFilter('tag', (value) => {
        return value[1]
    })

    eleventyConfig.addFilter('lastArticles', (value) => {
        const articles = value.slice().reverse()

        let list = []

        for (let i = 0; i < 3; i++) {
            list.push(articles[i])
        }

        return list
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

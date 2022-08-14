let projects = [
    {
        "title": "Katana's Pack",
        "desc": "A resource pack that adds 5 different types of katana, which can be obtained by renaming swords in the anvil.",
        "link": "https://www.curseforge.com/minecraft/texture-packs/katanas-pack",
        "imgx1": "static/imgs/projects/katanas-pack-1x.jpg",
        "imgx2": "static/imgs/projects/katanas-pack-2x.jpg"
    },

    {
        "title": "Solin Battleship",
        "desc": "My first game in С++ programming language. Сonsole battleship.",
        "link": "https://github.com/SolinCode/Solin-Battleship-game",
        "imgx1": "static/imgs/projects/solin-battleship-1x.jpg",
        "imgx2": "static/imgs/projects/solin-battleship-2x.jpg"
    },

    {
        "title": "Solin's Vicinity",
        "desc": "Website for minecraft project.",
        "link": "https://github.com/SolinCode/Solin-Vicinity",
        "imgx1": "static/imgs/projects/solin-vicinity-1x.jpg",
        "imgx2": "static/imgs/projects/solin-vicinity-2x.jpg"
    },
]

projects.forEach(projects => {
    swiperInner.innerHTML += `
    <div class="swiper-slide">
        <article class="article">
            <a class="article-img" href="${projects.link}">
            <img class="article-img" aria-label="${projects.title}"
                src="${projects.imgx1}"
                srcset="${projects.imgx2} 2x"
                alt="${projects.title}">
            </a>
            <div class="article-content">
                <h3 class="article-title">${projects.title}</h3>
                <p class="article-desc-project-recent">${projects.desc}</p>
                <a class="article-more" href="${projects.link}">Learn more...</a>
            </div>
        </article>
    </div>
    `
});
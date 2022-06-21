const $ = {}

const projectsRecentInner = document.getElementById('projectsRecentInner')

function _createProject(options) {
    const project = document.getElementsByClassName('article')
    projectsInner.innerHTML += `
    <div class="projects-page-article-wrapper">
        <article class="article">
            <a href="${options.link}"><img class="article-img" src="${options.img}"></a>
            <div class="article-content">
                <h3 class="article-title">${options.title}</h3>
                <p class="article-desc">${options.desc}</p>
                <a class="article-more" href="${options.link}">Learn more...</a>
            </div>
        </article>
    </div>
    `
    return project
}

$.project = function(options) {
    const $project = _createProject(options)
}

const project1 = $.project({
    title: `Solin Battleship Game`,
    desc: `My first C++ console game. Battleship`,
    img: `src/img/projects/cpp/solin_battleship_game_preview.jpg`,
    link: `https://github.com/SolinCode/Solin-Battleship`,
})

const project2 = $.project({
    title: `Solin Dice Game`,
    desc: `Simple Dice game on C++`,
    img: `src/img/projects/cpp/solin_dice_game_preview.jpg`,
    link: `https://github.com/SolinCode/Solin-Dice-game`,
})

const project3 = $.project({
    title: `Katana's Pack`,
    desc: `Resource pack that adds 5 models of different katana.`,
    img: `src/img/projects/others/katana_pack_preview.jpg`,
    link: `https://www.curseforge.com/minecraft/customization/katana-models`,
})

const project4 = $.project({
    title: `Solin Website`,
    desc: `SimpSolin's personal website development`,
    img: `src/img/projects/web/solin_website_preview.jpg`,
    link: `https://github.com/SolinCode/Solin-Website`,
})
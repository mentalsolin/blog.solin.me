const projectsRecentInner = document.getElementById('projectsRecentInner')

function _createProject(options) {
    const project = document.getElementsByClassName('article')
    projectsInner.innerHTML += `
    <div class="projects-page-article-wrapper">
        <article class="article">
            <a href="${options.link}"><img class="article-img" src="${options.img}"></a>
            <div class="article-content">
                <h3 class="article-title">${options.title}</h3>
                <p class="article-desc-project">${options.desc}</p>
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
    title: `Solin Website`,
    desc: `Solin's personal website development, html, css, js`,
    img: `src/img/projects/web/solin_website_preview.jpg`,
    link: `https://github.com/SolinCode/Solin-Website`,
})

const project4 = $.project({
    title: `Solin Battleship`,
    desc: `My first game in С++ programming language. Сonsole battleship.`,
    img: `src/img/projects/cpp/solin_battleship_game_preview.jpg`,
    link: `https://github.com/SolinCode/Solin-Battleship`,
})

const project3 = $.project({
    title: `Dice Game`,
    desc: `Mini dice game in C++. the player and the computer take turns rolling the dice, the winner is the one with the most points after five rounds.`,
    img: `src/img/projects/cpp/solin_dice_game_preview.jpg`,
    link: `https://github.com/SolinCode/Solin-Dice-game`,
})

const project2 = $.project({
    title: `Katana's Pack`,
    desc: `A resource pack that adds 5 different types of katana, which can be obtained by renaming swords in the anvil.`,
    img: `src/img/projects/others/katana_pack_preview.jpg`,
    link: `https://github.com/SolinCode/Katanas-Pack`,
})
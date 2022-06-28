const projectsRecentInner = document.getElementById('projectsRecentInner')

function _createProjectsRecent(options) {
    const projectRecent = document.getElementsByClassName('article-recent')
    projectsRecentInner.innerHTML += `
    <div class="swiper-slide">
        <article class="article">
            <a href="${options.link}"><img class="article-img" src="${options.img}"></a>
            <div class="article-content">
                <h3 class="article-title">${options.title}</h3>
                <p class="article-desc-project-recent">${options.desc}</p>
                <a class="article-more" href="${options.link}">Learn more...</a>
            </div>
        </article>
    </div>
    `
    return projectRecent
}

$.projectRecent = function(options) {
    const $projectRecent = _createProjectsRecent(options)
}

const project2 = $.projectRecent({
    title: `Katana's Pack`,
    desc: `A resource pack that adds 5 different types of katana, which can be obtained by renaming swords in the anvil.`,
    img: `src/img/projects/others/katana_pack_preview.jpg`,
    link: `https://github.com/SolinCode/Katanas-Pack`,
})

const project4 = $.projectRecent({
    title: `Solin Battleship`,
    desc: `My first game in С++ programming language. Сonsole battleship.`,
    img: `src/img/projects/cpp/solin_battleship_game_preview.jpg`,
    link: `https://github.com/SolinCode/Solin-Battleship`,
})

const project3 = $.projectRecent({
    title: `Dice Game`,
    desc: `Mini dice game in C++. the player and the computer take turns rolling the dice, the winner is the one with the most points after five rounds.`,
    img: `src/img/projects/cpp/solin_dice_game_preview.jpg`,
    link: `https://github.com/SolinCode/Solin-Dice-game`,
})
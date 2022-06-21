const projectsRecentInner = document.getElementById('projectsRecentInner')

function _createProjectsRecent(options) {
    const projectRecent = document.getElementsByClassName('article-recent')
    projectsRecentInner.innerHTML += `
    <div class="swiper-slide">
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
    return projectRecent
}

$.projectRecent = function(options) {
    const $projectRecent = _createProjectsRecent(options)
}

const projectRecent1 = $.projectRecent({
    title: `Solin Battleship Game`,
    desc: `My first C++ console game. Battleship`,
    img: `src/img/projects/cpp/solin_battleship_game_preview.jpg`,
    link: `https://github.com/SolinCode/Solin-Battleship`,
})

const projectRecent2 = $.projectRecent({
    title: `Solin Dice Game`,
    desc: `Simple Dice game on C++`,
    img: `src/img/projects/cpp/solin_dice_game_preview.jpg`,
    link: `https://github.com/SolinCode/Solin-Dice-game`,
})

const projectRecent3 = $.projectRecent({
    title: `Katana's Pack`,
    desc: `Resource pack that adds 5 models of different katana.`,
    img: `src/img/projects/others/katana_pack_preview.jpg`,
    link: `https://www.curseforge.com/minecraft/customization/katana-models`,
})

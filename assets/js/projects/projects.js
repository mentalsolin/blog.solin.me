if (localStorage.getItem('lang') === 'rus') {
    lang = {
        learnMore: `Узнать больше...`,

        projectTitle1: `Solin Website`,
        projectDesc1: `Создание персонального вебсайта Солина. html, css, js`,

        projectTitle2: `Solin Battleship`,
        projectDesc2: `Моя первая игра на языке программирования C++. Морской бой.`,

        projectTitle3: `Dice Game`,
        projectDesc3: `Мини-игра кости на C++. Игрок и компьютер по очереди кидают кости, побеждает тот у кого очков больше по итогам пяти раундов.`,

        projectTitle4: `Katana's Pack`,
        projectDesc4: `Ресурспак добавляет 5 видов катан, переименуйте любой меч в наковальне`,
    
        projectTitle5: `Solin's Todo`,
        projectDesc5: `Todo list written in javascript. Использующий localStorage`,
        
        projectTitle6: `Solin's Vicinity`,
        projectDesc6: `Вебсайт, для проекта в Minecraft с таблом которое парсится из гугл таблиц в реальном времени.`,
    }
}

else if (localStorage.getItem('lang') === 'fr') {
    lang = {
        learnMore: `En savoir plus...`,

        projectTitle1: `Solin Website`,
        projectDesc1: `Développement du site Web personnel de Solin. html, css, js`,

        projectTitle2: `Solin Battleship`,
        projectDesc2: `Mon premier jeu en langage de programmation С++. Сonsole cuirassé.`,

        projectTitle3: `Dice Game`,
        projectDesc3: `Mini jeu de dés en C++. le joueur et l'ordinateur lancent les dés à tour de rôle, le gagnant est celui qui a le plus de points après cinq tours.`,

        projectTitle4: `Katana's Pack`,
        projectDesc4: `Un pack de ressources qui ajoute 5 types de katana différents, qui peuvent être obtenus en renommant les épées dans l'enclume.`,
    
        projectTitle5: `Solin's Todo`,
        projectDesc5: `Todo list written in javascript. Использующий localStorage`,
        
        projectTitle6: `Solin's Vicinity`,
        projectDesc6: `A website for a Minecraft project with a table that is parsed from google sheets in real time.`,
    }
}


else {
    lang = {
        learnMore: `Learn more...`,

        projectTitle1: `Solin Website`,
        projectDesc1: `Solin's personal website development. html, css, js`,

        projectTitle2: `Solin Battleship`,
        projectDesc2: `My first game in С++ programming language. Сonsole battleship.`,

        projectTitle3: `Dice Game`,
        projectDesc3: `Mini dice game in C++. the player and the computer take turns rolling the dice, the winner is the one with the most points after five rounds.`,

        projectTitle4: `Katana's Pack`,
        projectDesc4: `A resource pack that adds 5 different types of katana, which can be obtained by renaming swords in the anvil.`,
        
        projectTitle5: `Solin's Todo`,
        projectDesc5: `Todo list written in javascript. Use localStorage`,
        
        projectTitle6: `Solin's Vicinity`,
        projectDesc6: `A website for a Minecraft project with a table that is parsed from google sheets in real time.`,
    }
}


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
                <a class="article-more" href="${options.link}">${lang.learnMore}</a>
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
    title: lang.projectTitle1,
    desc: lang.projectDesc1,
    img: `src/img/projects/web/solin_website_preview.jpg`,
    link: `https://github.com/SolinCode/Solin-Website`,
})

const project4 = $.project({
    title: lang.projectTitle2,
    desc: lang.projectDesc2,
    img: `src/img/projects/cpp/solin_battleship_game_preview.jpg`,
    link: `https://github.com/SolinCode/Solin-Battleship`,
})

const project3 = $.project({
    title: lang.projectTitle3,
    desc: lang.projectDesc3,
    img: `src/img/projects/cpp/solin_dice_game_preview.jpg`,
    link: `https://github.com/SolinCode/Solin-Dice-game`,
})

const project2 = $.project({
    title: lang.projectTitle4,
    desc: lang.projectDesc4,
    img: `src/img/projects/others/katana_pack_preview.jpg`,
    link: `https://github.com/SolinCode/Katanas-Pack`,
})

const project5 = $.project({
    title: lang.projectTitle5,
    desc: lang.projectDesc5,
    img: `src/img/projects/web/solin_todo_preview.jpg`,
    link: `https://github.com/SolinCode/solin-todo-with-localstorage`,
})

const project6 = $.project({
    title: lang.projectTitle6,
    desc: lang.projectDesc6,
    img: `src/img/projects/web/solin_vicinity_preview.jpg`,
    link: `https://github.com/SolinCode/Solin-Vicinity`,
})
if (localStorage.getItem('lang') === 'rus') {
    lang = {
        mainTitle: `Привет, я Солин`,
        mainSubtitle: `Я начинающий C++ программист, иногда пишу вебсайты и работаю в Фотошопе.`,

        recentProjects: `Недавние проекты`,
        allProjects: `Все проекты`,
        justSwiteIt: `Просто свайпните!`,

        socialMedia: `Соц. сети`,
        myWorks: `Мои работы`,
    }
}

else if (localStorage.getItem('lang') === 'fr') {
    lang = {
        mainTitle: `Bonjour, je suis Solin`,
        mainSubtitle: `Je suis un programmeur C++ débutant, parfois j'écris des sites Web et je travaille dans Photoshop.`,

        recentProjects: `Les projets récents`,
        allProjects: `Tous les projets`,
        justSwiteIt: `Glissez-le simplement!`,

        socialMedia: `Des médias sociaux`,
        myWorks: `Mes travaux`,
    }
}

else {
    lang = {
        mainTitle: `Hello, i'm Solin`,
        mainSubtitle: `I am a beginner C++ programmer, sometimes i write websites and work in Photoshop.`,

        recentProjects: `Recent projects`,
        allProjects: `All projects`,
        justSwiteIt: `Just swipe it!`,

        socialMedia: `Social media`,
        myWorks: `My works`,
    }
}

pageHome.innerHTML = `
    <div class="container-wrapper">
        <div class="main-title-container">
            <h1 class="mainTitle">${lang.mainTitle}</h1>
            <span class="main-subtitle">${lang.mainSubtitle}</span>
        </div>
        <div class="main-arrow">
            <span class="material-symbols-outlined main-arrow-animation">expand_more</span>
        </div>
        </div>

        <div class="container-wrapper">
        <div class="container padding-none">
            <div class="projects-title">
                <h2>${lang.recentProjects}</h2>
                <a class="projects-more" href="projects.html">${lang.allProjects}</a>
            </div>
            <div class="projects-swiper">
                <div class="swiper projectSwiper">
                    <div id="projectsRecentInner" class="swiper-wrapper"></div>
                    <div class="swiper-button-next">
                        <div class="projects_arrow">
                            <span class="material-symbols-outlined projects_arrow">navigate_next</span>                       
                        </div>
                    </div>
                    <div class="swiper-button-prev">
                        <div class="projects_arrow">
                            <span class="material-symbols-outlined projects_arrow">navigate_before</span>
                        </div>
                    </div>
                </div>
            </div>
            <span class="projects-slogan">${lang.justSwiteIt}</span>
        </div>
        </div>

        <div class="container-wrapper">
        <div class="container-small">
            <div class="social-container">
                <div class="social-columns">
                    <div class="social-title">
                        <h2>${lang.socialMedia}</h2>
                    </div>
                    <div class="social-content">
                        <a class="social-bar-link" href="https://twitter.com/Solin4035">
                            <div class="social-bar twitter">
                                <img class="social-logo" src="src/icons/social-media/social-media-twitter.svg" alt="">
                                <span class="social-nickname">Solin4035</span>
                            </div>
                        </a>
                        <a class="social-bar-link" href="https://vk.com/solingrad">
                            <div class="social-bar vkontakte">
                                <img class="social-logo" src="src/icons/social-media/social-media-vkontakte.svg" alt="">
                                <span class="social-nickname">Solingrad</span>
                            </div>
                        </a>
                        <a class="social-bar-link" href="https://www.youtube.com/channel/UCHrVxQmCu0PtLTyPRwBOBYA">
                            <div class="social-bar youtube">
                                <img class="social-logo" src="src/icons/social-media/social-media-youtube.svg" alt="">
                                <span class="social-nickname">Solin4035</span>
                            </div>
                        </a>
                        <a class="social-bar-link" href="https://www.twitch.tv/solin4035">
                            <div class="social-bar twitch">
                                <img class="social-logo" src="src/icons/social-media/social-media-twitch.svg" alt="">
                                <span class="social-nickname">Solin4035</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="social-columns">
                    <div class="social-title">
                        <h2>${lang.myWorks}</h2>
                    </div>
                    <div class="social-content">
                        <a class="social-bar-link" href="https://github.com/SolinCode">
                            <div class="social-bar github">
                                <img class="social-logo" src="src/icons/social-media/social-media-github.svg" alt="">
                                <span class="social-nickname">SolinCode</span>
                            </div>
                        </a>
                        <a class="social-bar-link" href="https://www.curseforge.com/members/solin4035/projects">
                            <div class="social-bar curseforge">
                                <img class="social-logo" src="src/icons/social-media/social-media-curseforge.svg" alt="">
                                <span class="social-nickname">Solin4035</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
`


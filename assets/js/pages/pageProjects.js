if (localStorage.getItem('lang') === 'rus') {
    lang = {
        projectsTitle: `Проекты`
    }
}

else {
    lang = {
        projectsTitle: `Projects`
    }
}

pageProjects.innerHTML = `
    <div class="container-wrapper">
        <div class="container-small">
            <div class="page-title">
                <h1>${lang.projectsTitle}</h1>
            </div>
            <div id="projectsInner"></div>
        </div>
    </div>
`
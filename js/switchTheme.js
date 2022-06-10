const switchToLight = document.getElementById("switchToLight")
const switchToDark = document.getElementById("switchToDark")

if (localStorage.getItem('theme', 'dark')) {
    document.body.classList.add("dark_theme")
}
else {
    document.body.classList.remove("dark_theme")
}

const userTheme = window.matchMedia('(prefers-color-scheme: dark)')
setInterval(displayHello, 100);

function displayHello() {
    userThemeFunc = userTheme.matches
    if (userTheme.matches === false) {
        document.body.classList.remove("dark_theme")
        localStorage.removeItem('theme', 'dark')
    }
    
    else {
        document.body.classList.add("dark_theme")
        localStorage.setItem('theme', 'dark')
    }

    function swtichToLight() {
        document.body.classList.add("dark_theme")
    }
    
    function swtichToDark() {       
        document.body.classList.remove("dark_theme")
    }
}
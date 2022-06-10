const switchToLight = document.getElementById("switchToLight")
const switchToDark = document.getElementById("switchToDark")

const userTheme = window.matchMedia('(prefers-color-scheme: dark)')
setInterval(displayHello, 100);

function displayHello() {
    userThemeFunc = userTheme.matches

    if (userTheme.matches === false) {
        console.log("Theme 2")
        document.body.classList.remove("dark_theme")
    }
    
    else {
        document.body.classList.add("dark_theme")
    }

    function swtichToLight() {
        document.body.classList.add("dark_theme")
    }
    
    function swtichToDark() {       
        document.body.classList.remove("dark_theme")
    }
}
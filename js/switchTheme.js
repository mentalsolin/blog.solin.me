const switchToLight = document.getElementById("switchToLight")
const switchToDark = document.getElementById("switchToDark")

if (localStorage.getItem('theme') === 'dark_theme') {
    body.classList.remove("dark_theme")
}

else {
    switchToLight.classList.add("btn_switch_theme_off")
    switchToDark.classList.remove("btn_switch_theme_off")
    document.body.classList.add("dark_theme")
}

function swtichToLight() {
    switchToLight.classList.add("btn_switch_theme_off")
    switchToDark.classList.remove("btn_switch_theme_off")

    document.body.classList.add("dark_theme")
    localStorage.setItem('theme', 'light_theme')

    console.log("Current theme: Dark!")
}

function swtichToDark() {
    switchToDark.classList.add("btn_switch_theme_off")
    switchToLight.classList.remove("btn_switch_theme_off")
    
    document.body.classList.remove("dark_theme")
    localStorage.setItem('theme', 'dark_theme')

    console.log("Current theme: Light!")
}
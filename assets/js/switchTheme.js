const userTheme = window.matchMedia('(prefers-color-scheme: dark)')
const themeSelector = document.getElementById('themeSelector')

if (localStorage.getItem('firstTheme') === 'device-light') {
    document.body.classList.remove('dark')
}
if (localStorage.getItem('firstTheme') === 'device-dark') {
    document.body.classList.add('dark')
}
if (localStorage.getItem('firstTheme') === 'dark') {
    document.body.classList.add('dark')
}
if (localStorage.getItem('firstTheme') === 'light') {
    document.body.classList.remove('dark')
}

setInterval(themeDetect, 100);
function themeDetect() {
    if (localStorage.getItem('dynamicTheme', 'true')) {
        if (userTheme.matches === false) {
            document.body.classList.remove('dark')
            localStorage.setItem('firstTheme','device-light')
        }
        else {
            document.body.classList.add('dark')
            localStorage.setItem('firstTheme','device-dark')
        }
    }
}

function themeSelectorFunc() {
    let selectIndex = themeSelector.selectedIndex
    
    if (selectIndex === 1) {
        localStorage.setItem('dynamicTheme', 'true')
        localStorage.setItem('firstTheme', 'device')
    }

    if (selectIndex === 2) {
        document.body.classList.add('dark')
        localStorage.removeItem('dynamicTheme', 'true')
        localStorage.setItem('firstTheme', 'dark')
    }

    if (selectIndex === 3) {
        document.body.classList.remove('dark')
        localStorage.removeItem('dynamicTheme', 'true')
        localStorage.setItem('firstTheme', 'light')
    }
}
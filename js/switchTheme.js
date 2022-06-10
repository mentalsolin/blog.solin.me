const userTheme = window.matchMedia('(prefers-color-scheme: dark)')
const themeSelector = document.getElementById('themeSelector')

if (localStorage.getItem('firstTheme') === 'dark') {
    document.body.classList.add('dark')
}
if (localStorage.getItem('firstTheme') === 'light') {
    document.body.classList.remove('dark')
}

setInterval(themeDetect, 1);
function themeDetect() {
    if (localStorage.getItem('staticTheme', 'device')) {
        if (userTheme.matches === false) {
            document.body.classList.remove('dark')
        }
        else {
            document.body.classList.add('dark')
        }
    }
}

function themeSelectorFunc() {
    let selectIndex = themeSelector.selectedIndex
    
    if (selectIndex === 0) {
        localStorage.setItem('staticTheme', 'device')
        localStorage.setItem('firstTheme', 'device')
    }

    if (selectIndex === 1) {
        document.body.classList.add('dark')
        localStorage.removeItem('staticTheme', 'device')
        localStorage.setItem('firstTheme', 'dark')
    }

    if (selectIndex === 2) {
        document.body.classList.remove('dark')
        localStorage.removeItem('staticTheme', 'device')
        localStorage.setItem('firstTheme', 'light')
    }
}
const $ = {}

function saveLangButton() {
    let selectIndex = selectLang.selectedIndex
    
    if (selectIndex === 1) {
        localStorage.setItem('fixedLang', 'en')
    }
    
    if (selectIndex === 2) {
        localStorage.setItem('fixedLang', 'ru')
    }

    if (selectIndex === 3) {
        localStorage.removeItem('fixedLang')
    }
}

setInterval(langReload, 100)
function langReload() {
    const userLang = navigator.language || navigator.userLanguage;

    if (localStorage.getItem('fixedLang') === 'ru') {
        localStorage.setItem('lang', 'rus')
    }

    else if (localStorage.getItem('fixedLang') === 'en') {
        localStorage.removeItem('lang', 'rus')
    }

    else {
        if (userLang === 'ru') {
            localStorage.setItem('lang', 'rus')
        }
        
        else {
            localStorage.removeItem('lang', 'rus')
        }
    }
}
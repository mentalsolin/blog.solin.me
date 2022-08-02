const $ = {}

setInterval(langReload, 100)
function langReload() {
    const userLang = navigator.language || navigator.userLanguage;

    if (localStorage.getItem('fixedLang') === 'ru') {
        localStorage.setItem('lang', 'rus')
    }

    else if (localStorage.getItem('fixedLang') === 'fr') {
        localStorage.removeItem('lang', 'rus')
        localStorage.setItem('lang', 'fr')
    }

    else if (localStorage.getItem('fixedLang') === 'en') {
        localStorage.removeItem('lang', 'rus')
    }

    else {
        if (userLang === 'ru') {
            localStorage.setItem('lang', 'rus')
        }
        
        else if (userLang === 'fr') {
            localStorage.setItem('lang', 'fr')
        }

        else {
            localStorage.removeItem('lang', 'rus')
        }
    }
}

function saveLangButton() {
    let selectIndex = selectLang.selectedIndex
    
    if (selectIndex === 1) {
        localStorage.setItem('fixedLang', 'en')
    }
    
    if (selectIndex === 2) {
        localStorage.setItem('fixedLang', 'ru')
    }

    if (selectIndex === 3) {
        localStorage.setItem('fixedLang', 'fr')
    }

    if (selectIndex === 4) {
        localStorage.removeItem('fixedLang')
    }
}

nodeObj.scrollIntoView({
   behavior: "smooth",
   block:    "start" 
});
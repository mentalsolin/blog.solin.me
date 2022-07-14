if (localStorage.getItem('lang') === 'rus') {
    lang = {
        settingsTitle: 'Настройки',
        selectTheme: 'Выберите тему',
        light: 'Светлая',
        dark: 'Темная',


        selectLanguage: 'Выберите язык',
        eng: 'Английский',
        rus: 'Русский',
        
        device: 'Как на устройстве',
        save: 'Сохранить',
    }
}

else {
    lang = {
        settingsTitle: 'Settings',
        selectTheme: 'Select theme',
        light: 'Light',
        dark: 'Dark',


        selectLanguage: 'Select language',
        eng: 'English',
        rus: 'Russian',
        
        device: 'On device',
        save: 'Save',
    }
}

function _createModal(options) {
    const DEFAULT_WIDTH = '430px'
    const modal = document.createElement('div')
    modal.classList.add('settings-modal')
    modal.insertAdjacentHTML('afterbegin', `
        <div class="modal-bg" data-close="true">
            <div class="modal-window" style="width: ${options.width || DEFAULT_WIDTH}">
                <div class="modal-title-container">
                    <span class="modal-title">${options.title || 'Modal'}</span>
                    ${options.closable ? `<span class="modal-close material-symbols-outlined" data-close="true">close</span>` : ''}
                </div>
                <div class="modal-content" data-content>
                    ${options.content || ''}
                </div>
            </div>
        </div>
    `)
    document.body.appendChild(modal)
    return modal
}

$.modal = function(options) {
    const ANIMATION_SPEED = 100
    const $modal = _createModal(options)
    let closing = false
    let destroyed = false

    const modal = {
        open() {
            if (destroyed) {
                return console.log('Modal is destroyed')
            }
            !closing && $modal.classList.add('open')
        },
        close() {
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(() => {
                $modal.classList.remove('hide')
                closing = false
            }, ANIMATION_SPEED)
        },
    }

    const listener = event => {
        if (event.target.dataset.close) {
            modal.close()
            location.reload()
            location.reload()
        }
    }

    $modal.addEventListener('click', listener)

    return Object.assign(modal, {
        destroy() {
            $modal.parentNode.removeChild($modal)
            $modal.removeEventListener('click', listener)
            destroyed = true
        },
        setContent(html) {
            $modal.querySelector('[data-content]').innerHTML = html
        }
    })
}

const modal = $.modal({
    title: lang.settingsTitle,
    closable: true,
    content: `
    <form class="modal-settings-form">
        <span class="modal-settings-subtitle">${lang.selectLanguage}</span>
        <select class="modal-settings-select" name="change-theme" id="selectTheme">
            <option disabled>${lang.selectTheme}</option>
            <option value="1">${lang.light}</option>
            <option value="2">${lang.dark}</option>
            <option value="3">${lang.device}</option>
        </select>
        <button onclick="themeSelectorFunc()" class="modal-settings-select" type="button">${lang.save}</button>
    </form>
    <form class="modal-settings-form">
        <span class="modal-settings-subtitle">${lang.selectLanguage}</span>
        <select class="modal-settings-select" name="change-lang" id="selectLang">
            <option disabled>${lang.selectLanguage}</option>
            <option value="1">${lang.eng}</option>
            <option value="2">${lang.rus}</option>
            <option value="3">${lang.device}</option>
        </select>
        <button onclick="saveLangButton()" class="modal-settings-select" type="button">${lang.save}</button>
    </form>
    `
})

const modalQrMonero = $.modal({
    title: 'Monero',
    closable: true,
    content: `
    <img class="modal-img" src="src/img/payments/crypto/crypto-monero.png" alt="monero-address">
    `,
    width: `330px`
})

const modalQrBitcoin = $.modal({
    title: 'Bitcoin',
    closable: true,
    content: `
    <img class="modal-img" src="src/img/payments/crypto/crypto-bitcoin.png" alt="btc-address">
    `,
    width: `330px`
})


const modalQrDA = $.modal({
    title: 'Donation Alerts',
    closable: true,
    content: `
    <img class="modal-img" src="src/img/payments/others/others-donation-alerts.png" alt="dl-qr">
    `,
    width: `330px`
})
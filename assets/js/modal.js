const $ = {}

function _createModal(options) {
    const DEFAULT_WIDTH = '380px'
    const modal = document.createElement('div')
    modal.classList.add('settings-modal')
    modal.insertAdjacentHTML('afterbegin', `
        <div class="modal-bg" data-close="true">
            <div class="modal-window" style="width: ${options.width || DEFAULT_WIDTH}">
                <div class="modal-title-container">
                    <span class="modal-title">${options.title || 'Modal'}</span>
                    ${options.closable ? `<span class="modal-close material-symbols-outlined" data-close="true"</span>` : ''}
                </div>
                <div class="modal-content" data-content>
                    ${options.content || ''}
                </div>
                <div class="modal-footer">
                    ${options.footer || ''}
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
    title: 'Change theme',
    closable: true,
    content: `
    <form>
        <select class="modal-settings-select" name="change-theme" id="selectTheme">
            <option disabled>Select theme</option>
            <option value="1">On device</option>
            <option value="2">Dark theme</option>
            <option value="3">Light theme</option>
        </select>
    </form>
    `,
    footer: `
    <div class="modal-okay">
        <button onclick="themeSelectorFunc()" class="modal-btn" data-close="true" type="button">Okay</button>
    </div>
    <div class="modal-cencel">
        <button class="modal-btn" type="button" data-close="true">Сancel</button>
    </div>
    `,
    with: `380px`,
})

const modalQrMonero = $.modal({
    title: 'Monero',
    closable: true,
    content: `
    <img class="modal-img" src="src/img/crypto/crypto-monero.png" alt="monero-address">
    `,
    with: `380px`
})

const modalQrBitcoin = $.modal({
    title: 'Bitcoin',
    closable: true,
    content: `
    <img class="modal-img" src="src/img/crypto/crypto-bitcoin.png" alt="btc-address">
    `,
    with: `380px`,
})
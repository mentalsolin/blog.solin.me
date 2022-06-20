const donateMonero = document.getElementById('donate-monero')
const donateBitcoin = document.getElementById('donate-bitcoin')

function copyMonero() {
    navigator.clipboard.writeText('8AdrcJgoMux2pKMapcd2ACJJ5bKFdx5trMRMiFt8Ph8rDH4dZVMZZr9iXJRV95gdbH1eBQNwppkMq6Uhz8KjRFEV1VBT5F2');
    donateMonero.classList.add('donate-monero')
    donateBitcoin.classList.remove('donate-bitcoin')

    setTimeout(copyClear, 8000)
}

function copyBitcoin() {
    navigator.clipboard.writeText('1BDbKDhf199NjDv23khdcKzbNNYEyzgK9');
    donateBitcoin.classList.add('donate-bitcoin')
    donateMonero.classList.remove('donate-monero')

    setTimeout(copyClear, 8000)
}

function copyClear() {
    donateMonero.classList.remove('donate-monero')
    donateBitcoin.classList.remove('donate-bitcoin')
}


function moneroModalOpen() {
    
}

function moneroModalClose() {
    document.getElementById('moneroModal').classList.add('settings_hide')
}


function bitcoinModalOpen() {
    document.getElementById('bitcoinModal').classList.remove('settings_hide')
}

function bitcoinModalClose() {
    document.getElementById('bitcoinModal').classList.add('settings_hide')
}
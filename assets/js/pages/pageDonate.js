
if (localStorage.getItem('lang') === 'rus') {
    lang = {
        donateTitle: `Донат`,
        cryptocurrency: `Криптовалюта`,
        others: `Остольное`
    }
}

else {
    lang = {
        donateTitle: `Donate`,
        cryptocurrency: `Cryptocurrency`,
        others: `Others`
    }
}

pageDonate.innerHTML = `
    <div class="container-wrapper">
        <div class="page-title-container">
            <h1 class="page-title">${lang.donateTitle}</h1>
        <div class="container-small">
            <div class="donate-bars-container">
                <span class="danate-page-payments-title">${lang.cryptocurrency}</span>
                <div class="donate-page-bar">
                    <a class="donate-page-coin" href="src/files/payments-solin4035.txt">Monero</a>
                    <div class="donate-page-bar-center">
                        <span class="donate-page-address">8AdrcJgoMux2pKMapcd2ACJJ5bKFdx5trMRMiFt8Ph8rDH4dZVMZZr9iXJRV95gdbH1eBQNwppkMq6Uhz8KjRFEV1VBT5F2</span>
                        <span onclick="copyMonero()" class="donate-monero donate-page-icons material-symbols-outlined">content_copy</span>
                        <span onclick="modalQrMonero.open()" class="donate-page-icons donate-QR material-symbols-outlined">qr_code</span>
                    </div>
                </div>
                <div class="donate-page-bar">
                    <a class="donate-page-coin" href="src/files/payments-solin4035.txt">Bitcoin</a>
                    <div class="donate-page-bar-center">
                        <span class="donate-page-address">1BDbKDhf199NjDv23khdcKzbNNYEyzgK9</span>
                        <span onclick="copyBitcoin()" class="donate-bitcoin donate-page-icons material-symbols-outlined">content_copy</span>
                        <span onclick="modalQrBitcoin.open()" class="donate-page-icons donate-QR material-symbols-outlined">qr_code</span>
                    </div>
                </div>
            </div>
            <div class="donate-bars-container">
                <span class="danate-page-payments-title">${lang.others}</span>
                <div class="donate-page-bar donate-page-bar-small">
                    <a class="donate-page-coin" href="https://www.donationalerts.com/r/solin4035">Donation Alerts</a>
                    <span onclick="modalQrDA.open()" class="donate-page-icons donate-QR material-symbols-outlined">qr_code</span>
                </div>
            </div>
        </div>
    </div>
`

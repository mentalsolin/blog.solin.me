const body = document.querySelector('body')
const colorButtons = document.querySelectorAll('.palette__item')

colorButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const color = button.getAttribute('data-color')
        
        body.classList.remove('peach')
        body.classList.remove('mint')
        body.classList.remove('lily')
        body.classList.remove('cyan')

        body.classList.add(color)
    })
})

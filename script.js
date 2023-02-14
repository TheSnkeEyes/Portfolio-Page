const tabs = document.querySelectorAll('[data-target]'),
tabContent = document.querySelectorAll('[data-content]');

const card = document.querySelectorAll('.card-title');
card.forEach(i => {
    i.addEventListener('mouseover', () => {
        cardInfo = document.querySelector('.card-info');
        cardInfo.style.display = 'initial'
    })
    i.addEventListener('mouseleave', () => {
        cardInfo = document.querySelector('.card-info');
        cardInfo.style.display = 'none'
    })
})



tabs.forEach(tab => {
    tab.addEventListener('click' , () =>{
        const target = document.querySelector(tab.dataset.target)


        tabContent.forEach(tabContent =>{
            tabContent.classList.remove('qualification_active')
        })

        target.classList.add('qualification_active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification_active')
        })

        tab.classList.add('qualification_active')
    })
})
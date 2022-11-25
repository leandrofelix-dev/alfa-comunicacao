/*==================== DARK & LIGHT THEME ====================*/
const theme_button = document.querySelector('#switch-mode-button')
const dark_theme = 'dark-theme'
const icon_theme = 'uil-sun'

const selected_theme = localStorage.getItem('selected-theme')
const selected_icon = localStorage.getItem('selected-icon')


const getCurrentTheme = () => document.body.classList.contains(dark_theme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(icon_theme) ? 'uil-moon' : 'uil-sun'


if (selected_theme) {
    document.body.classList[selected_theme === 'dark' ? 'add' : 'remove'](dark_theme)
    theme_button.classList[selected_icon === 'uil-moon' ? 'add' : 'remove'](icon_theme)
}
theme_button.addEventListener('click', () => {
    document.body.classList.toggle(dark_theme)
    theme_button.classList.toggle(icon_theme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

    if (window.screen.width >= 1024) {
        const nav_desktop = document.querySelector('#desktop-nav--list')
        nav_desktop.appendChild(theme_button)
    }

/*==================== SERVICES MENU ====================*/
const services_button = document.querySelectorAll('.services--category-item')
const services_box = document.querySelectorAll('.services--card')

for (let i = 0; i <= 5; i++) {
    let element_number = services_button[i].getAttribute("data-id")

    services_button[i].addEventListener('click', () => {
        for (let a = 0; a <= 5; a++) {
            services_box[a].style.display = 'none'
            services_button[a].classList.remove('services--category-item-active')
        }
        services_button[element_number].classList.add('services--category-item-active')
        services_box[element_number].style.display = "grid"
    })
}

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// .desktop-nav--element-active

function activeNavElement() {
    let scrollY = window.pageYOffset
    let sections = document.querySelectorAll('.sections')
    let navElements = document.querySelectorAll('.desktop-nav--element')
    let tops = []
    let heights = []

    for (let i = 0; i < sections.length; i++) {
        tops.push(sections[i].offsetTop -100)
        heights.push(sections[i].offsetHeight)
    }
    for (let a = 0; a < sections.length; a++) {
        if (scrollY > tops[a] && scrollY < tops[a] + heights[a]) {navElements[a].classList.add('desktop-nav--element-active')}
        else {navElements[a].classList.remove('desktop-nav--element-active')}
    }

    if(scrollY >= sections[3].offsetHeight + sections[3].offsetTop - 100) {
        document.querySelector('#navigate-arrow').style.transition = 'all 0.3s ease-in-out'
        document.querySelector('#navigate-arrow').style.right = '-10rem'
    }
    else {
        document.querySelector('#navigate-arrow').style.right = '1.4rem'
    }

}
window.addEventListener('scroll', activeNavElement)

document.querySelector('#blog-button').addEventListener('mouseenter', () => {
    document.querySelector('#blog-button').innerText = 'Em breve...'
})
document.querySelector('#blog-button').addEventListener('mouseout', () => {
    document.querySelector('#blog-button').innerText = 'Nosso blog'
})
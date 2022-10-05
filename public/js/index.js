const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

    /* Dinamização da sessão de serviços */

    const buttons = document.querySelectorAll('.service--category-item');
    const cards = document.querySelectorAll('.service--card');

    
    const buttom_acm = document.querySelector('#service--buttom_acm');
    const buttom_envelopamento = document.querySelector('#service--buttom_envelopamento');
    const buttom_placa = document.querySelector('#service--buttom_placa');
    const buttom_servicosGraficos = document.querySelector('#service--buttom_servicosGraficos');
    const buttom_letraCaixa = document.querySelector('#service--buttom_letraCaixa');
    
    const card_acm = document.querySelector('#service--card_acm');
    const card_envelopamento = document.querySelector('#service--card_envelopamento');
    const card_placa = document.querySelector('#service--card_placa');
    const card_servicosGraficos = document.querySelector('#service--card_servicosGraficos');
    const card_letraCaixa = document.querySelector('#service--card_letraCaixa');
    
    buttom_acm.classList.add('buttom_active');
    card_acm.classList.add('card_active');

    // ACM
    buttom_acm.addEventListener('click', () => {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('buttom_active');
            cards[i].classList.remove('card_active');
        }
        buttom_acm.classList.add('buttom_active');
        card_acm.classList.add('card_active');
    });

    // Envelopamento
    buttom_envelopamento.addEventListener('click', () => {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('buttom_active');
            cards[i].classList.remove('card_active');
        }
        buttom_envelopamento.classList.add('buttom_active');
        card_envelopamento.classList.add('card_active');
    });

    // Placas
    buttom_placa.addEventListener('click', () => {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('buttom_active');
            cards[i].classList.remove('card_active');
        }
        buttom_placa.classList.add('buttom_active');
        card_placa.classList.add('card_active');
    });

    // Serviços Gráficos
    buttom_servicosGraficos.addEventListener('click', () => {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('buttom_active');
            cards[i].classList.remove('card_active');
        }
        buttom_servicosGraficos.classList.add('buttom_active');
        card_servicosGraficos.classList.add('card_active');
    });

    // Letras Caixa
    buttom_letraCaixa.addEventListener('click', () => {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('buttom_active');
            cards[i].classList.remove('card_active');
        }
        buttom_letraCaixa.classList.add('buttom_active');
        card_letraCaixa.classList.add('card_active');
    });
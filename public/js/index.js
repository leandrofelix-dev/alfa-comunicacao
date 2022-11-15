
/* Dinamização da sessão de serviços */
// ! Refatorar para enxugar o código
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

buttom_acm.classList.add('buttom-active');
card_acm.classList.add('card-active');

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
        buttons[i].classList.remove('buttom-active');
        cards[i].classList.remove('card-active');
    }
    buttom_placa.classList.add('buttom-active');
    card_placa.classList.add('card-active');
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

// Dinamicidade da navegação do menu
// ! Refatorar para evitar crescimento exponencial ocasionado pelos 2 for's
const navElements = document.querySelectorAll('.desktopNav__element')

for (let i = 0; i < navElements.length - 1; i++) {
    navElements[i].addEventListener('click', () => {
        navElements.forEach(element => {element.classList.remove('desktopNav__element-active')})
        navElements[i].classList.add('desktopNav__element-active');
    })
};

// ! ORGANIZAR LÓGICA

/*
    * Pegar posição atual
    ! Pegar posição inicial de cada sessão
    ! Comparar posição atual com posição de cada sessão
    ! Ativar sessão quando posição atual for igual a posição de cada sessão
*/

const nav_elements = document.querySelectorAll('.desktopNav__element');

const inicio = document.querySelector('#home')
const sobre_nos = document.querySelector('#sobre-nos')
const nossos_servicos = document.querySelector('#nossos-servicos')
const postagens = document.querySelector('#postagens')
const empresas_parceiras = document.querySelector('#empresas-parceiras')
const rodape = document.querySelector('#rodape')

window.addEventListener('scroll', () => {
    console.clear()
    const scroll = window.pageYOffset
    console.log("atual: " + scroll)

    const inicio__Top = inicio.offsetTop
    const nossos_servicos__Top = nossos_servicos.offsetTop
    const postagens__Top = postagens.offsetTop
    const empresas_parceiras__Top = empresas_parceiras.offsetTop
    const rodape__Top = rodape.offsetTop
    /*
    console.log("top: " + inicio__Top)
    console.log("nossos servicos: " + nossos_servicos__Top)
    console.log("postagens: " + postagens__Top)
    console.log("empresas parceiras: " + empresas_parceiras__Top)
    console.log("rodape: " + rodape__Top)
    */
    if (
        scroll >= inicio__Top &&
        scroll < nossos_servicos__Top
    )
    { nav_elements[0].classList.add('desktopNav__element-active') }
    else
    { nav_elements[0].classList.remove('desktopNav__element-active') }

    if (scroll >= nossos_servicos__Top && scroll < postagens__Top)
    { nav_elements[1].classList.add('desktopNav__element-active') }
    else
    { nav_elements[1].classList.remove('desktopNav__element-active') }

    if (scroll >= postagens__Top && scroll < empresas_parceiras__Top)
    { nav_elements[2].classList.add('desktopNav__element-active') }
    else
    { nav_elements[2].classList.remove('desktopNav__element-active') }

    if (scroll >= empresas_parceiras__Top && scroll < rodape__Top)
    { nav_elements[2].classList.add('desktopNav__element-active') }
    else
    { nav_elements[2].classList.remove('desktopNav__element-active') }


})



// const elements = document.querySelectorAll('.sections')

// elements.forEach(li => {

//     let sectionHeight = li.offsetHeight
//     let sectionTop = li.offsetTop -50
//     let sectionHref = li.children[0].getAttribute('href')
//     if (sectionHref) {
//         sectionHref = sectionHref.slice(1, sectionHref.length)
//         console.log(sectionHref)
//     }

//     if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
//         console.log("adicionou")
//         document.querySelector('.desktopNav__element a[href*=' + sectionHref + ']').parentNode.classList.add('desktopNav__element-active')
//     } else {
//         console.log("removeu")
//         document.querySelector('.desktopNav__element a[href*=' + sectionHref + ']').parentNode.classList.remove('desktopNav__element-active')
//     }
// })

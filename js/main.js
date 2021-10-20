/* Declarando Variaveis */
var btnContact = document.querySelector('.jl-btn-contact');
var toggleModal = document.querySelectorAll('.jl-toggle-modal');

/* Page PreLoader */
window.addEventListener('load', function () {
    var pagePreloader = this.document.querySelector('.jl-preloader')

    pagePreloader.classList.add('jl-fadeout');

    setTimeout(function () {
        pagePreloader.style.display = 'none';
    }, 2000);
});


/* Abrindo e Fechando informações de Contato*/
btnContact.addEventListener('click', function () {
    let boxContact = document.querySelector('.jl-contact-info');

    boxContact.classList.toggle('jl-is-open');
    this.classList.toggle('jl-change-icon');
});

/* Abrindo e Fechando o Modal de Orçamento */

for (var i = 0; i < toggleModal.length; i++) {
    toggleModal[i].addEventListener('click', function () {
        let overlay = document.querySelector('.jl-overlay');
        let modalOrcamento = document.querySelector('#jl-modal-orcamento');

        overlay.classList.toggle('jl-is-open');
        modalOrcamento.classList.toggle('jl-is-open');
        modalOrcamento.classList.toggle('jl-slideTopIn')
    });


}

/* Animando Elementos On Scroll com Waypoints */

var myScrollDown = document.querySelector('.jl-scroll-down');

var waypoint = new Waypoint({
    element: myScrollDown,
    handler: function () {
        myScrollDown.classList.toggle('jl-fadeout');
    },
    offset: '80%',
})


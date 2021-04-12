$('.owl-carousel').owlCarousel({
    loop:true, // false: tem início e fim
    margin:10, // distância entre um pôster e outro
    nav:false, // setas de navegação
    responsive:{
        0:{
            items:1 // limite de itens conforme o tamanho da tela
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
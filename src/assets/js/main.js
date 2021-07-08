import './config/jqueryLoad';
import 'bootstrap/dist/js/bootstrap.min';
import 'popper.js/dist/popper.min';
import 'owl.carousel/dist/owl.carousel';
import Wow from 'wow.js';
const wow = new Wow();
wow.init();

$(document).ready(function(){
    $(".anchor--link").on("click", function () {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 3000);
    });

    $('#burger').click(function () {
        $('.menu-modal').addClass('active');
        $('#app').addClass('active');
        $('body').addClass('active');
    });

    $('#main-menu-close').click(function () {
        $('.menu-modal').removeClass('active');
        $('#app').removeClass('active');
        $('body').removeClass('active');
    });

    $('[data-toggle="popover"]').popover();
    $('[data-toggle="tooltip"]').tooltip();

    $('.owl-carousel').owlCarousel({
        margin:27,
        loop:false,
        autoWidth:true,
        items:3
    });

    $('.stop-btn').click(function () {
        $(this).parent().parent().addClass('active')
    })

    $('.play-btn').click(function () {
        $(this).parent().parent().removeClass('active')
    })
});


//<--criar função que fexe o nenu quando cricar em um link-->
//<--funçao para abrir modal com algun aviso a 10 segundos depois de garegar a pagina e um outro quando sair  -->
//<--Fazer um menu hamburguer que fica emcima da sidebar mais deposi que ela se esonde fina na tela-->


$(".icoenMenu").click(function() {

    if ($('.sideBar').hasClass('abrir')) {
        $('.sideBar').removeClass('abrir');
        $('.sideBar').addClass('fexar');

        console.log('if')

    } else {
        $('.sideBar').removeClass('fechar');
        $('.sideBar').addClass('abrir');

        console.log('else')
    }


})
$(".icoenMenu").click(function() {

    if ($('.icoenMenu').hasClass('iconeDentro')) {

        $('.icoenMenu').addClass('iconeFora');
        $('.icoenMenu').removeClass('iconeDentro');




    } else {

        $('.icoenMenu').removeClass('iconeFora');
        $('.icoenMenu').addClass('iconeDentro');


    }

})

$(function() {
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 10) {
            $(".sidebar-hiden").addClass("sidebar-show");
        } else {
            $(".sidebar-hiden").removeClass("sidebar-show");
        }
    });
});


$(".1").click(function() {
    if ($('.baixo1').hasClass('cima')) {
        $(".baixo1").removeClass("cima");


    } else {
        $(".baixo1").addClass("cima");
        $(".baixo2").removeClass("cima");
        $(".baixo3").removeClass("cima");

    }
});
$(".2").click(function() {
    if ($('.baixo2').hasClass('cima')) {
        $(".baixo2").removeClass("cima");


    } else {
        $(".baixo2").addClass("cima");
        $(".baixo1").removeClass("cima");
        $(".baixo3").removeClass("cima");

    }
});
$(".3").click(function() {
    if ($('.baixo3').hasClass('cima')) {
        $(".baixo3").removeClass("cima");


    } else {
        $(".baixo3").addClass("cima");
        $(".baixo1").removeClass("cima");
        $(".baixo2").removeClass("cima");

    }
});
//fexa menu troca icone fora dentro e alarga main 
$(".linkPages").click(function() {

    if ($('.icoenMenu').hasClass('iconeDentro')) {
        $('.sideBar').removeClass('abrir');
        $('.sideBar').addClass('fexar');
        $('.icoenMenu').addClass('iconeFora');
        $('.icoenMenu').removeClass('iconeDentro');



        console.log('if')


    } else {

        $('.sideBar').addClass('fexar');
        $('.sideBar').addClass('fexar');
        console.log('else');


    }
})


/*
function GetBrowserInfo() {
    var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    var isFirefox = typeof InstallTrigger !== 'undefined'; // Firefox 1.0+
    var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    var isChrome = !!window.chrome && !isOpera; // Chrome 1+
    var isIE = false || !!document.documentMode; // At least IE6



    if (isOpera) {
        console.log('opera');

    } else if (isFirefox) {
        console.log('Firefox');

    } else if (isChrome) {

        console.log('Chrome');




    } else if (isSafari) {
        console.log('safari');


    } else if (isIE) {
        console.log('ie');

    } else {
        console.log('nenhum');

    }
}
GetBrowserInfo();
</script>
*/
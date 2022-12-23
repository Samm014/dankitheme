$(()=>{
    $('.iconHamburger').click(()=>{

        var clicado;

        if($('body').css('overflow-y') == 'hidden'){
            status = 'clicado'
        }else{
            status = 'naoClicado'
        }


        if(status === 'clicado'){
            $('.iconHamburger').css('top','initial');
            $('.bar:nth-child(1)').css('transform','initial');
            $('.bar:nth-child(3)').css('transform','initial');
            $('.bar:nth-child(3)').css('position','initial');
            $('.bar:nth-child(2)').fadeIn(0);
        }else{
            $('.bar:nth-child(2)').css('display','none');
            $('.bar:nth-child(1)').css('transform','rotate(45deg)');
            $('.bar:nth-child(3)').css('transform','rotate(-45deg)');
            $('.bar:nth-child(3)').css('position','absolute');
            $('.iconHamburger').css('top','50px');
        }


        if(status === 'clicado'){
                $('body').css('overflow-y','scroll')
                $('.menuMobile').fadeOut(500)
            }else{
            $('body').css('overflow-y','hidden')
            $('.menuMobile').fadeIn(500)
            $('.menuMobile').css('display', 'flex')
        }
    })
})
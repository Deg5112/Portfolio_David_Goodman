function navbarControls(){
    //$(window).scroll(function(){
    //    console.log($(window).scrollTop());
    //    if( $(window).scrollTop() > 168){
    //        $('nav').fadeOut('slow');
    //    }else{
    //        $('nav').fadeIn('slow');
    //    }
    //});

    $('.container, .jumbotron').click(function(event) {
        var pics = $('figure a');

        if(event.clientY<54){
            return;
        }
        $('nav').toggle();
    });
}
$(function(){
   scroll();
    navbarControls();

    var srcArray = ['beach2.jpg', 'beach.jpg', 'laguna.jpg'];
    var i = 1;
    var x;
    var src;
    setInterval(function(){
        if(i===3){
            i=0;
        }
        x = srcArray[i];
        $('.jumbotron').fadeOut('slow', function(){
            $('.jumbotron').fadeIn();
            src = 'url(images/' +  x  + ')';
            $('.jumbotron').css('background-image', src);
            $('.jumbotron').fadeIn('slow');
        });
        i+=1;
    }, 4200);
});


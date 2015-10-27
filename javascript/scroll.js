function scroll() {
    $('#work').click(function () { //work section
        $('body').animate({'scroll-top': $('#portfolio').offset().top}, 1500);
    });

    $('#about').click(function () { //work section
        $('body').animate({'scroll-top': $('#about-section').offset().top}, 1500);
    });

    $('#skills').click(function () { //work section
        $('body').animate({'scroll-top': $('#skills-section').offset().top}, 1500);
    });

    $('#experience').click(function () { //work section
        $('body').animate({'scroll-top': $('#experience-section').offset().top}, 1500);
    });

    $('#contact').click(function () { //work section
        $('body').animate({'scroll-top': $('#contact-section').offset().top}, 1500);
    });
}
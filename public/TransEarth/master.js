
    $('.logindiv').click(function(){
        $('.loginpanel').show();
    });

    $('.signupdiv').click(function(){
        $('.loginpanel').hide();
        $('.signuppanel').show();
    });

    $('.closediv').click(function(){
        $(this).parent().hide();
    });
    $('.username-place').click(function(){
        $('.dropdown-menu').toggle();
    });
    $('.next-btn, .back-btn').click(function( event ) {
        event.preventDefault();});

    $('.next-btn').click(function() {
        if($('.step1').is(':visible')){
            $('.step1').hide();
            $('.step2').show();
            $('.step-note2').css({"background" : "url('current.png')",'background-size' : 'cover','color' : '#000000'});
            clicks++;
        }
        else{
            if($('.step2').is(':visible')){
                $('.step2').hide();
                $('.step3').show();
                $('.next-btn').hide();
                $('.submit-button').show();
                $('.step-note3').css({"background" : "url('current.png')",'background-size' : 'cover','color' : '#000000'});
            }
        }
    });

    $('.back-btn').click(function() {
        if($('.step3').is(':visible')){
            $('.step3').hide();
            $('.step2').show();
            $('.step-note3').css({"background" : "url('next.png')",'background-size' : 'cover','color' : '#ffffff'});
            $('.submit-button').hide();
            $('.next-btn').show();
        }
        else{
            if($('.step2').is(':visible')){
                $('.step2').hide();
                $('.step1').show();
                $('.step-note2').css({"background" : "url('next.png')",'background-size' : 'cover','color' : '#ffffff'});
            }
        }
    });

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Uc Browser/i.test(navigator.userAgent) ) {
        // tasks to do if it is a Mobile Device
        $('link[rel=stylesheet][href~="style.css"]').remove();
        $('head').append('<link rel="stylesheet" type="text/css" href="css/mobile.css">');
        $('link[href="css/style.css"]').prop("disabled", true);
        $('.menu-btn').click(function(){
            $('.navmenu').toggle();
        });
    }
    else {
        var screensize = $(window).width();
        if(screensize < "1024"){
            $('link[rel=stylesheet][href~="style.css"]').remove();
            $('head').append('<link rel="stylesheet" type="text/css" href="css/mobile.css">');
            $('link[href="css/style.css"]').prop("disabled", true);
            $('.menu-btn').click(function(){
                $('.navmenu').toggle();
            });
        }
            }
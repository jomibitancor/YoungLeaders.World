$(document).ready(function(){
    var scroll_start = 0;
    var startchange = $('#header');
    var offset = startchange.offset();
    if (startchange.length){
        $(document).scroll(function() {
            scroll_start = $(this).scrollTop();
            if(scroll_start > offset.top){
                $(".navbar").css('background', 'rgba(236, 236, 236, 1)');
                $(".navbar").css('padding', '0px');
                $(".nav-link").css('color', 'black');
                $(".logo-container").css('width', '75px');
                $(".logo-container").css('margin-bottom', '0px');
                $(".logo-container").css('margin-top', '0px');
            }
            else{
                $(".navbar").css('background', 'white');
                $(".navbar").css('padding', '18px');
                $(".nav-link").css('color', 'gray');
                $(".logo-container").css('width', '140px');
                $(".logo-container").css('margin-bottom', '-20px');
                $(".logo-container").css('margin-top', '-20px');
            }
        })
    }
})
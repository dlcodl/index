$(function(){
    function isMobile() {
        if (navigator.userAgent.indexOf('Mobile') != -1) {
            return true;
        } else {
            return false;
        }
    }if(!isMobile()){
        $('.contact_left .input_text').on('click', function(){
            $('.circle .button_a span').addClass('open');
        });
        
    }else{
        $('.gnb_btn').on('click', function(){
            $('.pc_menu').toggleClass('open');
            $('.btn_wrap > button, .btn_wrap > button > span').toggleClass('active');
        });
        $('.pc_menu button').on('click', function(){
            $('.btn_wrap > button, .btn_wrap > button > span').removeClass('active'); 
            $('.pc_menu').removeClass('open');
        });
        $('.gnb_btn').on('click', function(){
            //$('.pc_menu > div').removeClass('open');
            //$('.pc_menu').removeClass('open');
        });
    }
});
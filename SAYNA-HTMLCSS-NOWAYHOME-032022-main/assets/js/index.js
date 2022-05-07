$(document).ready(function(){
    $('#marveltxt').fadein;
    $('#marveltxt').animate({
        left:"400px"
    }, "slow");
})

$(document).ready(function(){
    $(window).scroll(function(){
        let scroll = $(window).scrolltop();
        $('#marvelimg').css('top',scroll+'px');
    }) 
})

var modal = document.getElementById('mymodal');

var sendmodal = document.getElementById('sendmodal');

sendmodal.onclick =function(){
    modal.style.display ="block";
}
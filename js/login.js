var button1=$('.button1')
var button2=$('.button2')
$(document).ready(()=>{
  button2.on("click",function(){
    button2.addClass('active');
    button1.removeClass('active');
    $('.sliderbar').removeClass('sliderbarleft');
    $('.sliderbar').addClass('sliderbarright');
    $('#signup').css('display','none');
    $('#signin').css('display','block');
    })
    button1.on("click",function(){
      button1.addClass('active');
      button2.removeClass('active');
      $('.sliderbar').removeClass('sliderbarright');
      $('.sliderbar').addClass('sliderbarleft');
      $('#signin').css('display','none');
      $('#signup').css('display','block');
      })
    $('#qr').on("mouseover",function(){
      $('.download').css('display','none');
      $('.qrcode').css('display','block');
    })
    $('#qr').on("mouseout",function(){
      $('.download').css('display','block');
      $('.qrcode').css('display','none');
    })
  })

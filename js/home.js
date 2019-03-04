$(document).ready(function(){
  $(".nav-profile").on("mouseover",function(){
    $(".nav-profile-link").css("background-color", "#095fb3");
    $(".nav-profile-dropdown").css("display", "block");
  });
  $(".nav-profile").on("mouseout",function(){
    $(".nav-profile-link").css("background-color", "transparent");
    $(".nav-profile-dropdown").css("display", "none");
  });
  $(".main-sidebar-link").on("mouseover",function(){
    $(this).css({"background-color": "#eff6fa","color": "#259"});
    $(this).children("i").css("color", "#259");
  });
  $(".main-sidebar-link").on("mouseout",function(){
    $(this).css({"background-color": "#fff","color": "#666"});
    $(this).children("i").css("color", "#999");
  });
  $(".main-content-answer-part").on("mouseover",function(){
    $(this).children(".show-all-link").css("background-color", "#eff6fa");
  });
  $(".main-content-answer-part").on("mouseout",function(){
    $(this).children(".show-all-link").css("background-color", "#fff");
  });
  $(".main-content-answer-part").on("click",function(){
    $(this).css("display", "none");
    $(this).next(".main-content-answer-all").css("display", "block");
  });
  $(".main-content-answer-img-md").on("click",function(){
    $(".main-content-answer-img-box").css("display", "block");
    $(".body").css("overflow-y", "hidden");
  });
  $(".main-content-answer-img-lg").on("click",function(){
    $(".main-content-answer-img-box").css("display", "none");
    $(".body").css("overflow-y", "auto");
  });
  $(".collapse-button").on("click",function(){
    $(".main-content-answer-all").css("display", "none");
    $(".main-content-answer-part").css("display", "block");
  });
  $(".main-content-answer-close").on("mouseover",function(){
    setTimeout(function(){$(".display-ignore").css("display", "block");}, 400);
  });
  $(".main-content-answer-close").on("mouseout",function(){
    setTimeout(function(){$(".display-ignore").css("display", "none");}, 500);
  });
});

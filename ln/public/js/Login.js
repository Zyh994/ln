$(function(){
  $(".dd1 .login_div").click(function(){
    $("#ff1").css("display","block");
    $("#ff2").css("display","none");
    $("body").css("background","url(img/login-bg_01.jpg)");
  });
  $(".dd1 .reg_div").click(function(){
    $("#ff1").css("display","none");
    $("#ff2").css("display","block");
    $("body").css("background","url(img/demo-1-bg.jpg)");
  })
})
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

$(".dd4 .dd5").click(function(){
        $.ajax({
          url: "/mypro/login",
          type: "get",
          data: {
              uname: $("#uname").val(),
              upwd: $("#upwd").val()
          },
          success: function(data){    //    alert后台返回的参数
              alert(data);
              // if(data==="登陆成功"){
               window.location.href="http://127.0.0.1:8000/index.html"
              // }
          },
          error: function(){
            alert('访问失败');
          }
      });
    });


})


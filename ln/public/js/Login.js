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
          url: "/Login",
          type: "GET",
          data: {
              uname: $("#uname").val(),
              upwd: $("#upwd").val()
          },
          success: function(data){    //    alert后台返回的参数
              alert(data);
          },
          error: function(){
            alert('访问失败');
          }
      });
    });


  // $("").click(function(){
  //   if(!uname.value){
  //     alert("用户名为空");
  //     return;
  //   }
  //   if(!upwd.value){
  //     alert("用户密码为空");
  //     return;
  //   }
  //   var xhr=new XMLHttpRequest();
  //   xhr.onreadystatechange=function(){
  //     if(xhr.readyState==4 && xhr.status==200){
  //       var result=xhr.responseText;
  //       if(result==1){
  //         alert("登陆成功");
  //       }else if(result==0){
  //         alert("登录失败");
  //       }
  //     }
  //   }
  //   xhr.open("get","/mypro/v1/login/"+uname.value+"-"+upwd.value,true);
  //   xhr.send();
  // });
})


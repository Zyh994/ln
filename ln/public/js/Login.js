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
              if(data==="登陆成功"){
               window.location.href="http://127.0.0.1:8080/index.html";
              }
          },
          error: function(){
            alert('访问失败');
          }
      });
    });

// 注册
$(".dd4 .dd6").click(function(){
  $.ajax({
    url:"/mypro/insert",
    type:"get",
    data: {
      uname: $("#uname").val(),
      upwd: $("#upwd").val()
  },
  success: function(data){    //    alert后台的返回值
    alert(data);
    if(data==="注册成功")
    window.location.href="http://127.0.0.1:8080/Login.html";
},
error: function(){
    alert('访问失败');
}
  })
});
var $txtName=$(".dd2 .aa2");
var $txtPwd=$(".dd3 .aa3");
function vali($txt,minlen,maxlen,msg){
	var $span=$txt.next();
	if($txt.val().length>=minlen&&$txt.val().length<=maxlen){
		$span.html("<img src='./img/ok.png'>");
	}else{
		$span.html(`<img src='./img/err.png'>${msg}`);
	}
}
$txtName.blur(function(){
	vali($(this),3,9,"用户名必须介于3~9位之间!");
})
$txtPwd.blur(function(){
	vali($(this),6,8,"密码必须介于6~8位之间!")
})
})


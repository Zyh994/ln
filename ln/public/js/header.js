$(function(){
  $.ajax({
  url:"http://127.0.0.1:8080/mypro/getSession",
  type:"get",
  success:function(res){
    setTimeout(function(){
      if(res.code==1){
        $(".x2").css("display","block")
        $(".x1").css("display","none")
      }else{
        $(".x1").css("display","block")
        $(".x2").css("display","none")
      }
    },70)
  }
})
  $.ajax({
    url:"header.html",
    type:"get",
    success:function(result){
      $(result).replaceAll("#header");
      $(`<link rel="stylesheet href="css/comm.css">`).appendTo("head");
      setTimeout(function(){
        var h = $(".navbar").css("height");
        // h = Number(h.split("px")[0])+20+"px";
        $(".main").css("margin-top",h);
      },50)
    }
  });
  setTimeout(function(){
    $(".zyh").animate({
      left:"1400px"
    },1000)
    $(".asd").click(function(){
      $.ajax({
        url:"http://127.0.0.1:8080/mypro/quit",
        type:"get",
        success:function(res){
          if(res.code==1){
            window.location.reload();
          }
        }
      })
    })
  },50);
})



  
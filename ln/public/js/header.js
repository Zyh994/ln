$(function(){
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
  },50);
})



  
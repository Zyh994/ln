
$(function(){
  $.ajax({
    url:"header.html",
    type:"get",
    success:function(result){
      $(result).replaceAll("#header");
      $(`<link rel="stylesheet href="css/comm.css">`).appendTo("head");
    }
  })
})
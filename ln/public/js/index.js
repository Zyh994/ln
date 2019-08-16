$(function(){
  for(var i=0;i<10;i++){
  $(`.index-pro li:eq(${i})`).mouseover(function(){
      var img=this.getElementsByClassName("my_fl_left_img")[0];
      $(".c521 img").attr("src",img.alt);
  })
}
})
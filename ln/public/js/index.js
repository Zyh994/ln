$(function(){
  for(var i=0;i<10;i++){
  $(`.index-pro li:eq(${i})`).mouseover(function(){
      var img=this.getElementsByClassName("my_fl_left_img")[0];
      $(".c521 img").attr("src",img.alt);
  })
}
$(".k2 ul>li .g1").hover(function(){
  $(".gif .gif1").toggle();
})
$(".k2 ul>li .g2").hover(function(){
  $(".gif .gif2").toggle();
})
$(".k2 ul>li .g3").hover(function(){
  $(".gif .gif3").toggle();
})
$(".k2 ul>li .g4").hover(function(){
  $(".gif .gif4").toggle();
})
$(".k2 ul>li .g6").hover(function(){
  $(".gif .gif2").toggle();
})
$(".k2 ul>li .g7").hover(function(){
  $(".gif .gif3").toggle();
})
$(".k2 ul>li .g8").hover(function(){
  $(".gif .gif4").toggle();
})
$(".k2 ul>li .g9").hover(function(){
  $(".gif .gif3").toggle();
})
$(".k2 ul>li .g10").hover(function(){
  $(".gif .gif2").toggle();
})
$(".k2 ul>li .g5").hover(function(){
  $(".gif .gif1").toggle();
})
})

// 地图
var map = new BMap.Map("bd");      
map.centerAndZoom(new BMap.Point( 104.066513,30.572262), 14);      
var local = new BMap.LocalSearch(map, {      
    renderOptions:{map: map}      
});      
local.search("春熙路IFS");
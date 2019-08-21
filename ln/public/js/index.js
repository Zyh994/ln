$(function(){
  for(var i=0;i<10;i++){
  $(`.index-pro li:eq(${i})`).mouseover(function(){
      var img=this.getElementsByClassName("my_fl_left_img")[0];
      $(".c521 img").attr("src",img.alt);
  })
}

})

// 地图
var map = new BMap.Map("bd");      
map.centerAndZoom(new BMap.Point( 104.066513,30.572262), 14);      
var local = new BMap.LocalSearch(map, {      
    renderOptions:{map: map}      
});      
local.search("春熙路IFS");
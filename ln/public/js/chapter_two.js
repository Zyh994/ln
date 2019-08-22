$(function(){
$("img.my-small")
.hover(function(){
  $("img.my-big")
  .attr("src",$(this).attr("data-target"))
})


})
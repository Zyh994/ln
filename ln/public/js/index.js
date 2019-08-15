$(function(){
  for(var i=0;i<10;i++){
  $(`.index-pro li:eq(${i})`).mouseover(function(){
    $(".c521 img").hide()
    $(`.c521 img:eq(${i})`).show()
  })
}
})

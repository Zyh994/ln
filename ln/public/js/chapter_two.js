$(function(){
  $.ajax({
    url:'http://127.0.0.1:8080/mypro/zz',
    type:"get",
    success:function(res){
      var html=`
        <div class="col-6">
          <img src="${res.lg[0]}" class="my-big mt-2 mb-2">
          <ul class="list-unstyled float-left d-flex">
            <li>
              <img src="${res.sm[0]}" data-target="${res.lg[0]}" class="my-small">
            </li>
            <li>
              <img src="${res.sm[1]}" data-target="${res.lg[1]}" class="my-small">
            </li>
            <li>
              <img src="${res.sm[2]}" data-target="${res.lg[2]}" class="my-small">
            </li>
            <li>
              <img src="${res.sm[3]}" data-target="${res.lg[3]}" class="my-small">
            </li>
          </ul>
        </div>
        <div class="col-6 t1">
          <ul class="list-unstyled">
            <li>
              <h2>AIR JORDAN I</h1>
            </li>
            <li>名称:AIR JORDAN 01</li>
            <li>商品归属:耐克乔丹系列</li>
            <li>首发时间:1985</li>
            <li>${res.title}</li>
            <li>鞋面材料:鞋面为牛皮材质,鞋舌为棉布材质</li>
            <li>鞋内材料:鞋垫:EVA材质,厚度5毫米,后跟处复古NIKE LOGO</li>
            <li>鞋底材料:橡胶外底，厚度约为4.90毫米,后掌SOLE气垫</li>
            <li>设计者:Peter Moore</li>
            <li>¥:${res.price}</li>
            <li>
              <button class="add" data-id="${res.pid}">添加至购物车</button>
            </li>
          </ul>
        </div>`
      $(html).appendTo(".p1")
      $(".add").click(function(e){
        var pid = e.target.dataset.id;
        $.ajax({
          url:`http://127.0.0.1:8080/mypro/addcart?pid=${pid}`,
          type:"get",
          success:function(res){
            if(res.code==-1){
              alert("请先登录")
              window.location.href="http://127.0.0.1:8080/Login.html"
            }else if(res.code==-2){
              alert("购物车中已存在该数据")
            }else if(res.code==-3){
              alert("添加失败")
            }else{
              alert("添加成功")
            }
          }
        })
      })
    }
  })
$("img.my-small")
.hover(function(){
  $("img.my-big")
  .attr("src",$(this).attr("data-target"))
})
})
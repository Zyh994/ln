$(function(){
  $.ajax({
    url:"http://127.0.0.1:8080/mypro/getcart",
    type:"get",
    success:function(result){
      if(result.code==-1){
        alert('请先登录');
        window.location.href="http://127.0.0.1:8080/Login.html"
      }else{
        var html=`
          <ul class="list-unstyled">
            <li>
              <input type="checkbox" class="button1">
            </li>
            <li>
              <img src="${result.data[0].img}" class="photo1">
            </li>
            <li class="font1">
              <a href="#" >
                ${result.data[0].title}
              </a>
            </li>
            <li class="money">
              ￥${result.data[0].price}
            </li>
            <li class="button2">
              <button>-</button>
              <input type="text" value="1">
              <button>+</button>
            </li>
            <li class="font2">
              <a href="#">
                删除
              </a>
            </li>
          </ul>`
        $(html).appendTo(".shop")
      }
    }
  })
})
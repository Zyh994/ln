$(function(){
    //加载首页图片
    $.ajax({
        url:'http://127.0.0.1:8080/mypro/indexPic',
        type:'get',
        dataType:'json',
        success(res){
            if(res.code!=1){return;}
            var data = res.data;
            console.log(data)
            var html1 = '';
            var html2 = '';
            for(var i=0;i<5;i++){
                html1 += `
                    <li>
                        <a href="#">
                        <img class= "my_fl_left_img" src="http://127.0.0.1:8080/${data[i].sm}"
                        alt="http://127.0.0.1:8080/${data[i].bg}">
                        <div>${data[i].title}</div>
                        </a>
                    </li>
                `;
            }
            for(var i=5;i<10;i++){
                html2 += `
                    <li>
                        <a href="#">
                        <img class= "my_fl_left_img" src="http://127.0.0.1:8080/${data[i].sm}"
                        alt="http://127.0.0.1:8080/${data[i].bg}">
                        <div>${data[i].title}</div>
                        </a>
                    </li>
                `;
            }
            $($(".index-pro")[0]).html(html1);
            $($(".index-pro")[1]).html(html2);
            //绑定事件
            for(var i=0;i<10;i++){
                $(`.index-pro li:eq(${i})`).mouseover(function(){
                    var img=this.getElementsByClassName("my_fl_left_img")[0];
                    $(".c521 img").attr("src",img.alt);
                })
            }
        }
    })
    $(".k2 .k1  li").hover(function(){
        var i=$(this).index();
    $(`.gif img:eq(${i})`).toggle();
    });
})

// 地图
var map = new BMap.Map("bd");      
map.centerAndZoom(new BMap.Point( 104.066513,30.572262), 14);      
var local = new BMap.LocalSearch(map, {      
    renderOptions:{map: map}      
});      
local.search("春熙路IFS");
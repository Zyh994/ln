const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();

	// 登陆
router.get("/login",(req,res)=>{    //    获取登录传过来的值
	//    连接数据库
	var sql="select * from ln_user where uname='"+req.query.uname+"' and upwd='"+req.query.upwd+"'";    //    在数据库里面查询用户名跟密码
	pool.query(sql,function(err,result){    //    执行sql语句，并返回结果
			if(err){
					res.end("登录失败");    //    数据库错误
			}	
			if(result.length==0){
					res.end("用户名密码不正确");    //    数据库里面没找到配对的内容返回参数				
		}else{
			res.end("登陆成功")   //返回登录成功
		}
			
	}) 
})

// 注册
router.get('/insert',(req,res)=>{
	var sql="insert into ln_user (uname,upwd) values(?,?)";    //    向user这个表里写入数据
	var sqlValue=[req.query.uname,req.query.upwd];
	pool.query(sql,sqlValue,function(err,result){    //    执行sql语句
			if(err)throw err;
			if(result.affectedRows>0){
					res.end("注册成功");
			}
	});
});
// 获取首页图片
router.get('/indexPic',(req,res)=>{
	var sql = 'SELECT title,sm,bg FROM ln_index_pic';
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		res.writeHead(200,{
			'Access-Control-Allow-Origin':'*'
		})
		res.write(JSON.stringify({code:1,data:result}));
		res.end();
	})
})
//导出路由器
module.exports=router; 
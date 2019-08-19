const express=require('express');
//引入连接池模块
// const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
//添加路由
//1.登录接口
// router.get('/v1/login:uname-:upwd',(req,res)=>{
// 	var $uname=req.params.uname;
// 	var $upwd=req.params.upwd;
// 	pool.query('select * from ln_user where uname=? and upwd=?',[$uname,$upwd],(err,result)=>{
// 	if(err)throw err;
// 	console.log(result);
// 	if(result.length>0){
// 	res.send({code:1,msg:"成功"});
// 	}else{
// 	res.send({code:-1,msg:"失败"});
// 	}
// 	})
// });
	

router.get("/Login",function(req,res){    //    获取登录传过来的值
	//    创建数据库连接
	var pool=mysql.createConnection({
			host:"127.0.0.1",
			port:'3306',
			user:"root",
			password:"",
			database:"ln"
	});
	//    连接数据库
	var sql="select * from ln_user where uname='"+req.query.uname+"' and upwd='"+req.query.upwd+"'";    //    在数据库里面查询用户名跟密码
	pool.query(sql,function(err,result){    //    执行sql语句，并返回结果
			if(err){
					res.end("登录失败");    //    数据库错误
					console.log(err);
			}
			if(result.length==0){    
					res.send("用户名密码不正确");    //    数据库里面没找到配对的内容返回参数
			}else{
					res.send("登陆成功");    //返回登录成功
			}
	}) 
})
	//2.注册(增加)
// router.post('/v2/insert',(req,res)=>{
// 	var obj=req.body;
// 	pool.query('insert into ln_user set ?',[obj],(err,result)=>{
// 	if(err)throw err;
// 	console.log(result);
// 	if(result.affectedRows>0){
// 	res.send("1");
	
// 	}
// 	})
// })
//导出路由器
module.exports=router; 
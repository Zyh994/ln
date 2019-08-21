const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();

	
router.get("/login",function(req,res){    //    获取登录传过来的值
	//    连接数据库
	var sql="select * from ln_user where uname='"+req.query.uname+"' and upwd='"+req.query.upwd+"'";    //    在数据库里面查询用户名跟密码
	pool.query(sql,function(err,result){    //    执行sql语句，并返回结果
			if(err){
					res.send("登录失败");    //    数据库错误
					console.log(err);
			}
			if(result.length==0){    
					res.send("用户名密码不正确");    //    数据库里面没找到配对的内容返回参数
			}else{
					res.send("登陆成功");    //返回登录成功
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
					res.send("注册成功");
			}
	});
});
//导出路由器
module.exports=router; 
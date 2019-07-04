const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
//添加路由
//1.登录接口
router.get('/v1/login/:uname-:upwd',(req,res)=>{
	var $uname=req.params.uname;
	var $upwd=req.params.upwd;
	pool.query('select * from ln_user where uname=? and upwd=?',[$uname,$upwd],(err,result)=>{
	if(err)throw err;
	console.log(result);
	if(result.length>0){
	res.send('1');
	}else{
	res.send('0');
	}
	})
});
	
	//2.注册(增加)
router.post('/v2/insert',(req,res)=>{
	var obj=req.body;
	pool.query('insert into ln_user set ?',[obj],(err,result)=>{
	if(err)throw err;
	console.log(result);
	if(result.affectedRows>0){
	res.send("1");
	
	}
	})
})
//导出路由器
module.exports=router; 
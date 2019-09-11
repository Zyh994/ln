const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();

// 显示购物车数据
router.get('/getcart',(req,res)=>{
	var uid=req.session.uid;
	if(!uid){
		res.send({code:-1,msg:'未登录，请登录'})
		return;
	}
	var sql="select img,price,title,count from ln_shopping where uid=?";
	pool.query(sql,[uid],(err,result)=>{
		if(err) throw err;
		res.send({code:1,msg:'查询成功',data:result});
	})
})
// 添加商品
router.get('/addcart',(req,res)=>{
	var uid=req.session.uid;
	if(!uid){
		res.send({code:-1,msg:'未登录，请登录'})
		return;
	}
	var pid = req.query.pid
	var sql="select img,price,title from ln_chapter where id=?";
	pool.query(sql,[pid],function(err,result){
		if(err)throw err;
		var img=result[0].img
		var price=result[0].price
		var title=result[0].title
		pool.query(`select count from ln_shopping where pid=${pid}`,(err,result)=>{
			if(err) throw err;
			if(result.length>0){
				res.send({code:-2,msg:'购物车中已存在'})
				return;
			}
			var	sql="insert into ln_shopping(uid,pid,img,price,title,count) values(?,?,?,?,?,1)";
			pool.query(sql,[uid,pid,img,price,title],(err,result)=>{
				if(err) throw err;
				if(result.affectedRows>0){
					res.send({code:1,msg:'插入成功'})
				}else{
					res.send({code:-3,msg:'插入失败'})
				}
			})
		})
	})
})

// 获取登陆状态
router.get('/getSession',(req,res)=>{
	var uid = req.session.uid;
	if(!uid){
		res.send({code:-1,msg:'登录失败'})
	}else{
		pool.query("select uname from ln_user where uid=?",[uid],(err,result)=>{
			res.send({code:1,msg:'登录成功',uname:result[0].uname})
		})
	}
})

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
			req.session.uid=result[0].uid;
			res.end("登陆成功")   //返回登录成功
		}
			
	}) 
})
//退出登陆
router.get("/quit",(req,res)=>{
	req.session.destroy();
	res.send({code:1,msg:"退出成功"})
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

// 子主页
router.get('/zz',(req,res)=>{
	var data={}
	var sql="select id,title,price from ln_chapter";
	pool.query(sql,(err,result)=>{
		if(err)throw err;
		if(result.length>0){
			data.pid=result[0].id;
			data.title=result[0].title;
			data.price=result[0].price;
			data.sm=[];
			data.lg=[];
			var sql = "select sm,lg from ln_photo where pid=?"
			pool.query(sql,[result[0].id],(err,result)=>{
				if(err) throw err
				for(var i=0;i<result.length;i++){
					data.sm.push(result[i].sm);
					data.lg.push(result[i].lg);
				}
				res.send(data)
			})
		}
	})
})
//导出路由器
module.exports=router; 
SET NAMES UTF8;
DROP DATABASE IF EXISTS ln;
CREATE DATABASE ln CHARSET=UTF8;
USE ln;
/**用户信息**/
CREATE TABLE ln_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),
  user_name VARCHAR(32),      #用户名，如王小明
  gender INT                  #性别  0-女  1-男
);
INSERT INTO ln_user VALUES(NULL, 'dingding', '123456', 'ding@qq.com', '13501234567', '丁伟', 1);
INSERT INTO ln_user VALUES(NULL, 'yaya', '123456', 'ya@qq.com', '13501234560', '秦小雅', 0);
CREATE TABLE ln_index_pic(
  pid  INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(32),
  sm VARCHAR(64),
  bg VARCHAR(64)
);
INSERT INTO ln_index_pic VALUES
(NULL,"Air Jordan 1 Camo","img/Aj1.jpg","img/banner05.jpg"),
(NULL,"Air Jordan 2 Camo","img/Aj2.jpg","img/banner01.jpg"),
(NULL,"Air Jordan 3 Camo","img/Aj3.jpg","img/banner06.jpg"),
(NULL,"Air Jordan 4 Camo","img/Aj4.jpg","img/banner07.jpg"),
(NULL,"Air Jordan 5 Camo","img/Aj5.jpg","img/banner055.jpg"),
(NULL,"Air Jordan 6 Camo","img/Aj6.jpg","img/timg.jpg"),
(NULL,"Air Jordan 7 Camo","img/Aj7.jpg","img/banner066.jpg"),
(NULL,"Air Jordan 8 Camo","img/Aj8.jpg","img/banner05.jpg"),
(NULL,"Air Jordan 9 Camo","img/Aj9.jpg","img/banner055.jpg"),
(NULL,"Air Jordan 10 Camo","img/Aj10.jpg","img/banner04.jpg");
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
INSERT INTO ln_user VALUES(NULL, 'dingding', '123456', 'ding@qq.com', '13501234567', '丁伟', '1');
INSERT INTO ln_user VALUES(NULL, 'yaya', '123456', 'ya@qq.com', '13501234560', '秦小雅', '0');
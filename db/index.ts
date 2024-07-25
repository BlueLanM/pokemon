import mysql from "mysql2";

// 创建数据库连接
const db = mysql.createConnection({
  host: "localhost", // 数据库主机名
  user: "root", // 数据库用户名
  password: "12345678", // 数据库密码
  database: "LanM_Database", // 数据库名称
});

// 连接到数据库
db.connect((err) => {
  if (err) {
    console.error("无法连接到数据库:", err);
    return;
  }
  console.log("已成功连接到数据库");
});

export default db;

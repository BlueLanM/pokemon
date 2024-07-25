import db from "@/db";
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const columns = Object.keys(req.body)
    .filter((key) => key !== "id")
    .join(",");
  const placeholders = Object.keys(req.body)
    .filter((key) => key !== "id")
    .map(() => "?")
    .join(",");

  const values: any = Object.values(req.body).filter(
    (value) => value !== req.body.id
  );

  if (req.body) {
    const searchSql = `SELECT * FROM LanM_DataBase.User WHERE nickName = '${req.body.nickName}'`;

    const sql = `INSERT INTO LanM_DataBase.User (${columns}) VALUES (${placeholders})`;
    db.query(searchSql, values, (err: any, result: any, fields: any) => {
      // if (err) throw err;
      if (result.length >= 1) {
        res
          .status(200)
          .json({ success: false, message: "注册失败，用户名重复" });
      } else {
        db.query(sql, values, (err: any, result: any) => {
          if (err) {
            // console.error("注册失败:", err);
            res.status(200).json({ success: false, message: "注册失败" });
          } else {
            // console.log("注册成功:", result);
            res.status(200).json({ success: true, message: "注册成功" });
          }
        });
      }
    });
  }
};

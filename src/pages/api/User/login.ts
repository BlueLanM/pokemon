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
    const searchSql = `select * from user WHERE nickName=? AND passWord=?`;

    db.query(searchSql, values, (err: any, result: any, fields: any) => {
      // if (err) throw err;
      if (result.length > 0) {
        res.status(200).json({ success: true, message: "登录成功" });
      } else {
        res.status(200).json({ success: false, message: "登录失败" });
      }
    });
  }
};

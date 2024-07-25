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

  const sql = `INSERT INTO LanM_DataBase.User (${columns}) VALUES (${placeholders})`;

  const values: any = Object.values(req.body).filter(
    (value) => value !== req.body.id
  );

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("插入数据时发生错误:", err);
      res.status(500).json({ message: "插入数据失败" });
    } else {
      res.status(200).json({ message: "SUCCESS" });
    }
  });
};

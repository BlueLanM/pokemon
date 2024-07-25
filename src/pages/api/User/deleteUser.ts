import db from "@/db";
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req);

  const sql = `DELETE FROM LanM_DataBase.User WHERE Id=${req.query.id}`;

  db.query(sql, (err, result) => {
    if (err) {
      console.error("删除数据时发生错误:", err);
      res.status(500).json({ message: "删除数据失败" });
    } else {
      res.status(200).json({ message: "SUCCESS" });
    }
  });
};

import db from "@/db";
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const sql = `UPDATE LanM_DataBase.User SET nickName='${req.body.nickName}',passWord='${req.body.passWord}' WHERE Id = '${req.body.id}'`;

  db.query(sql, (err, result) => {
    if (err) {
      console.error("修改数据时发生错误:", err);
      res.status(500).json({ message: "修改数据失败" });
    } else {
      res.status(200).json({ message: "SUCCESS" });
    }
  });
};

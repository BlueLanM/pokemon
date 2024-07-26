"use server";
import db from "@/db";
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const values: any = Object.values(req.body).filter(
    (value) => value !== req.body.id
  );

  if (req.body) {
    const searchSql = `select * from user WHERE nickName=? AND passWord=?`;

    db.query(searchSql, values, (err: any, result: any, fields: any) => {
      // if (err) throw err;
      if (result.length > 0) {
        res.status(200).json({
          success: true,
          data: {
            ...result[0],
          },
          message: "登录成功",
        });
      } else {
        res
          .status(200)
          .json({ success: false, data: null, message: "登录失败" });
      }
    });
  }
};

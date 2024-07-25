import db from "@/db";
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  db.query(`SELECT * FROM LanM_Database.User`, (err, result) => {
    res.status(200).json(result);
  });
};

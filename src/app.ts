import { Request, Response } from "express";
import PrismaConnection from "./conection/client";

const express = require("express");
const app = express();
app.use(express.json());
app.get("/", async (req: Request, res: Response) => {
  const prisma = await PrismaConnection.usuario.create({ data: req.body });

  res.json("");
});
app.listen(9000, () => {
  console.log("🚀Corriendo en el puerto 9000🚀");
});

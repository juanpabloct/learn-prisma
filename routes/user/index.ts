import { Request, Response, Router } from "express";
import { CreateUser } from "../../controllers/createUser";
import { ValidEmail } from "../../midlewares/validEmail";
import { validUser } from "../../midlewares/validInputUser";
const app = Router();
const bcrypt = require("bcrypt");

app.get(
  "/newUser",
  ValidEmail,
  validUser,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
      const result = await CreateUser(req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json("Posiblemente este usuario ya existe");
    }
  }
);
module.exports = app;

const bcrypt = require("bcrypt");
import PrismaConnection from "../src/conection/client";
import { Prisma } from "@prisma/client";

export const CreateUser = async (data: Prisma.UsuarioCreateInput) => {
  const { email, password, informationUsuario } = data;
  const usuario = informationUsuario as Prisma.InformationCreateInput;
  const salt = bcrypt.genSaltSync(10);
  const encryptPasssword = await bcrypt.hash(password, salt);

  const newUser = await PrismaConnection.usuario.create({
    data: {
      ...data,
      password: encryptPasssword,
      informationUsuario: {
        create: { name: usuario.lastName, lastName: usuario.lastName },
      },
    },
  });
  return newUser;
};

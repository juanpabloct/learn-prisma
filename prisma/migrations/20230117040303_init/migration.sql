-- CreateTable
CREATE TABLE "usuario" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

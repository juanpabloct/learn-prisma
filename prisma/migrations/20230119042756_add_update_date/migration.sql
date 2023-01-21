/*
  Warnings:

  - A unique constraint covering the columns `[usuarioId]` on the table `Information` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updateAt` to the `Information` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuarioId` to the `Information` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Information" ADD COLUMN     "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "usuarioId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Information_usuarioId_key" ON "Information"("usuarioId");

-- AddForeignKey
ALTER TABLE "Information" ADD CONSTRAINT "Information_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

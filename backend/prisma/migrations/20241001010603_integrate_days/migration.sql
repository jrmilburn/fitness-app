/*
  Warnings:

  - Added the required column `days` to the `Program` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Program" ADD COLUMN     "days" INTEGER NOT NULL;

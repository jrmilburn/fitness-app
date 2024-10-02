/*
  Warnings:

  - A unique constraint covering the columns `[programId,weekNumber]` on the table `Week` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Week_programId_weekNumber_key" ON "Week"("programId", "weekNumber");

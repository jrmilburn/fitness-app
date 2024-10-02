/*
  Warnings:

  - A unique constraint covering the columns `[workoutId,name]` on the table `Excercise` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[weekId,name]` on the table `Workout` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Excercise_workoutId_name_key" ON "Excercise"("workoutId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "Workout_weekId_name_key" ON "Workout"("weekId", "name");

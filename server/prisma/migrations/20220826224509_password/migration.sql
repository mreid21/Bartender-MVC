/*
  Warnings:

  - Added the required column `password` to the `Bartender` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Bartender" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL
);
INSERT INTO "new_Bartender" ("id", "username") SELECT "id", "username" FROM "Bartender";
DROP TABLE "Bartender";
ALTER TABLE "new_Bartender" RENAME TO "Bartender";
CREATE UNIQUE INDEX "Bartender_username_key" ON "Bartender"("username");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

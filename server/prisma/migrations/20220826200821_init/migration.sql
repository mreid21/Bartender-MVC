/*
  Warnings:

  - You are about to drop the column `orderId` on the `Cocktail` table. All the data in the column will be lost.
  - You are about to drop the column `cocktailId` on the `Order` table. All the data in the column will be lost.
  - Added the required column `total` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "OrderItem" (
    "cockTailId" INTEGER NOT NULL,
    "orderId" INTEGER NOT NULL,

    PRIMARY KEY ("cockTailId", "orderId"),
    CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "OrderItem_cockTailId_fkey" FOREIGN KEY ("cockTailId") REFERENCES "Cocktail" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cocktail" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" DECIMAL NOT NULL
);
INSERT INTO "new_Cocktail" ("id", "name", "price") SELECT "id", "name", "price" FROM "Cocktail";
DROP TABLE "Cocktail";
ALTER TABLE "new_Cocktail" RENAME TO "Cocktail";
CREATE TABLE "new_Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "total" DECIMAL NOT NULL,
    "orderedAt" DATETIME NOT NULL
);
INSERT INTO "new_Order" ("id", "orderedAt") SELECT "id", "orderedAt" FROM "Order";
DROP TABLE "Order";
ALTER TABLE "new_Order" RENAME TO "Order";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

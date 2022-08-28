-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CocktailImage" (
    "src" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "cocktailId" INTEGER NOT NULL,
    CONSTRAINT "CocktailImage_cocktailId_fkey" FOREIGN KEY ("cocktailId") REFERENCES "Cocktail" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_CocktailImage" ("alt", "cocktailId", "src") SELECT "alt", "cocktailId", "src" FROM "CocktailImage";
DROP TABLE "CocktailImage";
ALTER TABLE "new_CocktailImage" RENAME TO "CocktailImage";
CREATE UNIQUE INDEX "CocktailImage_src_key" ON "CocktailImage"("src");
CREATE UNIQUE INDEX "CocktailImage_cocktailId_key" ON "CocktailImage"("cocktailId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

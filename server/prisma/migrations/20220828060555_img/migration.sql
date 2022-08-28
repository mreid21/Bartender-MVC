-- CreateTable
CREATE TABLE "CocktailImage" (
    "src" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "cocktailId" INTEGER NOT NULL,
    CONSTRAINT "CocktailImage_cocktailId_fkey" FOREIGN KEY ("cocktailId") REFERENCES "Cocktail" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "CocktailImage_src_key" ON "CocktailImage"("src");

-- CreateIndex
CREATE UNIQUE INDEX "CocktailImage_cocktailId_key" ON "CocktailImage"("cocktailId");

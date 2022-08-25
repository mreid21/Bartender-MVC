export interface Cocktail {
    id: number,
    name: string,
    price: string
}

export interface CocktailOrder extends Cocktail {
    orderedAt: Date
}



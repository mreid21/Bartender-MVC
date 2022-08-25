export interface Cocktail {
    id: number,
    name: string,
    price: number
}

export interface CocktailOrder extends Cocktail {
    orderedAt: Date
}



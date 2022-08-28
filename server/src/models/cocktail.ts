export interface Cocktail {
    id: number,
    name: string,
    price: number,
    img: {
        src: string,
        alt: string
    }
}

export interface CocktailOrder extends Cocktail {
    orderedAt: Date
}



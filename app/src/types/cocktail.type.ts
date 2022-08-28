export interface CocktailType {
  id: number,
  name: string,
  price: number,
  img: {
    src: string,
    alt: string
  }
}

export interface CocktailOrderType {
  cocktail: CocktailType,
  quantity: number
}
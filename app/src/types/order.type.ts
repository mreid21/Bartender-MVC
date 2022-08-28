export interface OrderItemType {
  id: number,
  quantity: number
}

export interface OrderType {
  total: number,
  orderedAt: Date,
  items: OrderItemType[]
}
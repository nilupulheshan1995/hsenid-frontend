export type AddCategoryType = {
  name: string;
  description: string;
};

export type ItemType = {
  name: string;
  description: string;
  unitPrice: number;
  avStock: number;
  unitCost: number;
  preOrderMargin: number;
  categoryId: number;
};

export interface ItemResponse extends ItemType {
  itemid: number;
}

export interface OrderType {
  qty: number;
  item: number;
}

export interface OrderSubmitType {
  sellTotal: number;
  costTotal: number;
  discount: number;
  customer: number;
  orderDetials: OrderType[];
}

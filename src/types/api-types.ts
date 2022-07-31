export type AddCategoryType = {
    name: string;
    description: string;
}

export type AddItem = {
    name: string;
    description: string;
    unitPrice: number;
    avStock: number;
    unitCost:number;
    preOrderMargin: number;
    categoryId:number;
}
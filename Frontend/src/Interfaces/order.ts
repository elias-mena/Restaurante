export interface IOrder {
    product_code: string
    price: number
    is_buffet: boolean
    buffet_pick: [{
        code: string
        price: number
    }]
}

export interface ITableOrder {
    table: number
    first_chair_order: [IOrder]
    second_chair_order: [IOrder]
    third_chair_order: [IOrder]
    fourth_chair_order: [IOrder]
    total: number
}

export interface IBarOrder{
    chair: number
    order: [IOrder]
    total: number
}

export interface IOrderDetails{
    order_details: [ITableOrder|IBarOrder]
    is_bar: boolean
    is_table: boolean
}
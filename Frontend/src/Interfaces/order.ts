export interface IOrder {
    _id?: string
    product_code?: string
    price?: number
    is_buffet?: boolean
    buffet_pick?: [{
        code?: string
        price?: number
    }]
}

export interface ITableOrder {
    _id?: string
    table?: number
    first_chair_order?: [IOrder]
    second_chair_order?: [IOrder]
    third_chair_order?: [IOrder]
    fourth_chair_order?: [IOrder]
    total?: number
}

export interface IBarOrder{
    _id?: string
    chair?: number
    order?: [IOrder]
    total?: number
}

export interface IOrderDetails{
    _id?: string
    order_details?: [ITableOrder|IBarOrder]
    is_bar?: boolean
    is_table?: boolean
}
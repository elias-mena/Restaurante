import {Schema, model, Document} from 'mongoose';

export interface IOrder extends Document {
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

const orderSchema = new Schema({
    order_details: { type: [Object], required: true },
    is_bar: { type: Boolean, required: true },
    is_table: { type: Boolean, required: true },
});

export const OrderModel = model<IOrderDetails>('Order', orderSchema);

/* Example Table Order

{
    "order_details":
        {
            "table": 1,
            "first_chair_order": [
                {
                    "product_code": "1",
                    "price": 100,
                    "is_buffet": true,
                    "buffet_pick": [
                        {
                            "code": "1",
                            "price": 100
                        },
                        {
                            "code": "2",
                            "price": 100
                        }
                    ]
                }
            ],
            "second_chair_order": [
                {
                    "product_code": "1",
                    "price": 100,
                    "is_buffet": true,
                    "buffet_pick": [
                        {
                            "code": "1",
                            "price": 100
                        },
                        {
                            "code": "2",
                            "price": 100
                        }
                    ]
                }
            ],
            "third_chair_order": [
                {
                    "product_code": "1",
                    "price": 100,
                    "is_buffet": true,
                    "buffet_pick": [
                        {
                            "code": "1",
                            "price": 100
                        },
                        {
                            "code": "2",
                            "price": 100
                        }
                    ]
                }
            ],
            "fourth_chair_order": [
                {
                    "product_code": "1",
                    "price": 100,
                    "is_buffet": true,
                    "buffet_pick": [
                        {
                            "code": "1",
                            "price": 100
                        },
                        {
                            "code": "2",
                            "price": 100
                        }
                    ]
                }
            ],
        },
    "is_bar": false,
    "is_table": true


}

Example Bar Order

{
    "order_details": {
        "chair": 1,
        "order": [
            {
                "product_code": "1",
                "price": 200,
                "is_buffet": true,
                "buffet_pick": [
                    {
                        "code": "1",
                        "price": 100
                    },
                    {
                        "code": "2",
                        "price": 100
                    }
                ]
            },
            {
                "product_code": "3",
                "price": 100,
                "is_buffet": false,
                "buffet_pick": []
            }
        ],
        "total": 300
    },
    "is_bar": true,
    "is_table": false
}

*/
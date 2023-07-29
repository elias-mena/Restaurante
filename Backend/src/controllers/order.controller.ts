import {Request, Response, NextFunction} from 'express';
import {OrderModel, IOrder, ITableOrder, IBarOrder} from '../models/order';
import { BuffetModel, IBuffet } from '../models/buffet';
import { baseController } from './base.controller';

export class OrderController{
    constructor(){
    }

    async create(req: Request, res: Response, next: NextFunction){
        if(!req.body) return res.status(404).json({mensaje: 'No se recibieron datos'});
        try {
            // Bar order
            if(req.body.is_bar){
                const order_details: IBarOrder = req.body.order_details;
                // Validate bar order
                for(let i = 0; i < order_details.order.length; i++){
                    const order_item = order_details.order[i];
                    //const is_product_valid = await ProductModel.findOne({code : order_item.product_code});
                    if(order_item.is_buffet){
                        //const is_valid = await this.validateOrders(order_item);
                        //if(!is_valid) return res.status(404).json({mensaje: `No se encontro la seleccion de buffet con codigo ${order_item.product_code}`});
                        const buffet_picks = order_item.buffet_pick
                        for (let i = 0; i < buffet_picks.length; i++) {
                            const buffet_pick = buffet_picks[i];
                            const buffet_pick_code = buffet_pick.code;
                            const buffet_pick_entity = await BuffetModel.findOne({code: buffet_pick_code});
                            if (!buffet_pick_entity) return res.status(404).json({mensaje: `No se encontro la seleccion de buffet con codigo ${buffet_pick_code}`});
                        }
                    }
                }
                const entity = new OrderModel(req.body);
                const orderCreated = await entity.save();
                res.json(orderCreated);
            }

            // Table order
            if(req.body.is_table){
                const order_details: ITableOrder = req.body.order_details;
                // Validate table order

                // First chair
                for(let i = 0; i < order_details.first_chair_order.length; i++){
                    const order_item = order_details.first_chair_order[i];
                    //const is_product_valid = await ProductModel.findOne({code : order_item.product_code});
                    if(order_item.is_buffet){
                        const buffet_picks = order_item.buffet_pick
                        for (let i = 0; i < buffet_picks.length; i++) {
                            const buffet_pick = buffet_picks[i];
                            const buffet_pick_code = buffet_pick.code;
                            const buffet_pick_entity = await BuffetModel.findOne({code: buffet_pick_code});
                            if (!buffet_pick_entity) return res.status(404).json({mensaje: `Error en la orden de la primera silla, no se encontro la seleccion de buffet con codigo ${buffet_pick_code}`});
                        }
                    }
                }

                // Second chair
                for(let i = 0; i < order_details.second_chair_order.length; i++){
                    const order_item = order_details.second_chair_order[i];
                    //const is_product_valid = await ProductModel.findOne({code : order_item.product_code});
                    if(order_item.is_buffet){
                        const buffet_picks = order_item.buffet_pick
                        for (let i = 0; i < buffet_picks.length; i++) {
                            const buffet_pick = buffet_picks[i];
                            const buffet_pick_code = buffet_pick.code;
                            const buffet_pick_entity = await BuffetModel.findOne({code: buffet_pick_code});
                            if (!buffet_pick_entity) return res.status(404).json({mensaje: `Error en la orden de la segunda silla, no se encontro la seleccion de buffet con codigo ${buffet_pick_code}`});
                        }
                    }
                }

                // Third chair
                for(let i = 0; i < order_details.third_chair_order.length; i++){
                    const order_item = order_details.third_chair_order[i];
                    //const is_product_valid = await ProductModel.findOne({code : order_item.product_code});
                    if(order_item.is_buffet){
                        const buffet_picks = order_item.buffet_pick
                        for (let i = 0; i < buffet_picks.length; i++) {
                            const buffet_pick = buffet_picks[i];
                            const buffet_pick_code = buffet_pick.code;
                            const buffet_pick_entity = await BuffetModel.findOne({code: buffet_pick_code});
                            if (!buffet_pick_entity) return res.status(404).json({mensaje: `Error en la orden de la tercera silla, no se encontro la seleccion de buffet con codigo ${buffet_pick_code}`});
                        }
                    }
                }

                // Fourth chair
                for(let i = 0; i < order_details.fourth_chair_order.length; i++){
                    const order_item = order_details.fourth_chair_order[i];
                    //const is_product_valid = await ProductModel.findOne({code : order_item.product_code});
                    if(order_item.is_buffet){
                        const buffet_picks = order_item.buffet_pick
                        for (let i = 0; i < buffet_picks.length; i++) {
                            const buffet_pick = buffet_picks[i];
                            const buffet_pick_code = buffet_pick.code;
                            const buffet_pick_entity = await BuffetModel.findOne({code: buffet_pick_code});
                            if (!buffet_pick_entity) return res.status(404).json({mensaje: `Error en la orden de la cuarta silla, no se encontro la seleccion de buffet con codigo ${buffet_pick_code}`});
                        }
                    }

                const entity = new OrderModel(req.body);
                const orderCreated = await entity.save();
                res.json(orderCreated);

                }
        }

        } catch (error) {
            next(error);
        }
    }

    async update(req: Request, res: Response, next: NextFunction){
        const {id} = req.params;
        if(!req.body) return res.status(404).json({mensaje: 'No se recibieron datos'});
        if(id!==req.body._id) return res.status(404).json({mensaje: 'El id no coincide'});
        try {
            if(req.body.is_bar){
                const order_details: IBarOrder = req.body.order_details;
                // Validate bar order
                for(let i = 0; i < order_details.order.length; i++){
                    const order_item = order_details.order[i];
                    //const is_product_valid = await ProductModel.findOne({code : order_item.product_code});
                    if(order_item.is_buffet){
                        //const is_valid = await this.validateOrders(order_item);
                        //if(!is_valid) return res.status(404).json({mensaje: `No se encontro la seleccion de buffet con codigo ${order_item.product_code}`});
                        const buffet_picks = order_item.buffet_pick
                        for (let i = 0; i < buffet_picks.length; i++) {
                            const buffet_pick = buffet_picks[i];
                            const buffet_pick_code = buffet_pick.code;
                            const buffet_pick_entity = await BuffetModel.findOne({code: buffet_pick_code});
                            if (!buffet_pick_entity) return res.status(404).json({mensaje: `No se encontro la seleccion de buffet con codigo ${buffet_pick_code}`});
                        }
                    }
                }
                const orderUpdated = await OrderModel.findByIdAndUpdate(id, req.body, {new: true})
                res.json(orderUpdated);
            }

            // Table order
            if(req.body.is_table){
                const order_details: ITableOrder = req.body.order_details;
                // Validate table order

                // First chair
                for(let i = 0; i < order_details.first_chair_order.length; i++){
                    const order_item = order_details.first_chair_order[i];
                    //const is_product_valid = await ProductModel.findOne({code : order_item.product_code});
                    if(order_item.is_buffet){
                        const buffet_picks = order_item.buffet_pick
                        for (let i = 0; i < buffet_picks.length; i++) {
                            const buffet_pick = buffet_picks[i];
                            const buffet_pick_code = buffet_pick.code;
                            const buffet_pick_entity = await BuffetModel.findOne({code: buffet_pick_code});
                            if (!buffet_pick_entity) return res.status(404).json({mensaje: `Error en la orden de la primera silla, no se encontro la seleccion de buffet con codigo ${buffet_pick_code}`});
                        }
                    }
                }

                // Second chair
                for(let i = 0; i < order_details.second_chair_order.length; i++){
                    const order_item = order_details.second_chair_order[i];
                    //const is_product_valid = await ProductModel.findOne({code : order_item.product_code});
                    if(order_item.is_buffet){
                        const buffet_picks = order_item.buffet_pick
                        for (let i = 0; i < buffet_picks.length; i++) {
                            const buffet_pick = buffet_picks[i];
                            const buffet_pick_code = buffet_pick.code;
                            const buffet_pick_entity = await BuffetModel.findOne({code: buffet_pick_code});
                            if (!buffet_pick_entity) return res.status(404).json({mensaje: `Error en la orden de la segunda silla, no se encontro la seleccion de buffet con codigo ${buffet_pick_code}`});
                        }
                    }
                }

                // Third chair
                for(let i = 0; i < order_details.third_chair_order.length; i++){
                    const order_item = order_details.third_chair_order[i];
                    //const is_product_valid = await ProductModel.findOne({code : order_item.product_code});
                    if(order_item.is_buffet){
                        const buffet_picks = order_item.buffet_pick
                        for (let i = 0; i < buffet_picks.length; i++) {
                            const buffet_pick = buffet_picks[i];
                            const buffet_pick_code = buffet_pick.code;
                            const buffet_pick_entity = await BuffetModel.findOne({code: buffet_pick_code});
                            if (!buffet_pick_entity) return res.status(404).json({mensaje: `Error en la orden de la tercera silla, no se encontro la seleccion de buffet con codigo ${buffet_pick_code}`});
                        }
                    }
                }

                // Fourth chair
                for(let i = 0; i < order_details.fourth_chair_order.length; i++){
                    const order_item = order_details.fourth_chair_order[i];
                    //const is_product_valid = await ProductModel.findOne({code : order_item.product_code});
                    if(order_item.is_buffet){
                        const buffet_picks = order_item.buffet_pick
                        for (let i = 0; i < buffet_picks.length; i++) {
                            const buffet_pick = buffet_picks[i];
                            const buffet_pick_code = buffet_pick.code;
                            const buffet_pick_entity = await BuffetModel.findOne({code: buffet_pick_code});
                            if (!buffet_pick_entity) return res.status(404).json({mensaje: `Error en la orden de la cuarta silla, no se encontro la seleccion de buffet con codigo ${buffet_pick_code}`});
                        }
                    }

                const orderUpdated = await OrderModel.findByIdAndUpdate(id, req.body, {new: true});
                res.json(orderUpdated);

                }
            }

        } catch (error) {
            next(error);
        }
    }

    getAll(req: Request, res: Response, next: NextFunction){
        baseController.getAll(req, res, next, OrderModel);
    }

    getOne(req: Request, res: Response, next: NextFunction){
        baseController.getOne(req, res, next, OrderModel);
    }

    delete(req: Request, res: Response, next: NextFunction){
        baseController.delete(req, res, next, OrderModel);
    }
}
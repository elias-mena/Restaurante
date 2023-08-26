import { Injectable } from '@angular/core';
import { IOrder } from 'src/Interfaces/order';
import axiosConfig from '../../axiosConfig';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor() {}

  async get() {
    const data = await axiosConfig
      .get('/orders/')
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async getById(id: string) {
    const data = await axiosConfig
      .get('/orders/' + id)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async post(item: IOrder) {
    console.log(item);
    const data = await axiosConfig
      .post('/orders/', item)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async put(id: string, item: IOrder) {
    const data = await axiosConfig
      .put('/orders/' + id, item)
      .then(function (response) {
        console.log(response);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async delete(id: string) {
    const data = await axiosConfig
      .delete('/orders/' + id)
      .then(function (response) {
        console.log(response);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  getData() {
    return Promise.resolve(this.get());
  }

  getDataById(id: string) {
    return Promise.resolve(this.getById(id));
  }

  deleteItem(id: string) {
    return Promise.resolve(this.delete(id));
  }

  add(item: IOrder) {
    return Promise.resolve(this.post(item));
  }

  modify(id: string, item: IOrder) {
    return Promise.resolve(this.put(id, item));
  }
}

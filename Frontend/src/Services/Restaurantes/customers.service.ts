import { Injectable } from '@angular/core';
import { ICustomer } from 'src/Interfaces/Customer';
import axiosConfig from '../../axiosConfig';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  constructor() {}

  async get() {
    const data = await axiosConfig
      .get('/customers/')
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
      .get('/customers/' + id)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async post(item: ICustomer) {
    console.log(item);
    const data = await axiosConfig
      .post('/customers/', item)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async put(id: string, item: ICustomer) {
    const data = await axiosConfig
      .put('/customers/' + id, item)
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
      .delete('/customers/' + id)
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

  add(item: ICustomer) {
    return Promise.resolve(this.post(item));
  }

  modify(id: string, item: ICustomer) {
    return Promise.resolve(this.put(id, item));
  }
}

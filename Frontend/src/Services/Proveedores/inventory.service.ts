import { Injectable } from '@angular/core';
import { IInventory } from 'src/Interfaces/inventory';
import axiosConfig from '../../axiosConfig';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  constructor() {}

  async get() {
    const data = await axiosConfig
      .get('/')
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
      .get('/' + id)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async post(item: IInventory) {
    console.log(item);
    const data = await axiosConfig
      .post('/', item)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async put(id: string, item: IInventory) {
    const data = await axiosConfig
      .put('/' + id, item)
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
      .delete('/' + id)
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

  add(item: IInventory) {
    return Promise.resolve(this.post(item));
  }

  modify(id: string, item: IInventory) {
    return Promise.resolve(this.put(id, item));
  }
}

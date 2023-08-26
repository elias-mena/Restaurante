import { Injectable } from '@angular/core';
import { IGasDrink } from 'src/Interfaces/gas_drink';
import axiosConfig from '../../axiosConfig';

@Injectable({
  providedIn: 'root',
})
export class GasDrinkService {
  constructor() {}

  async get() {
    const data = await axiosConfig
      .get('/gas-drinks/')
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
      .get('/gas-drinks/' + id)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async post(item: IGasDrink) {
    console.log(item);
    const data = await axiosConfig
      .post('/gas-drinks/', item)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async put(id: string, item: IGasDrink) {
    const data = await axiosConfig
      .put('/gas-drinks/' + id, item)
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
      .delete('/gas-drinks/' + id)
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

  add(item: IGasDrink) {
    return Promise.resolve(this.post(item));
  }

  modify(id: string, item: IGasDrink) {
    return Promise.resolve(this.put(id, item));
  }
}

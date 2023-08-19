import { Injectable } from '@angular/core';
import { Restaurante } from 'src/Interfaces/Administracion';
const axios = require('axios');

@Injectable({
  providedIn: 'root',
})
export class RestaurantesService {
  constructor() {}

  route = 'http://localhost:3000/restaurante/';

  config = {
    headers: {
      'api-key': '123456',
    },
  };

  async get() {
    const data = await axios
      .get(this.route)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async getById(id: string) {
    const data = await axios
      .get(this.route + id)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async post(item: Restaurante) {
    console.log(item);
    const data = await axios
      .post(this.route, item)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async put(id: string, item: Restaurante) {
    const data = await axios
      .put(this.route + id, item)
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
    const data = await axios
      .delete(this.route + id)
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

  add(item: Restaurante) {
    return Promise.resolve(this.post(item));
  }

  modify(id: string, item: Restaurante) {
    return Promise.resolve(this.put(id, item));
  }
}

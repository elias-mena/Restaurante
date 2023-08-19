import { Injectable } from '@angular/core';
import { Empleados } from 'src/Interfaces/Administracion';
const axios = require('axios');

@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {
  constructor() {}

  route = 'http://localhost:3000/empleado/';

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

  async post(item: Empleados) {
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

  async put(id: string, item: Empleados) {
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

  add(item: Empleados) {
    return Promise.resolve(this.post(item));
  }

  modify(id: string, item: Empleados) {
    return Promise.resolve(this.put(id, item));
  }
}

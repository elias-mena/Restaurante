import { Injectable } from '@angular/core';
import { Usuarios } from 'src/Interfaces/Seguridad';
import { LoginInformation } from 'src/Interfaces/Auth';
import axiosConfig from '../../axiosConfig';

const axios = require('axios');

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor() {}

  route = 'http://localhost:3000/usuario/';

  async login(item: LoginInformation) {
    const data = await axiosConfig
      .post('/auth/login', item)
      .then(function (response) {
        console.log(response);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

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

  async getByUsername(user: string) {
    const data = await axios
      .get('http://localhost:3000/usuarioByUsername/' + user)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async post(item: Usuarios) {
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

  async put(id: string, item: Usuarios) {
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

  getDataByUsername(user: string) {
    return Promise.resolve(this.getByUsername(user));
  }

  deleteItem(id: string) {
    return Promise.resolve(this.delete(id));
  }

  add(item: Usuarios) {
    return Promise.resolve(this.post(item));
  }

  modify(id: string, item: Usuarios) {
    return Promise.resolve(this.put(id, item));
  }

  userLogin(loginInformation: LoginInformation) {
    return Promise.resolve(this.login(loginInformation));
  }
}

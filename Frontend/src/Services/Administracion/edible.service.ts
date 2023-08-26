import { Injectable } from '@angular/core';
import { IEdible } from 'src/Interfaces/edible';
import axiosConfig from '../../axiosConfig';

@Injectable({
  providedIn: 'root',
})
export class EdibleService {
  constructor() {}

  async get() {
    const data = await axiosConfig
      .get('/edibles/')
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
      .get('/edibles/' + id)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async post(item: IEdible) {
    console.log(item);
    const data = await axiosConfig
      .post('/edibles/', item)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async put(id: string, item: IEdible) {
    const data = await axiosConfig
      .put('/edibles/' + id, item)
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
      .delete('/edibles/' + id)
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

  add(item: IEdible) {
    return Promise.resolve(this.post(item));
  }

  modify(id: string, item: IEdible) {
    return Promise.resolve(this.put(id, item));
  }
}

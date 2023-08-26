import { Injectable } from '@angular/core';
import { IBrand } from 'src/Interfaces/brand';
import axiosConfig from '../../axiosConfig';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  constructor() {}

  async get() {
    const data = await axiosConfig
      .get('/brands/')
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
      .get('/brands/' + id)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async post(item: IBrand) {
    console.log(item);
    const data = await axiosConfig
      .post('/brands/', item)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async put(id: string, item: IBrand) {
    const data = await axiosConfig
      .put('/brands/' + id, item)
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
      .delete('/brands/' + id)
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

  add(item: IBrand) {
    return Promise.resolve(this.post(item));
  }

  modify(id: string, item: IBrand) {
    return Promise.resolve(this.put(id, item));
  }
}

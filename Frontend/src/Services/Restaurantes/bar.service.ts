import { Injectable } from '@angular/core';
import { IBar } from 'src/Interfaces/bar';
import axiosConfig from '../../axiosConfig';

@Injectable({
  providedIn: 'root',
})
export class BarService {
  constructor() {}

  async get() {
    const data = await axiosConfig
      .get('/bar/')
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
      .get('/bar/' + id)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async post(item: IBar) {
    console.log(item);
    const data = await axiosConfig
      .post('/bar/', item)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async put(id: string, item: IBar) {
    const data = await axiosConfig
      .put('/bar/' + id, item)
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
      .delete('/bar/' + id)
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

  add(item: IBar) {
    return Promise.resolve(this.post(item));
  }

  modify(id: string, item: IBar) {
    return Promise.resolve(this.put(id, item));
  }
}

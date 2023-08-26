import { Injectable } from '@angular/core';
import { IBinnacle } from 'src/Interfaces/binnacle';
import axiosConfig from '../../axiosConfig';

@Injectable({
  providedIn: 'root',
})
export class BinnacleService {
  constructor() {}

  async get() {
    const data = await axiosConfig
      .get('/binnacle/')
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
      .get('/binnacle/' + id)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async post(item: IBinnacle) {
    console.log(item);
    const data = await axiosConfig
      .post('/binnacle/', item)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async put(id: string, item: IBinnacle) {
    const data = await axiosConfig
      .put('/binnacle/' + id, item)
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
      .delete('/binnacle/' + id)
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

  add(item: IBinnacle) {
    return Promise.resolve(this.post(item));
  }

  modify(id: string, item: IBinnacle) {
    return Promise.resolve(this.put(id, item));
  }
}

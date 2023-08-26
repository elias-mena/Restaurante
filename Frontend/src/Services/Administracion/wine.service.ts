import { Injectable } from '@angular/core';
import { IWine } from 'src/Interfaces/wine';
import axiosConfig from '../../axiosConfig';

@Injectable({
  providedIn: 'root',
})
export class WineService {
  constructor() {}

  async get() {
    const data = await axiosConfig
      .get('/wines/')
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
      .get('/wines/' + id)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async post(item: IWine) {
    console.log(item);
    const data = await axiosConfig
      .post('/wines/', item)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async put(id: string, item: IWine) {
    const data = await axiosConfig
      .put('/wines/' + id, item)
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
      .delete('/wines/' + id)
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

  add(item: IWine) {
    return Promise.resolve(this.post(item));
  }

  modify(id: string, item: IWine) {
    return Promise.resolve(this.put(id, item));
  }
}

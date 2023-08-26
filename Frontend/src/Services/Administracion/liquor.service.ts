import { Injectable } from '@angular/core';
import { ILiquor } from 'src/Interfaces/liquor';
import axiosConfig from '../../axiosConfig';

@Injectable({
  providedIn: 'root',
})
export class LiquorService {
  constructor() {}

  async get() {
    const data = await axiosConfig
      .get('/liquors/')
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
      .get('/liquors/' + id)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async post(item: ILiquor) {
    console.log(item);
    const data = await axiosConfig
      .post('/liquors/', item)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async put(id: string, item: ILiquor) {
    const data = await axiosConfig
      .put('/liquors/' + id, item)
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
      .delete('/liquors/' + id)
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

  add(item: ILiquor) {
    return Promise.resolve(this.post(item));
  }

  modify(id: string, item: ILiquor) {
    return Promise.resolve(this.put(id, item));
  }
}

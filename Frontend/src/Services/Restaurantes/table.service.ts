import { Injectable } from '@angular/core';
import { ITable } from 'src/Interfaces/table';
import axiosConfig from '../../axiosConfig';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  constructor() {}

  async get() {
    const data = await axiosConfig
      .get('/table/')
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
      .get('/table/' + id)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async post(item: ITable) {
    console.log(item);
    const data = await axiosConfig
      .post('/table/', item)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async put(id: string, item: ITable) {
    const data = await axiosConfig
      .put('/table/' + id, item)
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
      .delete('/table/' + id)
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

  add(item: ITable) {
    return Promise.resolve(this.post(item));
  }

  modify(id: string, item: ITable) {
    return Promise.resolve(this.put(id, item));
  }
}

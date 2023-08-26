import { Injectable } from '@angular/core';
import { ICleaning } from 'src/Interfaces/cleaning';
import axiosConfig from '../../axiosConfig';

@Injectable({
  providedIn: 'root',
})
export class CleaningService {
  constructor() {}

  async get() {
    const data = await axiosConfig
      .get('/cleaning/')
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
      .get('/cleaning/' + id)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async post(item: ICleaning) {
    console.log(item);
    const data = await axiosConfig
      .post('/cleaning/', item)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async put(id: string, item: ICleaning) {
    const data = await axiosConfig
      .put('/cleaning/' + id, item)
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
      .delete('/cleaning/' + id)
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

  add(item: ICleaning) {
    return Promise.resolve(this.post(item));
  }

  modify(id: string, item: ICleaning) {
    return Promise.resolve(this.put(id, item));
  }
}

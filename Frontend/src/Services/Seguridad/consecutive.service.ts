import { Injectable } from '@angular/core';
import { IConsecutive } from 'src/Interfaces/consecutive';
import axiosConfig from '../../axiosConfig';

@Injectable({
  providedIn: 'root',
})
export class BinnacleService {
  constructor() {}

  async get() {
    const data = await axiosConfig
      .get('/consecutives/')
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
      .get('/consecutives/' + id)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async post(item: IConsecutive) {
    console.log(item);
    const data = await axiosConfig
      .post('/consecutives/', item)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async put(id: string, item: IConsecutive) {
    const data = await axiosConfig
      .put('/consecutives/' + id, item)
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
      .delete('/consecutives/' + id)
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

  add(item: IConsecutive) {
    return Promise.resolve(this.post(item));
  }

  modify(id: string, item: IConsecutive) {
    return Promise.resolve(this.put(id, item));
  }
}

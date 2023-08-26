import { Injectable } from '@angular/core';
import { ICountry } from 'src/Interfaces/country';
import axiosConfig from '../../axiosConfig';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor() {}

  async get() {
    const data = await axiosConfig
      .get('/countries/')
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
      .get('/countries/' + id)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async post(item: ICountry) {
    console.log(item);
    const data = await axiosConfig
      .post('/countries/', item)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async put(id: string, item: ICountry) {
    const data = await axiosConfig
      .put('/countries/' + id, item)
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
      .delete('/countries/' + id)
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

  add(item: ICountry) {
    return Promise.resolve(this.post(item));
  }

  modify(id: string, item: ICountry) {
    return Promise.resolve(this.put(id, item));
  }
}

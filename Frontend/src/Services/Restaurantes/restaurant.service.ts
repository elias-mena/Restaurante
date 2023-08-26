import { Injectable } from '@angular/core';
import { IRestaurant } from 'src/Interfaces/restaurant';
import axiosConfig from '../../axiosConfig';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor() {}

  async get() {
    const data = await axiosConfig
      .get('/restaurant/')
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
      .get('/restaurant/' + id)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async post(item: IRestaurant) {
    console.log(item);
    const data = await axiosConfig
      .post('/restaurant/', item)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async put(id: string, item: IRestaurant) {
    const data = await axiosConfig
      .put('/restaurant/' + id, item)
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
      .delete('/restaurant/' + id)
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

  add(item: IRestaurant) {
    return Promise.resolve(this.post(item));
  }

  modify(id: string, item: IRestaurant) {
    return Promise.resolve(this.put(id, item));
  }
}

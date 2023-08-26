import { Injectable } from '@angular/core';
import { IMeasureUnit } from 'src/Interfaces/measure_unit';
import axiosConfig from '../../axiosConfig';

@Injectable({
  providedIn: 'root',
})
export class MeasureUnitService {
  constructor() {}

  async get() {
    const data = await axiosConfig
      .get('/measure_units/')
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
      .get('/measure_units/' + id)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async post(item: IMeasureUnit) {
    console.log(item);
    const data = await axiosConfig
      .post('/measure_units/', item)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async put(id: string, item: IMeasureUnit) {
    const data = await axiosConfig
      .put('/measure_units/' + id, item)
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
      .delete('/measure_units/' + id)
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

  add(item: IMeasureUnit) {
    return Promise.resolve(this.post(item));
  }

  modify(id: string, item: IMeasureUnit) {
    return Promise.resolve(this.put(id, item));
  }
}

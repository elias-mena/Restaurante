import { Injectable } from '@angular/core';
import { IEmployee } from 'src/Interfaces/employee';
import axiosConfig from '../../axiosConfig';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}

  async get() {
    const data = await axiosConfig
      .get('/employees/')
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
      .get('/employees/' + id)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async post(item: IEmployee) {
    console.log(item);
    const data = await axiosConfig
      .post('/employees/', item)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async put(id: string, item: IEmployee) {
    const data = await axiosConfig
      .put('/employees/' + id, item)
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
      .delete('/employees/' + id)
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

  add(item: IEmployee) {
    return Promise.resolve(this.post(item));
  }

  modify(id: string, item: IEmployee) {
    return Promise.resolve(this.put(id, item));
  }
}

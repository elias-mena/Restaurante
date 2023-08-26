import { Injectable } from '@angular/core';
import { LoginInformation } from 'src/Interfaces/Auth';
import axiosConfig from '../../axiosConfig';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  async login(item: LoginInformation) {
    const data = await axiosConfig
      .post('/auth/login', item)
      .then(function (response) {
        console.log(response);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async recoverPassword(email: string) {
    const data = await axiosConfig
      .post('/auth/recover-password/', email)
      .then(function (response) {
        console.log(response);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  userLogin(loginInformation: LoginInformation) {
    return Promise.resolve(this.login(loginInformation));
  }

  userrecoverPassword(email: string) {
    return Promise.resolve(this.recoverPassword(email));
  }
}

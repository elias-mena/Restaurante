import { Injectable } from '@angular/core';
import {
  Bebidas,
  Buffet,
  Especialidades,
  Gaseosas,
  Licores,
  Vinos,
} from 'src/Interfaces/Administracion';
const axios = require('axios');

interface ProductosMenu {
  nombreProducto: string;
  precio: number;
  categoria: string;
}

@Injectable({
  providedIn: 'root',
})
export class EspecialesService {
  constructor() {}

  route = 'http://localhost:3000/bebida/';
  routeBuffet = 'http://localhost:3000/buffet/';

  config = {
    headers: {
      'api-key': '123456',
    },
  };

  async getBebida() {
    const data = await axios
      .get(this.route)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async getBebidaById(id: string) {
    const data = await axios
      .get(this.route + id)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async getBebidaByRestaurante(id: string) {
    const data = await axios
      .get('http://localhost:3000/bebidaByRestaurante/' + id)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async postBebida(item: Bebidas) {
    console.log(item);
    const data = await axios
      .post(this.route, item)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async putBebida(id: string, item: Bebidas) {
    const data = await axios
      .put(this.route + id, item)
      .then(function (response) {
        console.log(response);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async deleteBebida(id: string) {
    const data = await axios
      .delete(this.route + id)
      .then(function (response) {
        console.log(response);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  getDataBebida() {
    return Promise.resolve(this.getBebida());
  }

  getDataByIdBebida(id: string) {
    return Promise.resolve(this.getBebidaById(id));
  }

  getDataByIdRestauranteBebida(id: string) {
    return Promise.resolve(this.getBebidaByRestaurante(id));
  }

  deleteItemBebida(id: string) {
    return Promise.resolve(this.deleteBebida(id));
  }

  addBebida(item: Bebidas) {
    return Promise.resolve(this.postBebida(item));
  }

  modifyBebida(id: string, item: Bebidas) {
    return Promise.resolve(this.putBebida(id, item));
  }

  async getMenu(idRestaurante: string) {
    var Menu: ProductosMenu[] = [];
    var newMenu;

    const bebidasMenu = await this.getBebidaByRestaurante(idRestaurante);

    var beb = bebidasMenu.map(({ nombre, precio }) => ({
      nombreProducto: nombre,
      precio: precio,
      categoria: 'Bebidas',
    }));

    Menu = beb;

    const buffetMenu = await this.getBuffetByRestaurante(idRestaurante);

    var buff = buffetMenu.map(({ nombre, precio }) => ({
      nombreProducto: nombre,
      precio: precio,
      categoria: 'Buffet',
    }));

    newMenu = Menu.concat(buff);

    const especialidadesMenu = await this.getEspecialidesByRestaurante(
      idRestaurante
    );

    var esp = especialidadesMenu.map(({ nombrePlatillo, precio }) => ({
      nombreProducto: nombrePlatillo,
      precio: precio,
      categoria: 'Especialidades',
    }));

    newMenu = Menu.concat(esp);

    const gaseosasMenu = await this.getGaseosasByRestaurante(idRestaurante);

    var gase = gaseosasMenu.map(({ nombre, precio }) => ({
      nombreProducto: nombre,
      precio: precio,
      categoria: 'Gaseosas',
    }));

    newMenu = Menu.concat(gase);

    const licoresMenu = await this.getLicoresByRestaurante(idRestaurante);

    var licors = licoresMenu.map(({ nombre, precioUnitario }) => ({
      nombreProducto: nombre,
      precio: precioUnitario,
      categoria: 'Licores',
    }));

    newMenu = Menu.concat(licors);

    return newMenu;
  }

  getFullMenu(idRestaurante: string) {
    return Promise.resolve(this.getMenu(idRestaurante));
  }

  async getBuffetById(id: string) {
    const data = await axios
      .get(this.routeBuffet + id)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async getBuffetByRestaurante(id: string) {
    const data = await axios
      .get('http://localhost:3000/buffetByRestaurante/' + id)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async postBuffet(item: Buffet) {
    console.log(item);
    const data = await axios
      .post(this.routeBuffet, item)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async putBuffet(id: string, item: Buffet) {
    const data = await axios
      .put(this.routeBuffet + id, item)
      .then(function (response) {
        console.log(response);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async deleteBuffet(id: string) {
    const data = await axios
      .delete(this.routeBuffet + id)
      .then(function (response) {
        console.log(response);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async getBuffet() {
    const data = await axios
      .get(this.routeBuffet)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  getDataBuffet() {
    return Promise.resolve(this.getBuffet());
  }

  getDataByIdBuffet(id: string) {
    return Promise.resolve(this.getBuffetById(id));
  }

  getDataByIdRestauranteBuffet(id: string) {
    return Promise.resolve(this.getBuffetByRestaurante(id));
  }

  deleteItemBuffet(id: string) {
    return Promise.resolve(this.deleteBuffet(id));
  }

  addBuffet(item: Buffet) {
    return Promise.resolve(this.postBuffet(item));
  }

  modifyBuffet(id: string, item: Buffet) {
    return Promise.resolve(this.putBuffet(id, item));
  }

  routeEspecialidades = 'http://localhost:3000/especialidad/';

  async getEspecialidades() {
    const data = await axios
      .get(this.routeEspecialidades)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async getEspecialidadesById(id: string) {
    const data = await axios
      .get(this.routeEspecialidades + id)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async getEspecialidesByRestaurante(id: string) {
    const data = await axios
      .get('http://localhost:3000/especilidadByRestaurante/' + id)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async postEspecialidades(item: Especialidades) {
    console.log(item);
    const data = await axios
      .post(this.routeEspecialidades, item)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async putEspecialidades(id: string, item: Especialidades) {
    const data = await axios
      .put(this.routeEspecialidades + id, item)
      .then(function (response) {
        console.log(response);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async deleteEspecialidades(id: string) {
    const data = await axios
      .delete(this.routeEspecialidades + id)
      .then(function (response) {
        console.log(response);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  getDataEspecialidades() {
    return Promise.resolve(this.getEspecialidades());
  }

  getDataByIdEspecialidades(id: string) {
    return Promise.resolve(this.getEspecialidadesById(id));
  }

  getDataByIdRestauranteEspecialidades(id: string) {
    return Promise.resolve(this.getEspecialidesByRestaurante(id));
  }

  deleteItemEspecialidades(id: string) {
    return Promise.resolve(this.deleteEspecialidades(id));
  }

  addEspecialidades(item: Especialidades) {
    return Promise.resolve(this.postEspecialidades(item));
  }

  modifyEspecialidades(id: string, item: Especialidades) {
    return Promise.resolve(this.putEspecialidades(id, item));
  }

  routeGaseosas = 'http://localhost:3000/gaseosa/';

  async getGaseosa() {
    const data = await axios
      .get(this.routeGaseosas)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async getByIdGaseosa(id: string) {
    const data = await axios
      .get(this.routeGaseosas + id)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async getGaseosasByRestaurante(id: string) {
    const data = await axios
      .get('http://localhost:3000/gaseosaByRestaurante/' + id)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async postGaseosa(item: Gaseosas) {
    console.log(item);
    const data = await axios
      .post(this.routeGaseosas, item)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async putGaseosa(id: string, item: Gaseosas) {
    const data = await axios
      .put(this.routeGaseosas + id, item)
      .then(function (response) {
        console.log(response);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async deleteGaseosa(id: string) {
    const data = await axios
      .delete(this.routeGaseosas + id)
      .then(function (response) {
        console.log(response);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  getDataGaseosa() {
    return Promise.resolve(this.getGaseosa());
  }

  getDataByIdGaseosa(id: string) {
    return Promise.resolve(this.getByIdGaseosa(id));
  }
  getDataByIdRestauranteGaseosa(id: string) {
    return Promise.resolve(this.getGaseosasByRestaurante(id));
  }

  deleteItemGaseosa(id: string) {
    return Promise.resolve(this.deleteGaseosa(id));
  }

  addGaseosa(item: Gaseosas) {
    return Promise.resolve(this.postGaseosa(item));
  }

  modifyGaseosa(id: string, item: Gaseosas) {
    return Promise.resolve(this.putGaseosa(id, item));
  }

  routeLicores = 'http://localhost:3000/licor/';

  async getLicores() {
    const data = await axios
      .get(this.routeLicores)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async getByIdLicores(id: string) {
    const data = await axios
      .get(this.routeLicores + id)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async getLicoresByRestaurante(id: string) {
    const data = await axios
      .get('http://localhost:3000/licorByRestaurante/' + id)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async postLicores(item: Licores) {
    console.log(item);
    const data = await axios
      .post(this.routeLicores, item)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async putLicores(id: string, item: Licores) {
    const data = await axios
      .put(this.routeLicores + id, item)
      .then(function (response) {
        console.log(response);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async deleteLicores(id: string) {
    const data = await axios
      .delete(this.routeLicores + id)
      .then(function (response) {
        console.log(response);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  getDataLicores() {
    return Promise.resolve(this.getLicores());
  }

  getDataByIdLicores(id: string) {
    return Promise.resolve(this.getByIdLicores(id));
  }

  getDataByIdRestauranteLicor(id: string) {
    return Promise.resolve(this.getLicoresByRestaurante(id));
  }

  deleteItemLicores(id: string) {
    return Promise.resolve(this.deleteLicores(id));
  }

  addLicores(item: Licores) {
    return Promise.resolve(this.postLicores(item));
  }

  modifyLicores(id: string, item: Licores) {
    return Promise.resolve(this.putLicores(id, item));
  }

  routeVinos = 'http://localhost:3000/vino/';

  async getVinos() {
    const data = await axios
      .get(this.routeVinos)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async getByIdVinos(id: string) {
    const data = await axios
      .get(this.routeVinos + id)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async getVinosByRestaurante(id: string) {
    const data = await axios
      .get('http://localhost:3000/vinoByRestaurante/' + id)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async postVinos(item: Vinos) {
    console.log(item);
    const data = await axios
      .post(this.routeVinos, item)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async putVinos(id: string, item: Vinos) {
    const data = await axios
      .put(this.routeVinos + id, item)
      .then(function (response) {
        console.log(response);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  async deleteVinos(id: string) {
    const data = await axios
      .delete(this.routeVinos + id)
      .then(function (response) {
        console.log(response);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }

  getDataVinos() {
    return Promise.resolve(this.getVinos());
  }

  getDataByIdVinos(id: string) {
    return Promise.resolve(this.getByIdVinos(id));
  }

  getDataByIdRestauranteVino(id: string) {
    return Promise.resolve(this.getVinosByRestaurante(id));
  }

  deleteItemVinos(id: string) {
    return Promise.resolve(this.deleteVinos(id));
  }

  addVinos(item: Vinos) {
    return Promise.resolve(this.postVinos(item));
  }

  modifyVinos(id: string, item: Vinos) {
    return Promise.resolve(this.putVinos(id, item));
  }
}

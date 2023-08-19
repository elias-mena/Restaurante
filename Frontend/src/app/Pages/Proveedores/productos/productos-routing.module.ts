import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComestiblesComponent } from './comestibles.component';
import { LimpiezaComponent } from './limpieza.component';
import { ProductosComponent } from './productos.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'Comestibles', component: ComestiblesComponent },
      { path: 'Limpieza', component: LimpiezaComponent },
      { path: 'Productos', component: ProductosComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class ProductosRoutingModule {}

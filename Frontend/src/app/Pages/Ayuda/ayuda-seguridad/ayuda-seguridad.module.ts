import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AyudaSeguridadRoutingModule } from './ayuda-seguridad-routing.module';
import { AyudaSeguridadComponent } from './ayuda-seguridad.component';

@NgModule({
  declarations: [AyudaSeguridadComponent],
  imports: [CommonModule, AyudaSeguridadRoutingModule],
})
export class AyudaSeguridadModule {}

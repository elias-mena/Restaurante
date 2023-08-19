import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarMenuComponent } from './Layout/side-bar-menu/side-bar-menu.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { TopBarMenuComponent } from './Layout/top-bar-menu/top-bar-menu.component';
import { AppMenuitemComponent } from './Layout/menu-item/menu-item.component';
import { LayoutComponent } from './Layout/layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SideBarMenuComponent,
    FooterComponent,
    TopBarMenuComponent,
    AppMenuitemComponent,
    LayoutComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

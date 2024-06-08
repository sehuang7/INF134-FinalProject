import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HandsfreeComponent } from './handsfree/handsfree.component';

import { AddGroceriesComponent } from './modals/add-groceries/add-groceries.component';
import { UpdateGroceriesComponent } from './modals/update-groceries/update-groceries.component';

@NgModule({
  declarations: [AppComponent, HandsfreeComponent, AddGroceriesComponent, UpdateGroceriesComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

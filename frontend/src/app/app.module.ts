import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AccesoriosComponent } from './components/accesorios/accesorios.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ComprarComponent } from './components/comprar/comprar.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { TiendaComponent } from './components/tienda/tienda.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccesoriosComponent,
    CarouselComponent,
    ComprarComponent,
    ContactoComponent,
    TiendaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

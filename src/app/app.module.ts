import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from 'angular2-google-maps/core';

//rutas
import { APP_ROUTING } from './app.routes';

//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PropiedadesComponent } from './components/propiedades/propiedades.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { SuscripcionComponent } from './components/suscripcion/suscripcion.component';
import { AdminComponent } from './components/admin/admin.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { DetallePropiedadComponent } from './components/detalle-propiedad/detalle-propiedad.component';
import { AgregarPropiedadComponent } from './components/agregar-propiedad/agregar-propiedad.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PropiedadesComponent,
    NosotrosComponent,
    SuscripcionComponent,
    AdminComponent,
    FooterComponent,
    LoginComponent,
    DetallePropiedadComponent,
    AgregarPropiedadComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBz1OSYyNdZVbg6w7b7E6PwJk_COKZh_wY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

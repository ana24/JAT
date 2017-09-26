import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { PropiedadesComponent } from './components/propiedades/propiedades.component';
import { SuscripcionComponent } from './components/suscripcion/suscripcion.component';
import { LoginComponent } from './components/login/login.component';
import { DetallePropiedadComponent } from './components/detalle-propiedad/detalle-propiedad.component';
import { AgregarPropiedadComponent } from './components/agregar-propiedad/agregar-propiedad.component';
import { AdminComponent } from './components/admin/admin.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'propiedades', component: PropiedadesComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'suscripcion', component: SuscripcionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'propiedades/:detallePropiedad', component: DetallePropiedadComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/:agregarPropiedad', component: AgregarPropiedadComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true} );

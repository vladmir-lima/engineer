import { ClienteComponent } from './cliente.component';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: ClienteComponent
  }
];

export const routing = RouterModule.forChild(routes);

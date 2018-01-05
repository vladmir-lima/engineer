import { RegistersComponent } from './registers.component';
import { CustomerComponent } from './customer/customer.component';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: RegistersComponent,
    children: [
      { path: 'customer', component: CustomerComponent }      
    ]
  }
];

export const routing = RouterModule.forChild(routes);

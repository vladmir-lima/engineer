import { RegistersComponent } from './registers.component';

import { ListCostumerComponent } from './customer/listcostumer/listcostumer.component';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: RegistersComponent,
    children: [
      { path: 'customer', component: ListCostumerComponent }      
    ]
  }
];

export const routing = RouterModule.forChild(routes);

import {RegistersComponent} from './registers.component';

import {ListCostumerComponent} from './customer/list/listcostumer.component';
import {RegisterCustomerComponent} from './customer/register/register.component';
import { ListDynamicComponent } from './dynamic-domain-form/list/list.dynamic.component';
import {DynamicRootFormComponent} from './dynamic-domain-form/register/dynamic.root.form.component';
import {Routes, RouterModule} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: RegistersComponent,
    children: [
      {path: 'list-customer', component: ListCostumerComponent},
      {path: 'register-costumer', component: RegisterCustomerComponent},
      {path: 'update-costumer/:id', component: RegisterCustomerComponent},
      {path: 'list-expense', component: ListDynamicComponent}
    ]
  }
];

export const routing = RouterModule.forChild(routes);

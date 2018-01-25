import {RegistersComponent} from './registers.component';

import {ListCostumerComponent} from './customer/list/listcostumer.component';
import {RegisterCustomerComponent} from './customer/register/register.component';
import {DymanicDomainEnum} from './dynamic-domain-form/components/dymanic.domain.enum';
import {ListDynamicComponent} from './dynamic-domain-form/list/list.dynamic.component';
import { DynamicDomainComponent } from './dynamic-domain-form/register/dynamic.domain.component';
import {Routes, RouterModule} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: RegistersComponent,
    children: [
      {path: 'list-customer', component: ListCostumerComponent},
      {path: 'register-costumer', component: RegisterCustomerComponent},
      {path: 'update-costumer/:id', component: RegisterCustomerComponent},
      {path: 'list-expense', component: ListDynamicComponent, data: {domainType: DymanicDomainEnum.EXPENSE}},
      {path: 'update-expense/:id', component: DynamicDomainComponent},
      {path: 'register-expense', component: DynamicDomainComponent},
      {path: 'list-service', component: ListDynamicComponent, data: {domainType: DymanicDomainEnum.SERVICE}},
      {path: 'update-sevice/:id', component: DynamicDomainComponent},
      {path: 'register-service', component: DynamicDomainComponent}
    ]
  }
];

export const routing = RouterModule.forChild(routes);

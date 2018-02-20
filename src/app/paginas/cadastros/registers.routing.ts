import {RegistersComponent} from './registers.component';

import {ListCostumerComponent} from './customer/list/listcostumer.component';
import {RegisterCustomerComponent} from './customer/register/register.component';
import {DymanicDomainEnum} from './dynamic-domain-form/components/dymanic.domain.enum';
import {ListDynamicComponent} from './dynamic-domain-form/list/list.dynamic.component';
import {DynamicDomainComponent} from './dynamic-domain-form/register/dynamic.domain.component';
import {ListWorkComponent} from './work/list/list.work.component';
import {WorkComponent} from './work/register/work.component';
import {Routes, RouterModule} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: RegistersComponent,
    children: [
      {path: 'lista-clientes', component: ListCostumerComponent},
      {path: 'cadastro-cliente', component: RegisterCustomerComponent},
      {path: 'cadastro-cliente/:id', component: RegisterCustomerComponent},
      {path: 'lista-despesas', component: ListDynamicComponent, data: {tipo: DymanicDomainEnum.EXPENSE}},
      {path: 'cadastro-dinamico/:id', component: DynamicDomainComponent},
      {path: 'cadastro-dinamico', component: DynamicDomainComponent},
      {path: 'lista-servicos', component: ListDynamicComponent, data: {tipo: DymanicDomainEnum.SERVICE}},
      {path: 'lista-obras', component: ListWorkComponent},
      {path: 'cadastro-obra', component: WorkComponent},
      {path: 'cadastro-obra/:id', component: WorkComponent}
    ]
  }
];

export const routing = RouterModule.forChild(routes);

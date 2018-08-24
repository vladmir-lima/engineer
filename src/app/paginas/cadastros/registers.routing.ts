import { ChartistJs } from './charts/components/chartistJs';
import {RegistersComponent} from './registers.component';
import {ListCostumerComponent} from './customer/list';
import {RegisterCustomerComponent} from './customer/register';
import {DymanicDomainEnum} from './dynamic-domain-form/components';
import {ListDynamicComponent} from './dynamic-domain-form/list';
import {DynamicDomainComponent} from './dynamic-domain-form/register';
import {ListExpenseCustomerComponent} from './expense-customer/list';
import {ExpenseCustomerComponent} from './expense-customer/register';
import {ListWorkComponent} from './work/list';
import {WorkComponent} from './work/register';
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
      {path: 'charts/chartist-js', component: ChartistJs},
      {path: 'cadastro-obra', component: WorkComponent},
      {path: 'cadastro-obra/:id', component: WorkComponent},
      {path: 'lista-despesas-obra', component: ListExpenseCustomerComponent},
      {path: 'cadastro-despesas-obra', component: ExpenseCustomerComponent},
      {path: 'cadastro-despesas-obra/:id', component: ExpenseCustomerComponent}
    ]
  }
];

export const routing = RouterModule.forChild(routes);

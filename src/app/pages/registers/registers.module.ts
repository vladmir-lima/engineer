
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {DataTableModule} from "angular2-datatable";
import {HttpModule} from "@angular/http";
import {DataFilterPipe} from './components/filter/data-filter.pipe';
import {HotTable, HotTableModule} from 'ng2-handsontable';
import {NgModule} from '@angular/core';
import {NgaModule} from '../../theme/nga.module';
import {ShowErrorsComponent} from '../components/show-errors/show-errors.component';
import {NumberOnlyDirective} from '../directives/numberonly.directive';
import {AddressComponent} from './address/address.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {routing} from './registers.routing';
import {RegistersComponent} from './registers.component';
import {CustomerService} from './customer/service/customer.service';
import {ListCostumerComponent} from './customer/list/listcostumer.component';
import {RegisterCustomerComponent} from './customer/register/register.component';
import {DynamicService} from './dynamic-domain-form/service/dynamic.service';
import {ListDynamicComponent} from './dynamic-domain-form/list/list.dynamic.component';
import {DynamicDomainComponent} from './dynamic-domain-form/register/dynamic.domain.component';
import {ListWorkComponent} from './work/list/list.work.component';
import {WorkComponent} from './work/register/work.component';
import {WorkService} from './work/service/work.service';
import {NgxMaskModule} from 'ngx-mask'


@NgModule({
  imports: [
    NgaModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    routing,
    Ng2SmartTableModule,
    DataTableModule,
    HttpModule,
    HotTableModule,
    NgxMaskModule
  ],
  declarations: [
    RegistersComponent,  
    NumberOnlyDirective,
    DataFilterPipe,
    ListCostumerComponent,
    RegisterCustomerComponent,
    ShowErrorsComponent,
    AddressComponent,
    ListDynamicComponent,
    DynamicDomainComponent,
    WorkComponent,
    ListWorkComponent

  ],
  providers: [
    CustomerService,
    DynamicService,
    WorkService
  ]
})
export class RegistersModule {
}

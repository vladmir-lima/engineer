
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {DataTableModule} from "angular2-datatable";
import {HttpModule} from "@angular/http";
import {DataFilterPipe} from './customer/filter/data-filter.pipe';
import {HotTable, HotTableModule} from 'ng2-handsontable';

import {NgModule} from '@angular/core';
import {NgaModule} from '../../theme/nga.module';
import {ShowErrorsComponent} from '../components/show-errors/show-errors.component';
import {MaskDirective} from '../directives/mask.directive';
import {NumberOnlyDirective} from '../directives/numberonly.directive';
import { AddressComponent } from './address/address.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {routing} from './registers.routing';
import {RegistersComponent} from './registers.component';

import {CustomerService} from './customer/service/customer.service';
import {ListCostumerComponent} from './customer/list/listcostumer.component';
import {RegisterCustomerComponent} from './customer/register/register.component';
import { DynamicControlService } from './dynamic-domain-form/service/dynamic-control-service';
import {DynamicFormControlComponent} from './dynamic-domain-form/register/dynamic-domain-control-form-component';
import {DynamicDomainFormComponent} from './dynamic-domain-form/register/dynamic-domain-form.component';
import {DynamicRootFormComponent} from './dynamic-domain-form/register/dynamic-root-form.component';
import { DynamicService } from './dynamic-domain-form/service/dynamic.service';


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
    HotTableModule
  ],
  declarations: [
    RegistersComponent,
    MaskDirective,
    NumberOnlyDirective,
    DataFilterPipe,
    ListCostumerComponent,
    RegisterCustomerComponent,
    ShowErrorsComponent,
    DynamicDomainFormComponent,
    DynamicFormControlComponent,
    DynamicRootFormComponent,
    AddressComponent
  ],
  providers: [
    CustomerService,
    DynamicControlService,
    DynamicService
  ]
})
export class RegistersModule {
}

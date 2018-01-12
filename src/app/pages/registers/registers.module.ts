
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {DataTableModule} from "angular2-datatable";
import {HttpModule} from "@angular/http";
import {DataFilterPipe} from './customer/filter/data-filter.pipe';
import {HotTable, HotTableModule} from 'ng2-handsontable';

import {NgModule} from '@angular/core';
import {NgaModule} from '../../theme/nga.module';
import {MaskDirective} from '../directives/mask.directive';
import {NumberOnlyDirective} from '../directives/numberonly.directive';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {routing} from './registers.routing';
import {CustomerComponent} from './customer/customer.component';
import {RegistersComponent} from './registers.component';

import {CustomerService} from './customer/service/customer.service';
import {ListCostumerComponent} from './customer/listcostumer/listcostumer.component';



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
    CustomerComponent,
    RegistersComponent,
    MaskDirective,
    NumberOnlyDirective,
    DataFilterPipe,
    ListCostumerComponent
  ],
  providers: [
    CustomerService
  ]
})
export class RegistersModule {
}

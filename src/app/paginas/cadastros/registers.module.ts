
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {DataTableModule} from "angular2-datatable";
import {HttpModule} from "@angular/http";
import {DataFilterPipe} from './components/filter/data-filter.pipe';
import {HotTable, HotTableModule} from 'ng2-handsontable';
import {NgModule, LOCALE_ID} from '@angular/core';
import {NgaModule} from '../../theme/nga.module';
import {ShowErrorsComponent} from '../components/show-errors';
import {NumberOnlyDirective} from '../directives/numberonly.directive';
import {AddressComponent} from './address';
import {AlertComponent} from './components/alert/component';
import {AlertService} from './components/alert/service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {routing} from './registers.routing';
import {RegistersComponent} from './';
import {CustomerService} from './customer/service';
import {ListCostumerComponent} from './customer/list';
import {RegisterCustomerComponent} from './customer/register';
import {DynamicService} from './dynamic-domain-form/service';
import {ListDynamicComponent} from './dynamic-domain-form/list';
import {DynamicDomainComponent} from './dynamic-domain-form/register';
import {ListExpenseCustomerComponent, CustomListExpenseCustomerComponent} from './expense-customer/list';
import {ExpenseCustomerComponent} from './expense-customer/register';
import {ExpenseCustomerService} from './expense-customer/service';
import {ListWorkComponent} from './work/list';
import {WorkComponent} from './work/register';
import {WorkService} from './work/service';
import {NgxMaskModule} from 'ngx-mask';
import {ExpensesTableService} from './expense-customer/service';
import {CurrencyMaskModule} from "ng2-currency-mask";
import {DateTimeFormatPipe} from './components/filter/date.time.format.pipe';
import {DatepickerModule, BsDropdownModule, BsDatepickerModule} from 'ngx-bootstrap';

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
    NgxMaskModule,
    CurrencyMaskModule,
    DatepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot()   
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
    ListWorkComponent,
    AlertComponent,
    ListExpenseCustomerComponent,
    ExpenseCustomerComponent,
    CustomListExpenseCustomerComponent,
    DateTimeFormatPipe

  ],
  providers: [
    CustomerService,
    DynamicService,
    WorkService,
    AlertService,
    ExpenseCustomerService,
    ExpensesTableService
  ]
})
export class RegistersModule {
}

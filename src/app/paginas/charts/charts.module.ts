import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgaModule} from '../../theme/nga.module';

import {routing} from './charts.routing';

import {ChartistJs} from './components/chartistJs/chartistJs.component';
import {ChartistJsService} from './components/chartistJs/chartistJs.service';
import {AppTranslationModule} from '../../app.translation.module';
import {CustomerService} from '../cadastros/customer/service';
import {DynamicService} from '../cadastros/dynamic-domain-form/service';
import {ExpenseCustomerService} from '../cadastros/expense-customer/service';
import {WorkService} from '../cadastros/work/service';
import { Charts } from './';

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule,
    routing
  ],
  declarations: [   
    Charts, 
    ChartistJs   
  ],
  providers: [
    ChartistJsService,
    WorkService,
    CustomerService,
    ExpenseCustomerService,
    DynamicService
  ]
})
export class ChartsModule {}

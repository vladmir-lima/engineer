import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './charts.routing';
import { Charts } from './charts.component';
import { ChartistJs } from './components/chartistJs/chartistJs.component';
import { ChartistJsService } from './components/chartistJs/chartistJs.service';
import { AppTranslationModule } from '../../app.translation.module';
import { CustomerService } from '../cadastros/customer/service';
import { DynamicService } from '../cadastros/dynamic-domain-form/service';
import { ExpenseCustomerService } from '../cadastros/expense-customer/service';
import { WorkService } from '../cadastros/work/service';

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    Charts,
    ChartistJs
  ],
  providers: [
    ChartistJsService,
    ExpenseCustomerService,
    WorkService,
    DynamicService,
    CustomerService
  ]
})
export class ChartsModule {}

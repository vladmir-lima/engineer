import {NgModule} from '@angular/core';
import {NgaModule} from '../../theme/nga.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {routing} from './registers.routing';
import {CustomerComponent} from './customer/customer.component';
import {RegistersComponent} from './registers.component';

import { DetailComponent } from './customer/detail/detail.component';

@NgModule({
  imports: [
    NgaModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    routing
  ],
  declarations: [
    CustomerComponent,
    RegistersComponent 
  ] 
})
export class RegistersModule {
}

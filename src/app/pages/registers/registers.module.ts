import {NgModule} from '@angular/core';
import {NgaModule} from '../../theme/nga.module';
import { MaskDirective } from '../directives/mask.directive';
import { NumberOnlyDirective } from '../directives/numberonly.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {routing} from './registers.routing';
import {CustomerComponent} from './customer/customer.component';
import {RegistersComponent} from './registers.component';

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
    RegistersComponent,
    MaskDirective,
    NumberOnlyDirective
  ] 
})
export class RegistersModule {
}

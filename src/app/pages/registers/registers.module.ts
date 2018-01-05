import {NgModule} from '@angular/core';
import {NgaModule} from '../../theme/nga.module';
import { AddressComponent } from './address/address.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {routing} from './registers.routing';
import {BasicDatasComponent} from './customer/components/basicDatas.component';
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
    BasicDatasComponent,
    RegistersComponent,
    AddressComponent    
  ]
})
export class RegistersModule {
}

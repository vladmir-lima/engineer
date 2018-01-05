import {ClienteComponent} from './cliente.component';
import {DadosBasicosComponent} from './components/dadosBasicos.component';
import {NgModule} from '@angular/core';
import {NgaModule} from '../../../theme/nga.module';
import {GrupoInputs} from './components/grupoInputs/';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule }  from '@angular/common';

import { routing }       from './cliente.routing';


@NgModule({
  imports: [
    NgaModule,  
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    ClienteComponent,
    DadosBasicosComponent,
    GrupoInputs
  ]
})
export class ClienteModule {
}

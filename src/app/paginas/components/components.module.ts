import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { TreeModule } from 'ng2-tree';

import { routing }       from './components.routing';
import { Components } from './components.component';
import { TreeView } from './components/treeView/treeView.component';
import { ShowErrorsComponent } from './show-errors/show-errors.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    TreeModule,
    routing
  ],
  declarations: [
    Components,
    TreeView,
    ShowErrorsComponent,
  ]
})
export class ComponentsModule {}

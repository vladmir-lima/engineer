import {DynamicService} from '../service/dynamic.service';
import {Component} from '@angular/core';

@Component({
  selector: 'dynamic-root',
  templateUrl: './dynamic-root-form.component.html' 
})
export class DynamicRootFormComponent {
  components: any[];
  domainDescription: string;

  constructor(service: DynamicService) {
    this.domainDescription = 'Cadastro de Despesas';
    this.components = service.getComponents();
  }
}
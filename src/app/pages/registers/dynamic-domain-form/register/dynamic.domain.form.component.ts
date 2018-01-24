import { DynamicControlService } from '../service/dynamic.control.service';
import {TextBoxDomainBase} from '../components/text-box-domain/text.box.domain.base';
import {Component, OnInit, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'dynamic-domain-form',
  templateUrl: './dynamic.domain.form.component.html' 
})
export class DynamicDomainFormComponent implements OnInit {

  @Input() components: TextBoxDomainBase<any>[] = [];
  dynamicForm: FormGroup;
  payLoad = '';
   
  constructor(private service: DynamicControlService) {}

  ngOnInit () {
    this.dynamicForm = this.service.toFormGroup(this.components);
  }
  
   onSubmit() {
    this.payLoad = JSON.stringify(this.dynamicForm.value);
     console.log(this.payLoad);
  } 

}

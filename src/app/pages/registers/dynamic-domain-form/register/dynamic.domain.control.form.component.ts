import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {TextBoxDomainBase} from '../components/text-box-domain/text.box.domain.base';

@Component({
  selector: 'dynamic-domain-control',
  templateUrl: './dynamic.domain.control.form.component.html'
})
export class DynamicFormControlComponent {
  @Input() component: TextBoxDomainBase<any>;
  @Input() form: FormGroup;
  get isValid () {return this.form.controls[this.component.key].valid;}
}
import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {TextBoxDomainBase} from '../components/text-box-domain/text.box.domain.base';

@Injectable()
export class DynamicControlService {
  
  constructor() {}

  toFormGroup (components: TextBoxDomainBase<any>[]) {
    const group: any = {};

    components.forEach(component => {
      group[component.key] = component.required ? new FormControl(component.value || '', Validators.required)
        : new FormControl(component.value || '');
    });
    return new FormGroup(group);
  }
}
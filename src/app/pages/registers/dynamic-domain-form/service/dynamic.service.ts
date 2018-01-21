import {Injectable} from '@angular/core';

import {TextBoxDomainBase} from '../components/text-box-domain/text.box.domain.base';
import {TextBoxDomainComponent} from '../components/text-box-domain/text.box.domain.component';

@Injectable()
export class DynamicService {

  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getComponents () {

    const components: TextBoxDomainBase<any>[] = [

      new TextBoxDomainComponent({
        key: 'description',
        label: 'Descrição',        
        placeHolder: 'Digite aqui',
        required: true,
        order: 1
      })     
    ];

    return components.sort((a, b) => a.order - b.order);
  }
}
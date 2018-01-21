import { TextBoxDomainBase } from './text.box.domain.base';

export class TextBoxDomainComponent extends TextBoxDomainBase<string> {

  controlType = 'textbox';
  type: string;

 constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  } 

}

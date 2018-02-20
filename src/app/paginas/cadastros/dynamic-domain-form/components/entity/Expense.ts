import {DomainBase} from '../domain.base';

export class Expense extends DomainBase<string> {

  constructor(options: {} = {}) {
    super(options);   
  }

}

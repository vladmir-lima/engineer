import { PessoaJuridica } from '../../customer/components/pessoajuridica/pessoajuridica';
export class Work {

  constructor(customer?: PessoaJuridica) {
    this.addCustomer(customer);
  }

  id: number;
  description: string; 
  customer?: PessoaJuridica;
  addCustomer?(data: PessoaJuridica) {
    this.customer = data || new PessoaJuridica();
  }

}
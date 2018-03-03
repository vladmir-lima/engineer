import { Address } from '../../address/address';
import {PessoaJuridica} from '../../components/pessoa/pessoajuridica';
export class Work {

  constructor(customer?: PessoaJuridica, address?: Address) {
    this.addCustomer(customer);
     this.addAddress(address);
  }

  id: number;
  description: string;
  customer?: PessoaJuridica;
  address?: Address;
  addCustomer?(data: PessoaJuridica) {
    this.customer = data || new PessoaJuridica();
  }
  addAddress?(data: Address) {
    this.address = data || new Address();
  }

}
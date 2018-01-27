import {Address} from '../../../address/address';
export class PessoaJuridica {

  constructor(address?: Address) {
    this.addAddress(address);
  }

  id: number;
  cnpj?: string;
  razaoSocial: string;
  email?: string;
  nomeFantasia?: string;
  inscricaoEstadual?: string;
  address?: Address;
  addAddress?(data: Address) {
    this.address = data || new Address();
  }

}
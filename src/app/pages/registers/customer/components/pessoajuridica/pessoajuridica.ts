import { Address } from '../../../address/address';
export class PessoaJuridica {
  cnpj: string;
  razaoSocial: string;
  email: string;
  nomeFantasia: string;
  inscricaoEstadual: string;
  address: Address;
  addAddress(data: Address) {
    this.address = data;
  }
}
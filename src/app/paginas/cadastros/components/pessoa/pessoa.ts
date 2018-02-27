import {Address} from '../../address/address';
import {Contact} from '../contact';
import {TipoPessoaEnum} from './';
export class Pessoa {

  constructor(tipoPessoa: TipoPessoaEnum, address?: Address, contact?: Contact) {
    this.addAddress(address);
    this.addContact(contact);
    this.tipoPessoa = tipoPessoa;
  }

  id: number;
  email?: string;
  address?: Address;
  contacts?: Contact[];
  tipoPessoa?: TipoPessoaEnum;
  addAddress?(data: Address) {
    this.address = data || new Address();
  }
  addContact?(data: Contact) {
    this.contacts.push(data);
  }
}
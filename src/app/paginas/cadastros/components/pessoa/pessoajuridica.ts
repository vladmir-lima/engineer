import {TipoPessoaEnum} from './';
import {Pessoa} from './pessoa';
export class PessoaJuridica extends Pessoa {

  constructor() {
    super(TipoPessoaEnum.JURIDICA);
  }

  cnpj?: string;
  razaoSocial: string;
  nomeFantasia?: string;
  inscricaoEstadual?: string;
}
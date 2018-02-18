import {DymanicDomainEnum} from './dymanic.domain.enum';
export class DomainBase<T>{
  id: number;
  descricao: T;
  domainType: DymanicDomainEnum;

  constructor(options: {
    descricao?: T,
    id?: number,
    domainType?: DymanicDomainEnum
  } = {}) {
    this.id = options.id;    this.descricao = options.descricao;
    this.domainType = options.domainType;
  }
}
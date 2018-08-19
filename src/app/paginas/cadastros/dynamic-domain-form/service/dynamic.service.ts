import {DomainBase} from '../components/domain.base';
import {Expense} from '../components/entity/Expense';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {of} from 'rxjs/observable/of';
import {DymanicDomainEnum} from '../components/dymanic.domain.enum';
import {Service} from '../components/entity/Service';

@Injectable()
export class DynamicService {

  domainType: DymanicDomainEnum;

  dataTableDataExpenses: Expense[] = [
    {
      'id': 1,
      'descricao': 'Despesa com pessoal',
      'domainType': DymanicDomainEnum.EXPENSE
    },
    {
      'id': 2,
      'descricao': 'Combustíveis',
      'domainType': DymanicDomainEnum.EXPENSE
    },
    {
      'id': 3,
      'descricao': 'Segurança',
      'domainType': DymanicDomainEnum.EXPENSE
    },
    {
      'id': 4,
      'descricao': 'MATERIAIS DE APLICAÇÃO NA OBRA',
      'domainType': DymanicDomainEnum.EXPENSE
    },
    {
      'id': 5,
      'descricao': 'ADMINISTRAÇÃO',
      'domainType': DymanicDomainEnum.EXPENSE
    },
    {
      'id': 6,
      'descricao': 'MANUTENÇÃO EM GERAL',
      'domainType': DymanicDomainEnum.EXPENSE
    }

  ];

  dataTableDataServices: Service[] = [
    {
      'id': 1,
      'descricao': 'MOBILIZAÇÃO, DESMOB. , CANTEIRO, ADM',
      'domainType': DymanicDomainEnum.SERVICE
    },
    {
      'id': 2,
      'descricao': 'TERRAPLENAGEM',
      'domainType': DymanicDomainEnum.SERVICE
    },
    {
      'id': 3,
      'descricao': 'DRENAGEM',
      'domainType': DymanicDomainEnum.SERVICE
    },
    {
      'id': 4,
      'descricao': 'OBRAS DE ARTE CORRENTE',
      'domainType': DymanicDomainEnum.SERVICE
    },
    {
      'id': 5,
      'descricao': 'OBRAS COMPLEMENTARES',
      'domainType': DymanicDomainEnum.SERVICE
    },
    {
      'id': 6,
      'descricao': 'LIMPEZA DE OBRA',
      'domainType': DymanicDomainEnum.SERVICE
    }

  ];

  getData(dType?: DymanicDomainEnum): Promise<DomainBase<string>[]> {
    return new Promise((resolve, reject) => { 
        if (dType === DymanicDomainEnum.EXPENSE) {
          resolve(this.dataTableDataExpenses);
        } else if (dType === DymanicDomainEnum.SERVICE) {
          resolve(this.dataTableDataServices);
        }
        this.domainType = dType;     
    });
  }

  addItem(item: DomainBase<string>) {
    if (item.domainType === DymanicDomainEnum.EXPENSE) {
      this.dataTableDataExpenses.push(item);
    } else if (item.domainType === DymanicDomainEnum.SERVICE) {
      this.dataTableDataServices.push(item);
    }

  }

  getItem(id: number): Observable<DomainBase<string>> {
    let baseDomain: Observable<DomainBase<string>>;
    if (this.domainType === DymanicDomainEnum.EXPENSE) {
      baseDomain = of(this.dataTableDataExpenses.find(item => item.id === id));
    } else if (this.domainType === DymanicDomainEnum.SERVICE) {
      baseDomain = of(this.dataTableDataServices.find(item => item.id === id));
    }
    return baseDomain;
  }

  getDomainDescription: () => string =
  () => {
    return this.domainType === DymanicDomainEnum.EXPENSE ? 'Despesas' : 'Serviços';
  }
  
  getExpenses(): Observable<DomainBase<string>[]>  {
    return of(this.dataTableDataExpenses);
  }
}
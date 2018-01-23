import { DymanicDomainEnum } from '../components/dymanic.domain.enum';
import {ListDomainBase} from '../components/text-box-domain/list.domain.base';
import {ListExpenseDomainComponent} from '../components/text-box-domain/list.expense.domain.component';
import {Injectable, Type} from '@angular/core';
import {Observable} from 'rxjs';
import {of} from 'rxjs/observable/of';

@Injectable()
export class ListDomainService {

  dataTableDataExpenses: ListExpenseDomainComponent[] = [
    {
      'id': 1,
      'description': 'Despesa com pessoal'
    },
    {
      'id': 2,
      'description': 'Combustíveis'
    },
    {
      'id': 3,
      'description': 'Segurança'
    },
    {
      'id': 4,
      'description': 'MATERIAIS DE APLICAÇÃO NA OBRA'
    },
    {
      'id': 5,
      'description': 'ADMINISTRAÇÃO'
    },
    {
      'id': 6,
      'description': 'MANUTENÇÃO EM GERAL'
    }

  ];

  getData(dType: DymanicDomainEnum): Promise<ListDomainBase<string>[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (dType === DymanicDomainEnum.EXPENSE) {        
          resolve(this.dataTableDataExpenses);
        }        
      }, 500);
    });
  }

  addItem(item: ListDomainBase<string>) {
    this.dataTableDataExpenses.push(item);
  }

  getItem(id: number): Observable<ListDomainBase<string>> {
    return of(this.dataTableDataExpenses.find(item => item.id === id));
  }

}

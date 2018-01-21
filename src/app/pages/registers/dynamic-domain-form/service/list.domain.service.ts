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
      'description': 'Locação de equipamentos'
    }

  ];

  getData(): Promise<ListDomainBase<string>[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.dataTableDataExpenses);
      }, 2000);
    });
  }

  addItem(item: ListDomainBase<string>) {
    this.dataTableDataExpenses.push(item);
  }

  getItem(id: number): Observable<ListDomainBase<string>> {
    return of(this.dataTableDataExpenses.find(item => item.id === id));
  }

}

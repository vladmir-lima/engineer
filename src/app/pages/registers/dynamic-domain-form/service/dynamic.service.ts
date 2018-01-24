import {DomainBase} from '../components/domain.base';
import {Expense} from '../components/entity/Expense';
import {Injectable} from '@angular/core';
import {TextBoxDomainBase} from '../components/text-box-domain/text.box.domain.base';
import {TextBoxDomainComponent} from '../components/text-box-domain/text.box.domain.component';
import {Observable} from 'rxjs';
import {of} from 'rxjs/observable/of';

@Injectable()
export class DynamicService {

  dataTableDataExpenses: Expense[] = [
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

  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getComponents() {

    const components: TextBoxDomainBase<any>[] = [

      new TextBoxDomainComponent(
      {
        key: 'description',
        label: 'Descrição',
        placeHolder: 'Digite aqui',
        required: true,
        order: 1
      })
    ];

    return components.sort((a, b) => a.order - b.order);
  }
  
// getData (): Promise<PessoaJuridica[]> {
//    return new Promise((resolve, reject) => {
//      setTimeout(() => {
//        resolve(this.dataTableData);
//      }, 2000);
//    });
//  }
  
//  getEditComponents(id: number): Observable<TextBoxDomainBase<any>[]> {
//    let expense = of(this.dataTableDataExpenses.find(item => item.id === id));
//    
//      return new TextBoxDomainComponent({ (ex) => expense
//          key: 'description',
//          label: 'Descrição',
//          required: true,
//          order: 1,
//          value: ex.description
//          })
//    }
//
//  }
}
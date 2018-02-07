import {Work} from '../components/work';
import {Injectable} from '@angular/core';
import {PessoaJuridica} from '../../customer/components/pessoajuridica/pessoajuridica';
import {Observable} from 'rxjs';
import {of} from 'rxjs/observable/of';

@Injectable()
export class WorkService {

  dataTableData: Work[] = [
    {
      'id': 1,
      'description': 'Obra em Santa Helena',
      'customer': {
        'id': 5,
        'razaoSocial': 'Vladmir ltda'
      }
    },
    {
      'id': 2,
      'description': 'Obra em Goiânia',
      'customer': {
        'id': 1,
        'razaoSocial': 'Pé grande ltda'
      }
    },
    {
      'id': 3,
      'description': 'Obra em Jataí',
      'customer':{
        'id': 2,
        'razaoSocial': 'Padaria do Zé ltda'
      }
    }
  ];

  getData(): Promise<Work[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.dataTableData);
      }, 2000);
    });
  }

  addWork(work: Work) {
    console.log(work);
    this.dataTableData.push(work);
  }

  getWork(id: number): Observable<Work> {
    return of(this.dataTableData.find(item => item.id === id));
  }

}

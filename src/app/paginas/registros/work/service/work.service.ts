import {Work} from '../components/work';
import {Injectable} from '@angular/core';
import {PessoaJuridica} from '../../customer/components/pessoajuridica/pessoajuridica';
import {CustomerService} from '../../customer/service/customer.service';
import {Observable} from 'rxjs';
import {of} from 'rxjs/observable/of';

@Injectable()
export class WorkService {

  constructor(private customerService: CustomerService) {

  }

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
      'customer': {
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
    console.log(work.customer);
    this.getPessoaJuridica(work);
    this.dataTableData.push(work);
  }

  getWork(id: number): Observable<Work> {
    let work: Work = this.dataTableData.find(item => item.id === id);  
    if (work) {
      this.getPessoaJuridica(work);
    }
    return of(this.dataTableData.find(item => item.id === id));
  }
  
  getPessoaJuridica(work: Work) {
    this.customerService.getPessoa(work.customer.id)
        .subscribe(pessoaJuridica => work.customer = pessoaJuridica)      
  }

}

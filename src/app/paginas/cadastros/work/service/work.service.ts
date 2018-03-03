import {Work} from '../components/work';
import {Injectable} from '@angular/core';
import {PessoaJuridica} from '../../components/pessoa/pessoajuridica';
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
      },
      'address': {
        'cep': '74040070',
        'numero': 838,
        'cidade': 'Goiânia',
        'estado': 'Goiás',
        'bairro': 'Setor Aeroporto',
        'lote': '1',
        'id': 1,
        'logradouro': 'Av. República do Líbano',
        'complemento': 'Próximo a praça do avião'
      },
    },
    {
      'id': 2,
      'description': 'Obra em Goiânia',
      'customer': {
        'id': 1,
        'razaoSocial': 'Indra company'
      },
      'address': {
        'cep': '74040070',
        'numero': 838,
        'cidade': 'Goiânia',
        'estado': 'Goiás',
        'bairro': 'Setor Aeroporto',
        'lote': '1',
        'id': 1,
        'logradouro': 'Av. República do Líbano',
        'complemento': 'Próximo a praça do avião'
      },
    },
    {
      'id': 3,
      'description': 'Obra em Jataí',
      'customer': {
        'id': 2,
        'razaoSocial': 'Alarmes jequiti'
      },
      'address': {
        'cep': '74040070',
        'numero': 838,
        'cidade': 'Goiânia',
        'estado': 'Goiás',
        'bairro': 'Setor Aeroporto',
        'lote': '1',
        'id': 1,
        'logradouro': 'Av. República do Líbano',
        'complemento': 'Próximo a praça do avião'
      },
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
  
  getWorks(): Observable<Work[]> {
    return of(this.dataTableData);
  }
}

import { Address } from '../../address/address';
import {PessoaJuridica} from '../components/pessoajuridica/pessoajuridica';
import {Injectable, Type} from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CustomerService {

  dataTableData: PessoaJuridica[] = [
    {
      'id': 1,
      'nomeFantasia': 'Wing',
      'inscricaoEstadual': '1234567',
      'razaoSocial': 'Wing',
      'email': 'tellus.eu.augue@arcu.com',
      'cnpj': '70189358149'
    },
    {
      'id': 2,
      'nomeFantasia': 'Wing',
      'inscricaoEstadual': '1234567',
      'razaoSocial': 'Whitney',
      'email': 'sed.dictum@Donec.org',
      'cnpj': '70189358149'
    },
    {
      'id': 3,
      'nomeFantasia': 'Wing',
      'inscricaoEstadual': '1234567',
      'razaoSocial': 'Oliver',
      'email': 'mauris@Craslorem.ca',
      'cnpj': '70189358149'
    },
    {
      'id': 5,
      'nomeFantasia': 'Vlad',
      'inscricaoEstadual': '1234567',
      'razaoSocial': 'Vladmir',
      'email': 'mi.Aliquam@Phasellus.net',
      'cnpj': '74.040.000/0000-00',
       'address': {
          'cep': '74840395',
           'numero': 2,
           'cidade': 'Goiânia',
           'bairro': 'Parque Amazônia',
           'lote': '8',
           'id': 1,
           'logradouro': 'Rua Belém',
           'complemento': 'Próximo a praça da feira'
     }
    },   
    {
      'id': 4,
      'nomeFantasia': 'Wing',
      'inscricaoEstadual': '1234567',
      'razaoSocial': 'Maggy',
      'email': 'ligula@acorciUt.edu',
      'cnpj': '70189358149'
    },
    {
      'id': 5,
      'nomeFantasia': 'Wing',
      'inscricaoEstadual': '1234567',
      'razaoSocial': 'Unity',
      'email': 'Nunc.commodo@justo.org',
      'cnpj': '70189358149'
    },
    {
      'id': 6,
      'nomeFantasia': 'Wing',
      'inscricaoEstadual': '1234567',
      'razaoSocial': 'Ralph',
      'email': 'augue@penatibuset.net',
      'cnpj': '70189358149'
    },
    {
      'id': 7,
      'nomeFantasia': 'Wing',
      'inscricaoEstadual': '1234567',
      'razaoSocial': 'Medge',
      'email': 'sagittis.augue@taciti.edu',
      'cnpj': '70189358149'
    },
    {
      'id': 8,
      'nomeFantasia': 'Wing',
      'inscricaoEstadual': '1234567',
      'razaoSocial': 'Orli',
      'email': 'nascetur@mipedenonummy.edu',
      'cnpj': '70189358149'
    },
    {
      'id': 9,
      'nomeFantasia': 'Wing',
      'inscricaoEstadual': '1234567',
      'razaoSocial': 'Ainsley',
      'email': 'morbi.tristique.senectus@enim.ca',
      'cnpj': '70189358149'
    },
    {
      'id': 10,
      'nomeFantasia': 'Wing',
      'inscricaoEstadual': '1234567',
      'razaoSocial': 'Candice',
      'email': 'turpis.non.enim@fringillami.com',
      'cnpj': '70189358149'
    },
    {
      'id': 11,
      'nomeFantasia': 'Wing',
      'inscricaoEstadual': '1234567',
      'razaoSocial': 'Alexis',
      'email': 'lacinia.orci.consectetuer@dolorFuscefeugiat.ca',
      'cnpj': '70189358149'
    },
    {
      'id': 12,
      'nomeFantasia': 'Wing',
      'inscricaoEstadual': '1234567',
      'razaoSocial': 'Diana',
      'email': 'pede.Cras@a.edu',
      'cnpj': '70189358149'
    },
    {
      'id': 13,
      'nomeFantasia': 'Wing',
      'inscricaoEstadual': '1234567',
      'razaoSocial': 'Tyrone',
      'email': 'ornare.In@duilectus.co.uk',
      'cnpj': '70189358149'
    },
    {
      'id': 14,
      'nomeFantasia': 'Wing',
      'inscricaoEstadual': '1234567',
      'razaoSocial': 'Brennan',
      'email': 'scelerisque.lorem@enim.net',
      'cnpj': '70189358149'
    },
    {
      'id': 15,
      'nomeFantasia': 'Wing',
      'inscricaoEstadual': '1234567',
      'razaoSocial': 'Lillith',
      'email': 'non@lectus.edu',
      'cnpj': '70189358149'
    },
    {
      'id': 16,
      'nomeFantasia': 'Wing',
      'inscricaoEstadual': '1234567',
      'razaoSocial': 'Wayne',
      'email': 'at.egestas.a@Pellentesque.edu',
      'cnpj': '70189358149'
    },
    {
      'id': 17,
      'nomeFantasia': 'Wing',
      'inscricaoEstadual': '1234567',
      'razaoSocial': 'Vielka',
      'email': 'Nam.porttitor@Uttincidunt.ca',
      'cnpj': '70189358149'
    },
    {
      'id': 18,
      'nomeFantasia': 'Wing',
      'inscricaoEstadual': '1234567',
      'razaoSocial': 'Armando',
      'email': 'Aliquam@orciin.net',
      'cnpj': '70189358149'
    },
    {
      'id': 19,
      'nomeFantasia': 'Wing',
      'inscricaoEstadual': '1234567',
      'razaoSocial': 'Justin',
      'email': 'gravida.non.sollicitudin@placerataugue.edu',
      'cnpj': '70189358149'
    }

  ];

  getData (): Promise<PessoaJuridica[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.dataTableData);
      }, 2000);
    });
  }

  addPessoa (pessoa: PessoaJuridica) {
    this.dataTableData.push(pessoa);
  }
  
  getPessoa(id: number): Observable<PessoaJuridica> {
   return of(this.dataTableData.find(item => item.id === id));
  }

}

import {PessoaJuridica} from '../components/pessoajuridica/pessoajuridica';
import {Injectable} from '@angular/core';

@Injectable()
export class CustomerService {

  dataTableData:PessoaJuridica [] = [
  {
    'id': 1,
    'nomeFantasia': 'Wing',
    'inscricaoEstadual': '1234567',
    'razaoSocial': 'Wing',
    'email': 'tellus.eu.augue@arcu.com',
    'cnpj': '70189358149'
  },
  {
    'id': 1,
    'nomeFantasia': 'Wing',
    'inscricaoEstadual': '1234567',
    'razaoSocial': 'Whitney',
    'email': 'sed.dictum@Donec.org',
    'cnpj': '70189358149'
  },
  {
    'id': 1,
    'nomeFantasia': 'Wing',
    'inscricaoEstadual': '1234567',
    'razaoSocial': 'Oliver',
    'email': 'mauris@Craslorem.ca',
    'cnpj': '70189358149'
  },
  {
    'id': 1,
    'nomeFantasia': 'Wing',
    'inscricaoEstadual': '1234567',
    'razaoSocial': 'Vladimir',
    'email': 'mi.Aliquam@Phasellus.net',
    'cnpj': '70189358149'
  },
  {
    'id': 1,
    'nomeFantasia': 'Wing',
    'inscricaoEstadual': '1234567',
    'razaoSocial': 'Maggy',
    'email': 'ligula@acorciUt.edu',
    'cnpj': '70189358149'
  },
  {
    'id': 1,
    'nomeFantasia': 'Wing',
    'inscricaoEstadual': '1234567',
    'razaoSocial': 'Unity',
    'email': 'Nunc.commodo@justo.org',
    'cnpj': '70189358149'
  },
  {
    'id': 1,
    'nomeFantasia': 'Wing',
    'inscricaoEstadual': '1234567',
    'razaoSocial': 'Ralph',
    'email': 'augue@penatibuset.net',
    'cnpj': '70189358149'
  },
  {
    'id': 1,
    'nomeFantasia': 'Wing',
    'inscricaoEstadual': '1234567',
    'razaoSocial': 'Medge',
    'email': 'sagittis.augue@taciti.edu',
    'cnpj': '70189358149'
  },
  {
    'id': 1,
    'nomeFantasia': 'Wing',
    'inscricaoEstadual': '1234567',
    'razaoSocial': 'Orli',
    'email': 'nascetur@mipedenonummy.edu',
    'cnpj': '70189358149'
  },
  {
    'id': 1,
    'nomeFantasia': 'Wing',
    'inscricaoEstadual': '1234567',
    'razaoSocial': 'Ainsley',
    'email': 'morbi.tristique.senectus@enim.ca',
    'cnpj': '70189358149'
  },
  {
    'id': 1,
    'nomeFantasia': 'Wing',
    'inscricaoEstadual': '1234567',
    'razaoSocial': 'Candice',
    'email': 'turpis.non.enim@fringillami.com',
    'cnpj': '70189358149'
  },
  {
    'id': 1,
    'nomeFantasia': 'Wing',
    'inscricaoEstadual': '1234567',
    'razaoSocial': 'Alexis',
    'email': 'lacinia.orci.consectetuer@dolorFuscefeugiat.ca',
    'cnpj': '70189358149'
  },
  {
    'id': 1,
    'nomeFantasia': 'Wing',
    'inscricaoEstadual': '1234567',
    'razaoSocial': 'Diana',
    'email': 'pede.Cras@a.edu',
    'cnpj': '70189358149'
  },
  {
    'id': 1,
    'nomeFantasia': 'Wing',
    'inscricaoEstadual': '1234567',
    'razaoSocial': 'Tyrone',
    'email': 'ornare.In@duilectus.co.uk',
    'cnpj': '70189358149'
  },
  {
    'id': 1,
    'nomeFantasia': 'Wing',
    'inscricaoEstadual': '1234567',
    'razaoSocial': 'Brennan',
    'email': 'scelerisque.lorem@enim.net',
    'cnpj': '70189358149'
  },
  {
    'id': 1,
    'nomeFantasia': 'Wing',
    'inscricaoEstadual': '1234567',
    'razaoSocial': 'Lillith',
    'email': 'non@lectus.edu',
    'cnpj': '70189358149'
  },
  {
    'id': 1,
    'nomeFantasia': 'Wing',
    'inscricaoEstadual': '1234567',
    'razaoSocial': 'Wayne',
    'email': 'at.egestas.a@Pellentesque.edu',
    'cnpj': '70189358149'
  },
  {
    'id': 1,
    'nomeFantasia': 'Wing',
    'inscricaoEstadual': '1234567',
    'razaoSocial': 'Vielka',
    'email': 'Nam.porttitor@Uttincidunt.ca',
    'cnpj': '70189358149'
  },
  {
    'id': 1,
    'nomeFantasia': 'Wing',
    'inscricaoEstadual': '1234567',
    'razaoSocial': 'Armando',
    'email': 'Aliquam@orciin.net',
    'cnpj': '70189358149'
  },
  {
    'id': 1,
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
  
  addPessoa(pessoa: PessoaJuridica) {
    this.dataTableData.push(pessoa);
  }

}

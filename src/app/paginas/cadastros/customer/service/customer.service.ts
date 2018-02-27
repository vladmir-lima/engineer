import {Address} from '../../address/address';
import {TipoPessoaEnum} from '../../components/pessoa';
import {PessoaJuridica} from '../../components/pessoa/pessoajuridica';
import {Injectable, Type} from '@angular/core';
import {Observable} from 'rxjs';
import {of} from 'rxjs/observable/of';

@Injectable()
export class CustomerService {

  dataTableData: PessoaJuridica[] = [
    {
      'id': 1,
      'nomeFantasia': 'Indra company',
      'inscricaoEstadual': '1.7874.4545',
      'razaoSocial': 'Indra Spanish company ',
      'email': 'indra@indracompany.com',
      'cnpj': '74.040.000/0000-00',
      'address': {
        'cep': '74040070',
        'numero': 838,
        'cidade': 'Goiânia',
        'bairro': 'Setor Aeroporto',
        'lote': '1',
        'id': 1,
        'logradouro': 'Av. República do Líbano',
        'complemento': 'Próximo a praça do avião'
      },
      'tipoPessoa': TipoPessoaEnum.JURIDICA,
      'contacts': [
        {
          'commercialPhone': '06232193200',
          'mobilePhone': '0629995566478',
          'role': 'Engenheiro',
          'name': 'Alertudes Pinheiro'
        },
        {
          'commercialPhone': '06232193200',
          'mobilePhone': '06299875958',
          'role': 'Secretária',
          'name': 'Simone Monteiro'
        }
      ]
    },
    {
      'id': 2,
      'nomeFantasia': 'Sinalenge',
      'inscricaoEstadual': '1.23.48787',
      'razaoSocial': 'Sinalenge sinalizações Ltda',
      'email': 'sinalenge@sinalengecompany.com.br',
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
      },
      'tipoPessoa': TipoPessoaEnum.JURIDICA,
      'contacts': [
        {
          'commercialPhone': '06232193200',
          'mobilePhone': '0629995566478',
          'role': 'Engenheiro',
          'name': 'Rogério Lecomte'
        },
        {
          'commercialPhone': '06232193200',
          'mobilePhone': '06299875958',
          'role': 'Secretária',
          'name': 'Renata Lecomte'
        }
      ]
    },
    {
      'id': 3,
      'nomeFantasia': 'Alarmes jequiti',
      'inscricaoEstadual': '123456778',
      'razaoSocial': 'Alarmes Jequiti Ltda',
      'email': 'alarmes@alarmcesjequiti.com.br',
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
      },
      'tipoPessoa': TipoPessoaEnum.JURIDICA,
      'contacts': [
        {
          'commercialPhone': '06232193200',
          'mobilePhone': '0629995566478',
          'role': 'Engenheiro',
          'name': 'Virmondes Leal'
        },
        {
          'commercialPhone': '06232193200',
          'mobilePhone': '06299875958',
          'role': 'Secretária',
          'name': 'Joana Costa'
        }
      ]
    },
    {
      'id': 5,
      'nomeFantasia': 'Vladmir ltda',
      'inscricaoEstadual': '1234567',
      'razaoSocial': 'Vladmir Ltda',
      'email': 'vladmir@gmail.com',
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
      ,
      'tipoPessoa': TipoPessoaEnum.JURIDICA,
      'contacts': [
        {
          'commercialPhone': '06232193200',
          'mobilePhone': '0629995566478',
          'role': 'Engenheiro',
          'name': 'Avimondes da Silva'
        },
        {
          'commercialPhone': '06232193200',
          'mobilePhone': '06299875958',
          'role': 'Secretária',
          'name': 'Alerdina da Silva'
        }
      ]
    },
    {
      'id': 4,
      'nomeFantasia': 'Avestruz master',
      'inscricaoEstadual': '1234567',
      'razaoSocial': 'Avestruz master',
      'email': 'aves@avestruzmaster.com.br',
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
      },
      'tipoPessoa': TipoPessoaEnum.JURIDICA,
      'contacts': [
        {
          'commercialPhone': '06232193200',
          'mobilePhone': '0629995566478',
          'role': 'Engenheiro',
          'name': 'Ruy Lecomte'
        },
        {
          'commercialPhone': '06232193200',
          'mobilePhone': '06299875958',
          'role': 'Secretária',
          'name': 'Tatiana Sobrinho'
        }
      ]
    },
    {
      'id': 6,
      'nomeFantasia': 'Sorvetes ding dong',
      'inscricaoEstadual': '1.23..878',
      'razaoSocial': 'Sorvetes ding dong',
      'email': 'sorvetao@sorvetesdingdong.com.br',
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
      },
      'tipoPessoa': TipoPessoaEnum.JURIDICA,
      'contacts': [
        {
          'commercialPhone': '06232193200',
          'mobilePhone': '0629995566478',
          'role': 'Engenheiro',
          'name': 'Severino Carvalho'
        },
        {
          'commercialPhone': '06232193200',
          'mobilePhone': '06299875958',
          'role': 'Secretária',
          'name': 'Aleluia Silva'
        }
      ]
    }

  ];

  getData(): Promise<PessoaJuridica[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.dataTableData);
      }, 2000);
    });
  }

  addPessoa(pessoa: PessoaJuridica) {
    this.dataTableData.push(pessoa);
  }

  getPessoa(id: number): Observable<PessoaJuridica> {
    return of(this.dataTableData.find(item => item.id === id));
  }

}

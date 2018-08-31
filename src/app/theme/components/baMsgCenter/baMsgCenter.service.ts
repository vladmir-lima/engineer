import {Injectable} from '@angular/core'

@Injectable()
export class BaMsgCenterService {

  private _notifications = [
    {
      name: 'Vladmir Lima',
      text: 'Vlad post um novo artigo.',
      time: '1 min atrás'
    },
    {
      name: 'Rogério Lecomte',
      text: 'Rogério mudou suas informações de contato.',
      time: '2 hrs atrás'
    },
    {
      image: 'assets/img/shopping-cart.svg',
      text: 'Nova obra (Jataí) foi cadastrada',
      time: '5 hrs atrás'
    },
    {
      name: 'Andrey',
      text: 'Andrey respondeu o seu comentário.',
      time: '1 dia ago'
    },
    {
      name: 'Rogério Lecomte',
      text: 'Rogério cadastrou uma nova despesa da obra em Santa Catarina',
      time: '2 dias atrás'
    },
    {
      image: 'assets/img/comments.svg',
      text: 'Comentaram no seu post.',
      time: '3 dias atrás'
    },
    {
      name: 'Júlia',
      text: 'Júlia convidou você para um evento',
      time: '1 mês atrás'
    }
  ];

  private _messages = [
    {
      name: 'Vladmir Lima',
      text: 'Ok, hoje no final da tarde irei cadastrá-las',
      time: '1 min atrás'
    },
    {
      name: 'Rogério',
      text: 'Vladmir, precisamos cadastrar novas despesas para a obra de Santa Catarina',
      time: '2 hrs atrás'
    },
    {
      name: 'Vladmir Lima',
      text: 'Rogério, a obra de Jataí foi finalizada',
      time: '10 hrs atrás'
    },
    {
      name: 'Vladmir Lima',
      text: 'Opa, que maravilha! Tudo por conta? kkkkkkk',
      time: '2 dias atrás'
    },
    {
      name: 'Júlia',
      text: 'Galera, terá um churrasco na minha casa no próximo sábado \o/',
      time: '2 dias atrás'
    },    
  ];

  public getMessages():Array<Object> {
    return this._messages;
  }

  public getNotifications():Array<Object> {
    return this._notifications;
  }
}

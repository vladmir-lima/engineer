import {BaThemeConfigProvider} from '../../../../theme';
import {ExpenseCustomer} from '../components/expense.customer';
import {Injectable} from '@angular/core';
import {PessoaJuridica} from '../../components/pessoa/pessoajuridica';
import {CustomerService} from '../../customer/service/customer.service';
import {DymanicDomainEnum} from '../../dynamic-domain-form/components/dymanic.domain.enum';
import {DynamicService} from '../../dynamic-domain-form/service/dynamic.service';
import {WorkService} from '../../work/service/work.service';
import {Observable, Subject} from 'rxjs';
import {of} from 'rxjs/observable/of';

@Injectable()
export class ExpenseCustomerService {

  constructor(private workService: WorkService, private dynamicService: DynamicService, private _baConfig: BaThemeConfigProvider) {

  }

  private expensesCustomer = new Subject<ExpenseCustomer[]>();

  expensesCustomerList$ = this.expensesCustomer.asObservable();

  dataTableData: ExpenseCustomer[] = [
    {
      'id': 1,
      'description': 'Alcool / etanol',
      'initialDate': new Date(2018, 0, 1),
      'finalDate': new Date(2018, 0, 31),
      'invoice': '12345',
      'value': 3500.00,
      'work': {
        'id': 1,
        'description': 'Obra em Santa Helena',
        'customer': {
          'id': 5,
          'razaoSocial': 'Vladmir ltda'
        }
      },
      'expense': {
        'id': 2,
        'descricao': 'COMBUSTÍVEIS',
        'domainType': DymanicDomainEnum.EXPENSE
      }
    },
    {
      'id': 2,
      'description': 'Água e esgoto em obra',
      'initialDate': new Date(2018, 0, 1),
      'finalDate': new Date(2018, 0, 31),
      'invoice': '12345678',
      'value': 10000.00,
      'work': {
        'id': 1,
        'description': 'Obra em Santa Helena',
        'customer': {
          'id': 5,
          'razaoSocial': 'Vladmir ltda'
        }
      },
      'expense': {
        'id': 5,
        'descricao': 'ADMINISTRAÇÃO',
        'domainType': DymanicDomainEnum.EXPENSE
      }
    }
  ];

  addExpenseCustomer(expenseCustomer: ExpenseCustomer) {
    this.getWork(expenseCustomer);
    this.getExpense(expenseCustomer);
    this.dataTableData.push(expenseCustomer);
  }

  getExpenseCustomer(id: number): Observable<ExpenseCustomer> {
    const expenseCustomer: ExpenseCustomer = this.dataTableData.find(item => item.id === id);
    if (expenseCustomer) {
      this.getWork(expenseCustomer);
      this.getExpense(expenseCustomer);
    }
    return of(this.dataTableData.find(item => item.id === id));
  }

  getWork(expenseCustomer: ExpenseCustomer) {
    this.workService.getWork(expenseCustomer.work.id)
      .subscribe(work => expenseCustomer.work = work)
  }

  getExpense(expenseCustomer: ExpenseCustomer) {
    this.dynamicService.domainType = DymanicDomainEnum.EXPENSE;
    this.dynamicService.getItem(expenseCustomer.expense.id)
      .subscribe(expense => expenseCustomer.expense = expense)
  }

  getData(): Observable<ExpenseCustomer[]> {
    return this.expensesCustomerList$;
  }

  getAExpensesCustomerByfFilter(idWork: number, idExpense: number): void {
    this.expensesCustomer.next(this.dataTableData.filter(item => !idExpense && item.work.id === idWork || (item.work.id === idWork && item.expense.id === idExpense)));
  }

  getAExpensesCustomerByWork(idWork: number): Observable<ExpenseCustomer[]> {
    return of(this.dataTableData.filter(item => item.work.id === idWork));
  }

  getAllExpensesCustomer(): Observable<ExpenseCustomer[]> {
    return of(this.dataTableData);
  }
  
  getAllExpenseCostumers(): Promise<ExpenseCustomer[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.dataTableData);
      }, 2000);
    });
  }


}

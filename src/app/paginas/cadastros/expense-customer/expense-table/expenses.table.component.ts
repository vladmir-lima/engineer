import {AlertService} from '../../components/alert/service';
import {BaseComponent} from '../../components/base/base.component';
import {DymanicDomainEnum} from '../../dynamic-domain-form/components';
import {Expense} from '../../dynamic-domain-form/components/entity';
import {DynamicService} from '../../dynamic-domain-form/service';
import {Work} from '../../work/components/work';
import {WorkService} from '../../work/service';
import {ExpenseCustomer} from '../components/expense.customer';
import {SelectExpenseComponent} from '../components/select-expense/select.expense.component';
import {SelectWorkComponent} from '../components/select-work/select.work.component';
import {Component, OnInit} from '@angular/core';

import {ExpensesTableService} from '../service/expenses.table.service';
import {Validators} from '@angular/forms';
import {LocalDataSource} from 'ng2-smart-table';

@Component({
  selector: 'expenses-table',
  templateUrl: './expenses.table.component.html',
  styleUrls: ['./expenses.table.component.scss']
})
export class ExpenseTableComponent extends BaseComponent implements OnInit {

  expenseCustomer: ExpenseCustomer;
  expensesCustomer: ExpenseCustomer[];

  expenses: Expense[];
  works: Work[];

  constructor(protected service: ExpensesTableService,
    public alertService: AlertService) {
    super(alertService);
    this.service.getData().then((data) => {
      this.source.load(data);
    });
  }

  ngOnInit() {

  }

  query: string = '';

  settings = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    columns: {
      'work.id': {
        title: 'Obra',
        type: 'custom',
        renderComponent: SelectWorkComponent
      },
      'expense.id': {
        title: 'Tipo Despesa',
        type: 'custom',
        renderComponent: SelectExpenseComponent
      },
      description: {
        title: 'Descrição',
        type: 'string'
      },
      initialDate: {
        title: 'Data Inicial',
        type: 'date'
      },
      finalDate: {
        title: 'Data Final',
        type: 'date'
      },
      invoice: {
        title: 'Nota Fisca/Recibo',
        type: 'string'
      }      
    }
  };

  source: LocalDataSource = new LocalDataSource();

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}

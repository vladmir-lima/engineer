import {Expense} from '../../../dynamic-domain-form/components/entity';
import {DynamicService} from '../../../dynamic-domain-form/service';
import {ExpenseCustomer} from '../expense.customer';
import {Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'select-expense',
  templateUrl: './select.expense.component.html',
  styleUrls: ['./select-expense.component.scss']
})
export class SelectExpenseComponent implements OnInit {

  expenses: Expense[];

  constructor(private dynamicService: DynamicService) {}

  ngOnInit() {
    this.dynamicService.getExpenses().subscribe(data => this.expenses = data);
  }

}

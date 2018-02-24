import {ExpenseCustomer} from '../components/expense.customer';
import {ExpenseCustomerService} from '../service/expense.customer.service';
import {Component, OnInit, Type} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'expense-customer-list',
  templateUrl: './list.expense.customer.component.html',
  styleUrls: ['./list.expense.customer.component.scss']
})
export class ListExpenseCustomerComponent implements OnInit {

  filterQuery = "";
  rowsOnPage = 10;
  sortBy = "description";
  sortOrder = "asc";


  lista: ExpenseCustomer[];

  constructor(private service: ExpenseCustomerService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {     
    this.service.getAllExpensesCustomer().subscribe((data) => {
      this.lista = data;
    });
  }

  toInt(num: string) {
    return +num;
  }

  sortByWordLength = (a: any) => {
    return a.descricao.length;
  }

}

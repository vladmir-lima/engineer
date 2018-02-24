import {ExpenseCustomer} from '../components/expense.customer';
import {ExpenseCustomerService} from '../service/expense.customer.service';
import {Component, OnInit, Type, Input} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'custom-expense-customer-list',
  templateUrl: './custom.list.expense.customer.component.html',
  styleUrls: ['./custom.list.expense.customer.component.scss']
})
export class CustomListExpenseCustomerComponent implements OnInit {

  filterQuery = "";
  rowsOnPage = 10;
  sortBy = "description";
  sortOrder = "asc";  
  
  lista: ExpenseCustomer[];

  constructor(private service: ExpenseCustomerService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {  
    this.service.getData().subscribe(data => this.lista = data);
  }

  toInt(num: string) {
    return +num;
  }

  sortByWordLength = (a: any) => {
    return a.descricao.length;
  }  
  

}

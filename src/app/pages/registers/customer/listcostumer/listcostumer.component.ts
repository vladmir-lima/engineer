import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
@Component({
  selector: 'list-customer',
  templateUrl: './listcostumer.component.html',
  styleUrls: ['./listcostumer.component.scss']
})
export class ListCostumerComponent {

    data;
    filterQuery = "";
    rowsOnPage = 10;
    sortBy = "email";
    sortOrder = "asc";

    constructor(private service: CustomerService) {
    this.service.getData().then((data) => {
      this.data = data;
    });
  }

    toInt(num: string) {
        return +num;
    }

    sortByWordLength = (a: any) => {
        return a.city.length;
    }
  
}

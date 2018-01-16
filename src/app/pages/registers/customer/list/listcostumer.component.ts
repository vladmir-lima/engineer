import { PessoaJuridica } from '../components/pessoajuridica/pessoajuridica';
import {Component, OnInit, Type} from '@angular/core';
import {CustomerService} from '../service/customer.service';
import { Router } from '@angular/router';
@Component({
  selector: 'list-customer',
  templateUrl: './listcostumer.component.html',
  styleUrls: ['./listcostumer.component.scss']
})
export class ListCostumerComponent {
   
  filterQuery = "";
  rowsOnPage = 10;
  sortBy = "email";
  sortOrder = "asc";
  
  pessoas: PessoaJuridica[];

  constructor(private service: CustomerService, private router: Router) {
    this.service.getData().then((data) => {
      this.pessoas = data;
    });
  }

  toInt (num: string) {
    return +num;
  }

  sortByWordLength = (a: any) => {
    return a.city.length;
  }  
  
  selectCustomer(data: PessoaJuridica) {
    this.service.selectCustomer(data);
    this.router.navigate(['/pages/registers/register-costumer']);
  }
  
  
}

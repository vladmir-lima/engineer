import {PessoaJuridica} from '../../components/pessoa/pessoajuridica';
import {Component, OnInit, Type} from '@angular/core';
import {CustomerService} from '../service/customer.service';
import {Router} from '@angular/router';
@Component({
  selector: 'list-customer',
  templateUrl: './listcostumer.component.html',
  styleUrls: ['./listcostumer.component.scss']
})
export class ListCostumerComponent implements OnInit {


  filterQuery = "";
  rowsOnPage = 10;
  sortBy = "razaoSocial";
  sortOrder = "asc";  

  pessoas: PessoaJuridica[];

  constructor(private service: CustomerService, private router: Router) {

  }

  ngOnInit(): void {
    this.service.getData().then((data) => {
      this.pessoas = data;
    });
  }

  toInt(num: string) {
    return +num;
  }

  sortByWordLength = (a: any) => {
    return a.city.length;
  }

}

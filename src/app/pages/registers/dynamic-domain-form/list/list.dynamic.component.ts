import { ListDomainBase } from '../components/text-box-domain/list.domain.base';
import {Component, OnInit, Type} from '@angular/core';
import {ListDomainService} from '../service/list.domain.service';
import {Router} from '@angular/router';
@Component({
  selector: 'dynamic-list',
  templateUrl: './list.dynamic.component.html'
})
export class ListDynamicComponent implements OnInit {

  filterQuery = "";
  rowsOnPage = 10;
  sortBy = "description";
  sortOrder = "asc";

  lista: ListDomainBase<string>[];

  constructor(private service: ListDomainService, private router: Router) {

  }

  ngOnInit(): void {
    this.service.getData().then((data) => {
      this.lista = data;
    });
  }

  toInt(num: string) {
    return +num;
  }

  sortByWordLength = (a: any) => {
    return a.description.length;
  }

}

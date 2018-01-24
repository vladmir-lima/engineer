import {DomainBase} from '../components/domain.base';
import {Component, OnInit, Type} from '@angular/core';
import {ListDomainService} from '../service/list.domain.service';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'dynamic-list',
  templateUrl: './list.dynamic.component.html',
  styleUrls: ['./list.dynamic.component.scss']
})
export class ListDynamicComponent implements OnInit {

  filterQuery = "";
  rowsOnPage = 10;
  sortBy = "description";
  sortOrder = "asc";

  lista: DomainBase<string>[];

  constructor(private service: ListDomainService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {      
    this.route
      .data.subscribe((dType: {domainType: number}) => {
        this.service.getData(dType.domainType).then((data) => {
          this.lista = data;
        });
      });
  }

  toInt(num: string) {
    return +num;
  }

  sortByWordLength = (a: any) => {
    return a.description.length;
  }

}
import {Work} from '../components/work';
import {WorkService} from '../service/work.service';
import {Component, OnInit, Type} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'work-list',
  templateUrl: './list.work.component.html',
  styleUrls: ['./list.work.component.scss']
})
export class ListWorkComponent implements OnInit {

  filterQuery = "";
  rowsOnPage = 10;
  sortBy = "description";
  sortOrder = "asc";

  
  lista: Work[];

  constructor(private service: WorkService, private route: ActivatedRoute) {

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
    return a.descricao.length;
  }

}

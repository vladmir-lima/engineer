import {DomainBase} from '../components/domain.base';
import { DymanicDomainEnum } from '../components/dymanic.domain.enum';
import { DynamicService } from '../service/dynamic.service';
import {Component, OnInit, Type} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'dynamic-list',
  templateUrl: './list.dynamic.component.html',
  styleUrls: ['./list.dynamic.component.scss']
})
export class ListDynamicComponent implements OnInit {

  filterQuery = "";
  rowsOnPage = 10;
  sortBy = "descricao";
  sortOrder = "asc";
  tipo: DymanicDomainEnum;

  lista: DomainBase<string>[];

  constructor(private service: DynamicService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {      
    this.route
      .data.subscribe((dType: {tipo: number}) => {
        this.service.getData(dType.tipo).then((data) => {
          this.lista = data;
          this.tipo = dType.tipo;
        });
      });
  }
  
  goToRegister() {
    this.router.navigate(['/paginas/registros/cadastro-dinamico']); 
  }

  toInt(num: string) {
    return +num;
  }

  sortByWordLength = (a: any) => {
    return a.descricao.length;
  }

}

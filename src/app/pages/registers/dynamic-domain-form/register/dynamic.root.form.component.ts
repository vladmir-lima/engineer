import {TextBoxDomainBase} from '../components/text-box-domain/text.box.domain.base';
import {DynamicService} from '../service/dynamic.service';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'dynamic-root',
  templateUrl: './dynamic.root.form.component.html'
})
export class DynamicRootFormComponent implements OnInit {

  components: TextBoxDomainBase<string>[];
  domainDescription: string;
  component: TextBoxDomainBase<any>;

  constructor(private service: DynamicService, private router: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.domainDescription = 'Cadastro de Despesas';
    this.getComponents();
  }

  getComponents(): void {
    const id = +this.router.snapshot.paramMap.get('id');
    if (id) {
      this.service.getEditComponents(id)
        .subscribe(components => this.components = components);
    } else {
      this.components = this.service.getComponents();
    }
  }
}
import { AlertService } from '../../components/alert/service';
import {BaseComponent} from '../../components/base/base.component';
import {DomainBase} from '../components/domain.base';
import {DymanicDomainEnum} from '../components/dymanic.domain.enum';
import {Expense} from '../components/entity/Expense';
import {Component, OnInit, HostListener, OnChanges, Type} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl, AbstractControl} from '@angular/forms';

import {DynamicService} from '../service/dynamic.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'register-dynamic',
  templateUrl: './dynamic.domain.component.html',
})

export class DynamicDomainComponent extends BaseComponent implements OnInit {

  dynamicForm: FormGroup;
  domainBase: DomainBase<string>;
  domainDescription: string;

  get descricao() {return this.dynamicForm.get('domainBase.descricao')}

  constructor(private fb: FormBuilder, private service: DynamicService, private router: ActivatedRoute, public alertService: AlertService) {
    super(alertService);
  }

  ngOnInit(): void {

    this.getItem();

    this.dynamicForm = this.fb.group({
      domainBase: this.fb.group({
        id: [this.domainBase.id || ''],
        descricao: [this.domainBase.descricao || '', Validators.required]
      })

    })

    this.domainDescription = this.service.getDomainDescription();

    //    console.log(this.buildNameFun('vladmir', 'lima', 'carvalho'));

  }

  myEvent(event) {
    console.log(event.target.value);
  }

  onsubmit() {
    //    console.log(this.dynamicForm.controls.domainBase.value);
    //    console.log(this.dynamicForm.controls.address.value);
    this.service.getData().then((data) => {
      let last: any = data[data.length - 1];
      this.dynamicForm.controls.domainBase.value.id = last.id + 1;
      this.service.addItem(this.dynamicForm.controls.domainBase.value);
      super.success("Registro salvo com sucesso!");
    });  

  }


  //  ngOnChanges() {
  //    this.domainBase = this.dynamicForm.controls.domainBase.value;
  //    this.address = this.dynamicForm.controls.address.value;
  //  }


  buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
  }

  buildNameFun: (fname: string, ...rest: string[]) => string = this.buildName;

  getItem(): void {
    const id = +this.router.snapshot.paramMap.get('id');
    if (id) {
      this.service.getItem(id)
        .subscribe(domainBase => this.domainBase = domainBase);
    } else {
      this.domainBase = new DomainBase<string>();
    }
  }

}


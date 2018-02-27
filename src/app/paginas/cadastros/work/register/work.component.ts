import {AlertService} from '../../components/alert/service';
import {BaseComponent} from '../../components/base/base.component';
import {PessoaJuridica} from '../../components/pessoa/pessoajuridica';
import {CustomerService} from '../../customer/service/customer.service';
import {Work} from '../components/work';
import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl, AbstractControl} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {WorkService} from '../service/work.service';

@Component({
  selector: 'register-work',
  templateUrl: './work.component.html'
})
export class WorkComponent extends BaseComponent implements OnInit {

  workForm: FormGroup;
  work: Work;
  customers: PessoaJuridica[];

  get cliente() {return this.workForm.get('work.customer.id')}
  get description() {return this.workForm.get('work.description')}

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: WorkService,
    private customerService: CustomerService,
    public alertService: AlertService,
    private router: Router
  ) {
    super(alertService);
  }


  ngOnInit() {

    this.getWork();

    this.workForm = this.fb.group({
      work: this.fb.group({
        id: [this.work.id || ''],
        description: [this.work.description || '', Validators.required],
        customer: this.fb.group({
          id: [this.work.customer.id || '', Validators.required]
        })
      })
    })

    this.customerService.getData().then((data) => {
      this.customers = data;
    });

  }

  onsubmit() {
    this.service.getData().then((data) => {
      let last: any = data[data.length - 1];
      this.workForm.controls.work.value.id = last.id + 1;
      this.service.addWork(this.workForm.controls.work.value);
      super.success("Registro salvo com sucesso!");
      this.router.navigate(['/paginas/cadastros/lista-obras']);
    });

  }

  getWork(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.getWork(id)
        .subscribe(work => this.work = work);
    } else {
      this.work = new Work();
      this.work.addCustomer(new PessoaJuridica());
    }
  }

}

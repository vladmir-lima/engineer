import {PessoaJuridica} from '../../customer/components/pessoajuridica/pessoajuridica';
import {CustomerService} from '../../customer/service/customer.service';
import {Work} from '../components/work';
import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl, AbstractControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {WorkService} from '../service/work.service';

@Component({
  selector: 'register-work',
  templateUrl: './work.component.html'
})
export class WorkComponent implements OnInit {

  workForm: FormGroup;
  work: Work;
  customers: PessoaJuridica[];

  get cliente() {return this.workForm.get('customer.id')}
  get description() {return this.workForm.get('description')}

  constructor(private fb: FormBuilder,
    private router: ActivatedRoute,
    private service: WorkService,
    private customerService: CustomerService) {
  }


  ngOnInit() {

    this.getWork();

    this.workForm = this.fb.group({
      work: this.fb.group({
        id: [this.work.id || ''],
        description: [this.work.description || '', Validators.required],
        'customer.id': [this.work.customer.id || '', Validators.required]
      })
    })

    this.customerService.getData().then((data) => {
      this.customers = data;
    });

  }

  onsubmit() {
    this.service.addWork(this.workForm.controls.work.value);
  }

  getWork(): void {
    const id = +this.router.snapshot.paramMap.get('id');
    if (id) {
      this.service.getWork(id)
        .subscribe(work => this.work = work);
    } else {
      this.work = new Work();
      this.work.addCustomer(new PessoaJuridica());
    }
  }

}

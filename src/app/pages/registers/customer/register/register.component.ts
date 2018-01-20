import {Address} from '../../address/address';
import {PessoaJuridica} from '../components/pessoajuridica/pessoajuridica';
import {Component, OnInit, HostListener, OnChanges, Type} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl, AbstractControl} from '@angular/forms';
import {CustomerService} from '../service/customer.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'register-customer',
  templateUrl: './register.component.html',
})

export class RegisterCustomerComponent implements OnInit {

  customerForm: FormGroup;
  pessoaJuridica: PessoaJuridica;
  address: Address;

  get cnpj () {return this.customerForm.get('pessoaJuridica.cnpj')}
  get razaoSocial () {return this.customerForm.get('pessoaJuridica.razaoSocial')}
  get email () {return this.customerForm.get('pessoaJuridica.email')}
  get nomeFantasia () {return this.customerForm.get('pessoaJuridica.nomeFantasia')}

  constructor(private fb: FormBuilder, private service: CustomerService, private router: ActivatedRoute) {
  }

  ngOnInit (): void {
   
    this.getPessoa();

    this.customerForm = this.fb.group({
      pessoaJuridica: this.fb.group({
        id: [this.pessoaJuridica.id || ''],
        cnpj: [this.pessoaJuridica.cnpj || '', Validators.required],
        razaoSocial: [this.pessoaJuridica.razaoSocial || '', Validators.required],
        email: [this.pessoaJuridica.email || '', Validators.required],
        nomeFantasia: [this.pessoaJuridica.nomeFantasia || '', Validators.required],
        inscricaoEstadual: [this.pessoaJuridica.inscricaoEstadual || '']
      })

    })

    //    console.log(this.buildNameFun('vladmir', 'lima', 'carvalho'));

  }

  myEvent (event) {
    console.log(event.target.value);
  }

  onsubmit () {
    //    console.log(this.customerForm.controls.pessoaJuridica.value);
    //    console.log(this.customerForm.controls.address.value);
    this.service.addPessoa(this.customerForm.controls.pessoaJuridica.value);
  }
  

  //  ngOnChanges() {
  //    this.pessoaJuridica = this.customerForm.controls.pessoaJuridica.value;
  //    this.address = this.customerForm.controls.address.value;
  //  }


  buildName (firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
  }

  buildNameFun: (fname: string, ...rest: string[]) => string = this.buildName;

  getPessoa (): void {
    const id = +this.router.snapshot.paramMap.get('id');
    if (id) {
      this.service.getPessoa(id)
        .subscribe(pessoaJuridica => this.pessoaJuridica = pessoaJuridica);
    } else {
      this.pessoaJuridica = new PessoaJuridica();
    }
  }

}


import {Address} from '../../address/address';
import {PessoaJuridica} from '../components/pessoajuridica/pessoajuridica';
import {Component, OnInit, HostListener, OnChanges} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl, AbstractControl} from '@angular/forms';

@Component({
  selector: 'register-customer',
  templateUrl: './register.component.html',
})

export class RegisterCustomerComponent implements OnInit {

  customerForm: FormGroup;
  pessoaJuridica: PessoaJuridica;
  address: Address;

  get cnpj() {return this.customerForm.get('pessoaJuridica.cnpj')}
  get razaoSocial() {return this.customerForm.get('pessoaJuridica.razaoSocial')} 
  get email() {return this.customerForm.get('pessoaJuridica.email')}
  get nomeFantasia() {return this.customerForm.get('pessoaJuridica.nomeFantasia')}
  
  get cep() {return this.customerForm.get('address.cep')}
  get cidade() {return this.customerForm.get('address.cidade')}
  get bairro() {return this.customerForm.get('address.bairro')}
  get logradouro() {return this.customerForm.get('address.logradouro')}
  get numero() {return this.customerForm.get('address.numero')}


  constructor(private fb: FormBuilder) {
  }

  ngOnInit (): void {

    this.address = new Address();
    this.pessoaJuridica = new PessoaJuridica();

    this.customerForm = this.fb.group({
      address: this.fb.group({
        id: [''],
        cep: ['', Validators.required],
        cidade: ['', Validators.required],
        numero: ['', Validators.required],
        bairro: ['', Validators.required],
        lote: [''],
        logradouro: ['', Validators.required],
        complemento: ['']
      }),
      pessoaJuridica: this.fb.group({
        id: [''],
        cnpj: ['', Validators.required],
        razaoSocial: ['', Validators.required],
        email: ['', Validators.required],
        nomeFantasia: ['', Validators.required],
        inscricaoEstadual: ['']
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
  }

  //  ngOnChanges() {
  //    this.pessoaJuridica = this.customerForm.controls.pessoaJuridica.value;
  //    this.address = this.customerForm.controls.address.value;
  //  }

  buildName (firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
  }

  buildNameFun: (fname: string, ...rest: string[]) => string = this.buildName;

}


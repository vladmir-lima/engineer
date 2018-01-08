import {Address} from '../address/address';
import {PessoaJuridica} from './components/pessoajuridica/pessoajuridica';
import {Component, OnInit, HostListener} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
})

export class CustomerComponent implements OnInit {

  customerForm: FormGroup;
  pessoaJuridica: PessoaJuridica;
  address: Address;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit (): void {

    this.address = new Address();
    this.pessoaJuridica = new PessoaJuridica();    

    this.customerForm = this.fb.group({
      address: this.fb.group({
        cep: [this.address.cep || '', Validators.required],
        cidade: [this.address.cidade || '', Validators.required],
        numero: [this.address.numero || '', Validators.required],
        bairro: [this.address.bairro || '', Validators.required],
        lote: [''],
        logradouro: [this.address.logradouro || '', Validators.required],
        complemento: ['']
      }),
      pessoaJuridica: this.fb.group({
        cnpj: [this.pessoaJuridica.cnpj || '', Validators.required],
        razaoSocial: [this.pessoaJuridica.razaoSocial || '', Validators.required],
        email: [this.pessoaJuridica.email || '', Validators.required],
        nomeFantasia: [this.pessoaJuridica.nomeFantasia || '', Validators.required],
        inscricaoEstadual: ['']
      })

    })

  }
  
  myEvent(event) {
    console.log(event.target.value);
  }

}


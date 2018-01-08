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

    //    this.customerForm = this.fb.group({
    //      address: this.fb.group({
    //        cep: [this.address.cep],
    //        cidade: [this.address.cidade],
    //        numero: [this.address.numero],
    //        bairro: [this.address.bairro],
    //        lote: [''],
    //        logradouro: [this.address.logradouro],
    //        complemento: ['']
    //      }),
    //      pessoaJuridica: this.fb.group({
    //        cnpj: [this.pessoaJuridica.cnpj],
    //        razaoSocial: [this.pessoaJuridica.razaoSocial],
    //        email: [this.pessoaJuridica.email],
    //        nomeFantasia: [this.pessoaJuridica.nomeFantasia],
    //        inscricaoEstadual: ['']
    //      })
    //
    //        
    this.customerForm = this.fb.group({
      address: this.fb.group({
        cep: [this.address.cep],
        cidade: [this.address.cidade],
        numero: [this.address.numero],
        bairro: [this.address.bairro],
        lote: [''],
        logradouro: [this.address.logradouro],
        complemento: ['']
      }),
      pessoaJuridica: this.fb.group({
        cnpj: [this.pessoaJuridica.cnpj],
        razaoSocial: [this.pessoaJuridica.razaoSocial],
        email: [this.pessoaJuridica.email],
        nomeFantasia: [this.pessoaJuridica.nomeFantasia],
        inscricaoEstadual: ['']
      })

    })

  }

  myEvent (event) {
    console.log(event.target.value);
  }

  onsubmit () {
    console.log(this.customerForm.controls.pessoaJuridica.value);
    

  }

}


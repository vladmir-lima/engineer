import { PessoaJuridica } from '../customer/components/pessoajuridica/pessoajuridica';
import {Address} from './address';
import {Component, OnInit, Input} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'address',
  templateUrl: './address.component.html',
})
export class AddressComponent implements OnInit {

 @Input('address')
  address: Address;
  
  @Input('customerForm')
  customerForm: FormGroup;

  addressForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }


  ngOnInit () {   
    this.addressForm = this.toFormGroup(this.address);
     this.customerForm.addControl('address', this.addressForm);
  }

  private toFormGroup (data: Address) {
    const formGroup = this.fb.group({
      cep: [data.cep || '', Validators.required],
      cidade: [data.cidade || '', Validators.required],
      numero: [data.numero || '', Validators.required],
      bairro: [data.bairro || '', Validators.required],
      lote: [data.lote],
      logradouro: [data.logradouro || '', Validators.required],
      complemento: [data.complemento]
    });

    return formGroup;
  }
}

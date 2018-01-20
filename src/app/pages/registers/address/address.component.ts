import {PessoaJuridica} from '../customer/components/pessoajuridica/pessoajuridica';
import { Address } from './address';
import {Component, OnInit, Input} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'address',
  templateUrl: './address.component.html',
})
export class AddressComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() address: Address;

  get cep() {return this.form.get('address.cep')}
  get cidade() {return this.form.get('address.cidade')}
  get bairro() {return this.form.get('address.bairro')}
  get logradouro() {return this.form.get('address.logradouro')}
  get numero() {return this.form.get('address.numero')}

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {    
    if (!this.address) {
      this.address = new Address();
    }
    this.form.addControl('address', this.fb.group({     
        id: [this.address.id || ''],
        cep: [this.address.cep || '', Validators.required],
        cidade: [this.address.cidade || '', Validators.required],
        numero: [this.address.numero || '', Validators.required],
        bairro: [this.address.bairro || '', Validators.required],
        lote: [this.address.lote || ''],
        logradouro: [this.address.logradouro || '', Validators.required],
        complemento: [this.address.complemento || '']     
    }))
  }

}

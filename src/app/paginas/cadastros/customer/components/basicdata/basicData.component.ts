import {EmailValidator} from '../../../../../theme/validators/email.validator';
import {Address} from '../../../address/address';
import {PessoaJuridica} from '../../../components/pessoa/pessoajuridica';

import {Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'basic-data',
  templateUrl: './basicData.component.html',
})
export class BasicDataComponent implements OnInit {

  @Input('pessoaJuridica')
  pessoaJuridica: PessoaJuridica;

  @Input('customerForm')
  customerForm: FormGroup;

  basicDataForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit () {
    this.basicDataForm = this.toFormGroup(this.pessoaJuridica);
    this.customerForm.addControl('pessoaJuridica', this.basicDataForm);
  }

  private toFormGroup (data: PessoaJuridica) {
    const formGroup = this.fb.group({
      cnpj: [data.cnpj || '', Validators.required],
      razaoSocial: [data.razaoSocial || '', Validators.required],
      email: [data.email || '', Validators.required],
      nomeFantasia: [data.nomeFantasia || ''],
      inscricaoEstadual: [data.inscricaoEstadual || '', Validators.required]
    });

    return formGroup;
  }

}

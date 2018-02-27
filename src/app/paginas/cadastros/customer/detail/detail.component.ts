import {Address} from '../../address/address';
import {PessoaJuridica} from '../../components/pessoa/pessoajuridica';
import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {FormBuilder, FormArray, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {
  constructor(private fb: FormBuilder) {} 

  customerForm: FormGroup;

  pessoaJuridica: PessoaJuridica;
  address: Address;

  ngOnInit () {
    this.address = new Address();
    this.customerForm = this.fb.group({
      'pessoaJuridica.razaoSocial': ['', Validators.required],
      addresses: this.fb.array([]) // <-- the child FormGroup       
    });
  }

  setAddresses (addresses: Address[]) {
    const addressFGs = addresses.map(address => this.fb.group(address));
    const addressFormArray = this.fb.array(addressFGs);
    this.customerForm.setControl('addresses', addressFormArray);
  }

  addAddress () {
    this.addresses.push(this.fb.group(new Address()));
  }

  get addresses (): FormArray {
    return this.customerForm.get('addresses') as FormArray;
  };
}

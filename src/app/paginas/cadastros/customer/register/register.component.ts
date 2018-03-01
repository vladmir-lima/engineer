import {Address} from '../../address/address';
import {AlertService} from '../../components/alert/service/index';
import {BaseComponent} from '../../components/base/base.component';
import {Contact} from '../../components/contact';
import {PessoaJuridica} from '../../components/pessoa/pessoajuridica';
import {Component, OnInit, HostListener, OnChanges, Type} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl, AbstractControl, FormArray} from '@angular/forms';
import {CustomerService} from '../service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'register-customer',
  templateUrl: './register.component.html',
})

export class RegisterCustomerComponent extends BaseComponent implements OnInit {

  customerForm: FormGroup;
  pessoaJuridica: PessoaJuridica;
  address: Address;

  get cnpj() {return this.customerForm.get('pessoaJuridica.cnpj')}
  get razaoSocial() {return this.customerForm.get('pessoaJuridica.razaoSocial')}
  get email() {return this.customerForm.get('pessoaJuridica.email')}
  get nomeFantasia() {return this.customerForm.get('pessoaJuridica.nomeFantasia')}

  constructor(private fb: FormBuilder, private service: CustomerService,
    private route: ActivatedRoute, public alertService: AlertService, private router: Router) {
    super(alertService);
  }

  ngOnInit(): void {

    this.getPessoa();

    this.customerForm = this.fb.group({
      pessoaJuridica: this.fb.group({
        id: [this.pessoaJuridica.id || ''],
        cnpj: [this.pessoaJuridica.cnpj || '', Validators.required],
        razaoSocial: [this.pessoaJuridica.razaoSocial || '', Validators.required],
        email: [this.pessoaJuridica.email || '', Validators.required],
        nomeFantasia: [this.pessoaJuridica.nomeFantasia || '', Validators.required],
        inscricaoEstadual: [this.pessoaJuridica.inscricaoEstadual || ''],
        contacts: this.fb.array([this.fb.group(new Contact())])
      })

    })

//    this.setContacts(this.pessoaJuridica.contacts);

    //    console.log(this.buildNameFun('vladmir', 'lima', 'carvalho'));

  }

  myEvent(event) {
    console.log(event.target.value);
  }

  onsubmit() {
    console.log(this.customerForm.controls.pessoaJuridica.value);
    this.service.getData().then((data) => {
      let last: any = data[data.length - 1];
      this.customerForm.controls.pessoaJuridica.value.id = last.id + 1;
      this.customerForm.controls.pessoaJuridica.value.address = this.customerForm.controls.address.value;
      this.customerForm.controls.pessoaJuridica.value.contacts = this.customerForm.controls.contacts.value;
      this.service.addPessoa(this.customerForm.controls.pessoaJuridica.value);
      super.success("Registro salvo com sucesso!");
      this.router.navigate(['/paginas/cadastros/lista-clientes']);
    });

  }


  //  ngOnChanges() {
  //    this.pessoaJuridica = this.customerForm.controls.pessoaJuridica.value;
  //    this.address = this.customerForm.controls.address.value;
  //  }


  buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
  }

  buildNameFun: (fname: string, ...rest: string[]) => string = this.buildName;

  getPessoa(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.getPessoa(id)
        .subscribe(pessoaJuridica => this.pessoaJuridica = pessoaJuridica);
    } else {
      this.pessoaJuridica = new PessoaJuridica();
    }
  }

  setContacts(data: Contact[]) {
    if (!data.entries.length) {     
      data = [{
        commercialPhone: '',
        mobilePhone: '',
        role: '',
        name: ''
      }]
    }
      const newContacts = data.map(contact => this.fb.group(contact));
      const contactsFormArray = this.fb.array(newContacts);
      this.customerForm.setControl('pessoaJuridica.contacts', contactsFormArray);
    }

    addContact() {
      this.contacts.push(this.fb.group(new Contact()));
    }

    get contacts(): FormArray {
      return this.customerForm.get('pessoaJuridica.contacts') as FormArray;
    };


  }


import {AlertService} from '../../components/alert/service';
import {BaseComponent} from '../../components/base';
import {DymanicDomainEnum} from '../../dynamic-domain-form/components';
import {Expense} from '../../dynamic-domain-form/components/entity';
import {DynamicService} from '../../dynamic-domain-form/service';
import {Work} from '../../work/components/work';
import {WorkService} from '../../work/service';
import {ExpenseCustomer} from '../components';
import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl, AbstractControl} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ExpenseCustomerService} from '../service';
import {BsDaterangepickerConfig, BsLocaleService} from 'ngx-bootstrap';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import {ptBrLocale} from 'ngx-bootstrap/locale';
import {defineLocale} from 'ngx-bootstrap/chronos';

@Component({
  selector: 'expense-customer',
  templateUrl: './expense.customer.component.html'
})
export class ExpenseCustomerComponent extends BaseComponent implements OnInit {

  expenseCustomerForm: FormGroup;
  expenseCustomer: ExpenseCustomer;
  works: Work[];
  expenses: Expense[];
  idWork: number;
  idExpense: number;
  locale = 'pt-br';
  dpConfig: Partial<BsDatepickerConfig> = new BsDatepickerConfig();

  get cliente() {return this.expenseCustomerForm.get('work.customer.id')}
  get description() {return this.expenseCustomerForm.get('work.description')}

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: ExpenseCustomerService,
    private workService: WorkService,
    private dynamicService: DynamicService,
    public alertService: AlertService,
    private router: Router,
    private _localeService: BsLocaleService
  ) {
    super(alertService);
  }


  ngOnInit() {

    this.getExpenseCustomer();

    this.expenseCustomerForm = this.fb.group({
      expenseCustomer: this.fb.group({
        id: [this.expenseCustomer.id || ''],
        description: [this.expenseCustomer.description || '', Validators.required],
        initialDate: [this.expenseCustomer.initialDate || '', Validators.required],
        finalDate: [this.expenseCustomer.finalDate || '', Validators.required],
        invoice: [this.expenseCustomer.invoice || '', Validators.required],
        value: [this.expenseCustomer.value || '', Validators.required],
        work: this.fb.group({
          id: [this.expenseCustomer.work.id || '', Validators.required]
        }),
        expense: this.fb.group({
          id: [this.expenseCustomer.expense.id || '', Validators.required]
        })
      })
    })

    this.getWorks();
    this.getExpenses();

    this.loadExpenseChange();
    this.loadWorkChange();

    this.dpConfig = Object.assign({}, {containerClass: 'theme-green', showWeekNumbers: true, minDate: new Date(2016, 1, 1), maxDate: new Date(2025, 1, 1)});
    this._localeService.use(this.locale);
    defineLocale(this.locale, ptBrLocale);

  }

  loadWorkChange() {
    this.expenseCustomerForm.get('expenseCustomer.work.id').valueChanges.subscribe((value) => {
      this.idWork = value;
      this.setList();
    });
  }

  loadExpenseChange() {
    this.expenseCustomerForm.get('expenseCustomer.expense.id').valueChanges.subscribe((value) => {
      this.idExpense = value;
      this.setList();
    });
  }

  onsubmit() {
    this.expenseCustomerForm.controls.expenseCustomer.value.id = 3;
    this.service.addExpenseCustomer(this.expenseCustomerForm.controls.expenseCustomer.value);
    this.setList();
    super.success("Registro salvo com sucesso!");
    this.router.navigate(['/paginas/cadastros/cadastro-despesas-obra']);

  }

  getExpenseCustomer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.getExpenseCustomer(id)
        .subscribe(expenseCustomer => this.expenseCustomer = expenseCustomer);
    } else {
      this.expenseCustomer = new ExpenseCustomer();
    }
  }

  getWorks() {
    this.workService.getData().then((data) => {
      this.works = data;
    });
  }

  getExpenses() {
    this.dynamicService.getData(DymanicDomainEnum.EXPENSE).then((data) => {
      this.expenses = data;
    });
  }

  setList() {
    this.service.getAExpensesCustomerByfFilter(this.idWork, this.idExpense);
  }

}

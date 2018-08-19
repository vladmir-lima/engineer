import { BaChartistChart } from '../../../../theme/components';
import { ExpenseCustomer } from '../../../cadastros/expense-customer/components';
import { ExpenseCustomerService } from '../../../cadastros/expense-customer/service';
import { Work } from '../../../cadastros/work/components/work';
import {WorkService} from '../../../cadastros/work/service';
import { Chart } from '../chart/chart';
import {Component, OnInit, ViewChild} from '@angular/core';

import {ChartistJsService} from './chartistJs.service';
import {FormGroup, FormBuilder, Validators, FormControl, AbstractControl} from '@angular/forms';

@Component({
  selector: 'chartist-js',
  templateUrl: './chartistJs.html',
  styleUrls: ['./chartistJs.scss']
})

export class ChartistJs implements OnInit {

  chartForm: FormGroup;
  work: Work;
  data: Chart;
  works: Work[];
  lista: ExpenseCustomer[];
 
  constructor(private _chartistJsService: ChartistJsService,
    private workService: WorkService,
    private expenseCustomerService: ExpenseCustomerService,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    this.data = this._chartistJsService.getAll();
    this.work = new Work();
    this.chartForm = this.fb.group({     
        work: this.fb.group({
          id: [this.work.id || '', Validators.required]
        })
    })    
    this.getWorks();
    this.loadWorkChange();
  }

  getResponsive(padding, offset) {
    return this._chartistJsService.getResponsive(padding, offset);
  }
  
  getWorks() {
    this.workService.getData().then((data) => {
      this.works = data;
    });
  }
  
  loadWorkChange() {   
    this.chartForm.get('work.id').valueChanges.subscribe((value) => {    
     this.getAExpensesCustomerByfWork(value);
    });
  }
  
  getAExpensesCustomerByfWork(idWork: number): void {   
    this.expenseCustomerService.getAExpensesCustomerByWork(idWork).subscribe((data) => {
      this.lista = data;     
      this.data = this._chartistJsService.getDynamicData(this.lista);
      window.dispatchEvent(new Event('resize')); 
    }); 
  }
}

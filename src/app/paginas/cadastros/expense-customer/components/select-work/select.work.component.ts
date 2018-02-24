import { Work } from '../../../work/components/work';
import { WorkService } from '../../../work/service';
import { ExpenseCustomer } from '../expense.customer';
import {Component, OnInit, Input} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'select-work',
  templateUrl: './select.work.component.html',
  styleUrls: ['./select.work.component.scss']
})
export class SelectWorkComponent implements OnInit {

   works: Work[];

  constructor(private workService: WorkService) {}

  ngOnInit() {
    this.workService.getWorks().subscribe(data => this.works = data);
  }

}

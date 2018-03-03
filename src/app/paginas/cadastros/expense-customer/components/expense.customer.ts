import {Work} from '../../work/components/work';
import {Expense} from '../../dynamic-domain-form/components/entity';
export class ExpenseCustomer {

  constructor(work?: Work, expense?: Expense) {
    this.addWork(work);   
    this.addExpense(expense);
  }

  id: number;
  work?: Work;
  expense?: Expense;
  description: string;
  initialDate: Date;
  finalDate: Date;
  invoice: string;
  value: any;
  addWork?(data: Work) {
    this.work = data || new Work();
  }
  addExpense?(data: Expense) {
    this.expense = data || new Expense();
  }
}
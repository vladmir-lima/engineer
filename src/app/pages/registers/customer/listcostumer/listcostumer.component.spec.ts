import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCostumerComponent } from './listcostumer.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListCostumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCostumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

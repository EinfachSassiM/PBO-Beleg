import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackholderchartComponent } from './stakeholderchart.component';

describe('StackholderchartComponent', () => {
  let component: StackholderchartComponent;
  let fixture: ComponentFixture<StackholderchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackholderchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackholderchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

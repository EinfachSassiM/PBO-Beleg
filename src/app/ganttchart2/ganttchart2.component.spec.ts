import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ganttchart2Component } from './ganttchart2.component';

describe('Ganttchart2Component', () => {
  let component: Ganttchart2Component;
  let fixture: ComponentFixture<Ganttchart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ganttchart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ganttchart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

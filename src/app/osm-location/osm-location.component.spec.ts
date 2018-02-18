import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsmLocationComponent } from './osm-location.component';

describe('OsmLocationComponent', () => {
  let component: OsmLocationComponent;
  let fixture: ComponentFixture<OsmLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsmLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsmLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

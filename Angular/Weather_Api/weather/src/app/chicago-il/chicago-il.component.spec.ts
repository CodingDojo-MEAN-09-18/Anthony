import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChicagoILComponent } from './chicago-il.component';

describe('ChicagoILComponent', () => {
  let component: ChicagoILComponent;
  let fixture: ComponentFixture<ChicagoILComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChicagoILComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChicagoILComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

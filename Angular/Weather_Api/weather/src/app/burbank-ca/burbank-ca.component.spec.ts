import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurbankCAComponent } from './burbank-ca.component';

describe('BurbankCAComponent', () => {
  let component: BurbankCAComponent;
  let fixture: ComponentFixture<BurbankCAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurbankCAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurbankCAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

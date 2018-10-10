import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanJoseCAComponent } from './san-jose-ca.component';

describe('SanJoseCAComponent', () => {
  let component: SanJoseCAComponent;
  let fixture: ComponentFixture<SanJoseCAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanJoseCAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanJoseCAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

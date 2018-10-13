import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DallasTXComponent } from './dallas-tx.component';

describe('DallasTXComponent', () => {
  let component: DallasTXComponent;
  let fixture: ComponentFixture<DallasTXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DallasTXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DallasTXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

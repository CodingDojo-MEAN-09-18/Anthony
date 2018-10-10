import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeattleWAComponent } from './seattle-wa.component';

describe('SeattleWAComponent', () => {
  let component: SeattleWAComponent;
  let fixture: ComponentFixture<SeattleWAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeattleWAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeattleWAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

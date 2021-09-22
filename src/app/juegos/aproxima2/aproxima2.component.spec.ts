import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aproxima2Component } from './aproxima2.component';

describe('Aproxima2Component', () => {
  let component: Aproxima2Component;
  let fixture: ComponentFixture<Aproxima2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aproxima2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Aproxima2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

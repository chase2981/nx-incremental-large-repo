import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib6component13Component } from './lib4childlib6component13.component';

describe('Lib4childlib6component13Component', () => {
  let component: Lib4childlib6component13Component;
  let fixture: ComponentFixture<Lib4childlib6component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib6component13Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib6component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

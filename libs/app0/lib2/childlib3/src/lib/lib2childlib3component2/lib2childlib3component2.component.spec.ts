import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib3component2Component } from './lib2childlib3component2.component';

describe('Lib2childlib3component2Component', () => {
  let component: Lib2childlib3component2Component;
  let fixture: ComponentFixture<Lib2childlib3component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib3component2Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib3component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

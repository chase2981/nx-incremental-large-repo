import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib2component17Component } from './lib2childlib2component17.component';

describe('Lib2childlib2component17Component', () => {
  let component: Lib2childlib2component17Component;
  let fixture: ComponentFixture<Lib2childlib2component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib2component17Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib2component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

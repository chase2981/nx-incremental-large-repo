import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib9component8Component } from './lib2childlib9component8.component';

describe('Lib2childlib9component8Component', () => {
  let component: Lib2childlib9component8Component;
  let fixture: ComponentFixture<Lib2childlib9component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib9component8Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib9component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib7component40Component } from './lib3childlib7component40.component';

describe('Lib3childlib7component40Component', () => {
  let component: Lib3childlib7component40Component;
  let fixture: ComponentFixture<Lib3childlib7component40Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib7component40Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib7component40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

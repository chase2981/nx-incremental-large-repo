import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib3component43Component } from './lib3childlib3component43.component';

describe('Lib3childlib3component43Component', () => {
  let component: Lib3childlib3component43Component;
  let fixture: ComponentFixture<Lib3childlib3component43Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib3component43Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib3component43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

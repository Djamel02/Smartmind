import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivDiffComponent } from './div-diff.component';

describe('DivDiffComponent', () => {
  let component: DivDiffComponent;
  let fixture: ComponentFixture<DivDiffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivDiffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivDiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

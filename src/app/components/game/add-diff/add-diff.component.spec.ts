import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDiffComponent } from './add-diff.component';

describe('AddDiffComponent', () => {
  let component: AddDiffComponent;
  let fixture: ComponentFixture<AddDiffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDiffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

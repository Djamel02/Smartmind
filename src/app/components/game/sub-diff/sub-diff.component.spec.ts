import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubDiffComponent } from './sub-diff.component';

describe('SubDiffComponent', () => {
  let component: SubDiffComponent;
  let fixture: ComponentFixture<SubDiffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubDiffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubDiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

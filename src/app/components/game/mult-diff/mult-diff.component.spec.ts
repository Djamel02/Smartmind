import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultDiffComponent } from './mult-diff.component';

describe('MultDiffComponent', () => {
  let component: MultDiffComponent;
  let fixture: ComponentFixture<MultDiffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultDiffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultDiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

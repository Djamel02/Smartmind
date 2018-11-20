import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstitionComponent } from './substition.component';

describe('SubstitionComponent', () => {
  let component: SubstitionComponent;
  let fixture: ComponentFixture<SubstitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubstitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubstitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivhardComponent } from './divhard.component';

describe('DivhardComponent', () => {
  let component: DivhardComponent;
  let fixture: ComponentFixture<DivhardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivhardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivhardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

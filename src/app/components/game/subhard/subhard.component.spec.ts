import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubhardComponent } from './subhard.component';

describe('SubhardComponent', () => {
  let component: SubhardComponent;
  let fixture: ComponentFixture<SubhardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubhardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubhardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

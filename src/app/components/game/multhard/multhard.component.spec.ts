import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MulthardComponent } from './multhard.component';

describe('MulthardComponent', () => {
  let component: MulthardComponent;
  let fixture: ComponentFixture<MulthardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MulthardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MulthardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

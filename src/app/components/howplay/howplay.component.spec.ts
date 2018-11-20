import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowplayComponent } from './howplay.component';

describe('HowplayComponent', () => {
  let component: HowplayComponent;
  let fixture: ComponentFixture<HowplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

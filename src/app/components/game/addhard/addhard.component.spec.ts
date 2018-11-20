import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhardComponent } from './addhard.component';

describe('AddhardComponent', () => {
  let component: AddhardComponent;
  let fixture: ComponentFixture<AddhardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddhardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

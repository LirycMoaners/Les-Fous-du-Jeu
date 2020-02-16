import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FestsComponent } from './fests.component';

describe('FestsComponent', () => {
  let component: FestsComponent;
  let fixture: ComponentFixture<FestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

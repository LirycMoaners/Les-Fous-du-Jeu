import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FestListComponent } from './fest-list.component';

describe('FestListComponent', () => {
  let component: FestListComponent;
  let fixture: ComponentFixture<FestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

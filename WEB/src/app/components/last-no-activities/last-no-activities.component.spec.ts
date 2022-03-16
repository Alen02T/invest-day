import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastNoActivitiesComponent } from './last-no-activities.component';

describe('LastNoActivitiesComponent', () => {
  let component: LastNoActivitiesComponent;
  let fixture: ComponentFixture<LastNoActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastNoActivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastNoActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

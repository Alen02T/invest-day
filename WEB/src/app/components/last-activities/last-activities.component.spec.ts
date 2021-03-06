import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastActivitiesComponent } from './last-activities.component';

describe('LastActivitiesComponent', () => {
  let component: LastActivitiesComponent;
  let fixture: ComponentFixture<LastActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastActivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

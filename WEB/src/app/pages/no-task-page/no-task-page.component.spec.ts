import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoTaskPageComponent } from './no-task-page.component';

describe('NoTaskPageComponent', () => {
  let component: NoTaskPageComponent;
  let fixture: ComponentFixture<NoTaskPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoTaskPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoTaskPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

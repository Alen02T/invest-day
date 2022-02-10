import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomenicoComponent } from './domenico.component';

describe('DomenicoComponent', () => {
  let component: DomenicoComponent;
  let fixture: ComponentFixture<DomenicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomenicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomenicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

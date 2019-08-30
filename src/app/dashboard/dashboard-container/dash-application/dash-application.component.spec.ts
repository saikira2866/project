import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashApplicationComponent } from './dash-application.component';

describe('DashApplicationComponent', () => {
  let component: DashApplicationComponent;
  let fixture: ComponentFixture<DashApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

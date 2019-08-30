import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardmenuComponent } from './dashboardmenu.component';

describe('DashboardmenuComponent', () => {
  let component: DashboardmenuComponent;
  let fixture: ComponentFixture<DashboardmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

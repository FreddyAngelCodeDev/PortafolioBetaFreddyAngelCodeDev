import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPagComponent } from './nav-pag.component';

describe('NavPagComponent', () => {
  let component: NavPagComponent;
  let fixture: ComponentFixture<NavPagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavPagComponent]
    });
    fixture = TestBed.createComponent(NavPagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProyectsComponent } from './my-proyects.component';

describe('MyProyectsComponent', () => {
  let component: MyProyectsComponent;
  let fixture: ComponentFixture<MyProyectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyProyectsComponent]
    });
    fixture = TestBed.createComponent(MyProyectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineNavComponent } from './admine-nav.component';

describe('AdmineNavComponent', () => {
  let component: AdmineNavComponent;
  let fixture: ComponentFixture<AdmineNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmineNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

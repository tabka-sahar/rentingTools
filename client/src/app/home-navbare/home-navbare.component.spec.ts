import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNavbareComponent } from './home-navbare.component';

describe('HomeNavbareComponent', () => {
  let component: HomeNavbareComponent;
  let fixture: ComponentFixture<HomeNavbareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeNavbareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNavbareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolDetailesComponent } from './tool-detailes.component';

describe('ToolDetailesComponent', () => {
  let component: ToolDetailesComponent;
  let fixture: ComponentFixture<ToolDetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolDetailesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

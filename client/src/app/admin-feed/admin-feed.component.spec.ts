import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:client/src/app/admin-feed/admin-feed.component.spec.ts
import { AdminFeedComponent } from './admin-feed.component';
=======
import { AdminComponent } from './adminTools_List.component';
>>>>>>> bf7da2b (delete posts):client/src/app/admin/admin.component.spec.ts

describe('AdminFeedComponent', () => {
  let component: AdminFeedComponent;
  let fixture: ComponentFixture<AdminFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

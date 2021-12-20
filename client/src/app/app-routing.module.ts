import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NavbareComponent } from './navbare/navbare.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ToolsComponent } from './tools/tools.component';
import { ToolDetailesComponent } from './tool-detailes/tool-detailes.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminFeedComponent } from './admin-feed/admin-feed.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'user/login', component: LoginComponent },
      { path: 'user', component: UserProfileComponent },
      { path: 'user/update', component: UpdateProfileComponent },
      { path: 'users/signup', component: SignupComponent },
      { path: 'tools', component: ToolsComponent },
      { path: 'user/forgot', component: ForgotPasswordComponent },
      { path: 'admin/tools', component: AdminFeedComponent },
      { path: 'tools/slectedTool', component: ToolDetailesComponent },
      { path: 'admin', component: LoginAdminComponent },
<<<<<<< HEAD
      {path:'admin/users', component: AdminUsersComponent}
=======
      { path: 'admin/users', component: UsersListComponent },
>>>>>>> 3936c72ccbd67d16d40f61382e16204b09eddee8
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

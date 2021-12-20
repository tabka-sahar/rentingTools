import { ToolsComponent} from './tools/tools.component';
import { NgModule, ViewChild, AfterViewInit, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NavbareComponent } from './navbare/navbare.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignupComponent } from './signup/signup.component';
import { AdminFeedComponent } from './admin-feed/admin-feed.component';
import { GoogleComponent } from './google/google.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { FooterComponent } from './footer/footer.component';
import { ToolDetailesComponent } from './tool-detailes/tool-detailes.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { HomePageComponent } from './home-page/home-page.component';
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireStorageModule } from 'angularfire2/storage';

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    UserProfileComponent,
    NavbareComponent,
    UpdateProfileComponent,
    SignupComponent,
    ToolsComponent,
    ForgotPasswordComponent,
    SignupComponent,
    AdminFeedComponent,
    GoogleComponent,
    LoginAdminComponent,
    FooterComponent,
    ToolDetailesComponent,
    AdminUsersComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

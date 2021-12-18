import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NavbareComponent } from './navbare/navbare.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { GoogleComponent } from './google/google.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireStorageModule } from 'angularfire2/storage'

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    UserProfileComponent,
    NavbareComponent,
    UpdateProfileComponent,
    SignupComponent,
    AdminComponent,
    ForgotPasswordComponent,
    SignupComponent,
    GoogleComponent,
    LoginAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'user', component: UserProfileComponent },
      { path: 'user/update', component: UpdateProfileComponent },
      {path: 'user/forgot', component: ForgotPasswordComponent},
      {path:'users/signup',component: SignupComponent},
            {path:'sucess',component: GoogleComponent},
            {path:'admin',component: LoginAdminComponent}

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

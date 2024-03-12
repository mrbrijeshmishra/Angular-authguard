import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppComponent } from './app.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {
    path:'logIn',
    component:UserLoginComponent
  },
  {
    path:'signUp',
    component:UserSignupComponent
  },
  {
    path:'welcome',
    component:WelcomeComponent,
    canActivate:[authGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

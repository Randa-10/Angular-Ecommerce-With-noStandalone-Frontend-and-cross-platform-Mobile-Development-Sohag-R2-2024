import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'singup',component:SignupComponent},

]

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
RouterModule.forChild(routes)
  ]
})
export class UserModule { }

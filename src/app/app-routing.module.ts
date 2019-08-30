import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { DashboardContainerComponent } from './dashboard/dashboard-container/dashboard-container.component';

import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { DashApplicationComponent } from './dashboard/dashboard-container/dash-application/dash-application.component';


const routes: Routes = [

  { path : '', component : LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forget', component: ForgetpasswordComponent },
  { path: 'dashboard', component : DashboardContainerComponent },
  { path: 'register', component : RegistrationFormComponent },
  { path: 'dashapplication', component: DashApplicationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

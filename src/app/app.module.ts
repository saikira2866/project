import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { DashboardheaderComponent } from './dashboard/dashboardheader/dashboardheader.component';
import { DashboardmenuComponent } from './dashboard/dashboardmenu/dashboardmenu.component';
import { DashboardcontentComponent } from './dashboard/dashboardcontent/dashboardcontent.component';
import { DashboardContainerComponent } from './dashboard/dashboard-container/dashboard-container.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { DashApplicationComponent } from './dashboard/dashboard-container/dash-application/dash-application.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetpasswordComponent,
    DashboardheaderComponent,
    DashboardmenuComponent,
    DashboardcontentComponent,
    DashboardContainerComponent,
    RegistrationFormComponent,
    DashApplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import 'hamerjs';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot([{
      path:"login",
      component:LoginComponent
    },
    {
    path:"registration",
    component:RegistrationComponent
    },
    {
      path:"dashboard",
      component:DashboardComponent
    }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }

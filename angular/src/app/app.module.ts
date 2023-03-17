import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/Login/login/login.component';
import { NavbarComponent } from './Components/Navbar/navbar/navbar.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { TeamsAndConditionComponent } from './Components/teams-and-condition/teams-and-condition.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    NotFoundComponent,
    HomePageComponent,
    AboutusComponent,
    TeamsAndConditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

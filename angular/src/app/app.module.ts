import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { TeamsAndConditionComponent } from './Components/teams-and-condition/teams-and-condition.component';
import { AdminDashBoardComponent } from './Components/admin-dashboard/admin-dash-board/admin-dash-board.component';
import { BooksComponent } from './Components/books/books.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { CardComponent } from './Components/shared/card/card.component';
import { BookDetailsComponent } from './book-details/book-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    NotFoundComponent,
    HomePageComponent,
    AboutusComponent,
    TeamsAndConditionComponent,
    AdminDashBoardComponent,
    BooksComponent,
    LogoutComponent,
    CardComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { TeamsAndConditionComponent } from './Components/teams-and-condition/teams-and-condition.component';
import { BooksComponent } from './Components/books/books.component';
import { CardComponent } from './Components/Shared/card/card/card.component';
import { AuthorsComponent} from './Components/authors/Authors.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminDashBoardComponent } from './Components/admin-dashboard/admin-dash-board/admin-dash-board.component';
import { AdminBooksComponent } from './Components/admin-dashboard/admin-books/admin-books.component';
import { AdminCategoriesComponent } from './Components/admin-dashboard/admin-categories/admin-categories.component';
import { AdminAuthorsComponent } from './Components/admin-dashboard/admin-authors/admin-authors.component';
import { RegisterComponent } from './Components/register/register.component';
import { CheckPasswordDirective } from 'custom-dirictives/passwordMatchChecker';
import { RestPasswordComponent } from './Components/rest-password/rest-password.component';
import { Popular_authorsComponent } from './Components/popular-authors/popular_authors.component';
import { Popular_booksComponent } from './Components/popular-books/popular_books.component';
import { Popular_categoriesComponent } from './Components/popular-categories/popular_categories.component';
import { AuthorDetailsComponent } from './Components/author-details/author-details.component';
import { CategoriesComponent } from './Components/categories/Categories.component';
import {StarRatingComponent} from "./Components/Shared/star-rating/star-rating.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import {BookDetailsComponent} from "./Components/book-details/book-details.component";
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";
import { MatSelectModule } from '@angular/material/select';
import { SpinnerComponent } from './Components/spinner/spinner.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CategoryDetailsComponent } from './Components/category-details/category-details.component';
import { ReviewComponent } from './Components/review/review.component';
import { BookCardComponent } from './Components/Shared/book-card/book-card.component';
import { UserDashboardComponent } from './Components/user-dashboard/user-dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    NotFoundComponent,
    HomePageComponent,
    AboutusComponent,
    TeamsAndConditionComponent,
    BooksComponent,
    CardComponent,
    AuthorsComponent,
   AdminDashBoardComponent,
   AdminAuthorsComponent,
   AdminBooksComponent,
   AdminCategoriesComponent,
   RegisterComponent,
   LoginComponent,
   CheckPasswordDirective,
   RestPasswordComponent,
   Popular_authorsComponent,
   Popular_booksComponent,
   Popular_categoriesComponent,
   AuthorDetailsComponent,
   CardComponent,
   CategoriesComponent,
   StarRatingComponent,
   BookDetailsComponent,
   SpinnerComponent,
   BookCardComponent,
   ReviewComponent,
   CategoryDetailsComponent,
   FooterComponent,
   UserDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    MatIconModule,

    HttpClientModule,

   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

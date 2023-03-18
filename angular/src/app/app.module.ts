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
import { BooksComponent } from './Components/books/books.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { AuthorsComponent} from './Components/authors/Authors.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminDashBoardComponent } from './Components/admin-dashboard/admin-dash-board/admin-dash-board.component';
import { AddAuthorComponent } from './Components/admin-dashboard/admin-actions/create/add-author/add-author.component';
import { AdminBooksComponent } from './Components/admin-dashboard/admin-books/admin-books.component';
import { AdminCategoriesComponent } from './Components/admin-dashboard/admin-categories/admin-categories.component';
import { addBookComponent } from './Components/admin-dashboard/admin-actions/create/add-book/add-book.component';
import { addCategoryComponent } from './Components/admin-dashboard/admin-actions/create/add-category/add-category.component';
import { AdminAuthorsComponent } from './Components/admin-dashboard/admin-authors/admin-authors.component';
import { UpdateCategoryComponent } from './Components/admin-dashboard/admin-actions/update/update-category/update-category.component';
import { DeleteCategoryComponent } from './Components/admin-dashboard/admin-actions/delete/delete-category/delete-category.component';
import { UpdateBookComponent } from './Components/admin-dashboard/admin-actions/update/update-book/update-book.component';
import { DeleteBookComponent } from './Components/admin-dashboard/admin-actions/delete/delete-book/delete-book.component';
import { UpdateAuthorComponent } from './Components/admin-dashboard/admin-actions/update/update-author/update-author.component';
import { DeleteAuthorComponent } from './Components/admin-dashboard/admin-actions/delete/delete-author/delete-author.component';

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
    LogoutComponent,
    AuthorsComponent,
   AdminDashBoardComponent,
   AdminAuthorsComponent,
   AddAuthorComponent,
   AdminBooksComponent,
   AdminCategoriesComponent,
   AddAuthorComponent,
   addBookComponent,
   addCategoryComponent,
   UpdateCategoryComponent,
   DeleteCategoryComponent,
   addBookComponent,
   UpdateBookComponent,
   DeleteBookComponent,
   AddAuthorComponent,
   UpdateAuthorComponent,
   DeleteAuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

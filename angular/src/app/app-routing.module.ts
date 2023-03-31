import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BooksComponent } from './Components/books/books.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { AuthorsComponent } from './Components/authors/Authors.component';
import { CategoriesComponent } from './Components/categories/Categories.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { TeamsAndConditionComponent } from './Components/teams-and-condition/teams-and-condition.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { AdminDashBoardComponent } from './Components/admin-dashboard/admin-dash-board/admin-dash-board.component';
import { AdminAuthorsComponent } from './Components/admin-dashboard/admin-authors/admin-authors.component';
import { AdminCategoriesComponent } from './Components/admin-dashboard/admin-categories/admin-categories.component';
import { AdminBooksComponent } from './Components/admin-dashboard/admin-books/admin-books.component';
import { RestPasswordComponent } from './Components/rest-password/rest-password.component';
import { AuthorDetailsComponent } from './Components/author-details/author-details.component';
import { CategoryDetailsComponent } from './Components/category-details/category-details.component';
import { BookDetailsComponent } from './Components/book-details/book-details.component';

const routes: Routes = [
  {path:'', redirectTo:"/home", pathMatch:"full"},
  {path:'books/:id', component:BookDetailsComponent},
  {path:'home', component:HomePageComponent},
  {path:'books', component:BooksComponent},
  {path:'authors', component:AuthorsComponent},
  {path:'categories', component:CategoriesComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'teams-and-condations', component:TeamsAndConditionComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'reset', component:RestPasswordComponent},
  {path:'author/:id', component:AuthorDetailsComponent},
  {path:'categories/:id', component:CategoryDetailsComponent},
  {path:'admin-dashboard', component:AdminDashBoardComponent, children:[
    {path:'', redirectTo:"/admin-dashboard/admin-categories", pathMatch:"full"},
    {path:'admin-authors', component:AdminAuthorsComponent},
    {path:'admin-categories', component:AdminCategoriesComponent},
    {path:'admin-categories/:id', component:AdminCategoriesComponent},
    {path:'admin-books', component:AdminBooksComponent},

  ]},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

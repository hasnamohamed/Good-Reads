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
import { LogoutComponent } from './Components/logout/logout.component';
import {BookDetailsComponent} from "./Components/book-details/book-details.component";
const routes: Routes = [
  {path:'', redirectTo:"/home", pathMatch:"full"},
  {path:'home', component:HomePageComponent},
  {path:'books', component:BooksComponent},
  {path:'books/:id', component:BookDetailsComponent},
  {path:'authors', component:AuthorsComponent},
  {path:'categories', component:CategoriesComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'teams-and-condations', component:TeamsAndConditionComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'logout', component:LogoutComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

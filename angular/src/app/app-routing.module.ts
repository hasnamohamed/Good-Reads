import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { BooksComponent } from './Components/Admin/Books/books/books.component';
import { AuthorsComponent } from './Components/Authors/Authors/Authors.component';
import { CategoriesComponent } from './Components/Categories/Categories/Categories.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { TeamsAndConditionComponent } from './Components/teams-and-condition/teams-and-condition.component';

const routes: Routes = [
  {path:'home', component:HomePageComponent},
  {path:'books', component:BooksComponent},
  {path:'authors', component:AuthorsComponent},
  {path:'categories', component:CategoriesComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'teams-and-condations', component:TeamsAndConditionComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

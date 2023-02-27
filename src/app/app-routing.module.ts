import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContentComponent } from './main-display/components/home-content/home-content.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
const routes : Routes = [

{path: 'home', component: HomeContentComponent},
{path: '', redirectTo:'home', pathMatch: 'full'},
{path:'**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

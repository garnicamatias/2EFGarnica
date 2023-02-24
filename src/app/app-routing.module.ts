import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StudentsTableComponent } from './components/students-table/students-table.component';
import { TeachersListComponent } from './components/teachers-list/teachers-list.component';

const routes : Routes = [
{path: 'students', component: StudentsTableComponent},
{path: 'teachers', component: TeachersListComponent},
{path: 'home', component: HomeContentComponent},
{path: '', redirectTo:'home', pathMatch: 'full'},
{path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

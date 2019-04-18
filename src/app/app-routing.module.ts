import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todos/component/todo.component';

const routes: Routes = [
  { path: 'todos', component: TodoComponent },
  {
    path: '**',
    redirectTo: '/todos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

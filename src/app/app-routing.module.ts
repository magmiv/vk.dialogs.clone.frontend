import { AuthComponent } from './pages/auth/auth.component';
import { DialogsListComponent } from './pages/dialogs-list/dialogs-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'im',
    component: DialogsListComponent,
  },
  {
    path: 'login',
    component: AuthComponent,
  },
  {
    path: 'register',
    component: AuthComponent,
  },
  { path: '', redirectTo: 'im', pathMatch: 'full' },
  { path: '**', redirectTo: 'im' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

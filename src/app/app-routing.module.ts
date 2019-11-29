import { LoginComponent } from './pages/login/login.component';
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
    component: LoginComponent,
  },
  { path: '', redirectTo: 'im', pathMatch: 'full' },
  { path: '**', redirectTo: 'im' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

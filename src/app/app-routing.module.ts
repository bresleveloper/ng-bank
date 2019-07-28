import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { ActionsSummaryComponent } from './pages/actions-summary/actions-summary.component';

const routes: Routes = [
  { path:'login', component:LoginComponent},
  { path:'summary/:bankUserId', component:SummaryComponent},
  { path:'actions-summary/:bankAccoundId', component:ActionsSummaryComponent},



  { path:'',    redirectTo:'/login',  pathMatch: 'full'},
  { path:'**',  redirectTo:'/login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

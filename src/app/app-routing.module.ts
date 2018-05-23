import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';


const routes: Routes = [
    {
      path: '',
      component: AppComponent,
      children: [
        { path: '', redirectTo: '/home', pathMatch: 'full' },
        { path: 'home', component: AppComponent },
        { path: ':partyid', component: MembersComponent }]
      }
      ];


      @NgModule({
        imports: [ RouterModule.forRoot(routes) ],
        exports: [ RouterModule ]
      })
      export class AppRoutingModule {}
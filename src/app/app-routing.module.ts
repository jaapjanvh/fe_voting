import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { PartyViewComponent } from './party-view/party-view.component';
import { SubmitVoteComponent } from './submit-vote/submit-vote.component';
import { SubmittedComponent } from './submitted/submitted.component';



const routes: Routes = [
    {
      path: '',
      component: AppComponent,
      children: [
        { path: '', redirectTo: '/home', pathMatch: 'full' },
        { path: 'home', component: PartyViewComponent },
        { path: 'party/:partyid', component: MembersComponent },
        { path: 'vote',component: SubmitVoteComponent},
        {path: 'submitted',component: SubmittedComponent},
        {path: '**', redirectTo: '/home'}]
      }
      ];


      @NgModule({
        imports: [ RouterModule.forRoot(routes,{enableTracing: false}) ],
        exports: [ RouterModule ]
      })
      export class AppRoutingModule {}
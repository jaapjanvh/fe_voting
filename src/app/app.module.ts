import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule }    from '@angular/forms';
import { AppRoutingModule }     from './app-routing.module';


import { AppComponent } from './app.component';
import { PartyViewComponent } from './party-view/party-view.component';
import { PartiesService }          from './_services/parties.service';
import { MessageService }       from './message.service';
import { MembersComponent } from './members/members.component';


@NgModule({
  declarations: [
    AppComponent,
    PartyViewComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PartiesService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

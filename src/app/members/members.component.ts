import { Component, OnInit } from '@angular/core';
import { Member } from '../_models/member';
import {ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {MembersService} from '../_services/members.service';
import {AlertService} from '../_services/alert.service';
import { Party } from '../_models/party';
import { PartiesService } from '../_services/parties.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members: Member[];
  member: Member;
  parties: Party[];
  party: Party;

  constructor(private route: ActivatedRoute,private memberservice: MembersService,private alertService: AlertService,private partiesService: PartiesService) { }

  ngOnInit() {
    this.route.paramMap
    // (+) converts string 'id' to a number
      .switchMap((params: ParamMap) => this.memberservice.getMembersforParty(+params.get('partyid')))
      .subscribe((members) => this.members = members);

      this.getTest(1);
   
  }


  // getOpportunityByIndex(index: number) {            
  //   this.parties
  //   .subscribe( opportunities => {
  //       this.opportunity = opportunities[index];
  //       console.log(this.opportunity.title);
  //    });
   
  //  }

   getTest(partyid : number) {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.partiesService.getParty2())
      .subscribe((parties) => this.party = parties[partyid]);
      // console.log(this.party.partyname);
   }
 




  notifySelection(value) {
    this.member = value;
    this.alertService.success(this.member.firstname +" " + this.member.lastname +" (" + this.party.partyname );
  }


}

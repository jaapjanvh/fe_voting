import { Component, OnInit} from '@angular/core';
import { Member } from '../_models/member';
import {ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {MembersService} from '../_services/members.service';
import {AlertService} from '../_services/alert.service';
import { Party } from '../_models/party';
import { PartiesService } from '../_services/parties.service';
import { VoteService } from '../_services/vote.service';



import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  members: Member[];
  member: Member;
  parties: Party[];
  party: Party = new Party();
  selectedRow : any;
  selectedParty : any;
  


  constructor(private route: ActivatedRoute,
    private memberservice: MembersService,
    private alertService: AlertService,
    private partiesService: PartiesService,
    private voteService: VoteService) { }
  ngOnInit() {
    console.log(this.route);
    this.checkNotify();
    this.route.paramMap
    // (+) converts string 'id' to a number
      .switchMap((params: ParamMap) => this.memberservice.getMembersforParty(+params.get('partyid')))
      .subscribe((members) => this.members = members);

      this.route.params.subscribe(params => {
        this.selectedParty = params['partyid']-1
        this.getParty();
        this.selectedRow = null;
    });

  }

  getParty() {
  this.partiesService.getParties()
  .subscribe(parties => this.party = parties[this.selectedParty]);
  }

  mouseClick(index,value) {
    this.setClickedRow(index);
    this.notifySelection(value);
    this.voteService.setMember(value);
    this.voteService.setParty(this.party);
   }

   setClickedRow(index){
        this.selectedRow = index;

  }

  checkNotify() {
    if (this.memberservice.getMember().id != undefined) {
      this.member = this.memberservice.getMember();
        this.notifySelection(this.member);
        // console.log('test');
    }
  }

  notifySelection(value) {
    this.member = value;
    // console.log(value);
    // console.log("hallootjes");
    this.alertService.success(this.member.firstname +" " + this.member.lastname +" (" + this.party.partyname +")" );
  }


}

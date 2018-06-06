import { Component, OnInit } from '@angular/core';
import {MembersService} from '../_services/members.service';
import { Member } from '../_models/member';
import {Location} from '@angular/common';
import {AlertService} from '../_services/alert.service';
import { Party } from '../_models/party';


import {VoteService} from '../_services/vote.service';

@Component({
  selector: 'app-submit-vote',
  templateUrl: './submit-vote.component.html',
  styleUrls: ['./submit-vote.component.css']
})
export class SubmitVoteComponent implements OnInit {
  member : Member = new Member();
  party : Party = new Party();
  // active : string = 'disabled';
  active : boolean = false;

  constructor(private voteService: VoteService,private _location: Location,private membersService: MembersService) { }

  ngOnInit() {
    this.member = this.voteService.getMember();
    this.party = this.voteService.getParty();

  }

  MouseClick(value) {
    this.setMemberforBack(value);
    this.backClicked();
  }

  setMemberforBack(value) {
    this.membersService.setMember(value);
  }

  backClicked() {
    this._location.back();
}

setActive(){
  this.active = !this.active;
  // console.log('click');
}




}

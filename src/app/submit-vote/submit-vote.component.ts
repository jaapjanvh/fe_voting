import { Component, OnInit } from '@angular/core';
import {MembersService} from '../_services/members.service';
import { Member } from '../_models/member';
import {Location} from '@angular/common';

import {VoteService} from '../_services/vote.service';

@Component({
  selector: 'app-submit-vote',
  templateUrl: './submit-vote.component.html',
  styleUrls: ['./submit-vote.component.css']
})
export class SubmitVoteComponent implements OnInit {
  member : Member = new Member();

  constructor(private voteService: VoteService,private _location: Location) { }

  ngOnInit() {
    this.member = this.voteService.getMember();

  }


  backClicked() {
    this._location.back();
}

}

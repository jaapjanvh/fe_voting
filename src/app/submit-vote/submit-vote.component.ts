import { Component, OnInit } from '@angular/core';
import {MembersService} from '../_services/members.service';
import { Member } from '../_models/member';

@Component({
  selector: 'app-submit-vote',
  templateUrl: './submit-vote.component.html',
  styleUrls: ['./submit-vote.component.css']
})
export class SubmitVoteComponent implements OnInit {
  member : Member;

  constructor(private memberservice: MembersService) { }

  ngOnInit() {
  }


}

import { Component, OnInit } from '@angular/core';
import { Member } from '../_models/member';
import {ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {MembersService} from '../_services/members.service';
import {AlertService} from '../_services/alert.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members: Member[];
  member: Member;

  constructor(private route: ActivatedRoute,private memberservice: MembersService,private alertService: AlertService) { }

  ngOnInit() {
    this.route.paramMap
    // (+) converts string 'id' to a number
      .switchMap((params: ParamMap) => this.memberservice.getProductsOfCategory(+params.get('partyid')))
      .subscribe((members) => this.members = members);

  }


  notifySelection(member: Member) {
    // member = this.member;
    this.alertService.success("You have selected " + this.member.lastname );
  }

}

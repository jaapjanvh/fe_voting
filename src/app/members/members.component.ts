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
  selectedRow : number;
  test : number;

  constructor(private route: ActivatedRoute,private memberservice: MembersService,private alertService: AlertService,private partiesService: PartiesService) { }
 ngOnchange() {
   this.selectedRow = null;
   console.log('testbram');
 }
  ngOnInit() {
    this.route.paramMap
    // (+) converts string 'id' to a number
      .switchMap((params: ParamMap) => this.memberservice.getMembersforParty(+params.get('partyid')))
      .subscribe((members) => this.members = members);

   
  }

  getPartyname() {
    this.route.params.subscribe(params => {
      this.selectedRow = params['partyid']-1
    });
  }
 
   mouseClick(index,value) {
    this.setClickedRow(index);
    this.notifySelection(value);
   }

   setClickedRow(index){
    
    this.selectedRow = index;
    //  console.log(this.selectedRow);
  }

  notifySelection(value) {
    this.member = value;
    this.alertService.success(this.member.firstname +" " + this.member.lastname +" (" );
  }


}

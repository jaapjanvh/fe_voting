import { Component, OnInit } from '@angular/core';
import {MembersService} from '../_services/members.service';
import { Member } from '../_models/member';
import {Location} from '@angular/common';
import {AlertService} from '../_services/alert.service';
import { Party } from '../_models/party';
import * as Web3 from 'web3';


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
  candidateId : any;

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

web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
abi = JSON.parse('[{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"x","type":"bytes32"}],"name":"bytes32ToString","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"contractOwner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"}],"payable":false,"type":"constructor"}]')
VotingContract = this.web3.eth.contract(this.abi);
// In your nodejs console, execute contractInstance.address to get the address at which the contract is deployed and change the line below to use your deployed address
contractInstance = this.VotingContract.at('0x4b981875de6b13b8312ff68cee696120d011e66c');

 voteForCandidate() {
  this.candidateId = this.member.id;
  this.contractInstance.voteForCandidate(this.candidateId, {from: this.web3.eth.accounts[0]}, function() {
    // let div_id = this.candidates[this.candidateId].id;
    // $("#" + div_id).html(this.contractInstance.totalVotesFor.call(this.candidateId).toString());
  });
}

getVotesForCandidate() {
  this.candidateId = this.member.id;
  this.contractInstance.voteForCandidate(this.candidateId, {from: this.web3.eth.accounts[0]}, function() {
    // let div_id = this.candidates[this.candidateId].id;
    // $("#" + div_id).html(this.contractInstance.totalVotesFor.call(this.candidateId).toString());
  });
}

// getVotesPerParty() {	//get total votes for a party
// 	counter = 0;			
// 	party = $("#party").val();	//partyID to look up
// 	partyList = []; 			//partyList = list of candidates within party
// 	for(var i = 0; i < candidates.length; i++){
// 		if(candidates[i].partyId == party){
// 			partyList.push(candidates[i]);
// 		}
// 	}
// 	for(var i = 0; i < partyList.length; i++){
// 		counter += 	Number(contractInstance.totalVotesFor.call(partyList[i].id));
// 	}
// 	console.log("Votes per party = " +counter);
// }


}

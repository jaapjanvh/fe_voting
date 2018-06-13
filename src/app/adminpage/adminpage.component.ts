import { Component, OnInit } from '@angular/core';
import * as Web3 from 'web3';
import { Party } from '../_models/party';
import { PartiesService } from '../_services/parties.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MembersService } from '../_services/members.service';
import { Member } from '../_models/member';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { isArray } from 'util';
import { Votes } from '../_models/votes';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  parties: Party[];
  members: Member[];
  totalvts: Votes[] = [];
  xxx: [string, number];
  test123: [[string,number]] = [['0',0]];
  test: Votes = new Votes();
  totalvotes: number = 0;
  counter: any;
  party: any;
  partyList = [];
  candidateId: any;
  votes: any;
  i: any;
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  abi = JSON.parse('[{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"x","type":"bytes32"}],"name":"bytes32ToString","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"contractOwner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"}],"payable":false,"type":"constructor"}]')
  VotingContract = this.web3.eth.contract(this.abi);
  // In your nodejs console, execute contractInstance.address to get the address at which the contract is deployed and change the line below to use your deployed address
  contractInstance = this.VotingContract.at('0x9762a3f6a91def6bc2bb982affdcb832a493bd43');

  constructor(private partiesservice: PartiesService
    , private memberservice: MembersService
    , private route: ActivatedRoute
    , private http: HttpClient) { }

  ngOnInit() {
    // this.totalvts = [];
    // this.getVotesForCandidate();
    // this.getVotesPerCandidate();
    console.log(this.totalvts);
    this.getTest();
    // this.getVotesPerParty();
    // this.getParties();
    
    

  }

  getTest() {
    this.partiesservice.getParties()
      .subscribe(parties => {this.parties = parties;
        this.getParties();
      });
  }

  getParties(): void {
    for (let party of this.parties) {
      // console.log(party.partyid);
      this.getVotesPerParty(party);
    }
  }

  getVotesPerCandidate() {
    this.candidateId = 1;
    this.votes = this.contractInstance.totalVotesFor.call(this.candidateId, { from: this.web3.eth.accounts[0] });
    return this.votes;
  }

  getVotesPerParty(parties) {
    console.log("test");

      this.memberservice.getMembersforParty(parties.partyid)
      .subscribe((members) => {this.members = members;
      this.getVotesforMembers(this.members,parties.partyid)});
    }


  

  getVotesforMembers(members,partyid) {

    for (let member of members) {
      this.totalvotes = this.totalvotes + +this.contractInstance.totalVotesFor.call(member.id, { from: this.web3.eth.accounts[0] });
    }

    this.test.partyid = partyid;
    this.test.votes = this.totalvotes;
    this.xxx = [partyid,this.totalvotes]     
    // console.log(this.test.partyid);
    console.log(this.test);
    // console.log(this.totalvts);
    console.log(this.test123);
    this.test123.push(this.xxx);
    this.totalvts.push(this.test);
    console.log(this.totalvts);
    console.log(this.xxx);
    this.totalvotes = 0;
    partyid = 0;
  }


  }

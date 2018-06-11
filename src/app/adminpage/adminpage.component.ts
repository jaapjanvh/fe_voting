import { Component, OnInit } from '@angular/core';
import * as Web3 from 'web3';


@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  counter:any;
  party:any;
  partyList = [];
  candidateId : any;
  votes: any;
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  abi = JSON.parse('[{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"x","type":"bytes32"}],"name":"bytes32ToString","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"contractOwner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"}],"payable":false,"type":"constructor"}]')
  VotingContract = this.web3.eth.contract(this.abi);
  // In your nodejs console, execute contractInstance.address to get the address at which the contract is deployed and change the line below to use your deployed address
  contractInstance = this.VotingContract.at('0x4b981875de6b13b8312ff68cee696120d011e66c');

  constructor() { }

  ngOnInit() {
    // this.getVotesForCandidate();
    this.getVotesPerCandidate();

    
  }

 getVotesPerCandidate() {
  this.candidateId = 1;
  this.votes = this.contractInstance.totalVotesFor.call(this.candidateId, {from: this.web3.eth.accounts[0]});
  return this.votes;
 }



  // getVotesPerParty() {	//get total votes for a party
  //   	this.counter = 0;			
  //   	this.party = $("#party").val();	//partyID to look up
  //   	this.partyList = []; 			//partyList = list of candidates within party
  //   	for(var i = 0; i < candidates.length; i++){
  //   		if(candidates[i].partyId == party){
  //   			partyList.push(candidates[i]);
  //   		}
  //   	}
  //   	for(var i = 0; i < partyList.length; i++){
  //   		counter += 	Number(contractInstance.totalVotesFor.call(partyList[i].id));
  //   	}
  //   	console.log("Votes per party = " +counter);
  //   }

}

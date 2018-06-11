import { Injectable } from '@angular/core';
import { Party } from '../_models/party';
import { Member } from '../_models/member';
import * as Web3 from 'web3';

@Injectable()
export class VoteService {
  member: Member = new Member();
  party: Party;
  constructor() { }

  setMember(member) {
    this.member = member;
  }

  getMember() {
    return this.member;
  }

  setParty(party) {
    this.party = party;
  }

  getParty() {
    return this.party;
  }

// web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
// abi = JSON.parse('[{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"x","type":"bytes32"}],"name":"bytes32ToString","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"contractOwner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"}],"payable":false,"type":"constructor"}]')
// VotingContract = this.web3.eth.contract(this.abi);
// // In your nodejs console, execute contractInstance.address to get the address at which the contract is deployed and change the line below to use your deployed address
// contractInstance = this.VotingContract.at('0x4b981875de6b13b8312ff68cee696120d011e66c');
}

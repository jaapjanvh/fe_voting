import { Injectable } from '@angular/core';
import { Party } from '../_models/party';
import { Member } from '../_models/member';

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
}

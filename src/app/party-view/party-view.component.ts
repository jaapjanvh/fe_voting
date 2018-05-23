import { Component, OnInit } from '@angular/core';
import { Party } from '../_models/party';
import { PartiesService } from '../_services/parties.service';

@Component({
  selector: 'app-party-view',
  templateUrl: './party-view.component.html',
  styleUrls: ['./party-view.component.css']
})
export class PartyViewComponent implements OnInit {
  parties: Party[];
  constructor(private partiesservice: PartiesService) { }

  ngOnInit() {
    this.getParties();
    
  }

  getParties(): void {
    this.partiesservice.getParties()
    .subscribe(parties => this.parties = parties);
  }


}

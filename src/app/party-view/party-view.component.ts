import { Component, OnInit } from '@angular/core';
import { Party } from '../_models/party';
import { PartiesService } from '../_services/parties.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-party-view',
  templateUrl: './party-view.component.html',
  styleUrls: ['./party-view.component.css']
})
export class PartyViewComponent implements OnInit {
  parties: Party[];
  selectedRow : number;
  constructor(private partiesservice: PartiesService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.getParties();
    this.route.params.subscribe(params => {
      this.selectedRow = params['partyid']-1
    });
    }

  getParties(): void {
    this.partiesservice.getParties()
    .subscribe(parties => this.parties = parties);
  }


}

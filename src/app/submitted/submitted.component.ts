import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import { PartyViewComponent } from '.././party-view/party-view.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-submitted',
  templateUrl: './submitted.component.html',
  styleUrls: ['./submitted.component.css']
})
export class SubmittedComponent implements OnInit {
  sub: Subscription;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // Observable.interval(10000).takeWhile(() => true).subscribe(() => this.redirectBack());
    // this.sub = Observable.interval(5000)
    //   .subscribe((val) => { this.redirectBack(); });
      setTimeout((router: Router) => {
        this.router.navigate(['start']);
    }, 5000); 
  }


  redirectBack() {
    this.router.navigate(['../start']);
  }
  // this.router.navigate(['../home']);
}

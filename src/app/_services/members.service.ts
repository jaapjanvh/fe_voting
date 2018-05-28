import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError, map,tap} from 'rxjs/operators';
import {Member} from '../_models/member';
import { MessageService } from './../message.service';
import { Observable } from 'rxjs/Observable';
import { Router, NavigationStart } from '@angular/router';
import { of } from 'rxjs/observable/of';
import { Subject } from 'rxjs/Subject';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MembersService {

  member: Member;
  private subject = new Subject<Member>();
  private keepAfterRouteChange = false;
  constructor(private http: HttpClient,private messageService: MessageService,private router: Router) {
   }

   getMembersforParty (partyid: number): Observable<Member[]> {
    return this.http.get<Member[]>('http://brambrouwer.com/party/' + partyid)
      .pipe(
        catchError(this.handleError('getMembersforParty', []))
      );
  }

   /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
/** Log a HeroService message with the MessageService */
private log(message: string) {
  this.messageService.add('MessageService: ' + message);
}

private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError, map,tap} from 'rxjs/operators';
import {Member} from '../_models/member';
import { MessageService } from './../message.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MembersService {

  constructor(private http: HttpClient,private messageService: MessageService) { }

   getProductsOfCategory (partyid: number): Observable<Member[]> {
    return this.http.get<Member[]>('http://brambrouwer.com/party/' + partyid)
      .pipe(
        catchError(this.handleError('getCategories', []))
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
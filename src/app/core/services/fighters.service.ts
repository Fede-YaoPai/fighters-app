import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fighter } from 'src/app/models/fighters.models';

@Injectable({
  providedIn: 'root'
})
export class FightersService {

  public fighters: Fighter[] = [];

  constructor(private http: HttpClient) { }

  public getAllFighters(): Observable<Fighter[]> {
    return this.http.get<Fighter[]>('https://60d340e6858b410017b2f4b9.mockapi.io/api/fighters');
  }
}

import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {
  BASE_URL = `https://gateway.marvel.com/v1/public`;
  AUTH_URL = ``;
  constructor(private http: HttpClient) {
  }

  buildUrlApi(publicKey: string, hash: string) {
    this.AUTH_URL = `ts=1&apikey=` + publicKey + `&hash=` + hash;
  }

  getAllCharacters(): Observable<any> {
    const url = this.BASE_URL + `/characters?` + this.AUTH_URL;
    return this.http.get<any>(url).pipe(map((data: any) => data.data.results));
  }

  getComicsByIdCharacters(characterSelect: string): Observable<any> {
    const url = this.BASE_URL + `/comics?limit=5&characters=` + characterSelect + `&` + this.AUTH_URL;
    return this.http.get<any>(url).pipe(map((data: any) => data.data.results));
  }
}

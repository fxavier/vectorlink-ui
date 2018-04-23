import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PaisService {

  paisUrl = 'http://localhost:8080/countries';
  constructor(private http: Http) { }

  pesquisar(): Promise<any> {
   return this.http.get(`${this.paisUrl}`)
        .toPromise()
        .then(response => {
          console.log(response.json());
        });
  }

}

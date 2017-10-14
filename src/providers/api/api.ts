import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiProvider {
    constructor(public http: Http) { }

    getFilms() {
        return this.http.get('https://swapi.co/api/films').map(res => res.json());
    }

    getBeers() {
        return this.http.get('https://lcboapi.com/products/460881?access_key=MDpiYTFjODVhNi1iMDY4LTExZTctOGNhMS0yYjM2ZTNlMDFjY2E6c2J4eVVBVWdFbk1zNUhvUG9ralQ3ZmQ3N2Q1N0FOYzBZY0RL').map(res => res.json());
    }
}

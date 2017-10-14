import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiProvider {
    constructor(public http: Http) { }

    getBeers() {
        return this.http.get('https://lcboapi.com/stores?lat=43.65838&lon=-79.44335&product_id=438457?access_key=MDpiYTFjODVhNi1iMDY4LTExZTctOGNhMS0yYjM2ZTNlMDFjY2E6c2J4eVVBVWdFbk1zNUhvUG9ralQ3ZmQ3N2Q1N0FOYzBZY0RL').map(res => res.json()); 
    }
}

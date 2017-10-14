import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiProvider {
    constructor(public http: Http) { }

    getBeers() {
        //Web App
        //return this.http.get('https://lcboapi.com/stores?access_key=MDpiYTFjODVhNi1iMDY4LTExZTctOGNhMS0yYjM2ZTNlMDFjY2E6c2J4eVVBVWdFbk1zNUhvUG9ralQ3ZmQ3N2Q1N0FOYzBZY0RL&lat=43.65838&lon=-79.44335&product_id=460881').map(res => res.json()); 
        
        //Mobile App
        return this.http.get('https://lcboapi.com/stores?access_key=MDoyMGY2MTRiOC1iMTMxLTExZTctODg0YS00MzU1MGE3ZDdjNzM6Y29pS21WZjhuVzZyV2E1THJEWHlvY2x0OXNlQ0FzNGplUnZ3&lat=43.65838&lon=-79.44335&product_id=460881').map(res => res.json()); 
    }

    getOV() {
        //Web App
        // return this.http.get('https://lcboapi.com/products/460881?access_key=MDpiYTFjODVhNi1iMDY4LTExZTctOGNhMS0yYjM2ZTNlMDFjY2E6c2J4eVVBVWdFbk1zNUhvUG9ralQ3ZmQ3N2Q1N0FOYzBZY0RL').map(res => res.json());
        
        //Mobile App
        return this.http.get('https://lcboapi.com/products/460881?access_key=MDoyMGY2MTRiOC1iMTMxLTExZTctODg0YS00MzU1MGE3ZDdjNzM6Y29pS21WZjhuVzZyV2E1THJEWHlvY2x0OXNlQ0FzNGplUnZ3').map(res => res.json());
    }
}

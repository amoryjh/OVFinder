import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiProvider {
    constructor(public http: Http) { }

    getFilms() {
        return this.http.get('http://swapi.co/api/films').map(res => res.json());
    }

    // getBeers() {
    //     return this.http.get('https://lcboapi.com/products/460881?access_key=MDpjOWZmN2VjNi1iMDNlLTExZTctOTViOC1iZjcxNjk5OTY0MDc6Y2tNa1phSUFnbkZBUkU0WHAzTE1OeE5IdGlsank1SjZ6QWQ1').map(res => res.json());
    // }
}

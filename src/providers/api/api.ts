import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiProvider {
    constructor(public http: Http) { }

    getFilms() {
        return this.http.get('https://swapi.co/api/films').map(res => res.json());
    }

    // getBeers() {
    //     return this.http.get('https://lcboapi.com/products/460881?access_key=MDpkODNhZTFhNi0xNGY4LTExZTctODAyYS05YmU5YWE3YmEzNTU6SzRQSVo3d0ZWMGhheGNjTGVjM3AwelpoNHNsSG5mU0FEaG9k').map(res => res.json());
    // }
}

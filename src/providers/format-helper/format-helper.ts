import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FormatHelperProvider {

    constructor(public http: Http) { }

    convertMetersToKM(beer) {
        return (beer.distance_in_meters / 1000).toFixed(2) + "KM";
    }

    formatStoreAddress(beer) {
        var addressOne = beer.address_line_1,
            addressTwo = beer.address_line_2,
            city = beer.city;

        return (addressTwo == null ? addressOne + ", " + city : addressOne + ", " + addressTwo + ", " + city);
    }
}
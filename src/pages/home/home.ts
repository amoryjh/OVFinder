import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    beers: Observable<any>;
    ovs: Observable<any>;
    ovName: any;
    ovTasting: any;

    constructor(public navCtrl: NavController, public apiProvider: ApiProvider) {
        this.beers = this.apiProvider.getBeers();
        this.ovs = this.apiProvider.getOV();
        this.ovs.subscribe(data => {
            this.ovName = data.result.name;
            this.ovTasting = data.result.varietal;
        })
    }

    openOVDetails(beer) {
        this.navCtrl.push('OvStoreDetailsPage', { beer: beer });
    }

}

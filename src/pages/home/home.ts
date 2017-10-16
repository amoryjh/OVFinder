import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';
import { FormatHelperProvider } from './../../providers/format-helper/format-helper';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    @ViewChild('map') mapElement;

    beers: Observable<any>;
    ovs: Observable<any>;
    ovName: any;
    ovTasting: any;

    constructor(public navCtrl: NavController, public apiProvider: ApiProvider, public formatHelper: FormatHelperProvider) {
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

    convertMetersToKM(beer) {
        return this.formatHelper.convertMetersToKM(beer);
    }

    formatStoreAddress(beer) {
        return this.formatHelper.formatStoreAddress(beer);
    }
}

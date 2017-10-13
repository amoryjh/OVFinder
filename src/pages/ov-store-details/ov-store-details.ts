import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-ov-store-details',
    templateUrl: 'ov-store-details.html',
})
export class OvStoreDetailsPage {
    beer: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.beer = this.navParams.get("beer");
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad OvStoreDetailsPage');
    }
}

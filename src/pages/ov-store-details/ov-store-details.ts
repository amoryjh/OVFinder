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

    convertMetersToKM(beer) {
        return (beer / 1000).toFixed(2) + "KM";
    }

    formatStoreAddress(beer) {
        var addressOne = beer.address_line_1,
            addressTwo = beer.address_line_2;

        return (addressTwo == null ? addressOne : addressOne + ", " + addressTwo);
    }
    
    // initMap() {
    //     var uluru = { lat: -25.363, lng: 131.044 };
    //     var map = new google.maps.Map(document.getElementById('map'), {
    //         zoom: 4,
    //         center: uluru
    //     });
    //     var marker = new google.maps.Marker({
    //         position: uluru,
    //         map: map
    //     });
    // }

    ionViewDidLoad() {
        console.log('ionViewDidLoad OvStoreDetailsPage');
    }
}

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormatHelperProvider } from './../../providers/format-helper/format-helper';

@IonicPage()
@Component({
    selector: 'page-ov-store-details',
    templateUrl: 'ov-store-details.html',
})
export class OvStoreDetailsPage {
    @ViewChild('map') mapElement;

    beer: any;
    map: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public formatHelper: FormatHelperProvider) {
        this.beer = this.navParams.get("beer");
    }

    ionViewDidLoad() {
        this.initMap();
    }

    convertMetersToKM(beer) {
        return this.formatHelper.convertMetersToKM(beer);
    }

    formatStoreAddress(beer) {
        return this.formatHelper.formatStoreAddress(beer);
    }

    initMap() {
        let storeLat = this.beer.latitude;
        let storeLng = this.beer.longitude;

        let latLng = new google.maps.LatLng(storeLat, storeLng);

        let mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

        let marker = new google.maps.Marker({
            position: latLng,
            title: 'Map Test!'
        });

        marker.setMap(this.map);
    }
}

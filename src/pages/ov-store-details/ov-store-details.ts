import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-ov-store-details',
    templateUrl: 'ov-store-details.html',
})
export class OvStoreDetailsPage {
    @ViewChild('map') mapElement;

    beer: any;
    map: any;

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

    ionViewDidLoad() {
        console.log('ionViewDidLoad OvStoreDetailsPage');
        this.initMap();
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

        let marker = new google.maps.Marker({
            position: latLng,
            title: 'Map Test!'
        });

        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        marker.setMap(this.map);
    }
}

import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';
import { FormatHelperProvider } from './../../providers/format-helper/format-helper';
import { Observable } from 'rxjs/Observable';
import { Geolocation } from '@ionic-native/geolocation';

import 'rxjs/add/operator/map';

declare var google;

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class HomePage {
    @ViewChild('map') mapElement: ElementRef;

    beers: Observable<any>;
    ovs: Observable<any>;
    ovName: any;
    ovTasting: any;

    public people: any;
    // public beers: any;


    constructor(
        public navCtrl: NavController,
        public apiProvider: ApiProvider,
        public formatHelper: FormatHelperProvider,
        public geolocation: Geolocation
    ) {
        // this.beers = this.apiProvider.getBeers();
        this.ovs = this.apiProvider.getOV();
        this.ovs.subscribe(data => {
            this.ovName = data.result.name;
            this.ovTasting = data.result.varietal;
        })
    }

    ionViewDidLoad() {
        // this.loadMap();
        this.loadBeers();
        // this.loadPeople();
    }

    loadBeers() {
        this.apiProvider.getBeers()
            .then(data => {
                this.beers = data;
            });
    }


    // loadPeople() {
    //     this.apiProvider.getPeople()
    //         .then(data => {
    //             this.people = data;
    //         });
    // }

    loadMap() {

        this.geolocation.getCurrentPosition().then((position) => {

            let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            let mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }

            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

        }).then((success) => {
            this.addMarker();
        });

    }

    addInfoWindow(marker, content) {

        let infoWindow = new google.maps.InfoWindow({
            content: content
        });

        google.maps.event.addListener(marker, 'click', () => {
            infoWindow.open(this.map, marker);
        });
    }

    addMarker() {

        let marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });

        let content = "<p>Your Location</p>";

        this.addInfoWindow(marker, content);

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

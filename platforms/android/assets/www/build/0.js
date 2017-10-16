webpackJsonp([0],{

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OvStoreDetailsPageModule", function() { return OvStoreDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ov_store_details__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OvStoreDetailsPageModule = (function () {
    function OvStoreDetailsPageModule() {
    }
    return OvStoreDetailsPageModule;
}());
OvStoreDetailsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__ov_store_details__["a" /* OvStoreDetailsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ov_store_details__["a" /* OvStoreDetailsPage */]),
        ],
    })
], OvStoreDetailsPageModule);

//# sourceMappingURL=ov-store-details.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OvStoreDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_format_helper_format_helper__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OvStoreDetailsPage = (function () {
    function OvStoreDetailsPage(navCtrl, navParams, formatHelper) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formatHelper = formatHelper;
        this.beer = this.navParams.get("beer");
    }
    OvStoreDetailsPage.prototype.ionViewDidLoad = function () {
        this.initMap();
    };
    OvStoreDetailsPage.prototype.convertMetersToKM = function (beer) {
        return this.formatHelper.convertMetersToKM(beer);
    };
    OvStoreDetailsPage.prototype.formatStoreAddress = function (beer) {
        return this.formatHelper.formatStoreAddress(beer);
    };
    OvStoreDetailsPage.prototype.initMap = function () {
        var storeLat = this.beer.latitude;
        var storeLng = this.beer.longitude;
        var latLng = new google.maps.LatLng(storeLat, storeLng);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        var marker = new google.maps.Marker({
            position: latLng,
            title: 'Map Test!'
        });
        marker.setMap(this.map);
    };
    return OvStoreDetailsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('map'),
    __metadata("design:type", Object)
], OvStoreDetailsPage.prototype, "mapElement", void 0);
OvStoreDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-ov-store-details',template:/*ion-inline-start:"/Users/joshhanson/Documents/OVFinder/src/pages/ov-store-details/ov-store-details.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>{{ beer.name }}</ion-title>\n    </ion-navbar>\n</ion-header>\n<!-- <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyApYxtYSmp_GmQpv7V9sgk5UwUG6ukj1nM&callback=initMap"></script> -->\n\n<ion-content>\n    <ion-card>\n        <ion-card-content>\n            <div #map id="map"></div>\n            <ion-card-title>\n                {{ beer.name }}\n            </ion-card-title>\n            <p>\n                {{ formatStoreAddress(beer) }}\n            </p>\n            <p>\n                Distance: {{ convertMetersToKM(beer) }}\n            </p>\n            <p>\n                {{ beer.telephone }}\n            </p>\n            <p>\n                Has bilingual services: {{ beer.has_bilingual_services }}\n            </p>\n        </ion-card-content>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/joshhanson/Documents/OVFinder/src/pages/ov-store-details/ov-store-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_format_helper_format_helper__["a" /* FormatHelperProvider */]])
], OvStoreDetailsPage);

//# sourceMappingURL=ov-store-details.js.map

/***/ })

});
//# sourceMappingURL=0.js.map
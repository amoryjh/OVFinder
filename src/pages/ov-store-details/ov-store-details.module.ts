import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OvStoreDetailsPage } from './ov-store-details';

@NgModule({
    declarations: [
        OvStoreDetailsPage,
    ],
    imports: [
        IonicPageModule.forChild(OvStoreDetailsPage),
    ],
})
export class OvStoreDetailsPageModule { }

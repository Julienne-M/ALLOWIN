import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MarkerBonbons } from '../../services/markerbonbons';
import { AdresseDataGouv } from '../../services/adressedatagouv';

@Component({
    selector: 'page-adultForm',
    templateUrl: 'adultForm.html'
})
export class AdultFormPage {
    data : any;
    allMarkerBonbons: [MarkerBonbons];
    markerBonbons: MarkerBonbons = {
        pseudo: 'Coco',
        adresse: '11 rue de Poissy Paris',
        position: { lat: 0, lon: 0 },
        api: '11+rue+de+Poissy+Paris'
        };

    constructor ( public navCtrl: NavController, public adresseDataGouv: AdresseDataGouv ) {
               
    }

    getPosition() {
        this.adresseDataGouv.getLatLon(this.markerBonbons.api).subscribe((response) => {
            this.data = response;
            this.markerBonbons.position.lat = 0;
            this.markerBonbons.position.lon = 0;
            this.allMarkerBonbons.push(this.markerBonbons);
        });
    }
 
}

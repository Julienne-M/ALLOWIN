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
    allMarkerBonbons = [];
    markerBonbons: MarkerBonbons = {
        pseudo: 'Coco',
        adresse: '9 grande rue 28700 Saint-Léger-des-aubées',
        position: { lat: 0, lon: 0 },
        api: '11+rue+de+Poissy+Paris'
        };   

    constructor ( public navCtrl: NavController, public adresseDataGouv: AdresseDataGouv ) {
               
    }

    getPosition() {
        this.markerBonbons.api = this.markerBonbons.adresse.replace(/\s/g,'+');
        console.log(this.markerBonbons.api);
        this.adresseDataGouv.getLatLon(this.markerBonbons.api).subscribe((response) => {
            this.data = response;
            console.log(this.data);
            this.markerBonbons.position.lon = this.data.features[0].geometry.coordinates[0];
            this.markerBonbons.position.lat = this.data.features[0].geometry.coordinates[1];
            console.log(this.markerBonbons);
            console.log(this.allMarkerBonbons);

            this.allMarkerBonbons.push(this.markerBonbons);
            console.log(this.allMarkerBonbons);
        });
    }
    
 
}

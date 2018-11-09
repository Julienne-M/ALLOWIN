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
    public allMarkerBonbons = [];
    pseudo: 'Coco';
    adresse: '9 grande rue 28700 Saint-Léger-des-aubées';
    position = { lat: 0, lon: 0 };
    api: any;

    constructor ( public navCtrl: NavController, public adresseDataGouv: AdresseDataGouv ) {
 
    }

    getPosition() {
        console.log(this.api);
        this.api = this.adresse.replace(/\s/g,'+');
        console.log(this.api);
        this.adresseDataGouv.getLatLon(this.api).subscribe((response) => {
            this.data = response;
            console.log(this.data);
            console.log(this.data.features[0].geometry.coordinates[0]);
            this.position.lon = this.data.features[0].geometry.coordinates[0];
            this.position.lat = this.data.features[0].geometry.coordinates[1];
            const markerBonbons = new MarkerBonbons(this.pseudo, this.adresse,this.position, this.api);
            this.allMarkerBonbons.push(markerBonbons);
            console.log(this.allMarkerBonbons);
        });
    }
    
 
}

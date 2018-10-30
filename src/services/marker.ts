import { HttpClient } from '@angular/common/http';

export class AdresseDataGouv {
  urlBase = `https://api-adresse.data.gouv.fr/search/?q=`;
  url: string;
  data: any;

  constructor(private http: HttpClient, adresse: string ) {
    this.url = this.urlBase + adresse;
    console.log(this.url);
  }

  getLatLon() { 
    // https://api-adresse.data.gouv.fr/search/?q=11+rue+de+poissy+paris

    // this.http.get(`${this.url}`);
    this.http.get(`${this.url}`).subscribe((response) => {
        this.data = response;
        console.log(this.data);
       });

    return;
  }
}

// class of people who have candies
export class MarkerBonbons {
    pseudo: string;
    adresse: string;
    position: { lat: number, lon: number };
    api: string;
  
    constructor( pseudo: string, adresse: string ) {
       this.pseudo = pseudo;
       this.adresse = adresse;
       this.api = adresse.split('+').toString();
    }
  }
  



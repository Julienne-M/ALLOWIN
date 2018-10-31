import { HttpClient } from '@angular/common/http';

export class AdresseDataGouv {
  urlBase = `https://api-adresse.data.gouv.fr/search/?q=`;
  url: string;
  data: any;

  constructor( private http: HttpClient, adresse: string = '11+rue+de+Poissy+paris') {
    this.url = this.urlBase + adresse;
    console.log(this.url);
  }

  getLatLon() {
    this.http.get(`${this.url}`).subscribe((response) => {
      this.data = response;
      console.log(this.data);
      return this.data;
    });

    return;
  }
}

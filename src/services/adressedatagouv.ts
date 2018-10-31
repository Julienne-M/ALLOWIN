import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AdresseDataGouv {
  urlBase = `https://api-adresse.data.gouv.fr/search/?q=`;

  constructor( private http: HttpClient ) {
    //console.log(this.urlBase);
  }
  
  getLatLon( adresse: string ) {
    return this.http.get(`${this.urlBase}+${adresse}`);
  }

}

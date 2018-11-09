// import { AdresseDataGouv } from './adressedatagouv.service';

// class of people who have candies
export class MarkerBonbons {
  pseudo: string;
  adresse: string;
  position: { lat: number, lon: number };
  api: string;

  constructor(pseudo: string, adresse:string, position:any, api: any) {
    this.pseudo = pseudo;
    this.adresse = adresse;
    this.position = position;
    this.api = api;
  }
}

import { AdresseDataGouv } from './adressedatagouv.service';

// class of people who have candies
export class MarkerBonbons {
  pseudo: string;
  adresse: string;
  position: { lat: number, lon: number };
  api: string;

  constructor(pseudo: string, adresse: string) {
    this.pseudo = pseudo;
    this.adresse = adresse;
    this.api = adresse.split('+').toString();
  }
}
  



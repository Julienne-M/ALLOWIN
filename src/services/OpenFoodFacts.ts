import { Injectable } from '@angular/core';
import { Http  } from '@angular/http';

@Injectable()
export class Openfoodfacts {

  constructor(private http: Http) { }

  data: any;

  urlBase= `https://world.openfoodfacts.org/category/candies.json`;


getCandies() {

  }

}

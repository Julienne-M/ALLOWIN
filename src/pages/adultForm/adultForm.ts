import { Component } from '@angular/core';
import { AdresseDataGouv, MarkerBonbons } from '../../services/marker'

@Component({
    selector: 'page-adultForm',
    templateUrl: 'adultForm.html'
})
export class AdultFormPage {

    constructor(private apiData : AdresseDataGouv ) {

    }
}

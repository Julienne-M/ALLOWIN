import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChildFormPage } from '../childForm/childForm';
import { AdultFormPage } from '../adultForm/adultForm';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onGoToChildForm() {
    this.navCtrl.push(ChildFormPage)
  }
  
  onGoToAdultForm() {
    this.navCtrl.push(AdultFormPage)
  }

}

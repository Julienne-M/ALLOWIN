import { Component , ElementRef, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import leaflet from 'leaflet';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;

  constructor(public navCtrl: NavController ) {

  }

//  ionViewDidEnter() {
//    if(!this.map){
//      this.loadmap();
//    }  
//  }

  ionViewDidLoad() {
      this.loadmap();
    }

  loadmap() {
    this.map = leaflet.map('map').fitWorld();
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'Me',
      maxZoom: 18
    }).addTo(this.map);
    this.map.locate({
      setView: true,
      maxZoom: 18
    }).on('locationfound', (e) => {
      let markerGroup = leaflet.featureGroup();
      let marker: any = leaflet.marker([e.latitude, e.longitude]).on('click', () => {
        alert('Pseudo est là !');
      });
      markerGroup.addLayer(marker);
      this.map.addLayer(markerGroup);
//      console.log(this.allMarkerBonbons);
      let markerGroup1 = leaflet.featureGroup();
      let marker1: any = leaflet.marker([48.850564, 2.350188]).on('click', () => {
        alert('ici il y a des bonbons !');
      });
      markerGroup1.addLayer(marker1);
      this.map.addLayer(markerGroup1);

    })
  }
}

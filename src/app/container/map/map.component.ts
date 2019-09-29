import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer, imageOverlay, latLngBounds } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  public screenHeight: number;
  public screenWidth: number;

  public imageBounds = latLngBounds([[40.712216, -74.22655], [40.773941, -74.12544]]);
  public imgOverlay = imageOverlay('../../../assets/images/1030.jpg', this.imageBounds);

  options = {
    layers: [
      tileLayer('../../../assets/images/1030.jpg', {
        maxZoom: 18,
        noWrap: true
      })
    ],
    zoom: 7,
    center: latLng([ 46.879966, -121.726909 ])
  };

  layersControl = {
    baseLayers: {
      SeasonX: tileLayer('../../../assets/images/1030.jpg',
      {
        maxZoom: 18
      })
    },
    // overlays: {
    //   'Image Overlay': this.imgOverlay
    // }
  };

  constructor() { }

  ngOnInit() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    this.calculateWidth();
  }

  calculateWidth() {
    const removeFromWidth = this.screenWidth * 0.2;
    this.screenWidth = this.screenWidth - removeFromWidth;
    this.screenWidth = this.screenWidth * 0.65;
  }

}

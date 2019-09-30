import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Title } from '@angular/platform-browser';
// import { latLng, tileLayer, imageOverlay, latLngBounds } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  public screenHeight: number;
  public screenWidth: number;

  // public imageBounds = latLngBounds([[40.712216, -74.22655], [40.773941, -74.12544]]);
  // public imgOverlay = imageOverlay('../../../assets/images/1030.jpg', this.imageBounds);

  // options = {
  //   layers: [
  //     tileLayer('../../../assets/images/1030.jpg', {
  //       maxZoom: 18,
  //       noWrap: true
  //     })
  //   ],
  //   zoom: 7,
  //   center: latLng([ 46.879966, -121.726909 ])
  // };

  // layersControl = {
  //   baseLayers: {
  //     SeasonX: tileLayer('../../../assets/images/1030.jpg',
  //     {
  //       maxZoom: 18
  //     })
  //   },
  //   // overlays: {
  //   //   'Image Overlay': this.imgOverlay
  //   // }
  // };

  constructor() { }

  ngOnInit() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    this.calculateWidth();
    this.makeMap();
  }

  calculateWidth() {
    const removeFromWidth = this.screenWidth * 0.2;
    this.screenWidth = this.screenWidth - removeFromWidth;
    this.screenWidth = this.screenWidth * 0.65;
  }

  makeMap() {
    const map = L.map('leafletmap', {
      crs: L.CRS.Simple,
      minZoom: -6,
      maxZoom: 0
    });
    const bounds = L.latLngBounds([[0, 0], [15000, 15000]]);
    const image = L.imageOverlay('../../../assets/images/1030.jpg', bounds).addTo(map);
    map.fitBounds(bounds);
    const sol = L.latLng([ 7500, 7500 ]);
    // L.marker(sol).addTo(map);
    // L.marker(sol, {
    //   title: 'test'
    // }).addTo(map);
    // L.popup()
    //   .setLatLng([ 7500, 7500 ])
    //   .setContent('<p>Hello world!<br />This is a nice popup.</p>')
    //   .openOn(map);
    const marker = L.marker([7200, 5250], { opacity: 0.01 });
    marker.bindTooltip('Gotham City', {permanent: true, direction: 'center', className: 'my-labels', offset: [0, 0] }).openTooltip();
    marker.addTo(map);
    map.setView( [7500, 7500], -4);
  }

  // for zooming
  // https://stackoverflow.com/questions/17382012/is-there-a-way-to-resize-marker-icons-depending-on-zoom-level-in-leaflet
}

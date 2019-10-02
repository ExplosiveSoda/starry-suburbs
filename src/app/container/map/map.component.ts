import { Component, OnInit, Input } from '@angular/core';
import * as L from 'leaflet';
import { Title } from '@angular/platform-browser';
// import { latLng, tileLayer, imageOverlay, latLngBounds } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input() sidenavToggle: boolean;
  public screenHeight: number;
  public screenWidth: number;
  public tempWidth: number;
  public tempHeight: number;

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

  toggle() {
    if (this.sidenavToggle === false) {
      document.getElementById('sidenav').style.width = '0';
      document.getElementById('main').style.width = '100%';
      this.sidenavToggle = true;
    } else {
      document.getElementById('sidenav').style.width = '15%';
      document.getElementById('main').style.width = '85%';
      this.sidenavToggle = false;
    }
  }

  calculateWidth() {
    const removeFromWidth = this.screenWidth * 0.2;
    this.screenWidth = this.screenWidth - removeFromWidth;
    this.screenWidth = this.screenWidth * 0.65;
  }

  makeMap() {
    const map = L.map('leafletmap', {
      crs: L.CRS.Simple,
      minZoom: -5,
      maxZoom: -1,
      attributionControl: false,
      zoomControl: false
    });
    const bounds = L.latLngBounds([[0, 0], [20000, 20000]]);
    const image = L.imageOverlay('../../../assets/images/1030.jpg', bounds).addTo(map);
    map.fitBounds(bounds);
    // const sol = L.latLng([ 7500, 7500 ]);
    // L.marker(sol).addTo(map);
    // L.marker(sol, {
    //   title: 'test'
    // }).addTo(map);
    // L.popup()
    //   .setLatLng([ 7500, 7500 ])
    //   .setContent('<p>Hello world!<br />This is a nice popup.</p>')
    //   .openOn(map);


    // map.on('dragend', function onDragEnd(){
    //   const width = map.getBounds().getEast() - map.getBounds().getWest();
    //   const height = map.getBounds().getNorth() - map.getBounds().getSouth();

    //   alert (
    //       'center:' + map.getCenter() +'\n'+
    //       'width:' + width +'\n'+
    //       'height:' + height +'\n'+
    //       'size in pixels:' + map.getSize()
    //   )});

    map.on('click', function(ev: any) {
      this.tempWidth = ev.latlng.lat;
      this.tempHeight = ev.latlng.lng;

      // alert (
      //     'width:' + this.tempWidth + '\n' + 'height:' + this.tempHeight + '\n'
      // );
    });
    map.addControl(
      L.control.attribution({
        position: 'bottomright',
        prefix: 'Not affiliated with Epic Games'
      })
    );
    map.addControl(
      L.control.zoom({
        position: 'topright'
      })
    );
    // map.addControl(
    //   L.control.extend({
    //     options: {
    //       position: 'topleft'
    //     }
    //   })
    // );

    const bottomLeft = map.getPixelBounds().getBottomLeft();
    const topRight = map.getPixelBounds().getTopRight();
    const pixelMiddle = map.getPixelBounds().getCenter();
    const middle = map.getCenter();
    const width = map.getBounds().getEast() - map.getBounds().getWest();
    const height = map.getBounds().getNorth() - map.getBounds().getSouth();
    const widthPercentage = 7200 / 7995;
    const heightPercentage = 5250 / 7995;
    const newWidth = widthPercentage * width;
    const newHeight = heightPercentage * height;
    const testIcon = L.icon({
      iconUrl: '../../../assets/images/leaf-green.png',
      iconAnchor: [10008, 6986]
    });
    const marker = L.marker([10008, 6986], { icon: testIcon, opacity: 0.01 });
    marker.bindTooltip('GOTHAM CITY', {permanent: true, direction: 'center', className: 'my-labels', offset: [0, 0] }).openTooltip();
    marker.addTo(map);
    map.setView( middle, -4);
  }

  // for zooming
  // https://stackoverflow.com/questions/17382012/is-there-a-way-to-resize-marker-icons-depending-on-zoom-level-in-leaflet
}

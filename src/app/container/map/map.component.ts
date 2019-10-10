import { Component, OnInit, Input } from '@angular/core';
import * as L from 'leaflet';
import { Title } from '@angular/platform-browser';
import { POI } from 'src/app/shared/data/poi';
import { ChallengeContainer } from 'src/app/shared/interfaces/challenge-container';
// import { latLng, tileLayer, imageOverlay, latLngBounds } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input() sidenavToggle: boolean;
  @Input() challenges: ChallengeContainer[];
  @Input() other: ChallengeContainer[];
  public pois = POI;
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
    // this.makeMap();
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

  makeMap() {
    const map = L.map('leafletmap', {
      crs: L.CRS.Simple,
      minZoom: -5,
      maxZoom: -1,
      attributionControl: false,
      zoomControl: false
    });
    const bounds = L.latLngBounds([[0, 0], [20000, 20000]]);
    const image = L.imageOverlay('../../../assets/images/1031.png', bounds).addTo(map);
    map.fitBounds(bounds);
    map.on('click', function(ev: any) {
      this.tempWidth = ev.latlng.lat;
      this.tempHeight = ev.latlng.lng;
      alert (
          'width:' + this.tempWidth + '\n' + 'height:' + this.tempHeight + '\n'
      );
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
    const middle = map.getCenter();
    // this.other.forEach(titleChallenge => {
    //   if (titleChallenge.isChecked === true) {
    //     titleChallenge.challenges.forEach(item => {
    //       if (item.isChecked === true) {
    //         item.location.forEach(location => {
    //           const iconConst = L.icon({
    //             iconUrl: item.icon,
    //             iconAnchor: [0, 0],
    //             iconSize: [500, 500]
    //           });
    //           const marker = L.marker(location, {
    //             icon: iconConst
    //           });
    //           marker.bindTooltip('hoverboard', {
    //             permanent: true,
    //             direction: 'center',
    //             className: 'my-labels',
    //             offset: [0, 0]
    //           }).openTooltip();
    //           marker.addTo(map);
    //         });
    //       }
    //     });
    //   }
    // });
    this.pois.forEach(poi => {
      const poiIcon = L.icon({
        iconUrl: '../../../assets/images/leaf-green.png',
        iconAnchor: poi.location
      });
      const mapPoi = L.marker(poi.location, {
        icon: poiIcon,
        opacity: 0.01
      });
      mapPoi.bindTooltip(poi.name, {
        permanent: true,
        direction: 'center',
        className: 'my-labels',
        offset: [0, 0]
      }).openTooltip();
      mapPoi.addTo(map);
    });

    map.setView( middle, -4);
    // below bounces image back to middle
    // map.setMaxBounds(map.getBounds());

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

    // map.addControl(
    //   L.control.extend({
    //     options: {
    //       position: 'topleft'
    //     }
    //   })
    // );

    // const bottomLeft = map.getPixelBounds().getBottomLeft();
    // const topRight = map.getPixelBounds().getTopRight();
    // const pixelMiddle = map.getPixelBounds().getCenter();
    // const width = map.getBounds().getEast() - map.getBounds().getWest();
    // const height = map.getBounds().getNorth() - map.getBounds().getSouth();
    // const widthPercentage = 7200 / 7995;
    // const heightPercentage = 5250 / 7995;
    // const newWidth = widthPercentage * width;
    // const newHeight = heightPercentage * height;
    // const testIcon = L.icon({
    //   iconUrl: '../../../assets/images/leaf-green.png',
    //   iconAnchor: [10008, 6986]
    // });
    // const marker = L.marker([10008, 6986], { icon: testIcon, opacity: 0.01 });
    // marker.bindTooltip('GOTHAM CITY', {permanent: true, direction: 'center', className: 'my-labels', offset: [0, 0] }).openTooltip();
    // marker.addTo(map);
  }

  // for zooming
  // https://stackoverflow.com/questions/17382012/is-there-a-way-to-resize-marker-icons-depending-on-zoom-level-in-leaflet
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  public screenHeight: number;
  public screenWidth: number;
  constructor() { }

  ngOnInit() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    this.calculateWidth();
  }

  calculateWidth() {
    const removeFromWidth = this.screenWidth * 0.2;
    this.screenWidth = this.screenWidth - removeFromWidth;
    this.screenWidth = this.screenWidth * 0.6;
  }

}

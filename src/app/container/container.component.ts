import { Component, OnInit } from '@angular/core';
import { ChallengeTitle } from '../shared/interfaces/challenge-title';
import { SeasonX } from '../shared/data/season-x/season-x';
import { Other } from '../shared/data/Season-X/other';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  public sidenavToggle = false;
  public challenges: ChallengeTitle[] = SeasonX;
  public other: ChallengeTitle[] = Other;
  constructor() { }

  ngOnInit() {
    const x = this.sidenavToggle;
  }

}

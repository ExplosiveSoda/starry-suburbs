import { Component, OnInit, Input } from '@angular/core';
import { ChallengeContainer } from 'src/app/shared/interfaces/challenge-container';
import { SeasonX } from 'src/app/shared/data/season-x/season-x';
import { Challenge } from 'src/app/shared/interfaces/challenge';
import { Other } from 'src/app/shared/data/Season-X/other';
import * as L from 'leaflet';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() sidenavToggle: boolean;
  @Input() challenges: ChallengeContainer[];
  @Input() other: ChallengeContainer[];
  @Input() map: L.Map;
  public isCollapsed = true;
  public markers = {};
  events = [];

  constructor() { }

  ngOnInit() {
    // this.toggle();
  }

  test(item: any) {
    item.isCollapsed = !item.isCollapsed;
  }

  stopPropagation(event: Event, item: any) {
    event.stopPropagation();
    item.isCollapsed = !item.isCollapsed;
  }

  stop2(event: Event, item: any) {
    event.stopPropagation();
  }

  toggle() {
    if (this.sidenavToggle === false) {
      document.getElementById('sidenav').style.width = '0';
    }
  }

  toggleWeekChallenges(event: any, week: ChallengeContainer) {
    // alert(week.currentTarget.checked);
    // if (week.currentTarget.checked === true) {
    //   week.challenges.forEach(e => {
    //     e.
    //   });
    // }
    if (event.currentTarget.checked === true) {
      week.isChecked = true;
      week.challenges.forEach(e => {
        e.isChecked = true;
      });
    } else {
      week.challenges.forEach(e => {
        week.isChecked = false;
        e.isChecked = false;
      });
    }
  }

  updateWeekCheck(item: ChallengeContainer, event: any) {
    if (event.currentTarget.checked === true) {
      item.isChecked = true;

      this.other.forEach(challengeContainer => {
      if (challengeContainer.isChecked === true) {
        challengeContainer.challenges.forEach(i => {
          if (i.isChecked === true) {
            i.locations.forEach(location => {
              const iconConst = L.icon({
                iconUrl: i.icon,
                iconSize: [40, 40],
                iconAnchor: [20, 20]
              });
              this.markers[location.name] = L.marker(location.location, {
                icon: iconConst
              }).addTo(this.map);
            });
          }
        });
      }
    });

    } else if (item.challenges.find(e => e.isChecked === true)) {
      item.isChecked = true;
    } else {
      item.isChecked = false;
      this.other.forEach(challengeContainer => {
        challengeContainer.challenges.forEach(i => {
          i.locations.forEach(location => {
            this.map.removeLayer(this.markers[location.name]);
          });
        });
      });
    }
  }
}

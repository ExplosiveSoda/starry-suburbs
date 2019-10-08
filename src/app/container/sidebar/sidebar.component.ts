import { Component, OnInit, Input } from '@angular/core';
import { ChallengeTitle } from 'src/app/shared/interfaces/challenge-title';
import { SeasonX } from 'src/app/shared/data/season-x/season-x';
import { Challenge } from 'src/app/shared/interfaces/challenge';
import { Other } from 'src/app/shared/data/Season-X/other';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() sidenavToggle: boolean;
  @Input() challenges: ChallengeTitle[];
  @Input() other: ChallengeTitle[];
  public isCollapsed = true;
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

  toggleWeekChallenges(event: any, week: ChallengeTitle) {
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

  updateWeekCheck(item: ChallengeTitle, event: any) {
    if (event.currentTarget.checked === true) {
      item.isChecked = true;
    } else if (item.challenges.find(e => e.isChecked === true)) {
      item.isChecked = true;
    } else {
      item.isChecked = false;
    }
  }
}

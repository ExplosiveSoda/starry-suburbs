import { Component, OnInit, Input } from '@angular/core';
import { ChallengeTitle } from 'src/app/shared/interfaces/challenge-title';
import { SeasonX } from 'src/app/shared/data/season-x/season-x';
import { Challenge } from 'src/app/shared/interfaces/challenge';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() sidenavToggle: boolean;
  public isCollapsed = true;
  events = [];
  public challenges = SeasonX;

  constructor() { }

  ngOnInit() {
    // this.toggle();
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

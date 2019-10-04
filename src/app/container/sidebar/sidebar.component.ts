import { Component, OnInit, Input } from '@angular/core';
import { ChallengeTitle } from 'src/app/shared/interfaces/challenge-title';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() sidenavToggle: boolean;
  public isCollapsed = true;
  events = [];

  public challenges: ChallengeTitle[] = [
    {
      id: 0,
      title: 'Week 1',
      isCollapsed: true,
      challenges: [
        {
          id: 0,
          description: 'Do this week 1',
          location: [
            [15000, 6986],
            [17000, 6986],
            [19000, 6986],
          ],
          icon: 'iamge',
          isChecked: false
        },
        {
          id: 1,
          description: 'Do that week 1',
          location: [
            [10008, 6986]
          ],
          icon: 'iamge',
          isChecked: false
        },
        {
          id: 2,
          description: 'Now do this again week 1',
          location: [
            [5000, 6986]
          ],
          icon: 'iamge',
          isChecked: false
        }
      ]
    },
    {
      id: 1,
      title: 'Week 2',
      isCollapsed: true,
      challenges: [
        {
          id: 0,
          description: 'Do this week 2',
          location: [
            [15000, 6986],
            [17000, 6986],
            [19000, 6986],
          ],
          icon: 'iamge',
          isChecked: false
        },
        {
          id: 1,
          description: 'Do that week 2',
          location: [
            [10008, 6986]
          ],
          icon: 'iamge',
          isChecked: false
        },
        {
          id: 2,
          description: 'Now do this again week 2',
          location: [
            [5000, 6986]
          ],
          icon: 'iamge',
          isChecked: false
        }
      ]
    },
    {
      id: 2,
      title: 'Week 3',
      isCollapsed: true,
      challenges: [
        {
          id: 0,
          description: 'Do this week 3',
          location: [
            [15000, 6986],
            [17000, 6986],
            [19000, 6986],
          ],
          icon: 'iamge',
          isChecked: false
        },
        {
          id: 1,
          description: 'Do that week 3',
          location: [
            [10008, 6986]
          ],
          icon: 'iamge',
          isChecked: false
        },
        {
          id: 2,
          description: 'Now do this again week 3',
          location: [
            [5000, 6986]
          ],
          icon: 'iamge',
          isChecked: false
        }
      ]
    }
  ];

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
  }
}

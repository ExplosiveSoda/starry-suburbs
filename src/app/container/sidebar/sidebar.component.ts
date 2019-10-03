import { Component, OnInit, Input } from '@angular/core';
import { ChallengeTitle } from 'src/app/shared/challenge-title';

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
      title: 'Week 1',
      challenges: [
        {
          description: 'Do this',
          location: [
            [15000, 6986],
            [17000, 6986],
            [19000, 6986],
          ],
          icon: 'iamge'
        },
        {
          description: 'Do that',
          location: [
            [10008, 6986]
          ],
          icon: 'iamge'
        },
        {
          description: 'Now do this again',
          location: [
            [5000, 6986]
          ],
          icon: 'iamge'
        }
      ]
    },
    {
      title: 'Week 2',
      challenges: [
        {
          description: 'Do this',
          location: [
            [15000, 6986],
            [17000, 6986],
            [19000, 6986],
          ],
          icon: 'iamge'
        },
        {
          description: 'Do that',
          location: [
            [10008, 6986]
          ],
          icon: 'iamge'
        },
        {
          description: 'Now do this again',
          location: [
            [5000, 6986]
          ],
          icon: 'iamge'
        }
      ]
    },
    {
      title: 'Week 3',
      challenges: [
        {
          description: 'Do this',
          location: [
            [15000, 6986],
            [17000, 6986],
            [19000, 6986],
          ],
          icon: 'iamge'
        },
        {
          description: 'Do that',
          location: [
            [10008, 6986]
          ],
          icon: 'iamge'
        },
        {
          description: 'Now do this again',
          location: [
            [5000, 6986]
          ],
          icon: 'iamge'
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
}

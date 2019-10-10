import { ChallengeContainer } from '../../interfaces/challenge-container';

export const Other: ChallengeContainer[] = [
    {
        id: 0,
        title: 'Spawns',
        isCollapsed: true,
        isChecked: false,
        challenges: [
            {
                id: 1000,
                description: 'Hoverboards',
                locations: [
                  {
                    name: 'test1',
                    location: [18141, 4904]
                  },
                  {
                    name: 'test2',
                    location: [14760, 6338]
                  },
                  {
                    name: 'test3',
                    location: [11915, 4502]
                  }
                ],
                icon: '../../../assets/icons/hoverboard.png',
                isChecked: false
            }
        ]
    }
];

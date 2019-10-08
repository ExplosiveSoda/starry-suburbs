import { ChallengeTitle } from '../../interfaces/challenge-title';

export const Other: ChallengeTitle[] = [
    {
        id: 0,
        title: 'Spawns',
        isCollapsed: true,
        isChecked: false,
        challenges: [
            {
                id: 1000,
                description: 'Hoverboards',
                location: [
                    [18141, 4902],
                    [14760, 6338],
                    [11915, 4502],
                ],
                icon: '../../../assets/icons/hoverboard.png',
                isChecked: false
            }
        ]
    }
];

import { Challenge } from './challenge';

export interface ChallengeTitle {
  id: number;
  title: string;
  isCollapsed: boolean;
  challenges: Challenge[];
}

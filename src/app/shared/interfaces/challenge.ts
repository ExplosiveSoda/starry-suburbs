import { LatLngExpression } from 'leaflet';
import { ChallengeLocation } from './challenge-location';

export interface Challenge {
  id: number;
  description: string;
  locations: ChallengeLocation[];
  icon: string;
  isChecked: boolean;
}

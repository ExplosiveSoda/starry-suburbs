import { LatLngExpression } from 'leaflet';

export interface Challenge {
  id: number;
  description: string;
  location: any[];
  icon: string;
  isChecked: boolean;
}

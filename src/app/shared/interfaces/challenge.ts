import { LatLngExpression } from 'leaflet';

export interface Challenge {
  id: number;
  description: string;
  location: LatLngExpression[];
  icon: string;
  isChecked: boolean;
}

import { LatLngExpression } from 'leaflet';

export interface Challenge {
  description: string;
  location: LatLngExpression[];
  icon: string;
}

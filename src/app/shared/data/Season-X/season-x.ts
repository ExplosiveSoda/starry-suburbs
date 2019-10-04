import { LatLngExpression } from 'leaflet';

export interface SeasonX {
  id: number;
  description: string;
  location: LatLngExpression[];
  icon: string;
}

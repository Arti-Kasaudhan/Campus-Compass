
export enum LocationCategory {
  ACADEMIC = 'Academic',
  LIBRARY = 'Library',
  LAB = 'Lab',
  DINING = 'Dining',
  ADMINISTRATION = 'Administration',
  RECREATION = 'Recreation',
  ENTRANCE = 'Entrance'
}

export interface Coordinates {
  x: number; // percentage
  y: number; // percentage
}

export interface Location {
  id: string;
  name: string;
  category: LocationCategory;
  description: string;
  coordinates: Coordinates;
  buildingId: string;
}

export interface Building {
    id: string;
    name: string;
    position: { top: string; left: string; };
    dimensions: { width: string; height: string; };
    labelPosition?: { top?: string; left?: string; right?: string; bottom?: string;};
}

export interface MapDimensions {
    width: number;
    height: number;
}

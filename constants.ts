
// FIX: Import React to use React.createElement for defining components.
import React from 'react';
import { Location, Building, LocationCategory, MapDimensions } from './types';

export const MAP_DIMENSIONS: MapDimensions = {
    width: 1000,
    height: 700,
};

export const BUILDINGS: Building[] = [
    {
        id: 'B1',
        name: 'Main Entrance',
        position: { top: '85%', left: '45%' },
        dimensions: { width: '10%', height: '10%' },
    },
    {
        id: 'B2',
        name: 'Newton Hall (Science)',
        position: { top: '10%', left: '10%' },
        dimensions: { width: '25%', height: '30%' },
        labelPosition: { bottom: '102%', left: '0' }
    },
    {
        id: 'B3',
        name: 'Turing Tower (Engineering)',
        position: { top: '10%', left: '65%' },
        dimensions: { width: '25%', height: '40%' },
        labelPosition: { bottom: '102%', left: '0' }
    },
    {
        id: 'B4',
        name: 'Sagan Library',
        position: { top: '50%', left: '40%' },
        dimensions: { width: '20%', height: '25%' },
    },
    {
        id: 'B5',
        name: 'Student Hub',
        position: { top: '55%', left: '10%' },
        dimensions: { width: '20%', height: '20%' },
    },
];

export const LOCATIONS: Location[] = [
    {
        id: 'ENT-01',
        name: 'Main Campus Entrance',
        category: LocationCategory.ENTRANCE,
        description: 'The primary entrance to the university campus.',
        coordinates: { x: 50, y: 90 },
        buildingId: 'B1',
    },
    {
        id: 'NH-101',
        name: 'Physics Lecture Hall',
        category: LocationCategory.ACADEMIC,
        description: 'Large lecture hall for introductory physics courses.',
        coordinates: { x: 15, y: 15 },
        buildingId: 'B2',
    },
    {
        id: 'NH-205',
        name: 'Chemistry Lab',
        category: LocationCategory.LAB,
        description: 'General chemistry laboratory for undergraduate students.',
        coordinates: { x: 30, y: 25 },
        buildingId: 'B2',
    },
    {
        id: 'NH-210',
        name: 'Biology Lab',
        category: LocationCategory.LAB,
        description: 'Main laboratory for biological sciences.',
        coordinates: { x: 20, y: 35 },
        buildingId: 'B2',
    },
    {
        id: 'TT-301',
        name: 'Computer Science Lab',
        category: LocationCategory.LAB,
        description: 'Advanced computing lab with high-performance workstations.',
        coordinates: { x: 70, y: 18 },
        buildingId: 'B3',
    },
    {
        id: 'TT-412',
        name: 'Robotics Workshop',
        category: LocationCategory.LAB,
        description: 'Workshop for building and testing robotic systems.',
        coordinates: { x: 82, y: 30 },
        buildingId: 'B3',
    },
    {
        id: 'TT-100',
        name: 'Engineering Dean\'s Office',
        category: LocationCategory.ADMINISTRATION,
        description: 'Administrative office for the College of Engineering.',
        coordinates: { x: 75, y: 45 },
        buildingId: 'B3',
    },
    {
        id: 'SL-01',
        name: 'Main Reading Room',
        category: LocationCategory.LIBRARY,
        description: 'A quiet space for study and research, located on the first floor.',
        coordinates: { x: 50, y: 55 },
        buildingId: 'B4',
    },
    {
        id: 'SL-02',
        name: 'Special Collections',
        category: LocationCategory.LIBRARY,
        description: 'Houses rare books and archival materials.',
        coordinates: { x: 55, y: 70 },
        buildingId: 'B4',
    },
    {
        id: 'SH-CAFE',
        name: 'The Byte Cafe',
        category: LocationCategory.DINING,
        description: 'A popular spot for coffee, snacks, and light meals.',
        coordinates: { x: 15, y: 60 },
        buildingId: 'B5',
    },
    {
        id: 'SH-GYM',
        name: 'Campus Gym',
        category: LocationCategory.RECREATION,
        description: 'Fully equipped fitness center for students and staff.',
        coordinates: { x: 25, y: 70 },
        buildingId: 'B5',
    },
];

// FIX: Replaced JSX with React.createElement to avoid syntax errors in a .ts file.
export const CATEGORY_ICONS: Record<LocationCategory, React.ComponentType<{ className?: string }>> = {
    [LocationCategory.ACADEMIC]: (props) => React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.906 59.906 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" })
    ),
    [LocationCategory.LIBRARY]: (props) => React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" })
    ),
    [LocationCategory.LAB]: (props) => React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" })
    ),
    [LocationCategory.DINING]: (props) => React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" })
    ),
    [LocationCategory.ADMINISTRATION]: (props) => React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" })
    ),
    [LocationCategory.RECREATION]: (props) => React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" })
    ),
    [LocationCategory.ENTRANCE]: (props) => React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" })
    ),
};

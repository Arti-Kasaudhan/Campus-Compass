
import React from 'react';
import { Building, Location, MapDimensions } from '../types';

interface MapProps {
    buildings: Building[];
    locations: Location[];
    selectedLocation: Location | null;
    onLocationSelect: (location: Location) => void;
    mapDimensions: MapDimensions;
}

// Defining PathLine as a separate component outside Map to prevent re-creation on every render.
interface PathLineProps {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
}
const PathLine: React.FC<PathLineProps> = ({ startX, startY, endX, endY }) => (
    <svg className="absolute top-0 left-0 w-full h-full overflow-visible pointer-events-none">
        <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#2563eb" />
            </marker>
        </defs>
        <line
            x1={`${startX}%`}
            y1={`${startY}%`}
            x2={`${endX}%`}
            y2={`${endY}%`}
            stroke="#2563eb"
            strokeWidth="3"
            strokeDasharray="8 4"
            markerEnd="url(#arrowhead)"
        >
            <animate attributeName="stroke-dashoffset" from="24" to="0" dur="1s" repeatCount="indefinite" />
        </line>
    </svg>
);


export const Map: React.FC<MapProps> = ({ buildings, locations, selectedLocation, onLocationSelect, mapDimensions }) => {
    const startPoint = locations.find(loc => loc.id === 'ENT-01');

    return (
        <div 
            className="bg-green-100 border-4 border-gray-300 rounded-lg shadow-lg relative overflow-hidden"
            style={{ width: `${mapDimensions.width}px`, height: `${mapDimensions.height}px` }}
        >
            {/* Render Buildings */}
            {buildings.map(building => (
                <div
                    key={building.id}
                    className={`absolute bg-white/70 border-2 border-gray-400 rounded-md flex items-center justify-center transition-all duration-300 ${selectedLocation?.buildingId === building.id ? 'border-blue-500 border-dashed ring-4 ring-blue-200' : ''}`}
                    style={{
                        top: building.position.top,
                        left: building.position.left,
                        width: building.dimensions.width,
                        height: building.dimensions.height,
                    }}
                >
                   <span 
                      className="text-gray-600 font-semibold text-xs sm:text-sm text-center p-1 absolute whitespace-nowrap"
                      style={building.labelPosition ? building.labelPosition : {top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}
                    >
                        {building.name}
                    </span>
                </div>
            ))}

            {/* Render Location Pins */}
            {locations.map(location => (
                <button
                    key={location.id}
                    onClick={() => onLocationSelect(location)}
                    className="absolute w-4 h-4 rounded-full bg-blue-500 transform -translate-x-1/2 -translate-y-1/2 focus:outline-none transition-transform duration-300 hover:scale-150 z-10"
                    style={{ left: `${location.coordinates.x}%`, top: `${location.coordinates.y}%` }}
                    title={location.name}
                >
                    {selectedLocation?.id === location.id && (
                        <span className="absolute -top-1 -left-1 w-6 h-6 rounded-full bg-blue-500/30 animate-ping"></span>
                    )}
                     <span className="absolute w-full h-full rounded-full bg-blue-500 border-2 border-white"></span>
                </button>
            ))}

             {/* Render Path */}
            {selectedLocation && startPoint && selectedLocation.id !== startPoint.id && (
                <PathLine 
                    startX={startPoint.coordinates.x}
                    startY={startPoint.coordinates.y}
                    endX={selectedLocation.coordinates.x}
                    endY={selectedLocation.coordinates.y}
                />
            )}
        </div>
    );
};

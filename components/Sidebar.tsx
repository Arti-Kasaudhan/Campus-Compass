
import React from 'react';
import { Location, LocationCategory } from '../types';
import { CATEGORY_ICONS } from '../constants';

interface SidebarProps {
    locations: Location[];
    selectedLocation: Location | null;
    onLocationSelect: (location: Location | null) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    activeCategory: LocationCategory | 'all';
    setActiveCategory: (category: LocationCategory | 'all') => void;
    onGetAIInfo: (location: Location) => void;
    isAIButtonDisabled: boolean;
}

const categoryOrder: (LocationCategory | 'all')[] = [
    'all',
    LocationCategory.ACADEMIC,
    LocationCategory.LAB,
    LocationCategory.LIBRARY,
    LocationCategory.DINING,
    LocationCategory.RECREATION,
    LocationCategory.ADMINISTRATION,
    LocationCategory.ENTRANCE
];

const CategoryFilter: React.FC<{ activeCategory: LocationCategory | 'all', setActiveCategory: (category: LocationCategory | 'all') => void }> = ({ activeCategory, setActiveCategory }) => (
    <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-600 mb-2 px-4">Categories</h3>
        <div className="flex flex-wrap gap-2 px-4">
            {categoryOrder.map(category => {
                const isActive = activeCategory === category;
                const Icon = category !== 'all' ? CATEGORY_ICONS[category as LocationCategory] : null;
                return (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-3 py-1.5 text-xs font-medium rounded-full flex items-center transition-colors duration-200 ${
                            isActive
                                ? 'bg-blue-600 text-white shadow'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                    >
                       {Icon && <Icon className="w-4 h-4 mr-1.5" />}
                        {category === 'all' ? 'All' : category}
                    </button>
                );
            })}
        </div>
    </div>
);

const LocationList: React.FC<{ locations: Location[], onLocationSelect: (location: Location) => void, selectedLocationId: string | null }> = ({ locations, onLocationSelect, selectedLocationId }) => (
    <div className="flex-1 overflow-y-auto">
        {locations.length > 0 ? (
            <ul>
                {locations.map(location => (
                    <li key={location.id}>
                        <button
                            onClick={() => onLocationSelect(location)}
                            className={`w-full text-left p-4 border-l-4 transition-colors duration-200 ${
                                selectedLocationId === location.id
                                    ? 'bg-blue-100 border-blue-600'
                                    : 'border-transparent hover:bg-gray-100'
                            }`}
                        >
                            <p className="font-semibold text-gray-800">{location.name}</p>
                            <p className="text-sm text-gray-500">{location.id}</p>
                        </button>
                    </li>
                ))}
            </ul>
        ) : (
            <div className="p-4 text-center text-gray-500">
                <p>No locations found.</p>
                <p className="text-sm">Try adjusting your search or filter.</p>
            </div>
        )}
    </div>
);

const LocationDetail: React.FC<{ location: Location, onClear: () => void, onGetAIInfo: (location: Location) => void, isAIButtonDisabled: boolean }> = ({ location, onClear, onGetAIInfo, isAIButtonDisabled }) => {
    const Icon = CATEGORY_ICONS[location.category];
    return (
        <div className="p-4 border-t border-gray-200 bg-white shadow-inner">
            <div className="flex justify-between items-start mb-2">
                <div>
                    <div className="flex items-center text-blue-600 mb-1">
                        <Icon className="w-5 h-5 mr-2"/>
                        <p className="text-sm font-semibold ">{location.category}</p>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{location.name}</h3>
                    <p className="text-sm text-gray-500 font-mono">{location.id}</p>
                </div>
                <button onClick={onClear} className="text-gray-400 hover:text-gray-600 p-1">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </div>
            <p className="text-gray-700 mb-4">{location.description}</p>
            <button
                onClick={() => onGetAIInfo(location)}
                disabled={isAIButtonDisabled}
                className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:bg-blue-300 disabled:cursor-not-allowed flex items-center justify-center"
            >
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                {isAIButtonDisabled ? 'Thinking...' : 'Learn More with AI'}
            </button>
        </div>
    );
};

export const Sidebar: React.FC<SidebarProps> = ({
    locations,
    selectedLocation,
    onLocationSelect,
    searchQuery,
    setSearchQuery,
    activeCategory,
    setActiveCategory,
    onGetAIInfo,
    isAIButtonDisabled
}) => {
    return (
        <aside className="w-full md:w-1/3 lg:w-1/4 max-w-sm flex flex-col bg-white border-r border-gray-200 shadow-lg">
            <div className="p-4 border-b border-gray-200">
                <div className="relative">
                     <input
                        type="text"
                        placeholder="Search for a location..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </div>
                </div>
            </div>
            
            <CategoryFilter activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

            <LocationList locations={locations} onLocationSelect={onLocationSelect} selectedLocationId={selectedLocation?.id || null} />

            {selectedLocation && (
                <LocationDetail location={selectedLocation} onClear={() => onLocationSelect(null)} onGetAIInfo={onGetAIInfo} isAIButtonDisabled={isAIButtonDisabled} />
            )}
        </aside>
    );
};

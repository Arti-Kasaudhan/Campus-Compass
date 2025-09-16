
import React, { useState, useMemo, useCallback } from 'react';
import { Header } from './components/Header';
import { Map } from './components/Map';
import { Sidebar } from './components/Sidebar';
// FIX: `Location` and `LocationCategory` are defined in `types.ts`, not `constants.ts`.
import { LOCATIONS, BUILDINGS, MAP_DIMENSIONS } from './constants';
import { Location, LocationCategory } from './types';
import { getAIRoomInfo } from './services/geminiService';
import { Modal } from './components/Modal';

const App: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
    const [activeCategory, setActiveCategory] = useState<LocationCategory | 'all'>('all');
    const [aiResponse, setAiResponse] = useState<string>('');
    const [isLoadingAI, setIsLoadingAI] = useState<boolean>(false);
    const [aiError, setAiError] = useState<string>('');

    const filteredLocations = useMemo(() => {
        return LOCATIONS.filter(location => {
            const matchesCategory = activeCategory === 'all' || location.category === activeCategory;
            const matchesSearch = location.name.toLowerCase().includes(searchQuery.toLowerCase()) || location.id.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [searchQuery, activeCategory]);

    const handleLocationSelect = useCallback((location: Location | null) => {
        setSelectedLocation(location);
    }, []);

    const handleGetAIInfo = async (location: Location) => {
        setIsLoadingAI(true);
        setAiResponse('');
        setAiError('');
        try {
            const info = await getAIRoomInfo(location);
            setAiResponse(info);
        } catch (error) {
            console.error(error);
            setAiError('Failed to get information. Please try again.');
        } finally {
            setIsLoadingAI(false);
        }
    };

    const closeModal = () => {
        setAiResponse('');
        setAiError('');
    };

    return (
        <div className="flex flex-col h-screen font-sans antialiased">
            <Header />
            <main className="flex flex-1 overflow-hidden">
                <Sidebar
                    locations={filteredLocations}
                    selectedLocation={selectedLocation}
                    onLocationSelect={handleLocationSelect}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                    onGetAIInfo={handleGetAIInfo}
                    isAIButtonDisabled={isLoadingAI}
                />
                <div className="flex-1 bg-gray-200 p-4 lg:p-6 flex items-center justify-center">
                    <Map
                        buildings={BUILDINGS}
                        locations={LOCATIONS}
                        selectedLocation={selectedLocation}
                        onLocationSelect={handleLocationSelect}
                        mapDimensions={MAP_DIMENSIONS}
                    />
                </div>
            </main>
            {(isLoadingAI || aiResponse || aiError) && (
                <Modal
                    isLoading={isLoadingAI}
                    response={aiResponse}
                    error={aiError}
                    locationName={selectedLocation?.name || ''}
                    onClose={closeModal}
                />
            )}
        </div>
    );
};

export default App;

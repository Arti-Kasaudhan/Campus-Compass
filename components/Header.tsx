
import React from 'react';

export const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-md w-full p-4 flex items-center z-10">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 16.382V5.618a1 1 0 00-1.447-.894L15 7m-6 10v-5.5a2.5 2.5 0 015 0V17" />
            </svg>
            <h1 className="text-2xl font-bold text-gray-800 tracking-tight">Campus Compass</h1>
        </header>
    );
};

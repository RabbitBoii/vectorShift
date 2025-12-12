// frontend/src/nodes/BaseNode.js
import React from 'react';

export const BaseNode = ({ label, children }) => {
    return (
        <div className="w-[200px] h-auto border-2 border-stone-800 bg-white rounded-lg shadow-md flex flex-col overflow-visible hover:ring-2 hover:ring-indigo-400 transition-all">

            {/* The Header */}
            <div className="bg-indigo-100 border-b border-stone-800 p-2 rounded-t-md">
                <span className="font-bold text-indigo-900 text-sm">{label}</span>
            </div>

            {/* The Content */}
            <div className="p-3 flex flex-col gap-3">
                {children}
            </div>

        </div>
    );
};
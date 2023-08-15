'use client'
import React, { useState } from 'react';

const CardDropdown: React.FC<{ title: string; content: string }> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSection = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            
                <div className="mb-1 w-auto">
                    <button
                        className=" flex items-center justify-between w-full px-4 py-2 bg-purple-900 text-white rounded-md focus:outline-none"
                        onClick={toggleSection}
                    >
                        {title}
                        <svg
                            className={` h-4 ml-2 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div className={`mt-2 px-4 py-2 border border-t-0 ${isOpen ? '' : 'hidden'}`}>
                        {content}
                    </div>
                </div>
            
        </>
    );
};


export default CardDropdown;
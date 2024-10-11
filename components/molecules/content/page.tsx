'use client';
import React from 'react';

interface ContentProps {
    children: React.ReactNode;
    className?: string; // Add className prop, which is optional
}

export default function Content({ children, className }: ContentProps) {
    return (
        <div className={`relative ${className}`}>
            <div
                className="bg-cover bg-center absolute top-0 opacity-35 h-full w-full"
                style={{ backgroundImage: "url('/background.png')" }}
            >

            </div>
            <div className="relative z-20 mx-5 md:mx-32">
                {children}
            </div>
        </div>
    );
}
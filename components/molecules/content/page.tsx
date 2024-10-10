'use client';
import React from 'react';

interface ContentProps {
    children: React.ReactNode;
    className?: string; // Add className prop, which is optional
}

export default function Content({ children, className }: ContentProps) {
    return (
        <div className={`relative min-h-screen ${className}`}> {/* Use className prop here */}
            {/* Background Gradient Layer */}
            <div className="bg-[linear-gradient(151.17deg,#26C2B9_8.69%,#288BE7_126.06%)] h-full w-full absolute top-0 left-0 z-0"></div>

            {/* Image Background Layer with Transparency */}
            <div className="bg-[url('/background.png')] bg-center bg-cover h-full w-full absolute top-0 left-0 z-10 opacity-50"></div>

            {/* Content Layer */}
            <div className="relative z-20 flex min-h-screen mx-32">
                {children}
            </div>
        </div>
    );
}
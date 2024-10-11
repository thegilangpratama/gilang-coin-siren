import React from 'react';

interface TooltipProps {
    children: React.ReactNode;
    textColor: string;
    backgroundColor: string;
    arrowPosition?: 'left' | 'center' | 'right'; // Arrow position prop
}

const Tooltip: React.FC<TooltipProps> = ({
    children,
    textColor,
    backgroundColor,
    arrowPosition = 'center', // Default to 'center'
}) => {
    // Base styles for tooltip
    const tooltipStyles = {
        backgroundColor,
        color: textColor,
    };

    // Determine arrow classes based on arrow position
    const arrowPositionClasses = {
        left: "left-6 -bottom-2",
        right: "right-6 -bottom-2",
        center: "left-1/2 -translate-x-1/2 -bottom-2"
    };

    return (
        <div
            className="relative font-bold text-lg py-2 px-4 rounded-lg inline-block"
            style={tooltipStyles}
        >
            {children}
            <div
                className={`absolute w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-transparent ${arrowPositionClasses[arrowPosition]}`}
                style={{ borderTopColor: backgroundColor }}
            />
        </div>
    );
};

export default Tooltip;
import React from 'react';

interface IconProps {
    src: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    size?: number;
    bgColor?: string;
}

const Icon: React.FC<IconProps> = ({ src: IconSvg, size = 50, bgColor = 'rgba(255, 255, 255, 0.3)' }) => {
    return (
        <div className="rounded-xl flex justify-center items-center" style={{ backgroundColor: bgColor, width: size, height: size }}>
            <IconSvg width={size * 0.6} height={size * 0.6} />
        </div>
    );
};

export default Icon;
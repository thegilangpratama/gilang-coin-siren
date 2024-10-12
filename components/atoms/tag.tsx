// components/atoms/Tag.tsx
import React from 'react';

interface TagProps {
    text: string;
}

const Tag: React.FC<TagProps> = ({ text }) => {
    return (
        <span className="px-3 py-1 text-sm rounded-lg border font-semibold text-[#5E626F]">
            {text}
        </span>
    );
};

export default Tag;
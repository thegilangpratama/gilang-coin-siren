import React from 'react';
import Icon from '@/components/atoms/icon';

interface CarouselCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
}

const CarouselCard: React.FC<CarouselCardProps> = ({ icon, text }) => {
  return (
    <div className="flex space-x-3 rounded-xl px-5 py-3 items-center content-start w-[250px] bg-opacity-20 bg-white">
      <Icon src={icon} />
      <div className="flex content-center">
        <p className="text-[24px]">{text}</p>
      </div>
    </div>
  );
};

export default CarouselCard;
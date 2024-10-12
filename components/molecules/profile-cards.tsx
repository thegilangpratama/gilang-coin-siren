// components/organisms/ProfileCard.tsx
import React from 'react';
import Avatar from '@/components/atoms/avatar';
import Tag from '@/components/atoms/tag';

interface ProfileCardProps {
  name: string;
  designation: string;
  experience: string;
  imageSrc: string;
  flagSrc: string;
  skills: string[];
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, designation, experience, imageSrc, flagSrc, skills }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 max-w-xs text-center text-black w-[300px] h-[400px]">
      {/* Avatar with Flag */}
      <div className="flex justify-center">
        <Avatar imageSrc={imageSrc} flagSrc={flagSrc} altText={name} />
      </div>

      {/* Name and Experience */}
      <h2 className="text-xl font-bold mt-4">{name}</h2>
      <p className="text-gray-500">
        {designation} <span className="text-blue-500">• {experience}</span>
      </p>

      {/* Skills */}
      <div className="mt-10 flex flex-wrap justify-center space-x-2 space-y-1">
        {skills.map((skill, index) => (
          <Tag key={index} text={skill} />
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
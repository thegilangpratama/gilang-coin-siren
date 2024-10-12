import React from 'react';

interface CheckboxItemProps {
  label: string;
}

const CheckboxItem: React.FC<CheckboxItemProps> = ({ label }) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-6 h-6 bg-[#F1F5F9] rounded-md flex justify-center items-center">
        <input type="checkbox" defaultChecked className="hidden" />
        <svg className="w-5 h-5 text-[#1D4ED8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <p className="text-white text-[18px]">{label}</p>
    </div>
  );
};

export default CheckboxItem
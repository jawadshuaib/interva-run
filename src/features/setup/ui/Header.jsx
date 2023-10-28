import React from 'react';
import iconPath from '../../../../public/favicon.png';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div
      className="cursor-pointer rounded-t-md bg-slate-700 text-orange-200 p-4 flex items-center justify-center"
      onClick={handleGoHome}
    >
      <img src={iconPath} alt="Interva Run Icon" className="h-10 w-10 mr-2" />
      {/* <h1 className="text-2xl font-bold">Interva Run</h1> */}
    </div>
  );
}

import React from 'react';
import PropTypes from 'prop-types';

function CurrentInterval({ type, duration }) {
  // Determine background color based on type
  let bgColor;
  switch (type.toLowerCase()) {
    case 'warmup':
      bgColor = 'bg-gradient-to-br from-orange-600 to-orange-800';
      break;
    case 'sprint':
      bgColor = 'bg-gradient-to-br from-green-600 to-green-800';
      break;
    case 'walk':
      bgColor = 'bg-gradient-to-br from-yellow-600 to-yellow-800';
      break;
    case 'cooldown':
      bgColor = 'bg-gradient-to-br from-blue-600 to-blue-800';
      break;
    default:
      bgColor = 'bg-gray-400';
  }

  return (
    <div
      className={`w-144 md:w-192   mx-auto text-center capitalize dark:text-slate-400 p-10 rounded-lg shadow-xl ${bgColor}`}
    >
      <h2 className="text-7xl md:text-18xl font-bold text-white tracking-tighter">
        {type}
      </h2>
      <p className="text-6xl md:text-16xl mt-5 text-white opacity-80">
        {duration}
      </p>
    </div>
  );
}

CurrentInterval.propTypes = {
  type: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
};

export default CurrentInterval;

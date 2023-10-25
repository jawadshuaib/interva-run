import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ children, onClick }) {
  function handleOnClick() {
    onClick();
  }
  return (
    <input
      type="button"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      onClick={handleOnClick}
      value={children}
    />
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

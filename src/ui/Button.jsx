import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ children, onClick, customClass }) {
  function handleOnClick() {
    onClick();
  }
  return (
    <input
      type="button"
      className={`${customClass} cursor-pointer bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full dark:bg-slate-600 dark:text-slate-300`}
      onClick={handleOnClick}
      value={children}
    />
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  customClass: PropTypes.string,
};

Button.defaultProps = {
  customClass: '',
};

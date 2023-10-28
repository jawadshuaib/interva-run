import React from 'react';
import PropTypes from 'prop-types';

export default function Input({
  type,
  placeholder,
  value,
  customClass,
  fnChange,
  fnKeyDown,
}) {
  return (
    <input
      className={`${customClass} text-xl p-2 pt-4 w-full mb-4 border-2 dark:border-slate-800 dark:bg-slate-400`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={fnChange}
      onKeyDown={fnKeyDown}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  customClass: PropTypes.string,
  fnChange: PropTypes.func.isRequired,
  fnKeyDown: PropTypes.func.isRequired,
};

Input.defaultProps = {
  placeholder: '',
  value: '',
  customClass: '',
};

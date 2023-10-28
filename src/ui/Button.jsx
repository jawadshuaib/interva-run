import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ children, fn, customClass }) {
  function handleOnClick() {
    fn();
  }
  return (
    <input
      type="button"
      className={`${customClass} cursor-pointer w-full py-8 text-xl bg-blue-500 text-white p-2 rounded  dark:bg-slate-800 dark:hover:bg-slate-900`}
      onClick={handleOnClick}
      value={children}
    />
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  fn: PropTypes.func.isRequired,
  customClass: PropTypes.string,
};

Button.defaultProps = {
  customClass: '',
};

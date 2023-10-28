import React from 'react';
import PropTypes from 'prop-types';

export default function List({ items, render, customClass }) {
  return (
    <ol className={`${customClass} text-xl dark:text-slate-300`}>
      {items.map(render)}
    </ol>
  );
}

List.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  render: PropTypes.func.isRequired,
  customClass: PropTypes.string,
};

List.defaultProps = {
  customClass: '',
};

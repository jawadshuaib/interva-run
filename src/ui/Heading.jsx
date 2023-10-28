import React from 'react';
import PropTypes from 'prop-types';

export default function Heading({ level, children, customClass }) {
  return level === 'h1' ? (
    <h1
      className={`${customClass} text-lg font-semibold md:text-xl text-slate-700`}
    >
      {children}
    </h1>
  ) : (
    <h2
      className={`${customClass} text-lg font-semibold md:text-xl ext-slate-700`}
    >
      {children}
    </h2>
  );
}

Heading.propTypes = {
  customClass: PropTypes.string,
  level: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Heading.defaultProps = {
  level: 'h1',
  customClass: '',
};

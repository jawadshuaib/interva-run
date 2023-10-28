import React from 'react';
import PropTypes from 'prop-types';

export default function Heading({ level, children, customClass }) {
  return level === 'h1' ? (
    <h1 className={`${customClass} text-2xl dark:text-slate-200`}>
      {children}
    </h1>
  ) : (
    <h2 className={`${customClass} text-2xl dark:text-slate-200`}>
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

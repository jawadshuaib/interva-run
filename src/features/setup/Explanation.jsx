import React from 'react';
import PropTypes from 'prop-types';

export default function Explanation({ children }) {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-lg">{children}</div>
    </div>
  );
}

Explanation.propTypes = {
  children: PropTypes.node.isRequired,
};

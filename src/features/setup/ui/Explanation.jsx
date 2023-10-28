import React from 'react';
import PropTypes from 'prop-types';

export default function Explanation({ children }) {
  return (
    <div className="flex justify-center items-center py-4">
      <div className="ml-2 px-3 md:ml-0 md:px-0 md:max-w-lg">{children}</div>
    </div>
  );
}

Explanation.propTypes = {
  children: PropTypes.node.isRequired,
};

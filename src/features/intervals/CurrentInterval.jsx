import React from 'react';
import PropTypes from 'prop-types';

function CurrentInterval({ type, duration }) {
  return (
    <div>
      <h2>{type}</h2>
      <p>{duration} seconds remaining</p>
    </div>
  );
}

CurrentInterval.propTypes = {
  type: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
};

export default CurrentInterval;

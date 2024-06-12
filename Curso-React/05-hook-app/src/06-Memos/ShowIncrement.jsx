import { PropTypes } from 'prop-types';
import React from 'react';

export const ShowIncrement = ({ incremente }) => {
  console.log('Me volvi a generar');
  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => {
        incremente(5);
      }}
    >
      Incremenet
    </button>
  );
};

ShowIncrement.propTypes = {
  incremente: PropTypes.func.isRequired,
};

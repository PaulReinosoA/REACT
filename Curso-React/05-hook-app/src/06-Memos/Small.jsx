import { PropTypes } from 'prop-types';
import { memo } from 'react';
// memo permite no re- ejecutar comportamientos que se esta volviendo a llamar
export const Small = memo(({ value }) => {
  console.log('me volvi a dibujar!');
  return <small>{value}</small>;
});

Small.propTypes = {
  value: PropTypes.number.isRequired,
};

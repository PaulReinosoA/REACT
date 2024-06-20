// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { getHeroesByPublisher } from '../helpers';
import { HeroeCard } from './HeroeCard';

export const HeroesList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-3">
        {heroes.map((h) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <HeroeCard key={h.id} {...h} />
          /* <li key={h.id}>{h.superhero}</li> */
        ))}
      </div>
    </>
  );
};

HeroesList.propTypes = {
  publisher: PropTypes.string.isRequired,
};

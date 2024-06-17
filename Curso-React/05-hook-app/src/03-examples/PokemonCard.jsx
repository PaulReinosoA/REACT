import { PropTypes } from 'prop-types';
import { useLayoutEffect, useRef, useState } from 'react';

export const PokemonCard = ({ id, name, sprites = [] }) => {
  // const height = 200;
  const pRef = useRef();
  const [boxSize, setboxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect();
    setboxSize({ width, height });
  }, []);

  return (
    <>
      <code>{JSON.stringify(boxSize)}</code>
      <section style={{ boxSize, display: 'flex' }}>
        <h2 aria-label="h2" className="text-capitalize">
          N°{id} - {name.toUpperCase()}
        </h2>
        <div ref={pRef}>
          {sprites.map((sprite) => (
            <img key={sprite} src={sprite} alt={name} />
          ))}
        </div>
      </section>
    </>
  );
};

PokemonCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  sprites: PropTypes.node.isRequired,
};

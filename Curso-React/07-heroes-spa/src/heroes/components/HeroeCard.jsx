/* eslint-disable no-dupe-keys */
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const HeroeCard = ({
  id,
  superhero,
  publisher,
  alter_ego: alterEgo,
  first_appearance: firstAppearance,
  characters,
}) => {
  const heroImage = `../src/assets/heroes/${id}.jpg`;
  // animaciones link https://animate.style/

  return (
    <>
      <div className="col animate__animated animate__fadeIn">
        <div className="card">
          <div className="row no-gutters">
            <div className="col-4">
              <img src={heroImage} alt={superhero} className="card-img" />
            </div>
            <div className="col-8">
              <div className="card-body">
                <h5 className="card-title">{superhero}</h5>
                <p className="card-text">{alterEgo}</p>
                {alterEgo !== characters && (
                  <p className="card-text">{characters}</p>
                )}
                <p className="card-text">
                  <small className="text-muted">{firstAppearance}</small>
                </p>
                <p className="card-text">
                  <small className="text-muted">{publisher}</small>
                </p>
                <Link to={`/hero/${id}`}>Mas...</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HeroeCard.propTypes = {
  publisher: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  superhero: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  alter_ego: PropTypes.string.isRequired,
  first_appearance: PropTypes.string.isRequired,
  characters: PropTypes.string.isRequired,
};

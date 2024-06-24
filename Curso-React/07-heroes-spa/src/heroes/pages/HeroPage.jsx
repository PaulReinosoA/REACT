import React, { useMemo } from 'react';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router';
import { GetHeroById } from '../helpers/GetHeroById';

// UseMemo para memorizar valores
// useCallback para memorizar funciones

export const HeroPage = () => {
  const { id } = useParams();
  // useMemo dispara el callback cada que la dependencia cambie (id)
  const hero = useMemo(() => GetHeroById(id), [id]); // funciones que llaman por algun cambio de estado si no me morizo vuelvo a disparar

  const locatio = useLocation(); // obtenemos la ubicacion donde nos encontramos
  const navigate = useNavigate();

  const onNavigateReturn = () => {
    console.log({ locatio }, { navigate });

    if (hero.publisher.toUpperCase().includes('MARVEL'))
      navigate('/marvel', { replace: true });
    else navigate('/dc', { replace: true });
  };

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return (
    <>
      <div className="row mt-5">
        <div className="col-4">
          <h1>Hero : {id}</h1>
          <img
            src={`/src/assets/heroes/${id}.jpg`}
            alt={hero.superhero}
            className="img-thumbnail animate__animated animate__fadeInLeft"
          />
        </div>

        <div className="col-8">
          <h3>{hero.superhero}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              {' '}
              <b>Alter ego:</b>
              {hero.alter_ego}
            </li>
            <li className="list-group-item">
              {' '}
              <b>Publisher:</b>
              {hero.publisher}
            </li>
            <li className="list-group-item">
              {' '}
              <b>First Appearance:</b>
              {hero.first_appearance}
            </li>
          </ul>
          <h5 className="mt-3">Caracters:</h5>
          <p>{hero.characters}</p>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={onNavigateReturn}
          >
            Regresar
          </button>
        </div>
      </div>
    </>
  );
};

import { useLocation, useNavigate } from 'react-router';
import queryString from 'query-string';
import { HeroeCard } from '../components/HeroeCard';
import { useForm } from '../../hooks/useForm';
import { GetHeroesByName } from '../helpers/GetHeroesByName';

export const Search = () => {
  const title = 'Bucador de Heroes';

  // Aqui obtengo la info para el URL:
  const navigate = useNavigate(); // obtenemos la navegacion
  const locatio = useLocation(); // obtenemos la ubicacion donde nos encontramos
  const { q = '' } = queryString.parse(locatio.search); // opcional para parcear los paramtros opcionales
  const heros = GetHeroesByName(q);

  // const { pathname, search } = useLocation();

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (event) => {
    // const lastpath = pathname + search;
    // localStorage.setItem('lastPath', lastpath);
    // const lastPath = localStorage.getItem('lastPath') || '/';
    // console.log('lastPath', { lastPath });

    event.preventDefault(); // evita el full refresh del formulario
    // if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`); // envi el prametro al url
  };

  const showSearch = q.length === 0;
  const showErrorSearch = q.length > 0 && heros.length === 0;

  return (
    <>
      <h1>{title}</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form aria-label="form" onSubmit={(event) => onSearchSubmit(event)}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button
              type="button"
              className="btn btn-outline-primary mt-2"
              onClick={(event) => onSearchSubmit(event)}
            >
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results:</h4>
          <hr />
          <div
            className="alert alert-primary animate__animated animate__fadeIn"
            style={{ display: showSearch ? '' : 'none' }}
          >
            sarch a Hero
          </div>
          <div
            aria-label="displayNoneShowErrorSearch"
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showErrorSearch ? '' : 'none' }}
          >
            No hero with:<b>{q}</b>
          </div>
          <div>
            {heros.map((hero) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <HeroeCard key={hero.id} {...hero} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

import { useLocation, useNavigate } from 'react-router';
import queryString from 'query-string';
import { HeroeCard } from '../components/HeroeCard';
import { useForm } from '../../hooks/useForm';
import { GetHeroesByName } from '../helpers/GetHeroesByName';

export const Search = () => {
  const title = 'Search';

  // Aqui obtengo la info para el URL:
  const navigate = useNavigate(); // obtenemos la navegacion
  const locatio = useLocation(); // obtenemos la ubicacion donde nos encontramos
  const { q = '' } = queryString.parse(locatio.search); // opcional para parcear los paramtros opcionales
  const heros = GetHeroesByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (event) => {
    event.preventDefault(); // evita el full refresh del formulario
    if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`); // envi el prametro al url
  };

  return (
    <>
      <h1>{title}</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={(event) => onSearchSubmit(event)}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button type="button" className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results:</h4>
          <hr />
          <div className="alert alert-primary">sarch a Hero</div>
          <div className="alert alert-primary">
            No hero wjth <b> {q}</b>
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

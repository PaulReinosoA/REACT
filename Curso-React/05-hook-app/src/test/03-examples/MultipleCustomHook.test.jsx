// eslint-disable-next-line import/no-extraneous-dependencies
import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHook } from '../../03-examples/MultipleCustomHook';
import { useFetch } from '../../01-useState/Hooks/useFetch';
import { useCounter } from '../../01-useState/Hooks/useCounter';

jest.mock('../../01-useState/Hooks/useFetch');
jest.mock('../../01-useState/Hooks/useCounter');

describe('Prueba en <MultipleCustomHook/>', () => {
  const incrementMk = jest.fn();
  useCounter.mockReturnValue({ counter: 1, increment: incrementMk });

  beforeEach(() => {
    // (beforeEach)antes que acda prueba limpia acada prueba
    jest.clearAllMocks();
  });

  test('Debe de mostrar el componente por defecto', () => {
    const data = null;
    useFetch.mockReturnValue({
      // estado del hook por defecto
      // estado del hook por defecto -->enviamos lo que desestructura el hookuseFetch
      data,
      isLoading: true,
    });

    render(<MultipleCustomHook />);
    // screen.debug();
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText('Informacion Pokemon'));
  });

  test('Debe de mostrar un Pokemon', () => {
    const data = {
      name: 'bulbasaur',
      id: 1,
      sprites: {
        back_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
        back_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        front_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
      },
    };

    useFetch.mockReturnValue({
      // -->enviamos lo que desestructura el hookuseFetch
      data,
      isLoading: false,
    });

    render(<MultipleCustomHook />);
    screen.debug();
    expect(screen.getByLabelText('h2').innerHTML)?.toBe(
      `N°${data.id} - ${data.name.toUpperCase()}`,
    );
  });

  test('Debe de llamar a la funcion de incremnetar ', () => {
    const data = {
      name: 'bulbasaur',
      id: 1,
      sprites: {
        back_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
        back_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        front_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
      },
    };

    useFetch.mockReturnValue({
      // -->enviamos lo que desestructura el hookuseFetch
      data,
      isLoading: false,
    });

    render(<MultipleCustomHook />);
    const botonSiguiente = screen.getByRole('button', { name: 'Siguiente' });
    fireEvent.click(botonSiguiente);

    expect(incrementMk).toHaveBeenCalled();
  });
});

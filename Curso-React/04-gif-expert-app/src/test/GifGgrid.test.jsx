import { render, screen } from '@testing-library/react';
import { GifGrid } from '../components/GifGrid';
import { useFetchGigs } from '../hooks/useFetchGigs';

jest.mock('../hooks/useFetchGigs.js');

describe('Pruebas sobre GifGgrid', () => {
  const category = 'One Punch';
  test('debe mostrar el loading inicialmente', () => {
    useFetchGigs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    screen.debug();
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
  });

  test('Debe de mostrar items cuando se carga las imagenes useFetchGifs ', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'Saitama',
        url: 'https://localhost/Goku.jpg',
      },
      {
        id: '123',
        title: 'Goku',
        url: 'https://localhost/Saitama.jpg',
      },
    ];
    useFetchGigs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);
  });
});

import { render } from '@testing-library/react';
import { GifGfridItem } from '../components/GifGfridItem';

describe('Pruebas sobre GifGfridItem', () => {
  /*
TAREA:
1.Añadir propTypes,
a.title obligatorio
b.url obligatorio
2.Evaluar snapshot
*/
  const url = 'https://bleach/bleach.jpg';
  const title = 'bleach';

  test('debe de mostarr el valores iniciales del hook', () => {
    // const GifItem =render(<GifGfridItem />)
    const { container } = render(<GifGfridItem title={title} url={url} />);
    console.log(container);
    expect(container).toBeDefined();
  });

  test('debe de hacer match con el snapshot ', () => {
    const { container } = render(<GifGfridItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
});

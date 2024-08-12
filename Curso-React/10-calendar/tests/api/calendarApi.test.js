import calendarApi from '../../src/api/calendarApi';

describe('Pruebas en calendarAPI', () => {
  test('debe de tener la configuracion pro defecto', () => {
    // console.log(calendarApi);
    expect(calendarApi.defaults.baseURL).toBe(process.env.VITE_API_URL);
  });

  test('debe de tener el x-token en el header de tods la peticiones', async () => {
    const token = 'ABC-123-zxy';
    localStorage.setItem('token', token);
    const res = await calendarApi.get('/auth');
    // console.log(res)
    expect(res.config.headers['x-token']).toBe(token);
  });
});

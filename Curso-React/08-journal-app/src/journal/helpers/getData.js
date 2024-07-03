import { UseFetch } from '../hooks/UseFetch';

export const getData = () => {
  const url =
    'http://gateway.marvel.com/v1/public/comics?ts=1000&apikey=c6671638880e82d6ea764ca12b6d496d&hash=899b4663af77b12d1801f3e1039c1aaa&limit=100';
  const { data, isLoading } = UseFetch(url);
  const results = data === null ? [] : data.results;
  // console.log('getData:results', results);

  const dataClean = results.map((d) => ({
    id: parseInt(d.id, 10),
    title: d.title,
    date: d.dates.find((dat) => dat.type === 'focDate').date,
    variantDescription: d.variantDescription,
    issueNumber: parseInt(d.issueNumber, 10),
    creators:
      d.creators.items.find((dat) => dat.role === 'editor') === undefined
        ? 'Anonimo'
        : d.creators.items.find((dat) => dat.role === 'editor').name,
    image: `${d.thumbnail.path}.jpg`,
  }));
  // console.log(dataClean, isLoading);
  return { dataClean, isLoading };
};

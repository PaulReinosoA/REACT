import { UseFetch } from '../hooks/UseFetch';

const apiKey = 'c6671638880e82d6ea764ca12b6d496d';
const hash = '7c6fca0165aa38ee903bd9632f928e7b';
const ts = '1';
const limit = '10';

export const getData = () => {
  const url = `https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${apiKey}&hash=${hash}&limit=${limit}`;
  // console.log('url:', url);
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

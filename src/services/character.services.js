import * as Helpers from '../utils/helpers/helpers';

const getCharacter = async (query) => {
  const { sort, order, gender } = query;
  const { results } = await Helpers.makeRequest(
    'https://swapi.dev/api/people/',
    'GET',
  );

  let data = results;
  if (sort) {
    data = Helpers.compareAndSortData(data, sort, order);
  }
  if (gender) {
    data = Helpers.filterBySingleData(data, 'gender', gender);
  }
  const metadata = Helpers.calculateHeight(data);
  return {
    metadata,
    characters: data,
  };
};

export default getCharacter;

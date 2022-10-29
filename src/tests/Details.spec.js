import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import store from '../app/store';
import Details from '../features/details/Details';

it('Details page renders', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Details />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Detail page renders filter', () => {
  let arr, details;
  const initialState = [
    details = {
      id: 1,
      name: 'Bitcoin',
      fullName: 'Bitcoin',
      price: 5,
      marketCap: 100,
    },
    arr = [
    {
      id: 1,
      name: 'Bitcoin',
      fullName: 'Bitcoin',
      price: 5,
      marketCap: 100,
    },
    {
      id: 2,
      name: 'Ethereum',
      fullName: 'Ethereum',
      price: 10,
      marketCap: 200,
    },
    {
      id: 3,
      name: 'Ripple',
      fullName: 'Ripple',
      price: 15,
      marketCap: 300,
    },
    {
      id: 4,
      name: 'Bitcoin Cash',
      fullName: 'Bitcoin Cash',
      price: 20,
      marketCap: 400,
    },
    {
      id: 5,
      name: 'Litecoin',
      fullName: 'Litecoin',
      price: 25,
      marketCap: 500,
    }
  ],
  ];

  it('should filter the details', () => {
    const filtered = initialState[1].filter((i) => initialState[0].id === i.id);
    expect(filtered).toEqual([details]);
});

});

  
  
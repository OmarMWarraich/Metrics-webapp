import homeReducer, {
  fetchAllAsync,
} from './homeSlice';

describe('home reducer', () => {
  const initialState = [{
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
  },
  {
    id: 6,
    name: 'EOS',
    fullName: 'EOS',
    price: 30,
    marketCap: 600,
  },
  {
    id: 7,
    name: 'Stellar',
    fullName: 'Stellar',
    price: 35,
    marketCap: 700,
  },
  {
    id: 8,
    name: 'Cardano',
    fullName: 'Cardano',
    price: 40,
    marketCap: 800,
  },
  ];

  it('should handle initial state', () => {
    expect(homeReducer(undefined, { type: 'unknown' })).toEqual([]);
  });

  it('should handle fetchAllAsync', () => {
    const actual = homeReducer(initialState, fetchAllAsync());
    expect(actual).toEqual(initialState);
  });
});

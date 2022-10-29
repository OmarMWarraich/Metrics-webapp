import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import Details from '../features/details/Details';

it('Details page renders', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Details />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

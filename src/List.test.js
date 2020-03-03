import React from 'react';
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom';
import List from './List'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List
    header='header'
    cards={[{ id: 'a', title: 'First card', content: 'lorem ipsum' },
    { id: 'b', title: 'Second card', content: 'lorem ipsum' },
    { id: 'c', title: 'Third card', content: 'lorem ipsum' },
    { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },]}
  />, div);
  ReactDOM.unmountComponentAtNode(div);
})

it('renders Cards as expected', () => {
  const tree = renderer
    .create(<List
      header='header'
      cards={[{ id: 'a', title: 'First card', content: 'lorem ipsum' },
      { id: 'b', title: 'Second card', content: 'lorem ipsum' },
      { id: 'c', title: 'Third card', content: 'lorem ipsum' },
      { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },]}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});